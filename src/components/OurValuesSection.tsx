type Value = {
  icon: string;
  title: string;
  body: string;
};

const VALUES: Value[] = [
  {
    icon: "/images/value-customer.svg",
    title: "Customer Focus",
    body: "Our clients are at the heart of everything we do. We listen, anticipate needs, and deliver tailored solutions that help brands grow with confidence.",
  },
  {
    icon: "/images/value-reliability.svg",
    title: "Reliability",
    body: "We believe trust is built through consistency. By delivering on our commitments with accuracy and attention to detail, we provide dependable service our clients can count on.",
  },
  {
    icon: "/images/value-innovation.svg",
    title: "Innovation",
    body: "We continuously seek better ways to serve our clients. Through technology, process improvements, and forward thinking solutions, we drive greater visibility and performance across the supply chain.",
  },
  {
    icon: "/images/value-efficiency.svg",
    title: "Efficiency",
    body: "We are committed to simplifying complexity. By optimizing processes and eliminating unnecessary friction, we help our clients operate more effectively and focus on what matters most.",
  },
  {
    icon: "/images/value-accountability.svg",
    title: "Accountability",
    body: "We take ownership of our actions and results. We communicate transparently, act with integrity, and stand behind every commitment we make.",
  },
  {
    icon: "/images/value-partnership.svg",
    title: "Partnership",
    body: "We believe the best outcomes come from collaboration. By building strong, long-term relationships, we become a trusted extension of our clients' teams and contribute to their success.",
  },
];

export default function OurValuesSection() {
  return (
    <section className="w-full bg-white py-20 text-navy lg:py-[150px]">
      <div className="mx-auto max-w-[1256px] px-5 sm:px-8">
        {/* header */}
        <p className="text-center text-[14px] font-light uppercase tracking-[2px]">
          / Our Values
        </p>
        <h2 className="mt-4 text-center font-serif text-[40px] leading-[42px] tracking-[-1px] sm:text-[60px] sm:leading-[58px] sm:tracking-[-1.4px] lg:text-[90px] lg:leading-[85px] lg:tracking-[-1.8px]">
          Our Core Values
        </h2>

        {/* cards — horizontal scroll below lg, 3-col grid on desktop */}
        <div className="-mx-5 mt-14 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 lg:mx-0 lg:mt-[70px] lg:grid lg:grid-cols-3 lg:items-stretch lg:gap-[14px] lg:overflow-visible lg:px-0 lg:pb-0">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="flex w-[300px] shrink-0 snap-center flex-col rounded-[25px] border border-[#c6c6c6] p-8 sm:w-[340px] lg:h-[306px] lg:w-auto lg:shrink lg:snap-align-none lg:p-10"
            >
              <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[9px] bg-white-off">
                <img src={v.icon} alt="" className="h-[30px] w-[30px]" />
              </div>
              <h3 className="mt-6 text-[24px] font-semibold leading-[1.1] lg:text-[28px]">
                {v.title}
              </h3>
              <p className="mt-3 text-[16px] font-light leading-[22.4px]">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
