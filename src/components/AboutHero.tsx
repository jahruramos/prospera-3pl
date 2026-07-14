export default function AboutHero() {
  return (
    <section className="w-full bg-white py-20 text-navy lg:py-[120px]">
      <div className="mx-auto grid max-w-[1256px] grid-cols-1 items-start gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-x-[46px] lg:gap-y-[100px]">
        {/* row 1 — left: intro text */}
        <div>
          <p className="text-[14px] font-light uppercase tracking-[2px]">
            / Our History
          </p>
          <h1 className="mt-5 font-serif text-[40px] leading-[42px] tracking-[-1px] sm:text-[60px] sm:leading-[58px] sm:tracking-[-1.4px] lg:text-[90px] lg:leading-[85px] lg:tracking-[-1.8px]">
            About Us
          </h1>
          <p className="mt-6 max-w-[622px] text-[16px] font-light leading-[28px] lg:mt-8 lg:text-[20px] lg:leading-[35px]">
            Prospera 3PL is a Miami-based logistics and fulfillment partner
            built specifically for apparel and lifestyle brands. Founded by
            industry professionals with decades of experience in garment
            manufacturing, sourcing, and supply chain management, we understand
            the complexities behind bringing products to market.
          </p>
        </div>

        {/* row 1 — right: worker image */}
        <img
          src="/images/about-hero-1.jpg"
          alt="Worker moving a pallet jack through the warehouse"
          className="aspect-[580/420] w-full rounded-[30px] object-cover lg:h-[420px]"
        />

        {/* row 2 — left: aisle image */}
        <img
          src="/images/about-hero-2.jpg"
          alt="Warehouse aisle lined with racking"
          className="aspect-[580/420] w-full rounded-[30px] object-cover lg:h-[420px]"
        />

        {/* row 2 — right: closing text */}
        <div className="max-w-[621px] text-[16px] font-light leading-[28px] lg:text-[20px] lg:leading-[35px]">
          <p>
            Our team combines operational excellence with a hands on approach,
            providing warehousing, fulfillment, distribution, and transportation
            solutions tailored to the unique needs of growing brands. From
            inbound inventory to final delivery, we help our clients simplify
            logistics, improve efficiency, and scale with confidence.
          </p>
          <p className="mt-6">
            At Prospera 3PL, we don&rsquo;t just move products&mdash;we help
            brands build stronger supply chains.
          </p>
        </div>
      </div>
    </section>
  );
}
