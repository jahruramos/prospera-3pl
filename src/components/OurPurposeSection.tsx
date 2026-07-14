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

export default function OurPurposeSection() {
  return (
    <section className="w-full bg-navy py-20 text-white-off lg:py-[150px]">
      <div className="mx-auto grid max-w-[1256px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-[46px]">
        {/* left column */}
        <div>
          <p className="text-[14px] font-light uppercase tracking-[2px]">
            / Mission &amp; Values
          </p>
          <h2 className="mt-6 font-serif text-[40px] leading-[42px] tracking-[-1px] sm:text-[60px] sm:leading-[58px] sm:tracking-[-1.4px] lg:text-[90px] lg:leading-[85px] lg:tracking-[-1.8px]">
            Our Purpose
          </h2>
          <p className="mt-6 max-w-[620px] text-[18px] font-light leading-[26px] sm:text-[22px] sm:leading-[31px] lg:mt-8 lg:text-[26px] lg:leading-[35px]">
            Our purpose is to empower brands to focus on what they do
            best&mdash;innovation, creativity, and growth&mdash;while we manage
            the logistics behind the scenes. By combining expertise, technology,
            and a customer-first approach, we build trusted partnerships that
            support long-term success and enable our clients to scale with
            greater speed, flexibility, and peace of mind.
          </p>
        </div>

        {/* right column */}
        <div className="lg:ml-auto lg:w-[458px]">
          <div className="relative aspect-[458/454] w-full lg:aspect-auto lg:h-[454px] lg:w-[458px]">
            <img
              src="/images/about-purpose.jpg"
              alt="Warehouse worker restocking a high shelf"
              className="h-full w-full rounded-[30px] object-cover"
            />
            <Badge
              icon="/images/icon-support.svg"
              label="Dedicated Support"
              className="left-4 top-4 lg:left-[-140px] lg:top-[101px]"
            />
            <Badge
              icon="/images/icon-scalable.svg"
              label="Scalable Solutions"
              className="bottom-4 right-4 lg:bottom-auto lg:right-auto lg:left-[269px] lg:top-[332px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
