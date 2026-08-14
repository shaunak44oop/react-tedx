import { Reveal } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { Accordion } from "../components/kokonutui/accordion";
import { faq } from "../data/faq";

export function Venue() {
  return (
    <>
      <section className="px-[clamp(20px,4vw,56px)] py-12 md:py-16">
        <Reveal className="mx-auto grid max-w-container gap-10 md:grid-cols-2 md:gap-14 items-stretch">
          {/* Left Column: Expanded Full-Height Map */}
          <div className="h-full w-full min-h-[420px]">
            <iframe
              className="h-full w-full rounded-sm border border-brand/20 grayscale contrast-[1.05]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.273618197171!2d78.3615364!3d17.470535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93cc13e59543%3A0xb3bd0f1e84a22b78!2sCHIREC%20International%20School%2C%20Kondapur%20Campus!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              title="Map to venue"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right Column: Heading & Venue Info */}
          <div className="flex flex-col justify-center">
            <p className="font-mono text-[12.5px] uppercase tracking-[0.14em] text-brand">
              Getting there
            </p>
            <h1 className="mt-3 font-display text-[clamp(36px,6vw,64px)] text-brand leading-none">
              Venue &amp; FAQ
            </h1>

            {/* Thin divider line */}
            <hr className="my-6 h-[1px] border-0 bg-brand/20" />

            <h2 className="font-display text-2xl text-brand">CHIREC Kondapur</h2>
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
              <SpotlightButton href="https://share.google/9lqyTxAmB7yLQNhXW" variant="outline">
                Get directions
              </SpotlightButton>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-[clamp(20px,4vw,56px)] py-14">
        <Reveal className="mx-auto max-w-container">
          <p className="font-mono text-[12.5px] uppercase tracking-[0.14em] text-brand">
            Good to know
          </p>
          <h2 className="mt-3.5 font-display text-[clamp(28px,4vw,44px)] text-brand">
            Frequently asked questions
          </h2>
          <div className="mt-8 max-w-[760px]">
            <Accordion items={faq} />
          </div>
        </Reveal>
      </section>
    </>
  );
}
