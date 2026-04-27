import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us - BlueWave Surf School" },
      { name: "description", content: "Sign up for a BlueWave surf class or get in touch." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bw-container py-6">
      <h1>Contact / Sign Up</h1>
      <p className="text-center text-lg mb-6">Fill out this form to sign up for a class. We will email you back within 1 day!</p>

      <form
        onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
        className="bg-white border-4 rounded-md p-5 max-w-xl mx-auto space-y-4"
        style={{ borderColor: "var(--teal)" }}
        aria-label="Sign up form"
      >
        <div>
          <label className="block font-bold mb-1" htmlFor="name">Name:</label>
          <input id="name" required type="text" className="w-full border-2 rounded p-2" style={{ borderColor: "var(--teal)" }} />
        </div>
        <div>
          <label className="block font-bold mb-1" htmlFor="age">Age:</label>
          <input id="age" required type="number" min={5} max={99} className="w-full border-2 rounded p-2" style={{ borderColor: "var(--teal)" }} />
        </div>
        <div>
          <label className="block font-bold mb-1" htmlFor="email">Email:</label>
          <input id="email" required type="email" className="w-full border-2 rounded p-2" style={{ borderColor: "var(--teal)" }} />
        </div>
        <div>
          <label className="block font-bold mb-1" htmlFor="level">Class Level:</label>
          <select id="level" required className="w-full border-2 rounded p-2 bg-white" style={{ borderColor: "var(--teal)" }}>
            <option value="">-- Pick one --</option>
            <option>Beginner ($75)</option>
            <option>Intermediate ($110)</option>
            <option>Advanced ($150)</option>
          </select>
        </div>
        <div>
          <label className="block font-bold mb-1" htmlFor="msg">Message:</label>
          <textarea id="msg" rows={4} className="w-full border-2 rounded p-2" style={{ borderColor: "var(--teal)" }} />
        </div>
        <div className="text-center">
          <button type="submit" className="cta-primary">Submit!</button>
        </div>
        {submitted && (
          <p role="status" className="text-center font-bold" style={{ color: "var(--teal)" }}>
            ✅ Thanks! We will email you soon.
          </p>
        )}
      </form>

      <h2 className="mt-10">Other Ways to Reach Us</h2>
      <div className="bg-white border-2 rounded-md p-4 max-w-xl mx-auto text-center" style={{ borderColor: "var(--teal)" }}>
        <p><strong>Address:</strong> 123 Shoreline Drive, Pacific Beach CA 92109</p>
        <p><strong>Phone:</strong> (555) 012-WAVE</p>
        <p><strong>Email:</strong> hello@bluewavesurf.com</p>
        <p className="mt-2"><strong>Hours:</strong> Mon-Fri 8am-6pm · Sat-Sun 7am-7pm</p>
      </div>
    </div>
  );
}
