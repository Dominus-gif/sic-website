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
  {
    name: "MINING",
    text: "Rugged crushing, conveying and wear systems for extraction and transport.",
    sym: "terrain",
    img: "/photos/mining-bulldozer.jpg",
  },
  {
    name: "STEEL",
    text: "Precision drives and components engineered for high-heat environments.",
    sym: "local_fire_department",
    img: "/photos/heavy-industry.jpg",
  },
  {
    name: "CEMENT",
    text: "Wear protection and material handling for high-abrasion processes.",
    sym: "factory",
    img: "/photos/industrial-plant.jpg",
  },
  {
    name: "POWER",
    text: "Flow control, hydraulics and instrumentation for utilities.",
    sym: "bolt",
    img: "/photos/site-1.jpg",
  },
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
    sym: "verified",
    text: "Equipment and support you can depend on for mission-critical uptime.",
  },
  {
    title: "Integrity",
    sym: "balance",
    text: "Honest engineering advice and transparent long-term relationships.",
  },
  {
    title: "Customer Focus",
    sym: "support_agent",
    text: "Solutions shaped around your plant, process, and production goals.",
  },
  {
    title: "Safety",
    sym: "health_and_safety",
    text: "A safety-first mindset on every site, install, and audit we deliver.",
  },
  {
    title: "Innovation",
    sym: "lightbulb",
    text: "Modern technology that reduces downtime and total cost of ownership.",
  },
  {
    title: "Long-Term Partnerships",
    sym: "handshake",
    text: "Lifecycle support that grows with your operation over decades.",
  },
];

export const leadership = [
  { name: "Jagdish Shah", role: "Founder" },
  { name: "Jitesh Shah", role: "Founder" },
  { name: "Abhishek Shah", role: "Business Intelligence Developer" },
];

// Featured OEM partner — Elecon power-transmission range (9 product lines)
export const elecon = {
  name: "Elecon",
  logo: "/brand/elecon.png",
  focus: "Power Transmission Equipment",
  intro:
    "As an authorised channel for Elecon — India's largest gearbox manufacturer — SIC supplies the full range of Elecon power-transmission equipment, backed by genuine spares and on-site engineering support.",
  categories: [
    { name: "Helical & Bevel Helical Gearboxes", img: "/elecon/elecon-1.png" },
    { name: "Planetary Gearboxes", img: "/elecon/elecon-2.png" },
    { name: "Worm Gearboxes", img: "/elecon/elecon-3.png" },
    { name: "Couplings", img: "/elecon/elecon-4.png" },
    { name: "High Speed Gearboxes", img: "/elecon/elecon-5.png" },
    { name: "Wind Turbine Gearboxes", img: "/elecon/elecon-6.png" },
    { name: "Marine Gearboxes", img: "/elecon/elecon-7.png" },
    { name: "Loose Gearboxes", img: "/elecon/elecon-8.png" },
    { name: "Custom Built Gearboxes", img: "/elecon/elecon-9.png" },
  ],
};

// OEM partners represented by SIC (logo optional)
export const oemPartners = [
  {
    name: "Elecon",
    logo: "/brand/elecon.png",
    focus: "Power Transmission",
    desc: "India's largest gearbox manufacturer — helical, planetary, worm, marine and custom-built gearboxes plus couplings for every heavy-duty drive.",
  },
  {
    name: "FLSmidth",
    logo: "/brand/flsmidth.png",
    focus: "Mining & Cement",
    desc: "Global leader in crushing, screening and process technology for mining and cement plants.",
  },
  {
    name: "Emerson",
    logo: "/brand/emerson.png",
    focus: "Automation",
    desc: "World-class process instrumentation, control valves and automation systems for reliable plant control.",
  },
  {
    name: "KSB MIL",
    logo: null,
    focus: "Flow Control",
    desc: "Industrial pumps and valves engineered for demanding fluid-handling and flow-control duties.",
  },
  {
    name: "Vautid Germany",
    logo: null,
    focus: "Wear Protection",
    desc: "German-engineered hardfacing plates and wear-resistant liners that extend the life of high-wear assets.",
  },
  {
    name: "Rolkobo",
    logo: "/brand/rolkobo.png",
    focus: "Conveyor Components",
    desc: "Precision idlers, pulleys and conveyor components built for continuous bulk-handling operation.",
  },
];
