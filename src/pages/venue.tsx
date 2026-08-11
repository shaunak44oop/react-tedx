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
            <h2 className="font-display text-2xl text-brand">[School Auditorium Name]</h2>
            <p className="mt-3 text-muted">
              [Street Address]
              <br />
              [City, State ZIP]
            </p>
            <p className="mt-5 text-[15px] text-muted">
              Enter through [entrance name] — signs will point you to check-in.
              Parking is available in [lot name]; overflow parking at [location].
            </p>
            <div className="mt-6">
              <SpotlightButton href="#" variant="outline">Get directions</SpotlightButton>
            </div>
          </div>
          <iframe
            className="aspect-video w-full rounded-sm border border-brand/20 grayscale contrast-[1.05]"
            src="https://www.google.com/maps?q=your+school+address&output=embed"
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
