import { useCallback, useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  ArrowUp,
  ArrowUpLeft,
  ArrowUpRight,
  RotateCcw,
  RotateCw,
  MapPin,
  ExternalLink,
  LocateFixed,
  AlertTriangle,
} from "lucide-react";

/**
 * NeonNavigator
 * -------------
 * Black-and-red "neon" live navigation widget for the Venue page.
 *
 * - Asks for the visitor's location as soon as it mounts, and starts
 *   drawing the route immediately once it's granted.
 * - Map tiles: CARTO's free dark basemap (no API key), pushed further
 *   toward black with a CSS filter.
 * - Routing: OSRM's free public routing server (no API key). It's a
 *   community demo server — fine for a school event site; swap
 *   ROUTING_BASE_URL for your own OSRM/Mapbox/Google Directions
 *   endpoint later if you outgrow it.
 * - Live location: the browser's real Geolocation API via
 *   watchPosition — nothing is sent to Google.
 * - "Open in Google Maps" builds a normal maps.google.com deep link
 *   for anyone who wants full turn-by-turn out of the box.
 */

// ---- Venue coordinates (CHIREC International School — Kondapur Campus) ----
const VENUE = {
  name: "CHIREC International School",
  subtitle: "Kondapur Campus — TEDxYouth@CHIREC",
  lat: 17.462612100565174,
  lng: 78.34886021045025,
};

const ROUTING_BASE_URL = "https://router.project-osrm.org/route/v1/driving";

type LatLng = { lat: number; lng: number };

type StepInfo = {
  distanceMeters: number;
  instruction: string;
  icon: typeof ArrowUp;
};

type RouteState = {
  coords: [number, number][]; // [lat, lng] for Leaflet
  distanceMeters: number;
  durationSeconds: number;
  steps: StepInfo[];
};

type Status = "idle" | "locating" | "tracking" | "denied" | "unsupported" | "error";

// ---- helpers ----------------------------------------------------------

function haversineMeters(a: LatLng, b: LatLng) {
  const R = 6371000;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function formatDistance(meters: number) {
  if (meters < 1000) return `${Math.round(meters)} m`;
  return `${(meters / 1000).toFixed(1)} km`;
}

function formatDuration(seconds: number) {
  const mins = Math.round(seconds / 60);
  if (mins < 60) return `${mins} min`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h} hr ${m} min`;
}

const COMPASS = [
  "north", "northeast", "east", "southeast",
  "south", "southwest", "west", "northwest",
];
function bearingToCompass(bearing: number) {
  return COMPASS[Math.round(((bearing % 360) + 360) % 360 / 45) % 8];
}

/** Picks a direction icon for a step, similar to a turn-by-turn app. */
function iconForStep(type?: string, modifier?: string): typeof ArrowUp {
  if (type === "arrive") return MapPin;
  if (type === "roundabout" || type === "rotary") return RotateCw;
  if (modifier === "uturn") return RotateCcw;
  if (modifier?.includes("slight left")) return ArrowUpLeft;
  if (modifier?.includes("slight right")) return ArrowUpRight;
  if (modifier?.includes("left")) return ArrowUpLeft;
  if (modifier?.includes("right")) return ArrowUpRight;
  return ArrowUp;
}

/** Short turn-by-turn line, e.g. "Head east" / "Turn right" / "Arrive at destination". */
function describeStep(step: any): string {
  const type = step?.maneuver?.type;
  const modifier: string | undefined = step?.maneuver?.modifier;
  const streetName = step?.name && step.name.length > 0 ? step.name : "";

  if (type === "depart") {
    const bearing = step?.maneuver?.bearing_after;
    return typeof bearing === "number" ? `Head ${bearingToCompass(bearing)}` : "Head out";
  }
  if (type === "arrive") return "Arrive at destination";
  if (type === "roundabout" || type === "rotary") return "Enter the roundabout";

  if (modifier === "straight") return streetName ? `Continue straight onto ${streetName}` : "Continue straight";
  if (modifier === "uturn") return "Make a U-turn";
  if (modifier?.includes("left")) return "Turn left";
  if (modifier?.includes("right")) return "Turn right";

  return streetName ? `Continue onto ${streetName}` : "Continue straight";
}

function googleMapsUrl(origin: LatLng | null) {
  const destination = `${VENUE.lat},${VENUE.lng}`;
  if (!origin) {
    return `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`;
  }
  return `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lng}&destination=${destination}&travelmode=driving`;
}

// ---- custom neon divIcons ---------------------------------------------

const venueIcon = L.divIcon({
  className: "",
  html: `<div class="neon-venue-pin">
      <svg width="30" height="38" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 0C7.6 0 0 7.6 0 17c0 12.4 17 25 17 25s17-12.6 17-25C34 7.6 26.4 0 17 0Z" fill="#EB0028"/>
        <circle cx="17" cy="17" r="7" fill="#050507"/>
      </svg>
    </div>`,
  iconSize: [30, 38],
  iconAnchor: [15, 36],
});

const userIcon = L.divIcon({
  className: "",
  html: `<div class="neon-user-dot-wrap"><span class="neon-user-dot"></span></div>`,
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

// -------------------------------------------------------------------------

export function NeonNavigator() {
  const mapElRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const userMarkerRef = useRef<L.Marker | null>(null);
  const routeLayersRef = useRef<L.Polyline[]>([]);
  const dashAnimRef = useRef<number | null>(null);
  const lastRouteOriginRef = useRef<LatLng | null>(null);
  const watchIdRef = useRef<number | null>(null);

  const [status, setStatus] = useState<Status>("idle");
  const [userPos, setUserPos] = useState<LatLng | null>(null);
  const [route, setRoute] = useState<RouteState | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // ---- one-time map init ----
  useEffect(() => {
    if (!mapElRef.current || mapRef.current) return;

    const map = L.map(mapElRef.current, {
      center: [VENUE.lat, VENUE.lng],
      zoom: 13,
      zoomControl: false,
      attributionControl: true,
    });
    mapRef.current = map;

    L.control.zoom({ position: "topleft" }).addTo(map);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 20,
      className: "neon-tile-layer",
    }).addTo(map);

    L.marker([VENUE.lat, VENUE.lng], { icon: venueIcon })
      .addTo(map)
      .bindPopup(`<strong>${VENUE.name}</strong><br/>${VENUE.subtitle}`);

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // ---- draw / update the glowing neon dotted route line ----
  const drawRoute = useCallback((coords: [number, number][]) => {
    const map = mapRef.current;
    if (!map) return;

    routeLayersRef.current.forEach((layer) => layer.remove());
    routeLayersRef.current = [];
    if (dashAnimRef.current) cancelAnimationFrame(dashAnimRef.current);

    // stacked polylines fake a soft neon glow under a bright dotted core
    const glowOuter = L.polyline(coords, {
      color: "#EB0028", weight: 16, opacity: 0.1, lineCap: "round", lineJoin: "round",
    }).addTo(map);
    const glowInner = L.polyline(coords, {
      color: "#EB0028", weight: 8, opacity: 0.25, lineCap: "round", lineJoin: "round",
    }).addTo(map);
    const core = L.polyline(coords, {
      color: "#ff3b55", weight: 6, opacity: 0.95,
      lineCap: "round", lineJoin: "round", dashArray: "1 11",
    }).addTo(map);

    routeLayersRef.current = [glowOuter, glowInner, core];

    // animate the dots flowing toward the venue
    const coreEl = core.getElement() as SVGPathElement | null;
    if (coreEl) {
      let offset = 0;
      const step = () => {
        offset -= 0.5;
        coreEl.style.strokeDashoffset = String(offset);
        dashAnimRef.current = requestAnimationFrame(step);
      };
      dashAnimRef.current = requestAnimationFrame(step);
    }

    map.fitBounds(L.latLngBounds(coords), { padding: [56, 56], maxZoom: 15 });
  }, []);

  // ---- fetch a route from OSRM, with full turn-by-turn steps ----
  const fetchRoute = useCallback(
    async (origin: LatLng) => {
      try {
        const url = `${ROUTING_BASE_URL}/${origin.lng},${origin.lat};${VENUE.lng},${VENUE.lat}?overview=full&geometries=geojson&steps=true`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Routing server responded ${res.status}`);
        const data = await res.json();
        const leg = data?.routes?.[0];
        if (!leg) throw new Error("No route found");

        const coords: [number, number][] = leg.geometry.coordinates.map(
          ([lng, lat]: [number, number]) => [lat, lng]
        );

        const rawSteps = leg.legs?.[0]?.steps ?? [];
        const steps: StepInfo[] = rawSteps.map((s: any) => ({
          distanceMeters: s.distance,
          instruction: describeStep(s),
          icon: iconForStep(s?.maneuver?.type, s?.maneuver?.modifier),
        }));

        setRoute({ coords, distanceMeters: leg.distance, durationSeconds: leg.duration, steps });
        drawRoute(coords);
        lastRouteOriginRef.current = origin;
        setErrorMsg(null);
      } catch (err) {
        console.error("NeonNavigator route fetch failed:", err);
        setErrorMsg("Couldn't reach the live routing service — you can still open Google Maps below.");
      }
    },
    [drawRoute]
  );

  // ---- move / create the user marker on the map ----
  const placeUserMarker = useCallback((pos: LatLng) => {
    const map = mapRef.current;
    if (!map) return;
    if (userMarkerRef.current) {
      userMarkerRef.current.setLatLng([pos.lat, pos.lng]);
    } else {
      userMarkerRef.current = L.marker([pos.lat, pos.lng], { icon: userIcon })
        .addTo(map)
        .bindPopup("You are here");
    }
  }, []);

  // ---- geolocation: ask immediately, then watch for live updates ----
  const requestLocation = useCallback(() => {
    if (!("geolocation" in navigator)) {
      setStatus("unsupported");
      return;
    }
    setStatus("locating");

    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
    }

    watchIdRef.current = navigator.geolocation.watchPosition(
      (pos) => {
        const next: LatLng = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setStatus("tracking");
        setUserPos(next);
        placeUserMarker(next);

        const last = lastRouteOriginRef.current;
        const moved = last ? haversineMeters(last, next) : Infinity;
        if (moved > 60) fetchRoute(next); // recompute route once they've actually moved
      },
      (err) => {
        console.warn("NeonNavigator geolocation error:", err);
        setStatus(err.code === err.PERMISSION_DENIED ? "denied" : "error");
      },
      { enableHighAccuracy: true, maximumAge: 15000, timeout: 15000 }
    );
  }, [fetchRoute, placeUserMarker]);

  // Ask for location — and start routing — the moment this mounts.
  useEffect(() => {
    requestLocation();
    return () => {
      if (watchIdRef.current !== null) navigator.geolocation.clearWatch(watchIdRef.current);
      if (dashAnimRef.current) cancelAnimationFrame(dashAnimRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRecenter = () => {
    const map = mapRef.current;
    if (!map) return;
    if (route) map.fitBounds(L.latLngBounds(route.coords), { padding: [56, 56], maxZoom: 15 });
    else if (userPos) map.setView([userPos.lat, userPos.lng], 15);
    else map.setView([VENUE.lat, VENUE.lng], 13);
  };

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xs border border-[#EB0028]/60 bg-black shadow-[0_0_50px_rgba(235,0,40,0.35)] md:flex-row md:h-[620px]">
      {/* ---------------- SIDEBAR ---------------- */}
      <aside className="flex w-full flex-col border-b border-[#EB0028]/30 bg-black md:h-full md:w-[320px] md:shrink-0 md:border-b-0 md:border-r">
        <div className="shrink-0 p-5 pb-4">
          {/* status pill */}
          {status === "tracking" ? (
            <span className="inline-flex items-center gap-2 rounded-xs border border-[#EB0028]/60 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#EB0028]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#EB0028]" />
              Live location
            </span>
          ) : status === "locating" ? (
            <span className="inline-flex items-center gap-2 rounded-xs border border-white/20 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-400" />
              Locating&hellip;
            </span>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-xs border border-amber-500/40 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400">
              <AlertTriangle className="h-3 w-3" />
              Location off
            </span>
          )}

          {/* distance / time stat boxes */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xs border border-zinc-800 bg-[#0c0c10] px-3 py-2.5">
              <p className="font-mono text-xl font-bold text-[#EB0028]">
                {route ? formatDistance(route.distanceMeters) : "—"}
              </p>
              <p className="text-[11px] uppercase tracking-wider text-zinc-500">Distance</p>
            </div>
            <div className="rounded-xs border border-zinc-800 bg-[#0c0c10] px-3 py-2.5">
              <p className="font-mono text-xl font-bold text-[#EB0028]">
                {route ? formatDuration(route.durationSeconds) : "—"}
              </p>
              <p className="text-[11px] uppercase tracking-wider text-zinc-500">Est. time</p>
            </div>
          </div>

          <p className="mt-4 border-l-2 border-[#EB0028]/60 pl-2.5 text-xs leading-relaxed text-zinc-400">
            {route
              ? "Route drawn from your current location."
              : status === "denied"
              ? "Enable location access in your browser to draw a live route."
              : status === "unsupported"
              ? "Your browser doesn't support live location."
              : "Waiting for your location to draw the route…"}
          </p>

          {errorMsg && (
            <p className="mt-3 flex items-start gap-1.5 rounded-xs border border-amber-500/30 bg-amber-500/5 p-2 font-mono text-[10.5px] leading-snug text-amber-400">
              <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0" />
              {errorMsg}
            </p>
          )}
        </div>

        {/* turn-by-turn step list */}
        <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-4 neon-scrollbar">
          {route ? (
            <ul className="flex flex-col gap-2.5">
              {route.steps.map((step, i) => {
                const Icon = step.icon;
                const active = i === 0;
                return (
                  <li
                    key={i}
                    className={`flex items-center gap-3 rounded-xs border p-3 transition-colors ${
                      active
                        ? "border-[#EB0028] bg-[#1a0407] shadow-[0_0_20px_rgba(235,0,40,0.3)]"
                        : "border-zinc-800/80 bg-[#0c0c10]/70"
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        active ? "bg-[#EB0028] text-white" : "bg-zinc-800 text-zinc-400"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className={`text-sm font-bold ${active ? "text-white" : "text-zinc-200"}`}>
                        {formatDistance(step.distanceMeters)}
                      </p>
                      <p className="truncate text-xs text-zinc-500">{step.instruction}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="flex h-full items-center justify-center py-10 text-center font-mono text-xs text-zinc-600">
              Turn-by-turn directions will appear here once a route is found.
            </div>
          )}
        </div>

        {/* action bar */}
        <div className="flex shrink-0 gap-2 border-t border-white/10 p-4">
          <button
            type="button"
            onClick={requestLocation}
            title="Re-check my location"
            className="flex items-center justify-center gap-1.5 rounded-xs border border-white/15 bg-black px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-white/80 transition-colors hover:border-white/40 hover:text-white"
          >
            <LocateFixed className="h-3.5 w-3.5" />
            Locate
          </button>
          <button
            type="button"
            onClick={handleRecenter}
            className="flex-1 rounded-xs border border-white/15 bg-black px-3 py-2 text-center font-mono text-[11px] font-semibold uppercase tracking-wider text-white/80 transition-colors hover:border-white/40 hover:text-white"
          >
            Recenter
          </button>
          <a
            href={googleMapsUrl(userPos)}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xs border border-[#EB0028] bg-[#EB0028] px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-white shadow-[0_0_16px_rgba(235,0,40,0.4)] transition-colors hover:bg-[#c40022]"
          >
            Google Maps
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </aside>

      {/* ---------------- MAP ---------------- */}
      <div ref={mapElRef} className="h-[420px] w-full md:h-full md:flex-1" />
    </div>
  );
}
