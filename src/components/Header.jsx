import { Link } from "react-router-dom";
import { profile } from "../data/profile";

const navLinks = [
  { to: "/#projets", label: "Projets" },
  { to: "/comment-je-travaille", label: "Comment je travaille" },
  { to: "/#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="font-display text-lg font-semibold text-ink">
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative font-mono text-sm text-ink-soft transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-blue after:transition-all after:duration-300 hover:text-blue hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={profile.cvUrl}
          className="rounded-full bg-yellow px-4 py-2 font-sans text-sm font-medium text-blue-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-strong hover:shadow-[0_10px_20px_-8px_oklch(83%_0.15_92/0.6)]"
        >
          Voir mon CV
        </a>
      </div>
    </header>
  );
}
