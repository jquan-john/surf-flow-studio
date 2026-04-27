import { createFileRoute, Link } from "@tanstack/react-router";
import beginner from "@/assets/class-beginner.jpg";
import intermediate from "@/assets/class-intermediate.jpg";
import advanced from "@/assets/class-advanced.jpg";

export const Route = createFileRoute("/classes")({
  head: () => ({
    meta: [
      { title: "Surf Classes & Pricing — BlueWave Surf School" },
      { name: "description", content: "Beginner, intermediate, and advanced surf classes. Schedules, pricing, and what's included." },
      { property: "og:title", content: "BlueWave Classes & Pricing" },
      { property: "og:description", content: "Find the right surf class for your level." },
      { property: "og:image", content: intermediate },
    ],
  }),
  component: ClassesPage,
});

const classes = [
  {
    img: beginner,
    alt: "Beginner surf student practicing pop-ups on a longboard on the beach",
    level: "Beginner",
    price: "$75",
    duration: "90 min · Group of 4",
    schedule: "Daily · 9am, 11am, 2pm",
    bullets: ["Soft-top board & wetsuit included", "Ocean safety basics", "Pop-up & paddling drills", "Catch your first wave!"],
  },
  {
    img: intermediate,
    alt: "Intermediate surfer paddling into a clean turquoise wave",
    level: "Intermediate",
    price: "$110",
    duration: "2 hrs · Group of 3",
    schedule: "Tue/Thu/Sat · 10am",
    bullets: ["Wave selection & timing", "Bottom turns & trimming", "Video review session", "Performance soft-top or hard board"],
  },
  {
    img: advanced,
    alt: "Advanced surfer carving inside a barreling wave",
    level: "Advanced",
    price: "$150",
    duration: "2 hrs · 1-on-1 coaching",
    schedule: "By appointment",
    bullets: ["Carves, snaps & airs", "Contest heat strategy", "Personalized video breakdown", "Bring your own board"],
  },
];

function ClassesPage() {
  return (
    <>
      <section className="bw-container pt-16 pb-12 text-center">
        <h1>Surf Classes</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Three levels, one goal — get you stoked and standing up. Boards and wetsuits included on every lesson.
        </p>
      </section>

      <section className="bw-container space-y-10 pb-16">
        {classes.map((c, i) => (
          <article
            key={c.level}
            className={`grid gap-8 md:grid-cols-2 items-center rounded-3xl overflow-hidden bg-card border border-border shadow-sm ${
              i % 2 === 1 ? "md:[&>img]:order-2" : ""
            }`}
          >
            <img src={c.img} alt={c.alt} width={1024} height={768} loading="lazy" className="h-72 md:h-full w-full object-cover" />
            <div className="p-8 md:p-10">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h2>{c.level}</h2>
                <span className="text-2xl font-bold text-primary">{c.price}</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-muted-foreground">
                {c.duration} · {c.schedule}
              </p>
              <ul className="mt-5 space-y-2">
                {c.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-foreground/90">
                    <span aria-hidden className="text-primary font-bold">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="cta-primary mt-7">Book {c.level}</Link>
            </div>
          </article>
        ))}
      </section>

      <section className="bw-container pb-20 text-center">
        <h2>Not Sure Which Class?</h2>
        <p className="mt-3 text-muted-foreground">We'll match you with the right level — just say hi.</p>
        <Link to="/contact" className="cta-secondary mt-6">Ask a Coach</Link>
      </section>
    </>
  );
}
