import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-surf.jpg";
import beginner from "@/assets/class-beginner.jpg";
import intermediate from "@/assets/class-intermediate.jpg";
import advanced from "@/assets/class-advanced.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BlueWave Surf School — Learn to Surf in Pacific Beach" },
      { name: "description", content: "Beginner to advanced surf lessons with certified instructors. Book your BlueWave Surf class today." },
      { property: "og:title", content: "BlueWave Surf School" },
      { property: "og:description", content: "Catch your first wave with BlueWave — surf lessons for all levels." },
      { property: "og:image", content: hero },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Surfer riding a turquoise wave at sunset"
          width={1600}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/40 via-deep/30 to-background" style={{ background: "linear-gradient(to bottom, oklch(0.32 0.12 250 / 0.55), oklch(0.32 0.12 250 / 0.25), var(--background))" }} />
        <div className="relative bw-container py-28 md:py-40 text-center">
          <p className="inline-block px-4 py-1 rounded-full bg-white/85 text-deep text-sm font-semibold mb-6">
            🌊 Pacific Beach · Est. 2012
          </p>
          <h1 className="text-white drop-shadow-lg" style={{ color: "white" }}>
            Ride Your First Wave
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/95 max-w-2xl mx-auto">
            Friendly, certified instructors. Tiny tots to adventurous adults — BlueWave makes learning to surf safe, fun, and unforgettable.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="cta-primary">Sign Up for a Class</Link>
            <Link to="/classes" className="cta-secondary">View Classes</Link>
          </div>
        </div>
        <div className="wave-divider relative" />
      </section>

      {/* Highlights */}
      <section className="bw-container py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2>Why Surf with BlueWave?</h2>
          <p className="mt-4 text-muted-foreground">
            Small group sizes, top-notch gear, and instructors who live and breathe the ocean.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: "🏄", title: "Certified Pros", text: "ISA-certified coaches with 10+ years of teaching experience." },
            { icon: "👥", title: "Small Groups", text: "Max 4 students per instructor for personal attention." },
            { icon: "🛟", title: "Safety First", text: "Lifeguard-trained team and premium soft-top boards included." },
          ].map((f) => (
            <article key={f.title} className="rounded-2xl bg-card p-8 shadow-sm border border-border hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3>{f.title}</h3>
              <p className="mt-2 text-muted-foreground">{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Classes preview */}
      <section className="py-20" style={{ backgroundColor: "var(--sand)" }}>
        <div className="bw-container">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <h2>Find Your Level</h2>
              <p className="mt-2 text-muted-foreground">From first paddle to perfect cutback.</p>
            </div>
            <Link to="/classes" className="cta-secondary">All Classes →</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { img: beginner, alt: "Instructor teaching a beginner on the sand", title: "Beginner", desc: "Pop-ups, paddling & wave safety." },
              { img: intermediate, alt: "Surfer paddling out into clean waves", title: "Intermediate", desc: "Turning, timing & ocean reading." },
              { img: advanced, alt: "Advanced surfer in a big barreling wave", title: "Advanced", desc: "Carves, airs & contest prep." },
            ].map((c) => (
              <article key={c.title} className="rounded-2xl overflow-hidden bg-card shadow-sm border border-border">
                <img src={c.img} alt={c.alt} width={1024} height={768} loading="lazy" className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h3>{c.title}</h3>
                  <p className="mt-2 text-muted-foreground">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bw-container py-20 text-center">
        <div className="rounded-3xl p-12 md:p-16 text-white" style={{ backgroundImage: "var(--gradient-ocean)", color: "white" }}>
          <h2 style={{ color: "white" }}>Ready to Catch Your First Wave?</h2>
          <p className="mt-4 max-w-xl mx-auto opacity-95">
            Book a lesson this weekend — boards and wetsuits included.
          </p>
          <Link to="/contact" className="cta-secondary mt-8 inline-flex">Book Now</Link>
        </div>
      </section>
    </>
  );
}
