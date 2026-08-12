import { Reveal } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { Accordion } from "../components/kokonutui/accordion";
import { faq } from "../data/faq";

export function Venue() {
  return (
    <>
      <section className="px-[clamp(20px,4vw,56px)] py-14">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="inline-flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.14em] text-brand">
              <span className="h-2 w-2 rounded-full bg-current" /> Getting there
            </p>
            <h1 className="mt-3.5 font-display text-[clamp(36px,6vw,64px)] text-brand">Venue &amp; FAQ</h1>
            <hr className="rule mt-[18px]" />
          </Reveal>
        </div>
      </section>

      <section className="px-[clamp(20px,4vw,56px)] py-14">
        <Reveal className="mx-auto grid max-w-container items-start gap-14 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-brand">BMPH</h2>
            <p className="mt-3 text-muted">
              CHIREC Avenue, Botanical Garden Road, Kondapur
              <br />
              Hyderabad, Telangana | 500084
            </p>
            <p className="mt-5 text-[15px] text-muted">
              Enter through Gate 1 — signs will point you to check-in.
              Parking is available next to the school.
            </p>
            <div className="mt-6">
              <SpotlightButton href="#" variant="outline">Get directions</SpotlightButton>
            </div>
          </div>
          <iframe
            className="aspect-video w-full rounded-sm border border-brand/20 grayscale contrast-[1.05]"
            src="https://maps.app.goo.gl/vtfypuGhcDMRsKJS7"
            title="Map to venue"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>

      <section className="px-[clamp(20px,4vw,56px)] py-14">
        <Reveal className="mx-auto max-w-[760px]">
          <p className="inline-flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.14em] text-brand">
            <span className="h-2 w-2 rounded-full bg-current" /> Good to know
          </p>
          <h2 className="mt-3.5 font-display text-[clamp(28px,4vw,44px)] text-brand">
            Frequently asked questions
          </h2>
          <Accordion items={faq} />
        </Reveal>
      </section>
    </>
  );
}
