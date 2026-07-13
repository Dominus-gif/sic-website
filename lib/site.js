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
  { label: "Blog", href: "/blog" },
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
      "Industrial gearboxes & geared motors",
      "Fluid & flexible couplings",
      "Material handling equipment (MHE)",
      "OEM-backed spares & lifecycle support",
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
      "Crushing & screening support",
      "Bulk material handling systems",
      "Heavy-duty conveying components",
      "On-site commissioning & audits",
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
      "Hydraulic power packs",
      "Cylinders & actuators",
      "Valves & manifold blocks",
      "System design & retrofits",
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
      "Variable frequency drives (VFD)",
      "Soft starters & motor control",
      "Energy-efficiency upgrades",
      "Drive integration & tuning",
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
      "Belt cleaners & scrapers",
      "Skirting & sealing systems",
      "Impact beds & idlers",
      "Dust & spillage containment",
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
      "Wear-resistant liner plates",
      "Hardfacing & overlay solutions",
      "Chute & hopper protection",
      "Relining & maintenance support",
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
      "Process instrumentation",
      "PLC & automation systems",
      "Field sensors & transmitters",
      "SCADA & monitoring integration",
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
      "Pneumatic valves & actuators",
      "FRL units & air preparation",
      "Cylinders & fittings",
      "Circuit design support",
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
      "Belt weighers & load cells",
      "Batching & dosing systems",
      "Calibration & verification",
      "Data logging & reporting",
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

export const posts = [
  {
    slug: "reducing-conveyor-spillage",
    title: "Cutting Conveyor Spillage: A Practical Playbook for Bulk Plants",
    date: "2026-06-18",
    category: "Bulk Handling",
    excerpt:
      "Spillage quietly erodes throughput and safety. Here is how modern belt cleaning, sealing, and impact systems recover lost tonnes.",
    readTime: "6 min read",
  },
  {
    slug: "wear-protection-total-cost",
    title: "Wear Protection and the Hidden Math of Total Cost of Ownership",
    date: "2026-05-27",
    category: "Wear Protection",
    excerpt:
      "Cheaper liners can cost more. We break down how hardfacing and premium overlays change the maintenance economics.",
    readTime: "5 min read",
  },
  {
    slug: "vfd-energy-savings",
    title: "Where Variable Speed Drives Pay Back Fastest in Heavy Industry",
    date: "2026-04-15",
    category: "Drives & Energy",
    excerpt:
      "Fans, pumps, and conveyors are prime candidates. A field guide to identifying your highest-return VFD retrofits.",
    readTime: "7 min read",
  },
  {
    slug: "plant-audit-checklist",
    title: "The Plant Reliability Audit Checklist We Use On Site",
    date: "2026-03-09",
    category: "Reliability",
    excerpt:
      "From coupling alignment to instrumentation health, the systematic walk-through that surfaces downtime risks early.",
    readTime: "8 min read",
  },
];
