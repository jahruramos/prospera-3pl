"use client";

import { useState } from "react";

type Step = {
  number: string;
  label: string;
  body: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    label: "Receive",
    body: "We receive your inventory, verify quantities, inspect shipments, and process products into our inventory management system.",
  },
  {
    number: "02",
    label: "Store",
    body: "Your products are securely stored and organized within our facility, ensuring accuracy, visibility, and efficient inventory management.",
  },
  {
    number: "03",
    label: "Fulfill",
    body: "As orders are received, our team picks, packs, and prepares shipments according to your brand's specifications and retailer requirements.",
  },
  {
    number: "04",
    label: "Ship",
    body: "Orders are dispatched through trusted carrier partners and delivered efficiently to customers, retailers, or distribution centers.",
  },
  {
    number: "05",
    label: "Grow",
    body: "With logistics handled by Prospera 3PL, you can focus on growing your brand while we provide the infrastructure and support to scale with confidence.",
  },
];

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span className="relative ml-6 block h-8 w-8 shrink-0" aria-hidden>
      {/* horizontal bar */}
      <span className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 bg-navy" />
      {/* vertical bar — only when closed */}
      <span
        className={`absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-navy transition-transform duration-300 ${
          open ? "scale-y-0" : "scale-y-100"
        }`}
      />
    </span>
  );
}

export default function ProcessSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="w-full bg-white-off py-20 text-navy lg:py-[150px]">
      <div className="mx-auto max-w-[1256px] px-5 sm:px-8">
        {/* eyebrow */}
        <p className="text-[14px] font-light uppercase tracking-[2px]">
          / Process
        </p>
        {/* heading */}
        <h2 className="mt-6 font-serif text-[40px] leading-[42px] tracking-[-1px] sm:text-[60px] sm:leading-[58px] sm:tracking-[-1.4px] lg:text-[90px] lg:leading-[85px] lg:tracking-[-1.8px]">
          How it works
        </h2>
        {/* subtitle */}
        <p className="mt-5 max-w-[801px] text-[18px] font-light leading-[26px] sm:text-[22px] sm:leading-[31px] lg:mt-7 lg:text-[26px] lg:leading-[36.4px]">
          Our streamlined process ensures your inventory moves efficiently from
          arrival to final delivery.
        </p>

        {/* accordion */}
        <div className="mt-14 lg:mt-[54px]">
          {STEPS.map((step, i) => {
            const isOpen = open === i;
            return (
              <div key={step.number} className="border-b border-navy">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between pb-[16px] pt-[24px] text-left lg:pb-[20px] lg:pt-[30px]"
                >
                  <span className="font-serif text-[32px] leading-none tracking-[-0.7px] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] sm:text-[44px] lg:text-[55px] lg:tracking-[-1.1px]">
                    {step.number}. {step.label}
                  </span>
                  <ToggleIcon open={isOpen} />
                </button>
                {/* collapsible body */}
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[900px] pb-10 text-[16px] font-light leading-[26px] lg:text-[26px] lg:leading-[35px]">
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
