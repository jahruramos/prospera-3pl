function Logo() {
  return (
    <div className="relative h-[23px] w-[217px]">
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
    </div>
  );
}

const SOCIALS = [
  { icon: "/images/social-instagram.svg", label: "Instagram", href: "#" },
  { icon: "/images/social-facebook.svg", label: "Facebook", href: "#" },
  { icon: "/images/social-linkedin.svg", label: "LinkedIn", href: "#" },
];

export default function FooterSection() {
  return (
    <footer className="w-full bg-navy py-16 text-white-off lg:py-[110px]">
      <div className="mx-auto max-w-[1256px] px-5 sm:px-8">
        {/* top */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(596px,1fr)_auto] lg:gap-16">
          {/* brand */}
          <div>
            <Logo />
            <p className="mt-8 max-w-[440px] text-[16px] font-light leading-[20px] lg:max-w-[596px]">
              Prospera 3PL provides dependable warehousing, fulfillment,
              inventory management, and distribution services that help
              businesses operate efficiently and scale successfully.
            </p>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-12 text-[16px] leading-[25px] sm:grid-cols-3 sm:gap-x-[52px] lg:min-h-[340px]">
            {/* company + contact */}
            <div className="flex flex-col">
              <nav className="flex flex-col gap-[15px]">
                <a href="#" className="w-fit hover:opacity-70">Home</a>
                <a href="#" className="w-fit hover:opacity-70">About</a>
                <a href="#" className="w-fit hover:opacity-70">Technology</a>
                <a href="#" className="w-fit hover:opacity-70">Facility</a>
              </nav>
              <div className="mt-12 lg:mt-auto">
                <p>Contact</p>
                <p className="mt-4 font-thin">509 NW 72nd St, Miami, FL 33150</p>
                <a
                  href="mailto:contact@prospera3pl.com"
                  className="mt-2 block w-fit font-thin hover:opacity-70"
                >
                  contact@prospera3pl.com
                </a>
              </div>
            </div>

            {/* services */}
            <div className="flex flex-col">
              <p>Services</p>
              <nav className="mt-4 flex flex-col gap-[10px] font-thin">
                <a href="#" className="w-fit hover:opacity-70">Warehousing</a>
                <a href="#" className="w-fit hover:opacity-70">Fulfillment</a>
                <a href="#" className="w-fit hover:opacity-70">B2B Distribution</a>
                <a href="#" className="w-fit hover:opacity-70">Added Services</a>
              </nav>
            </div>

            {/* social + phone */}
            <div className="flex flex-col">
              <p>Social Media</p>
              <div className="mt-4 flex items-center gap-[6px]">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="transition-opacity hover:opacity-70"
                  >
                    <img
                      src={s.icon}
                      alt=""
                      className="h-[24.685px] w-[24.685px]"
                    />
                  </a>
                ))}
              </div>
              <a
                href="tel:+19174554466"
                className="mt-8 block w-fit font-thin hover:opacity-70 lg:mt-auto"
              >
                +1 917-455-4466
              </a>
            </div>
          </div>
        </div>

        {/* divider */}
        <hr className="mt-16 border-0 border-t border-white-off/15 lg:mt-[70px]" />

        {/* bottom bar */}
        <div className="mt-6 flex flex-col gap-4 text-[16px] leading-[25px] text-[#475575] sm:flex-row sm:items-center sm:justify-between">
          <p>All rights reserved for Prospera Texil ® - Lima, Perú</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:opacity-70">Terms of Service</a>
            <a href="#" className="hover:opacity-70">Privacy Politics</a>
          </div>
          <img
            src="/images/logo-icon.svg"
            alt=""
            className="hidden h-[22px] w-[24px] opacity-40 sm:block"
          />
        </div>
      </div>
    </footer>
  );
}
