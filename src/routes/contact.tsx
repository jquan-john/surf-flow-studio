import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Sign Up & Contact — BlueWave Surf School" },
      { name: "description", content: "Sign up for a BlueWave surf class or get in touch with our team." },
      { property: "og:title", content: "Sign Up for BlueWave Surf" },
      { property: "og:description", content: "Reserve your spot in a BlueWave surf class." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bw-container pt-16 pb-10 text-center">
        <h1>Sign Up & Catch a Wave</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Reserve your spot below — we'll confirm by email within 24 hours.
        </p>
      </section>

      <section className="bw-container pb-20 grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="rounded-2xl bg-card border border-border shadow-sm p-8 space-y-5"
          aria-label="Sign up form"
        >
          <h2 className="!text-3xl">Book Your Class</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold">Full Name</span>
              <input required type="text" className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold">Age</span>
              <input required type="number" min={5} max={99} className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
          </div>

          <label className="block">
            <span className="text-sm font-semibold">Email</span>
            <input required type="email" className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-ring" />
          </label>

          <label className="block">
            <span className="text-sm font-semibold">Class Level</span>
            <select required className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-ring">
              <option value="">Choose a level…</option>
              <option>Beginner — $75</option>
              <option>Intermediate — $110</option>
              <option>Advanced — $150</option>
              <option>Not sure yet</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-semibold">Message (optional)</span>
            <textarea rows={4} className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-ring" />
          </label>

          <button type="submit" className="cta-primary w-full">Sign Up Now</button>

          {submitted && (
            <p role="status" className="text-center text-primary font-semibold">
              🌊 Thanks! We'll be in touch within 24 hours.
            </p>
          )}
        </form>

        <aside className="space-y-6">
          <div className="rounded-2xl p-8 text-white" style={{ backgroundImage: "var(--gradient-ocean)", color: "white" }}>
            <h2 className="!text-3xl" style={{ color: "white" }}>Visit Us</h2>
            <p className="mt-4 opacity-95">123 Shoreline Drive<br />Pacific Beach, CA 92109</p>
            <p className="mt-4 opacity-95">📞 (555) 012-WAVE<br />✉️ hello@bluewavesurf.com</p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-8">
            <h3>Hours</h3>
            <ul className="mt-3 text-muted-foreground space-y-1 text-sm">
              <li>Mon – Fri · 8am – 6pm</li>
              <li>Sat – Sun · 7am – 7pm</li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
