"use client";

import { useState } from "react";

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Technology", href: "/technology" },
  { label: "Facility", href: "/facility" },
];

export default function Navbar({
  variant = "solid",
}: {
  variant?: "solid" | "overlay";
}) {
  const [open, setOpen] = useState(false);

  const base = "w-full text-white-off";
  const chrome =
    variant === "overlay"
      ? "absolute inset-x-0 top-0 z-20 bg-transparent"
      : "relative z-20 bg-navy";

  return (
    <header className={`${base} ${chrome}`}>
      <div className="mx-auto flex max-w-[1256px] items-center justify-between px-5 py-6 sm:px-8 lg:py-[35px]">
        {/* logo */}
        <a
          href="#"
          aria-label="Prospera 3PL home"
          className="relative block h-[23px] w-[217px] shrink-0"
        >
          <img
            src="/images/logo-icon.svg"
            alt=""
            className="absolute left-0 top-0 h-[22.937px] w-[25.529px]"
          />
          <img
            src="/images/logo-wordmark.svg"
            alt="Prospera"
            className="absolute left-[30.93px] top-[0.05px] h-[22.915px] w-[162.554px]"
          />
          <img
            src="/images/logo-3pl.svg"
            alt="3PL"
            className="absolute left-[198.86px] top-[8.12px] h-[6.701px] w-[18.174px]"
          />
        </a>

        {/* desktop menu */}
        <nav className="hidden w-[603px] items-center justify-between whitespace-nowrap text-[18px] font-light lg:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:opacity-70"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* desktop contact */}
        <a
          href="/contact"
          className="hidden shrink-0 rounded-full border border-white-off px-[30px] py-[15px] text-[18px] leading-none [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] transition-colors hover:bg-white-off hover:text-navy lg:inline-flex"
        >
          Contact
        </a>

        {/* mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-6 w-7 flex-col justify-between lg:hidden"
        >
          <span
            className={`h-[2px] w-full bg-white-off transition-transform ${open ? "translate-y-[11px] rotate-45" : ""}`}
          />
          <span
            className={`h-[2px] w-full bg-white-off transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-[2px] w-full bg-white-off transition-transform ${open ? "-translate-y-[11px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* mobile panel */}
      {open && (
        <nav className="border-t border-white-off/15 bg-navy px-5 pb-8 pt-2 text-[20px] font-light lg:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-3"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex rounded-full border border-white-off px-[30px] py-[15px] text-[18px] leading-none [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
