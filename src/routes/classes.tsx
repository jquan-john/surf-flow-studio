import { createFileRoute, Link } from "@tanstack/react-router";
import beginner from "@/assets/class-beginner.jpg";
import intermediate from "@/assets/class-intermediate.jpg";
import advanced from "@/assets/class-advanced.jpg";

export const Route = createFileRoute("/classes")({
  head: () => ({
    meta: [
      { title: "Lessons - BlueWave Surf School" },
      { name: "description", content: "Surf classes for beginner, intermediate, and advanced students." },
    ],
  }),
  component: ClassesPage,
});

function ClassesPage() {
  return (
    <div className="bw-container py-6">
      <h1>Our Surf Lessons</h1>
      <p className="text-center text-lg mb-6">We have 3 levels of classes. Pick the one that fits you!</p>

      <table className="w-full border-collapse border-2 mb-8 bg-white text-left" style={{ borderColor: "var(--darkblue)" }}>
        <thead style={{ backgroundColor: "var(--teal)", color: "white" }}>
          <tr>
            <th className="border-2 p-2" style={{ borderColor: "var(--darkblue)" }}>Class</th>
            <th className="border-2 p-2" style={{ borderColor: "var(--darkblue)" }}>Price</th>
            <th className="border-2 p-2" style={{ borderColor: "var(--darkblue)" }}>Time</th>
            <th className="border-2 p-2" style={{ borderColor: "var(--darkblue)" }}>When</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 p-2" style={{ borderColor: "var(--darkblue)" }}>Beginner</td>
            <td className="border-2 p-2" style={{ borderColor: "var(--darkblue)" }}>$75</td>
            <td className="border-2 p-2" style={{ borderColor: "var(--darkblue)" }}>90 min</td>
            <td className="border-2 p-2" style={{ borderColor: "var(--darkblue)" }}>Daily, 9am / 11am / 2pm</td>
          </tr>
          <tr>
            <td className="border-2 p-2" style={{ borderColor: "var(--darkblue)" }}>Intermediate</td>
            <td className="border-2 p-2" style={{ borderColor: "var(--darkblue)" }}>$110</td>
            <td className="border-2 p-2" style={{ borderColor: "var(--darkblue)" }}>2 hours</td>
            <td className="border-2 p-2" style={{ borderColor: "var(--darkblue)" }}>Tue / Thu / Sat 10am</td>
          </tr>
          <tr>
            <td className="border-2 p-2" style={{ borderColor: "var(--darkblue)" }}>Advanced</td>
            <td className="border-2 p-2" style={{ borderColor: "var(--darkblue)" }}>$150</td>
            <td className="border-2 p-2" style={{ borderColor: "var(--darkblue)" }}>2 hours</td>
            <td className="border-2 p-2" style={{ borderColor: "var(--darkblue)" }}>By appointment</td>
          </tr>
        </tbody>
      </table>

      <h2>Beginner Class</h2>
      <img src={beginner} alt="Instructor teaching a beginner on the sand" width={1024} height={768} loading="lazy" className="w-full max-w-lg mx-auto border-4 rounded-md mb-2" style={{ borderColor: "var(--teal)" }} />
      <p className="mb-6">For people who have never surfed before. We will teach you how to paddle, pop up, and catch your first wave! Surfboard and wetsuit included.</p>

      <h2>Intermediate Class</h2>
      <img src={intermediate} alt="Surfer paddling out into a wave" width={1024} height={768} loading="lazy" className="w-full max-w-lg mx-auto border-4 rounded-md mb-2" style={{ borderColor: "var(--teal)" }} />
      <p className="mb-6">If you can already stand up on a wave, this class will help you turn and pick better waves. We even do a video review!</p>

      <h2>Advanced Class</h2>
      <img src={advanced} alt="Advanced surfer carving a big wave" width={1024} height={768} loading="lazy" className="w-full max-w-lg mx-auto border-4 rounded-md mb-2" style={{ borderColor: "var(--teal)" }} />
      <p className="mb-6">One on one coaching for advanced surfers. We work on tricks, contest prep, and big wave technique. You bring your own board.</p>

      <p className="text-center">
        <Link to="/contact" className="cta-primary">Sign Up for a Class</Link>
      </p>
    </div>
  );
}
