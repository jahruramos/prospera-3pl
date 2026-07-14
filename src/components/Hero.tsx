export default function Hero() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-navy sm:h-[760px] lg:h-[968px]">
      {/* background photo */}
      <img
        src="/images/hero-warehouse.jpg"
        alt="Warehouse racking filled with palletized goods"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(64deg, rgba(0,0,0,0.4) 31.137%, rgba(0,0,0,0) 69.658%)",
        }}
      />

      {/* content */}
      <div className="relative mx-auto flex h-full max-w-[1256px] flex-col justify-center px-5 text-white-off sm:px-8">
        <h1 className="max-w-[742px] font-serif text-[40px] leading-[42px] tracking-[-1px] sm:text-[60px] sm:leading-[58px] sm:tracking-[-1.4px] lg:text-[90px] lg:leading-[85px] lg:tracking-[-1.8px]">
          The Logistics Partner Behind Great Brands
        </h1>
        <p className="mt-5 max-w-[777px] text-[18px] font-light leading-[26px] sm:mt-7 sm:text-[22px] sm:leading-[31px] lg:mt-9 lg:text-[26px] lg:leading-[36.4px]">
          From inventory storage to last-mile fulfillment, we provide efficient
          logistics solutions that help brands grow with confidence.
        </p>
        <a
          href="/about"
          className="mt-7 w-fit rounded-full border border-white-off px-[30px] py-[15px] text-[18px] leading-none [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] transition-colors hover:bg-white-off hover:text-navy lg:mt-[46px]"
        >
          Learn more
        </a>
      </div>
    </section>
  );
}
