import { Link, Outlet } from "@tanstack/react-router";

function Header() {
  const linkStyle = "font-script text-2xl md:text-3xl text-white hover:underline";
  return (
    <header className="relative">
      {/* Wavy teal banner */}
      <div className="wavy-header h-32 md:h-36 w-full" aria-hidden />
      {/* Overlay nav content */}
      <div className="absolute inset-0">
        <div className="bw-container flex items-center justify-between h-24 md:h-28 pt-2">
          {/* Oval logo */}
          <Link to="/" aria-label="BlueWave home" className="flex items-center justify-center bg-white border-4 border-teal rounded-full h-20 w-32 md:h-24 md:w-40 shrink-0" style={{ borderColor: "var(--teal)" }}>
            <span style={{ fontFamily: "var(--font-script)", color: "var(--teal)" }} className="text-xl md:text-2xl">
              BlueWave
            </span>
          </Link>
          {/* Nav links */}
          <nav aria-label="Primary" className="flex items-center gap-3 md:gap-8 pr-2 md:pr-6">
            <Link to="/" className={linkStyle} activeOptions={{ exact: true }} activeProps={{ className: linkStyle + " italic" }} style={{ fontFamily: "var(--font-script)" }}>Home</Link>
            <Link to="/about" className={linkStyle} activeProps={{ className: linkStyle + " italic" }} style={{ fontFamily: "var(--font-script)" }}>About</Link>
            <Link to="/classes" className={linkStyle} activeProps={{ className: linkStyle + " italic" }} style={{ fontFamily: "var(--font-script)" }}>Lessons</Link>
            <Link to="/contact" className={linkStyle} activeProps={{ className: linkStyle + " italic" }} style={{ fontFamily: "var(--font-script)" }}>Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-12 border-t-4 border-teal pt-4 pb-8 text-center" style={{ borderColor: "var(--teal)" }}>
      <p className="text-sm">
        <strong>BlueWave Surf School</strong> · 123 Shoreline Drive, Pacific Beach CA · (555) 012-WAVE
      </p>
      <p className="text-xs mt-2 text-muted-foreground">
        © {new Date().getFullYear()} BlueWave. Made by the Web Design Class 🌊
      </p>
      <p className="text-xs mt-1">
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/classes">Lessons</Link> | <Link to="/contact">Contact</Link>
      </p>
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
