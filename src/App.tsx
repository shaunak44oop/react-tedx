import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";
import { PageTransition } from "./components/layout/page-transition";
import { Home } from "./pages/home";
import { Speakers } from "./pages/speakers";
import { Schedule } from "./pages/schedule";
import { Venue } from "./pages/venue";
import { Register } from "./pages/register";
import { Team } from "./pages/team"; // <-- 1. Import added here

/** Jumps to the top of the page whenever the route changes. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/team" element={<Team />} /> {/* <-- 2. Route added here */}
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </PageTransition>
      <Footer />
    </div>
  );
}
