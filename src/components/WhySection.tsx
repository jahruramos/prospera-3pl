function Badge({
  icon,
  label,
  className = "",
}: {
  icon: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute flex h-[60px] items-center gap-[10px] rounded-[15px] bg-white-off px-[30px] ${className}`}
    >
      <img src={icon} alt="" className="h-6 w-6 shrink-0" />
      <span className="whitespace-nowrap text-[18px] tracking-[-0.6px] text-navy lg:text-[24px] lg:tracking-[-0.72px]">
        {label}
      </span>
    </div>
  );
}

export default function WhySection() {
  return (
    <section className="w-full bg-navy py-20 text-white-off lg:py-[150px]">
      <div className="mx-auto grid max-w-[1256px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-start lg:gap-[118px]">
        {/* left column */}
        <div>
          <p className="text-[14px] font-light uppercase tracking-[2px]">
            / Why Prospera 3PL?
          </p>
          <h2 className="mt-6 max-w-[618px] font-serif text-[40px] leading-[42px] tracking-[-1px] sm:text-[60px] sm:leading-[58px] sm:tracking-[-1.4px] lg:text-[90px] lg:leading-[85px] lg:tracking-[-1.8px]">
            Built for Your Growth
          </h2>
          <div className="mt-8 max-w-[618px] space-y-6 text-[16px] font-light leading-[28px] lg:mt-10 lg:text-[20px] lg:leading-[35px]">
            <p>
              At Prospera 3PL, we understand that logistics is more than moving
              inventory—it&rsquo;s a critical part of your brand&rsquo;s success.
              Built by professionals with deep roots in the apparel industry, we
              provide tailored logistics solutions designed to help brands operate
              efficiently, scale confidently, and deliver exceptional customer
              experiences.
            </p>
            <p>
              Unlike traditional fulfillment providers, we combine industry
              expertise, personalized service, and operational excellence to create
              a seamless extension of your business. From inventory management and
              order fulfillment to wholesale distribution and transportation
              coordination, our team is committed to delivering reliability,
              visibility, and peace of mind at every stage of the supply chain.
            </p>
            <p>
              When you partner with Prospera 3PL, you gain more than a warehouse—you
              gain a logistics partner invested in your growth.
            </p>
          </div>
        </div>

        {/* right column */}
        <div className="flex flex-col gap-[52px] lg:ml-auto lg:w-[520px]">
          <div className="relative aspect-[520/350] w-full lg:aspect-auto lg:h-[350px] lg:w-[520px]">
            <img
              src="/images/why-support.jpg"
              alt="Warehouse staff assisting on the floor"
              className="h-full w-full rounded-[30px] object-cover"
            />
            <Badge
              icon="/images/icon-support.svg"
              label="Dedicated Support"
              className="left-4 top-4 lg:left-[-90px] lg:top-[99px]"
            />
          </div>
          <div className="relative aspect-[520/460] w-full lg:aspect-auto lg:h-[460px] lg:w-[520px]">
            <img
              src="/images/why-scalable.jpg"
              alt="Long warehouse aisle lined with racking"
              className="h-full w-full rounded-[30px] object-cover"
            />
            <Badge
              icon="/images/icon-scalable.svg"
              label="Scalable Solutions"
              className="bottom-4 right-4 lg:bottom-auto lg:right-auto lg:left-[328px] lg:top-[275px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
