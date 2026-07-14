type Feature = {
  title: string;
  body: string;
  image: string;
  alt: string;
};

const FEATURES: Feature[] = [
  {
    title: "Warehouse Management System (WMS)",
    body: "Our Warehouse Management System helps optimize inventory control, streamline warehouse operations, and improve accuracy across receiving, storage, and fulfillment processes.",
    image: "/images/tech-wms.jpg",
    alt: "Warehouse racking aisle viewed from above",
  },
  {
    title: "Real-Time Inventory Visibility",
    body: "Access up-to-date inventory information and maintain complete visibility into stock levels, product movement, and operational performance.",
    image: "/images/tech-realtime-inventory.jpg",
    alt: "Hand holding a tablet with inventory boxes nearby",
  },
  {
    title: "E-Commerce Integrations",
    body: "Seamlessly connect with leading e-commerce platforms and sales channels to automate order flow and simplify fulfillment operations.",
    image: "/images/tech-ecommerce-integrations.jpg",
    alt: "Hand holding a phone displaying e-commerce app icons",
  },
  {
    title: "Order Tracking & Reporting",
    body: "Monitor order status, fulfillment activity, and key performance metrics through comprehensive reporting and real-time tracking capabilities.",
    image: "/images/tech-order-tracking.jpg",
    alt: "Laptop displaying an order tracking dashboard",
  },
];

function FeatureCard({ title, body, image, alt }: Feature) {
  return (
    <div className="relative aspect-[698/520] w-full overflow-hidden rounded-[30px] bg-navy">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-20% to-[#1d1d1b] backdrop-blur-[2px]" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-8 text-white-off lg:p-10">
        <h3 className="text-[20px] font-semibold leading-[24px] lg:text-[28px] lg:leading-[33px]">
          {title}
        </h3>
        <p className="max-w-[520px] text-[16px] font-light leading-[20px] lg:text-[20px] lg:leading-[24.75px]">
          {body}
        </p>
      </div>
    </div>
  );
}

export default function TechnologyFeatures() {
  return (
    <section className="w-full bg-white pb-20 pt-0 text-navy lg:pb-[150px]">
      <div className="mx-auto grid max-w-[1256px] grid-cols-1 gap-6 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
