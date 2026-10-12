import { Mail, Github, Linkedin } from "lucide-react";
import { socials } from "@/data/profile";
import { cn } from "@/lib/utils";

export function SocialLinks({ className }: { className?: string }) {
  const items = [
    { href: socials.linkedin, label: "LinkedIn", icon: Linkedin, bg: "hover:bg-blush" },
    { href: socials.github, label: "GitHub", icon: Github, bg: "hover:bg-sea" },
    { href: `mailto:${socials.email}`, label: "Email", icon: Mail, bg: "hover:bg-sun" },
  ];
  return (
    <ul className={cn("flex flex-wrap gap-3", className)}>
      {items.map(({ href, label, icon: Icon, bg }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className={cn(
              "inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-5 py-2.5 font-medium transition-all hover:-translate-y-0.5 hover:shadow-pop",
              bg,
            )}
          >
            <Icon className="h-4 w-4" aria-hidden /> {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
