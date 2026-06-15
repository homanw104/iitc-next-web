"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navItems = [
  { href: "/#home", label: "Home" },
  { href: "/#downloads", label: "Downloads" },
  { href: "/#contribute", label: "Contribute" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#donate", label: "Donate" },
  { href: "/privacy", label: "Privacy" },
];

export function Logo() {
  return (
    <Link
      aria-label="IITC Next home"
      className="relative block size-12 shrink-0 sm:size-16 lg:mx-auto lg:m-4 lg:size-28"
      href="/"
    >
      <Image
        fill
        alt="IITC Next logo"
        className="brightness-0"
        src="/icons/iitc-next.svg"
      />
    </Link>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive =
    href === "/privacy" ? pathname === "/privacy" : pathname === "/" && href === "/#home";

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={[
        "inline-flex h-10 items-center justify-center rounded-xl px-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#10201a] transition-colors focus:outline-none lg:h-11 lg:justify-start lg:px-4 lg:text-sm",
        isActive
          ? "bg-[#10201a]/15 hover:bg-[#10201a]/10 active:bg-[#10201a]/25 focus:bg-[#10201a]/20"
          : "bg-[#10201a]/10 hover:bg-[#10201a]/5 active:bg-[#10201a]/15 focus:bg-[#10201a]/15",
      ].join(" ")}
      href={href}
      scroll
    >
      {label}
    </Link>
  );
}

export function MobileNav() {
  return (
    <nav aria-label="Primary navigation" className="lg:hidden">
      <div className="grid grid-cols-2 gap-2 min-[520px]:grid-cols-6">
        {navItems.map((item) => (
          <NavLink href={item.href} key={item.href} label={item.label} />
        ))}
      </div>
    </nav>
  );
}

export function DesktopNav() {
  return (
    <nav
      aria-label="Primary navigation"
      className="sticky top-8 hidden self-start lg:block"
    >
      <Logo />
      <div className="mt-14 grid gap-2">
        {navItems.map((item) => (
          <NavLink href={item.href} key={item.href} label={item.label} />
        ))}
      </div>
    </nav>
  );
}
