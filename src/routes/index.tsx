import { createFileRoute, Link } from "@tanstack/react-router";
import surfPic from "@/assets/class-intermediate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BlueWave Surf School - Home" },
      { name: "description", content: "Welcome to BlueWave Surf School! Sign up for surf lessons today." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bw-container py-6">
      <h1>Welcome to BlueWave!!!</h1>

      <p className="text-center text-lg mb-6">
        🌊 Hi! We are a surf school in California. We teach surfing to people ages 15-35. Come learn how to surf with us!! 🏄
      </p>

      <div className="grid md:grid-cols-2 gap-6 items-start mb-8">
        <img
          src={surfPic}
          alt="A surfer riding a big blue wave"
          width={1024}
          height={768}
          className="w-full h-auto border-4 rounded-md"
          style={{ borderColor: "var(--teal)" }}
        />
        <div className="border-4 rounded-md p-4 bg-white" style={{ borderColor: "var(--darkblue)" }}>
            <h2 className="!text-2xl !text-left">About Our School</h2>
            <p className="mb-3">
              BlueWave Surf School has been teaching surfing since 2012. We have the best instructors and the best beach in town!
            </p>
            <p className="mb-4">
              All of our lessons include a surfboard and wetsuit. You don't need to bring anything except a swimsuit and a towel!
            </p>
            <Link to="/contact" className="cta-primary">Book Now</Link>
        </div>
      </div>

      <h2>Why Pick BlueWave?</h2>
      <ul className="max-w-md mx-auto list-disc list-inside space-y-1 text-lg mb-8">
        <li>Friendly teachers 😊</li>
        <li>Cheap prices 💰</li>
        <li>Free surfboard rental 🏄‍♂️</li>
        <li>Small class sizes</li>
        <li>Safe and fun!</li>
      </ul>

      <div className="text-center bg-white border-4 rounded-md p-6" style={{ borderColor: "var(--teal)" }}>
        <h2 className="!text-2xl">Ready to Surf?</h2>
        <p className="mb-4">Click the button below to sign up for a class today!</p>
        <Link to="/contact" className="cta-primary">Sign Up Now!</Link>
        <span className="mx-2" />
        <Link to="/classes" className="cta-secondary">See Classes</Link>
      </div>
    </div>
  );
}
