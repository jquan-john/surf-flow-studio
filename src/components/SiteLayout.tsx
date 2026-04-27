import { Link, Outlet } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

function Header() {
  const linkBase =
    "text-sm font-semibold text-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-md";
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
      <div className="bw-container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="BlueWave Surf logo" width={40} height={40} className="h-10 w-10" />
          <span className="font-script text-2xl text-deep" style={{ fontFamily: "var(--font-script)" }}>
            BlueWave Surf
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
          <Link to="/" className={linkBase} activeOptions={{ exact: true }} activeProps={{ className: linkBase + " text-primary" }}>Home</Link>
          <Link to="/about" className={linkBase} activeProps={{ className: linkBase + " text-primary" }}>About</Link>
          <Link to="/classes" className={linkBase} activeProps={{ className: linkBase + " text-primary" }}>Classes</Link>
          <Link to="/contact" className={linkBase} activeProps={{ className: linkBase + " text-primary" }}>Contact</Link>
        </nav>
        <Link to="/contact" className="cta-primary !py-2 !px-5 text-sm">Sign Up</Link>
      </div>
      <nav aria-label="Mobile" className="md:hidden bw-container flex flex-wrap gap-1 pb-3">
        <Link to="/" className={linkBase} activeOptions={{ exact: true }} activeProps={{ className: linkBase + " text-primary" }}>Home</Link>
        <Link to="/about" className={linkBase} activeProps={{ className: linkBase + " text-primary" }}>About</Link>
        <Link to="/classes" className={linkBase} activeProps={{ className: linkBase + " text-primary" }}>Classes</Link>
        <Link to="/contact" className={linkBase} activeProps={{ className: linkBase + " text-primary" }}>Contact</Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 bg-deep text-primary-foreground" style={{ backgroundColor: "var(--deep)" }}>
      <div className="bw-container py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="" width={36} height={36} className="h-9 w-9" />
            <span className="text-xl" style={{ fontFamily: "var(--font-script)" }}>BlueWave Surf</span>
          </div>
          <p className="text-sm opacity-80">Catch your first wave with us on the sunny coast.</p>
        </div>
        <div>
          <h3 className="text-lg mb-3" style={{ color: "white" }}>Visit</h3>
          <p className="text-sm opacity-80">123 Shoreline Drive<br />Pacific Beach, CA 92109</p>
        </div>
        <div>
          <h3 className="text-lg mb-3" style={{ color: "white" }}>Contact</h3>
          <p className="text-sm opacity-80">hello@bluewavesurf.com<br />(555) 012-WAVE</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} BlueWave Surf School. All rights reserved.
      </div>
    </footer>
  );
}

export function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
