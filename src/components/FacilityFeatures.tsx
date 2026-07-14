import FacilityCarousel from "./FacilityCarousel";

const FACILITY_PHOTOS = [
  "/images/facility-aerial-1.jpg",
  "/images/facility-aerial-2.jpg",
  "/images/facility-aerial-3.jpg",
  "/images/facility-aerial-4.jpg",
  "/images/facility-aerial-5.jpg",
];

type Feature = {
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    title: "Warehouse Location",
    body: "Strategically located in Miami, Florida, our facility offers convenient access to major transportation hubs, including I-95, the Port of Miami, and Miami International Airport. This prime location enables efficient domestic distribution, international logistics, and seamless connectivity to key U.S. and global markets.",
  },
  {
    title: "Storage Capacity",
    body: "Our 30,000-square-foot facility is designed to support the evolving needs of apparel and lifestyle brands. With scalable storage solutions, organized inventory management, and flexible space allocation, we provide the capacity needed to support growth, seasonal demand, and changing inventory levels.",
  },
  {
    title: "Security",
    body: "Protecting our clients' inventory is a top priority. Our facility utilizes controlled access protocols, monitored operations, and established security procedures to ensure products remain safe, secure, and accounted for throughout the fulfillment process.",
  },
  {
    title: "Receiving & Shipping Capabilities",
    body: "We provide end-to-end inbound and outbound logistics services, including receiving, inspection, inventory processing, fulfillment, and distribution. Our facility handles both carton and pallet shipments, ensuring accurate, efficient, and reliable delivery for direct-to-consumer, wholesale, and retail orders.",
  },
];

function FeatureCard({ title, body }: Feature) {
  return (
    <div className="flex h-full flex-col justify-center gap-6 rounded-[30px] border border-[#c6c6c6] px-8 py-12 lg:px-[75px]">
      <h2 className="text-[28px] font-semibold leading-[32px] tracking-[-0.5px] sm:text-[36px] sm:leading-[40px] lg:text-[44px] lg:leading-[48.4px] lg:tracking-[-0.88px]">
        {title}
      </h2>
      <p className="text-[16px] font-light leading-[26px] sm:text-[20px] sm:leading-[31px] lg:text-[24px] lg:leading-[35px]">
        {body}
      </p>
    </div>
  );
}

export default function FacilityFeatures() {
  return (
    <section className="w-full bg-white pb-20 pt-0 text-navy lg:pb-[150px]">
      <div className="mx-auto flex max-w-[1256px] flex-col gap-8 px-5 sm:px-8 lg:gap-10">
        {FEATURES.map((feature, i) => {
          const textLeft = i % 2 === 0;
          return (
            <div
              key={feature.title}
              className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:auto-rows-[512px] lg:gap-6"
            >
              <div className={`h-full ${textLeft ? "lg:order-1" : "lg:order-2"}`}>
                <FeatureCard title={feature.title} body={feature.body} />
              </div>
              <div
                className={`h-full w-full ${textLeft ? "lg:order-2" : "lg:order-1"}`}
              >
                <FacilityCarousel
                  images={FACILITY_PHOTOS}
                  alt={`Aerial view of the Prospera 3PL warehouse facility — ${feature.title}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
