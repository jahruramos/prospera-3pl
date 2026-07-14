type Item = {
  name: string;
  desc: string;
  price: string;
};

type Category = {
  emoji: string;
  label: string;
  items: Item[];
};

const CATEGORIES: Category[] = [
  {
    emoji: "📦",
    label: "FBA Prep · Amazon SPN-Certified",
    items: [
      { name: "FNSKU Labeling", desc: "Per unit, all volumes", price: "$0.55/unit" },
      { name: "Amazon Shipment Plan Creation", desc: "Per shipment plan", price: "$8.00/plan" },
    ],
  },
  {
    emoji: "🛒",
    label: "Fulfillment · Shopify / DTC orders",
    items: [
      { name: "Pick & Pack — Small", desc: "Order ≤ 1.5 lb · pick, pack, label, ship", price: "$3.00/order" },
      { name: "Pick & Pack — Standard", desc: "Order 1.5–3 lb · pick, pack, label, ship", price: "$4.00/order" },
      { name: "Pick & Pack — Oversized", desc: "Order > 3 lb · pick, pack, label, ship", price: "$5.00/order" },
      { name: "Additional Item per Order", desc: "Each item beyond the first", price: "$0.50/item" },
      { name: "Inbound Receiving", desc: "Per carton with inspection", price: "$2.50/carton" },
    ],
  },
  {
    emoji: "🌎",
    label: "LATAM · Cross-Docking & Drop-Shipment",
    items: [
      { name: "Drop-Shipment Service", desc: "Per package shipped · flat rate", price: "$6.00/package" },
      { name: "LTL Pallet Export Prep", desc: "Per pallet to LATAM destination", price: "$25/pallet" },
      { name: "Container Unloading", desc: "FCL receiving · all-inclusive", price: "Contact for quote" },
    ],
  },
  {
    emoji: "🎁",
    label: "Value-added services",
    items: [
      { name: "Poly-Bagging", desc: "With suffocation warning", price: "$0.50/unit" },
      { name: "Kitting & Bundling", desc: "2-5 components per kit", price: "$0.75/unit" },
      { name: "Bubble Wrapping", desc: "Individual fragile-item protection", price: "$0.80/unit" },
      { name: "Sticker Removal / Relabeling", desc: "Cover prior barcode", price: "$0.25/unit" },
    ],
  },
  {
    emoji: "🏭",
    label: "Storage",
    items: [
      { name: "Storage · Palletized", desc: "First month FREE for new clients", price: "$45/pallet/month ($1.50/pallet/day)" },
      { name: "Outbound Carton Prep", desc: "Per outbound carton shipped", price: "$2.00/carton" },
    ],
  },
  {
    emoji: "🔧",
    label: "Specialty services",
    items: [
      { name: "Quality Control Inspection", desc: "Detailed batch inspection", price: "$45/hour" },
      { name: "Returns & RMA Processing", desc: "Condition report per unit", price: "$5.00/unit" },
    ],
  },
];

export default function PricingTable() {
  return (
    <section className="w-full bg-white pb-20 pt-0 text-navy lg:pb-[150px]">
      <div className="mx-auto flex max-w-[1256px] flex-col gap-8 px-5 sm:px-8 lg:gap-10">
        {CATEGORIES.map((category) => (
          <div
            key={category.label}
            className="divide-y divide-[#c6c6c6] border border-[#c6c6c6]"
          >
            <div className="bg-navy/10 px-6 py-[35px] text-[20px] font-semibold sm:px-10 lg:px-[75px]">
              {category.emoji} {category.label}
            </div>
            {category.items.map((item) => (
              <div
                key={item.name}
                className="grid grid-cols-1 gap-2 px-6 py-8 text-[18px] font-light sm:px-10 sm:text-[20px] lg:grid-cols-[minmax(200px,1fr)_minmax(200px,1.3fr)_auto] lg:items-center lg:gap-6 lg:px-[80px] lg:py-10"
              >
                <p>{item.name}</p>
                <p>{item.desc}</p>
                <p className="font-semibold lg:text-right">{item.price}</p>
              </div>
            ))}
          </div>
        ))}

        <div className="bg-navy px-6 py-8 text-[16px] text-white-off sm:px-10 lg:px-[80px]">
          <span className="font-semibold">
            💡 Volume discounts negotiated per contract.{" "}
          </span>
          Monthly invoice net-30 payment terms available for established
          clients · No setup fees, no monthly retainers.
        </div>
      </div>
    </section>
  );
}
