import { Mail } from "lucide-react";
import { GithubGlyph, LinkedinGlyph } from "./icons/BrandIcons";
import { profile } from "../data/profile";

const links = [
  { href: profile.linkedin, label: "LinkedIn", icon: LinkedinGlyph },
  { href: profile.github, label: "GitHub", icon: GithubGlyph },
  { href: `mailto:${profile.email}`, label: profile.email, icon: Mail },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-blue-deep">
      <div className="mx-auto max-w-5xl px-6 py-14 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-paper">
              {profile.name}
            </p>
            <p className="mt-2 text-sm text-paper/70">
              Ouvert aux stages, échanges et opportunités.
            </p>
          </div>

          <ul className="flex flex-col gap-3 sm:flex-row sm:gap-8">
            {links.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center gap-2 text-sm text-paper/85 transition-colors hover:text-yellow"
                >
                  <Icon size={16} strokeWidth={1.75} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 border-t border-paper/10 pt-6 font-mono text-xs text-paper/45">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
