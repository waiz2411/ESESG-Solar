export interface CompanyInfo {
  name: string;
  fullName: string;
  tagline: string;
  address: string;
  suburb: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappRaw: string;
  email: string;
  rating: number;
  reviewsCount: number;
  placeId: string;
  googleMapsUrl: string;
  serviceAreas: string[];
}

export const COMPANY_INFO: CompanyInfo = {
  name: "ESESG",
  fullName: "Electrical & Solar Energy Solutions Group",
  tagline: "Intelligent Solar Architecture & Grid Independence",
  address: "55A Old Main Rd",
  suburb: "Gillitts",
  city: "Hillcrest",
  province: "KwaZulu-Natal",
  postalCode: "3610",
  country: "South Africa",
  phoneDisplay: "+27 67 984 5835",
  phoneRaw: "+27679845835",
  whatsappRaw: "27679845835",
  email: "info@esesg-energy.co.za",
  rating: 4.2,
  reviewsCount: 12,
  placeId: "ChIJZ1O6AHn79h4RBk5uajzLpDU",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=ESESG&query_place_id=ChIJZ1O6AHn79h4RBk5uajzLpDU",
  serviceAreas: [
    "Gillitts",
    "Hillcrest",
    "Kloof",
    "Winston Park",
    "Botha's Hill",
    "Waterfall",
    "Assagay",
    "Pinetown",
    "Westville",
    "Greater Durban Metro"
  ]
};

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  icon: string;
  popular?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "residential-hybrid",
    title: "Residential Hybrid Solar PV",
    subtitle: "Complete Grid Independence for Upper Highway Homes",
    description: "Engineered specifically for South African residential estates and free-standing homes. Combines Tier-1 Monocrystalline N-Type panels with Sunsynk or Deye smart hybrid inverters to eliminate Eskom reliance and slash municipal bills by up to 90%.",
    features: [
      "Tier-1 N-Type TOPCon bifacial & monofacial panels",
      "Sunsynk & Deye hybrid inverters with smartphone telemetry",
      "Sub-20ms uninterruptible switchover during outages",
      "SANS 10142-1 Electrical Certificate of Compliance (COC) included",
      "Full municipal SSEG grid registration handling"
    ],
    specs: [
      { label: "Efficiency", value: "Up to 97.6%" },
      { label: "Switchover", value: "< 20ms (Zero flicker)" },
      { label: "Warranty", value: "10-25 Years" }
    ],
    icon: "Sun",
    popular: true
  },
  {
    id: "battery-storage",
    title: "LiFePO4 Lithium Storage Walls",
    subtitle: "Stage 8 Load-Shedding Resilience",
    description: "Ultra-safe Lithium Iron Phosphate (LiFePO4) energy storage modules designed for 6,000+ deep cycles. Power high-draw appliances including air conditioning, geysers, refrigeration, and security systems continuously throughout extended grid blackouts.",
    features: [
      "Tier-1 brand cells (Freedom Won, Dyness, Hubble, Sunsynk)",
      "High thermal stability & built-in aerosol fire suppression",
      "Modular expandability from 5.12kWh up to 100kWh+",
      "Intelligent battery management system (BMS) with CAN bus integration",
      "10-Year manufacturer performance warranty"
    ],
    specs: [
      { label: "Depth of Discharge", value: "Up to 95%" },
      { label: "Cycle Life", value: "6,000+ Cycles" },
      { label: "Chemistry", value: "LiFePO4 Non-toxic" }
    ],
    icon: "BatteryCharging",
    popular: true
  },
  {
    id: "commercial-industrial",
    title: "Commercial & Industrial Microgrids",
    subtitle: "3-Phase Power Protection for Businesses & Warehouses",
    description: "Heavy-duty commercial 3-phase solar installations engineered for factories, retail centers, office parks, and multi-tenant complexes in KZN. Safeguard manufacturing lines and mission-critical IT infrastructure from disruptive brownouts.",
    features: [
      "3-Phase hybrid and grid-tied systems from 25kW to 250kW+",
      "Peak-shaving and maximum demand charge mitigation",
      "Generator integration & smart ATS automatic changeover",
      "Remote SCADA cloud monitoring and energy yield analytics",
      "Accelerated Section 12B SARS corporate tax incentives"
    ],
    specs: [
      { label: "System Sizes", value: "25kW - 500kW+" },
      { label: "Payback Period", value: "2.8 - 4.2 Years" },
      { label: "Tax Benefit", value: "SARS Section 12B" }
    ],
    icon: "Building2"
  },
  {
    id: "electrical-coc",
    title: "SANS 10142-1 Electrical Compliance & COC",
    subtitle: "Certified Master Electrician Sign-Off",
    description: "Ensure your property remains 100% legally compliant and fully insured. We perform comprehensive distribution board audits, surge protection installation, earthing loop testing, and issue accredited South African Electrical Certificates of Compliance.",
    features: [
      "Official SANS 10142-1 Department of Labour accredited COCs",
      "Main Distribution Board (DB) rewiring and clean-ups",
      "Class I & II lightning surge protection arrestors",
      "Earth spike impedance and neutral-earth bonding tests",
      "Essential for Deeds Office property transfers & insurance claims"
    ],
    specs: [
      { label: "Accreditation", value: "Dept of Labour" },
      { label: "Standard", value: "SANS 10142-1" },
      { label: "Insurance", value: "Full Legal Underwrite" }
    ],
    icon: "ShieldCheck",
    popular: true
  },
  {
    id: "agricultural-borehole",
    title: "Agricultural Solar & Borehole Pumping",
    subtitle: "Reliable Water & Off-Grid Farm Infrastructure",
    description: "Dedicated solar borehole variable-speed pumping systems, cold-room backup, and electrified farm perimeter energy. Ensure zero water disruption for livestock and irrigation regardless of local substation failures.",
    features: [
      "Direct DC solar borehole pump drives (variable frequency)",
      "Automated reservoir float switch telemetry",
      "Security energizer and perimeter beam dedicated solar feeds",
      "Remote rural site installation across KwaZulu-Natal",
      "Heavy-duty galvanized ground-mount steel frames"
    ],
    specs: [
      { label: "Pump Depths", value: "Up to 300m+" },
      { label: "Flow Rates", value: "1,000L - 45,000L/hr" },
      { label: "Operation", value: "100% Off-Grid" }
    ],
    icon: "Trees"
  },
  {
    id: "maintenance-audits",
    title: "Thermal Diagnostics & PV Health Audits",
    subtitle: "Maximum kWh Harvest & Preventative Servicing",
    description: "State-of-the-art FLIR thermal imaging inspections to detect micro-cracks, hotspots, and degraded bypass diodes. Routine panel de-ionization cleaning, firmware updates, and string impedance optimization.",
    features: [
      "FLIR infrared thermal drone & handheld string scans",
      "Inverter firmware upgrades & BMS parameter tuning",
      "Specialist de-ionized water panel washing (no chemical residue)",
      "Comprehensive yield benchmark report against weather data",
      "Annual preventative service agreements"
    ],
    specs: [
      { label: "Inspection", value: "FLIR Thermal HD" },
      { label: "Yield Uplift", value: "+12% to +28%" },
      { label: "Frequency", value: "Bi-Annual / Annual" }
    ],
    icon: "Activity"
  }
];

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  system: string;
}

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Dr. Malcolm Henderson",
    location: "Plantations Estate, Hillcrest",
    rating: 5,
    date: "2 weeks ago",
    title: "Stage 6 was a non-event for our household",
    comment: "ESESG installed an 8kW Sunsynk system with 10kWh of lithium storage at our home in Gillitts/Hillcrest. When the severe storms and subsequent load-shedding hit KZN, our lights didn't even flicker. Flawless workmanship, neat conduit bends, and the COC was issued immediately.",
    system: "8kW Sunsynk + 10.24kWh LiFePO4"
  },
  {
    id: "rev-2",
    name: "Charmaine Van Der Merwe",
    location: "Gillitts, KZN",
    rating: 5,
    date: "1 month ago",
    title: "Top-tier advice and no pressure sales",
    comment: "Living right down Old Main Rd, I popped into their Gillitts offices to get advice. They designed a custom setup that fit our budget perfectly without trying to oversell. The smartphone app is addictive and our Eskom bill has dropped from R4,200 to under R600.",
    system: "5kW Hybrid + 5.12kWh Battery"
  },
  {
    id: "rev-3",
    name: "Rajesh Naidoo",
    location: "Kloof Country Club Area",
    rating: 5,
    date: "2 months ago",
    title: "Commercial warehouse backup that saved our cold chain",
    comment: "We run a distribution facility in Pinetown and were losing thousands every time the grid tripped. ESESG installed a 30kW 3-phase hybrid system with commercial lithium racks. Paid for itself within months in saved inventory. Absolute professionals.",
    system: "30kW 3-Phase Commercial Solar PV"
  },
  {
    id: "rev-4",
    name: "Gareth Botha",
    location: "Winston Park",
    rating: 4,
    date: "3 months ago",
    title: "Prompt response and genuine COC accreditation",
    comment: "Our insurance company required a full SANS 10142-1 re-certification before renewing our estate policy. The ESESG team came out, upgraded the surge arrestors, balanced our phases, and handed over the signed COC the next morning.",
    system: "Electrical DB Overhaul & SANS COC"
  }
];

export interface SolarPreset {
  id: string;
  name: string;
  recommendedFor: string;
  monthlyBillRange: string;
  solarKw: number;
  inverterKw: number;
  batteryKwh: number;
  panelCount: number;
  estimatedMonthlySavings: number;
  backupHours: string;
  highlight?: boolean;
}

export const SOLAR_PRESETS: SolarPreset[] = [
  {
    id: "bronze-backup",
    name: "Essential Load-Shedding Shield",
    recommendedFor: "Townhouses & Small Families",
    monthlyBillRange: "R1,500 - R3,200",
    solarKw: 3.3,
    inverterKw: 5.0,
    batteryKwh: 5.12,
    panelCount: 6,
    estimatedMonthlySavings: 1850,
    backupHours: "12-16 hrs (Stage 6 Proof)"
  },
  {
    id: "silver-hybrid",
    name: "Executive Hybrid Freedom",
    recommendedFor: "Medium to Large Family Homes",
    monthlyBillRange: "R3,500 - R6,500",
    solarKw: 5.5,
    inverterKw: 8.0,
    batteryKwh: 10.24,
    panelCount: 10,
    estimatedMonthlySavings: 4200,
    backupHours: "24+ hrs (Complete Resilience)",
    highlight: true
  },
  {
    id: "gold-offgrid",
    name: "Master Estate Autonomous 3-Phase",
    recommendedFor: "Luxury Estates & Heavy Consumers",
    monthlyBillRange: "R7,000 - R15,000+",
    solarKw: 11.0,
    inverterKw: 12.0,
    batteryKwh: 20.48,
    panelCount: 20,
    estimatedMonthlySavings: 8900,
    backupHours: "Indefinite Off-Grid Capability"
  }
];
