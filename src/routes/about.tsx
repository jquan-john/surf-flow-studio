import { createFileRoute, Link } from "@tanstack/react-router";
import instructors from "@/assets/instructors.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us - BlueWave Surf School" },
      { name: "description", content: "Learn about the BlueWave instructors and our story." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bw-container py-6">
      <h1>About Us</h1>

      <img
        src={instructors}
        alt="Group photo of the BlueWave surf instructors on the beach"
        width={1280}
        height={896}
        loading="lazy"
        className="block mx-auto w-full max-w-2xl h-auto border-4 rounded-md mb-6"
        style={{ borderColor: "var(--teal)" }}
      />

      <h2>Our Story</h2>
      <p className="mb-4 text-lg">
        BlueWave Surf School was started in 2012 by Maya Reyes. She loves surfing and wanted to share it with everyone.
        Now we have 6 instructors and we have taught over 8,000 students!
      </p>

      <h2>Meet the Instructors</h2>
      <div className="space-y-4 mb-6">
        <div className="bg-white border-2 rounded-md p-4" style={{ borderColor: "var(--teal)" }}>
          <h3>Maya Reyes - Head Coach</h3>
          <p>Maya has been surfing for 18 years. She is ISA Level 2 certified and used to surf in WSL contests.</p>
        </div>
        <div className="bg-white border-2 rounded-md p-4" style={{ borderColor: "var(--teal)" }}>
          <h3>Jordan Pike - Beginner Coach</h3>
          <p>Jordan is a lifeguard and loves teaching kids and first-time surfers. Super patient!</p>
        </div>
        <div className="bg-white border-2 rounded-md p-4" style={{ borderColor: "var(--teal)" }}>
          <h3>Sana Okafor - Advanced Coach</h3>
          <p>Sana trains intermediate and advanced surfers. She has helped lots of students win contests.</p>
        </div>
      </div>

      <p className="text-center">
        <Link to="/contact" className="cta-primary">Train With Us</Link>
      </p>
    </div>
  );
}
