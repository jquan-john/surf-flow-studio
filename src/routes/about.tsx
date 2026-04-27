import { createFileRoute, Link } from "@tanstack/react-router";
import instructors from "@/assets/instructors.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BlueWave Surf — Our Story & Instructors" },
      { name: "description", content: "Meet the BlueWave team: ISA-certified surf instructors passionate about ocean safety and stoke." },
      { property: "og:title", content: "About BlueWave Surf" },
      { property: "og:description", content: "Meet our instructors and learn what makes BlueWave special." },
      { property: "og:image", content: instructors },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bw-container pt-16 pb-12 text-center">
        <h1>About BlueWave</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          We've been teaching the joy of surfing on the California coast since 2012 — one wave at a time.
        </p>
      </section>

      <section className="bw-container grid gap-10 md:grid-cols-2 items-center pb-20">
        <img
          src={instructors}
          alt="BlueWave surf instructors smiling on the beach with surfboards"
          width={1280}
          height={896}
          loading="lazy"
          className="rounded-2xl shadow-lg w-full h-auto"
        />
        <div>
          <h2>Our Story</h2>
          <p className="mt-4 text-muted-foreground">
            Founded by lifelong surfer Maya Reyes, BlueWave started as a single-board lesson on a quiet stretch of Pacific Beach.
            More than a decade later, we've taught over 8,000 students — from nervous first-timers to future competitors.
          </p>
          <p className="mt-4 text-muted-foreground">
            Every coach on our team is ISA-certified, CPR-trained, and personally vetted by Maya. We believe the ocean teaches
            confidence, patience, and respect — and we bring that into every lesson.
          </p>
        </div>
      </section>

      <section className="bw-container pb-20">
        <h2 className="text-center mb-10">Meet the Coaches</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Maya Reyes", role: "Founder & Head Coach", bio: "ISA Level 2 · 18 years coaching · Former WSL qualifier." },
            { name: "Jordan Pike", role: "Beginner Specialist", bio: "Lifeguard certified · Loves teaching kids and total newbies." },
            { name: "Sana Okafor", role: "Performance Coach", bio: "Trains intermediate to advanced surfers for contests." },
          ].map((p) => (
            <article key={p.name} className="rounded-2xl bg-card p-6 border border-border shadow-sm text-center">
              <div className="mx-auto h-20 w-20 rounded-full mb-4" style={{ backgroundImage: "var(--gradient-ocean)" }} aria-hidden />
              <h3>{p.name}</h3>
              <p className="text-sm font-semibold text-primary mt-1">{p.role}</p>
              <p className="mt-3 text-muted-foreground text-sm">{p.bio}</p>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/contact" className="cta-primary">Train With Us</Link>
        </div>
      </section>
    </>
  );
}
