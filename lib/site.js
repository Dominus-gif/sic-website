// Central content source for the site so all pages stay consistent.

export const company = {
  name: "Shah Industrial Corporation",
  short: "SIC",
  tagline: "We Build, You Thrive",
  motto: "Building Your Visions, Creating Reality",
  foundedNote: "Three decades of engineering excellence",
  address:
    "Shop No. 11, Ground Floor, Arihant Complex, Station Road, Raipur (C.G.) 492001",
  phones: ["+91-9301131247", "+91-9425204567", "+91-9425204687"],
  email: "shahfirst31@gmail.com",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Product & Services", href: "/products" },
  { label: "Contact Us", href: "/contact" },
];

export const stats = [
  { value: "30+", label: "Years of expertise" },
  { value: "500+", label: "Plant installations" },
  { value: "9", label: "Solution verticals" },
  { value: "Pan-India", label: "Service footprint" },
];

export const industries = [
  { name: "MINING", text: "Rugged solutions for extraction and transport." },
  { name: "STEEL", text: "Precision components for high-heat environments." },
  { name: "CEMENT", text: "Wear protection for high-abrasion processes." },
  { name: "POWER", text: "Flow control and material handling for utilities." },
];

export const partners = [
  "Elecon Group",
  "FLSmidth",
  "Emerson",
  "KSB MIL",
  "Vautid Germany",
];

// Industry leaders SIC has served / partnered with (trust strip)
export const clients = ["JINDAL", "ELECON", "JSPL", "ULTRATECH", "SAIL"];

// Real partner / OEM logos (sourced from the company site)
export const partnerLogos = [
  { name: "Elecon", src: "/brand/elecon.png" },
  { name: "Emerson", src: "/brand/emerson.png" },
  { name: "FLSmidth", src: "/brand/flsmidth.png" },
  { name: "Rolkobo", src: "/brand/rolkobo.png" },
  { name: "Prayas", src: "/brand/prayas.png" },
  { name: "SIC Partner", src: "/brand/partner-logo.png" },
];

export const services = [
  {
    slug: "power-transmission",
    title: "Power Transmission & MHE Solutions",
    short: "Transmission & MHE",
    sym: "precision_manufacturing",
    label: "POWER SYSTEMS",
    summary:
      "High-torque bulk material handling systems and drives engineered for continuous heavy-duty plant operation.",
    points: [
      { text: "Industrial gearboxes & geared motors", sym: "settings" },
      { text: "Fluid & flexible couplings", sym: "link" },
      { text: "Material handling equipment (MHE)", sym: "widgets" },
      { text: "OEM-backed spares & lifecycle support", sym: "inventory_2" },
    ],
  },
  {
    slug: "mining",
    title: "Mining Solutions",
    short: "Mining",
    sym: "settings_suggest",
    label: "EXTRACTION",
    summary:
      "End-to-end crushing and screening solutions with wear systems built for rugged, high-load environments.",
    points: [
      { text: "Crushing & screening support", sym: "grain" },
      { text: "Bulk material handling systems", sym: "widgets" },
      { text: "Heavy-duty conveying components", sym: "route" },
      { text: "On-site commissioning & audits", sym: "engineering" },
    ],
  },
  {
    slug: "hydraulics",
    title: "Hydraulics Solutions",
    short: "Hydraulics",
    sym: "water_drop",
    label: "FLUID POWER",
    summary:
      "Precision fluid power systems — power packs, cylinders, and control circuits for heavy machinery and manufacturing.",
    points: [
      { text: "Hydraulic power packs", sym: "bolt" },
      { text: "Cylinders & actuators", sym: "compress" },
      { text: "Valves & manifold blocks", sym: "tune" },
      { text: "System design & retrofits", sym: "design_services" },
    ],
  },
  {
    slug: "drive",
    title: "Drive Solutions",
    short: "Drive",
    sym: "speed",
    label: "EFFICIENCY",
    summary:
      "Optimized motor and gearbox configurations with variable speed drives for maximum efficiency and energy savings.",
    points: [
      { text: "Variable frequency drives (VFD)", sym: "speed" },
      { text: "Soft starters & motor control", sym: "bolt" },
      { text: "Energy-efficiency upgrades", sym: "eco" },
      { text: "Drive integration & tuning", sym: "tune" },
    ],
  },
  {
    slug: "conveyor-spillage",
    title: "Conveyor Spillage Control Solutions",
    short: "Conveyor Control",
    sym: "cleaning_services",
    label: "CONTAINMENT",
    summary:
      "Innovative spillage control and belt cleaning technology that eliminates losses and protects throughput.",
    points: [
      { text: "Belt cleaners & scrapers", sym: "cleaning_services" },
      { text: "Skirting & sealing systems", sym: "shield" },
      { text: "Impact beds & idlers", sym: "layers" },
      { text: "Dust & spillage containment", sym: "air" },
    ],
  },
  {
    slug: "wear-protection",
    title: "Wear Protection Solutions",
    short: "Wear Protection",
    sym: "shield",
    label: "DURABILITY",
    summary:
      "Hardfacing plates and liners from Vautid Germany that extend the life of high-wear assets.",
    points: [
      { text: "Wear-resistant liner plates", sym: "layers" },
      { text: "Hardfacing & overlay solutions", sym: "grid_view" },
      { text: "Chute & hopper protection", sym: "shield" },
      { text: "Relining & maintenance support", sym: "build" },
    ],
  },
  {
    slug: "instrumentation",
    title: "Instrumentation & Automation Solutions",
    short: "Instrumentation",
    sym: "sensors",
    label: "CONTROL",
    summary:
      "Sensing, measurement, and automation from Emerson-class partners for reliable process control.",
    points: [
      { text: "Process instrumentation", sym: "sensors" },
      { text: "PLC & automation systems", sym: "memory" },
      { text: "Field sensors & transmitters", sym: "settings_remote" },
      { text: "SCADA & monitoring integration", sym: "monitoring" },
    ],
  },
  {
    slug: "pneumatic",
    title: "Pneumatic Control Solutions",
    short: "Pneumatic Control",
    sym: "air",
    label: "ACTUATION",
    summary:
      "Pneumatic actuation and control components for clean, responsive plant automation.",
    points: [
      { text: "Pneumatic valves & actuators", sym: "air" },
      { text: "FRL units & air preparation", sym: "filter_alt" },
      { text: "Cylinders & fittings", sym: "compress" },
      { text: "Circuit design support", sym: "schema" },
    ],
  },
  {
    slug: "weighing",
    title: "Weighing Solutions",
    short: "Weighing",
    sym: "scale",
    label: "MEASUREMENT",
    summary:
      "Belt weighers and load systems delivering accurate, audit-ready material measurement.",
    points: [
      { text: "Belt weighers & load cells", sym: "scale" },
      { text: "Batching & dosing systems", sym: "balance" },
      { text: "Calibration & verification", sym: "verified" },
      { text: "Data logging & reporting", sym: "monitoring" },
    ],
  },
];

export const values = [
  {
    title: "Reliability",
    text: "Equipment and support you can depend on for mission-critical uptime.",
  },
  {
    title: "Integrity",
    text: "Honest engineering advice and transparent long-term relationships.",
  },
  {
    title: "Customer Focus",
    text: "Solutions shaped around your plant, process, and production goals.",
  },
  {
    title: "Safety",
    text: "A safety-first mindset on every site, install, and audit we deliver.",
  },
  {
    title: "Innovation",
    text: "Modern technology that reduces downtime and total cost of ownership.",
  },
  {
    title: "Long-Term Partnerships",
    text: "Lifecycle support that grows with your operation over decades.",
  },
];

export const leadership = [
  { name: "Jagdish Shah", role: "Founder" },
  { name: "Jitesh Shah", role: "Founder" },
  { name: "Abhishek Shah", role: "Business Intelligence Developer" },
];
