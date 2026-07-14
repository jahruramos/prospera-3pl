"use client";

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-20 text-navy lg:py-[150px]">
      <div className="mx-auto grid max-w-[1256px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_595px] lg:gap-[44px]">
        {/* left column */}
        <div className="flex flex-col">
          <h2 className="font-serif text-[40px] leading-[46px] tracking-[-0.9px] sm:text-[48px] sm:leading-[52px] lg:text-[55px] lg:leading-[60px] lg:tracking-[-1.1px]">
            Contact Our Team
          </h2>
          <p className="mt-6 max-w-[622px] text-[18px] font-light leading-[26px] sm:text-[22px] sm:leading-[31px] lg:text-[26px] lg:leading-[36.4px]">
            Whether you need warehousing, fulfillment, distribution, or
            value-added services, Prospera 3PL is ready to support your
            operations.
          </p>

          {/* contact info */}
          <div className="mt-10 flex flex-col gap-[7px] text-[18px] font-light leading-[30px] lg:mt-auto lg:pt-16">
            <a href="https://maps.google.com/?q=509+NW+72nd+St,+Miami,+FL+33150" target="_blank" rel="noopener noreferrer" className="w-fit underline underline-offset-[3px]">
              509 NW 72nd St, Miami, FL 33150
            </a>
            <a href="mailto:Info@prospera3pl.com" className="w-fit underline underline-offset-[3px]">
              Info@prospera3pl.com
            </a>
            <a href="tel:+13059095940" className="w-fit underline underline-offset-[3px]">
              +1 305 909 5940
            </a>
          </div>
        </div>

        {/* right column — form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full lg:w-[595px]"
        >
          <p className="text-[14px] font-light uppercase tracking-[1.4px]">
            Contact Form
          </p>

          <div className="mt-8 flex flex-col">
            <input
              type="text"
              placeholder="Full Name"
              className="border-b border-[#c6c6c6] bg-transparent pb-[20px] pt-[28px] text-[24px] font-light leading-[35px] text-navy placeholder:text-[#c6c6c6] focus:border-navy focus:outline-none lg:pt-[40px]"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="border-b border-[#c6c6c6] bg-transparent pb-[20px] pt-[28px] text-[24px] font-light leading-[35px] text-navy placeholder:text-[#c6c6c6] focus:border-navy focus:outline-none lg:pt-[40px]"
            />
            <input
              type="text"
              placeholder="Message"
              className="border-b border-[#c6c6c6] bg-transparent pb-[20px] pt-[28px] text-[24px] font-light leading-[35px] text-navy placeholder:text-[#c6c6c6] focus:border-navy focus:outline-none lg:pt-[40px]"
            />
          </div>

          <button
            type="submit"
            className="mt-14 w-full rounded-[50px] bg-white-off px-[40px] py-[20px] text-[20px] leading-none text-[#c6c6c6] transition-colors [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] hover:bg-navy hover:text-white-off lg:mt-[60px]"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
