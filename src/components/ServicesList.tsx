type Service = {
  title: string;
  body: string;
  image: string;
  alt: string;
};

const SERVICES: Service[] = [
  {
    title: "Warehousing & Inventory Management",
    body: "Secure storage solutions with organized inventory control, real-time visibility, and scalable capacity to support brands at every stage of growth.",
    image: "/images/service-warehousing.jpg",
    alt: "Warehouse aisle stocked with palletized inventory",
  },
  {
    title: "E-Commerce Fulfillment",
    body: "Accurate pick, pack, and ship services designed to deliver a seamless customer experience while supporting the demands of growing online businesses.",
    image: "/images/service-ecommerce.jpg",
    alt: "Worker packing an e-commerce order box",
  },
  {
    title: "Wholesale & Retail Distribution",
    body: "Preparation and fulfillment of wholesale orders, including retailer-compliant packaging, labeling, and routing requirements.",
    image: "/images/service-wholesale.jpg",
    alt: "Boxes staged for wholesale distribution",
  },
  {
    title: "Receiving & Inventory Processing",
    body: "Efficient inbound handling, inspection, SKU verification, inventory intake, and organization to ensure products are accurately received and ready for distribution.",
    image: "/images/service-receiving.jpg",
    alt: "Team receiving and inspecting inbound inventory",
  },
  {
    title: "Pick & Pack Services",
    body: "Customized order fulfillment solutions tailored to your brand's requirements, including kitting, bundling, promotional packaging, and special handling requests.",
    image: "/images/service-pickpack.jpg",
    alt: "Hands taping a fulfillment box for shipment",
  },
  {
    title: "Returns Management",
    body: "Streamlined returns processing, product inspection, inventory reconciliation, and restocking services to maximize efficiency and recover value.",
    image: "/images/service-returns.jpg",
    alt: "Worker processing a returned order on a laptop",
  },
  {
    title: "Freight Coordination",
    body: "Support for domestic and international transportation, helping clients manage shipments efficiently from origin to final destination.",
    image: "/images/service-freight.jpg",
    alt: "Shipping containers staged for freight transport",
  },
  {
    title: "Value-Added Services",
    body: "Additional operational support including relabeling, ticketing, poly bagging, folding, quality inspections, rework, and retail compliance preparation.",
    image: "/images/service-valueadded.jpg",
    alt: "Worker performing value-added packaging services",
  },
];

function ServiceCard({ title, body }: Pick<Service, "title" | "body">) {
  return (
    <div className="flex h-full flex-col justify-center gap-6 rounded-[30px] border border-[#c6c6c6] px-8 py-12 lg:px-[62px]">
      <h3 className="text-[28px] font-semibold leading-[32px] tracking-[-0.5px] sm:text-[36px] sm:leading-[40px] lg:text-[44px] lg:leading-[48.4px] lg:tracking-[-0.88px]">
        {title}
      </h3>
      <p className="text-[18px] font-light leading-[26px] sm:text-[22px] sm:leading-[31px] lg:text-[26px] lg:leading-[35px]">
        {body}
      </p>
    </div>
  );
}

export default function ServicesList() {
  return (
    <section className="w-full bg-white py-20 text-navy lg:py-[150px]">
      <div className="mx-auto flex max-w-[1256px] flex-col gap-8 px-5 sm:px-8 lg:gap-10">
        {SERVICES.map((service, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <div
              key={service.title}
              className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10"
            >
              <div
                className={`relative aspect-[700/397] w-full overflow-hidden rounded-[30px] bg-[#d9d9d9] lg:aspect-auto lg:h-[397px] ${
                  imageLeft ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
                <ServiceCard title={service.title} body={service.body} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
