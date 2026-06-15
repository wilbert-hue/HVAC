/**
 * Customer Intelligence Database - Demo data
 * Europe Refrigerant-to-Liquid BPHE Market (HVAC Applications)
 */

export const MARKET_TITLE =
  'Europe Refrigerant-to-Liquid Brazed Plate Heat Exchanger Market (Focus on HVAC Applications Only) - Customer Database'

export const MARKET_SUBTITLE =
  'Verified directory and insight on customers (Heat Pump Manufacturers, Chiller Manufacturers, Commercial HVAC System Manufacturers, Data Center Cooling System Operators, Building Owners and Real Estate Developers, HVAC Contractors and System Integrators, etc.)'

export interface CustomerBase {
  sNo: number
  customerCompanyName: string
  businessOverview: string
  hvacCustomerEntityType: string
  bpheApplication: string
  annualRevenue: string
  sizeOperatingScale: string
  keyContactPerson: string
  designation: string
  emailAddress: string
  telephone: string
  linkedInProfile: string
  website: string
}

export interface CustomerProposition2 extends CustomerBase {
  bphePurchaseCriteria: string
  hvacSystemPainPoints: string
  refrigerantEfficiencyCompliance: string
  riskExposure: string
  buyingTriggers: string
}

export interface CustomerProposition3 extends CustomerProposition2 {
  budgetOwner: string
  procurementModel: string
  vendorSelectionCriteria: string
  preferredEngagementMode: string
  preferredDeploymentContract: string
  preferredSolutionType: string
  integrationTechnicalRequirement: string
  performanceExpectation: string
  benchmarkSummary: string
  additionalCmiNotes: string
}

const baseCustomers: CustomerBase[] = [
  {
    sNo: 1,
    customerCompanyName: 'Viessmann Climate Solutions - Allendorf',
    businessOverview: 'European heat pump OEM manufacturing air-to-water and ground-source units for residential and commercial buildings.',
    hvacCustomerEntityType: 'Heat Pump Manufacturer',
    bpheApplication: 'R290 propane BPHE evaporators and condensers for monobloc heat pump platforms',
    annualRevenue: '$4,800M (Group) / $12–18M component sourcing budget',
    sizeOperatingScale: '1.2M heat pumps/year capacity, 8 production lines',
    keyContactPerson: 'Thomas Müller',
    designation: 'Head of R&D - Heat Pump Systems',
    emailAddress: 't.mueller@viessmann.com',
    telephone: '+49 6452 70 0',
    linkedInProfile: 'linkedin.com/in/thomasmueller-viessmann',
    website: 'www.viessmann.com',
  },
  {
    sNo: 2,
    customerCompanyName: 'Carrier Commercial Refrigeration Europe',
    businessOverview: 'Manufacturer of air-cooled and water-cooled chillers for commercial buildings and industrial HVAC applications.',
    hvacCustomerEntityType: 'Chiller Manufacturer',
    bpheApplication: 'R454B low-GWP BPHE condensers and economizers for scroll chiller platforms',
    annualRevenue: '$20,000M (Group) / $25–40M chiller components spend',
    sizeOperatingScale: '45,000 chillers/year, 3 European assembly plants',
    keyContactPerson: 'Sophie Laurent',
    designation: 'Director of Product Engineering',
    emailAddress: 's.laurent@carrier.com',
    telephone: '+33 1 47 16 48 00',
    linkedInProfile: 'linkedin.com/in/sophielaurent-carrier',
    website: 'www.carrier.com',
  },
  {
    sNo: 3,
    customerCompanyName: 'Daikin Applied Europe - Ostend',
    businessOverview: 'Commercial HVAC systems including VRF, rooftops, and custom air handling solutions for European markets.',
    hvacCustomerEntityType: 'Commercial HVAC System Manufacturer',
    bpheApplication: 'Water-glycol BPHE heat recovery modules for VRF and AHU platforms',
    annualRevenue: '$28,000M (Group) / $15–22M BPHE sourcing',
    sizeOperatingScale: '6 product families, 2M HVAC units/year',
    keyContactPerson: 'Jan De Smet',
    designation: 'Senior Manager - Component Engineering',
    emailAddress: 'j.desmet@daikinapplied.com',
    telephone: '+32 59 55 84 11',
    linkedInProfile: 'linkedin.com/in/jandesmet-daikin',
    website: 'www.daikinapplied.com',
  },
  {
    sNo: 4,
    customerCompanyName: 'Equinix AM3 - Amsterdam Data Centre',
    businessOverview: 'Hyperscale colocation facility with liquid and air-cooled HVAC serving high-density server halls.',
    hvacCustomerEntityType: 'Data Center Cooling System Operator',
    bpheApplication: 'CO₂ BPHE gas coolers and water-side economizers for CRAH loops',
    annualRevenue: '$7,400M (Group) / $8–14M facility CAPEX per cycle',
    sizeOperatingScale: '18 MW IT load, 12 cooling plant modules',
    keyContactPerson: 'Mark van Dijk',
    designation: 'Director of Critical Facilities',
    emailAddress: 'm.vandijk@equinix.com',
    telephone: '+31 20 800 0800',
    linkedInProfile: 'linkedin.com/in/markvandijk-equinix',
    website: 'www.equinix.com',
  },
  {
    sNo: 5,
    customerCompanyName: 'GPE - The Shard, London',
    businessOverview: 'Mixed-use skyscraper portfolio owner managing district-scale HVAC retrofits and tenant comfort systems.',
    hvacCustomerEntityType: 'Building Owner and Real Estate Developer',
    bpheApplication: 'BPHE plate heat exchangers for district heating interface and tenant HVAC upgrades',
    annualRevenue: '$2,100M (Group) / $5–9M annual HVAC retrofit budget',
    sizeOperatingScale: '12 commercial towers, 1.8M sq ft managed',
    keyContactPerson: 'Emma Richardson',
    designation: 'Head of Building Engineering',
    emailAddress: 'e.richardson@gpe.co.uk',
    telephone: '+44 20 7398 9000',
    linkedInProfile: 'linkedin.com/in/emmarichardson-gpe',
    website: 'www.gpe.co.uk',
  },
  {
    sNo: 6,
    customerCompanyName: 'Grundfos Building Services - Bjerringbro',
    businessOverview: 'HVAC contractor and system integrator delivering turnkey hydronic and heat pump installations across Nordics.',
    hvacCustomerEntityType: 'HVAC Contractor and System Integrator',
    bpheApplication: 'BPHE hydraulic separators and heat exchangers for commercial heat pump projects',
    annualRevenue: '$4,500M (Group) / $3–6M annual BPHE procurement',
    sizeOperatingScale: '450+ commercial projects/year, 8 regional hubs',
    keyContactPerson: 'Lars Nielsen',
    designation: 'Technical Sales Director - HVAC',
    emailAddress: 'l.nielsen@grundfos.com',
    telephone: '+45 87 50 14 00',
    linkedInProfile: 'linkedin.com/in/larsnielsen-grundfos',
    website: 'www.grundfos.com',
  },
  {
    sNo: 7,
    customerCompanyName: 'NIBE Industrier AB - Markaryd',
    businessOverview: 'Swedish heat pump group producing ground-source and air-source units for European residential markets.',
    hvacCustomerEntityType: 'Heat Pump Manufacturer',
    bpheApplication: 'R32 and R290 BPHE evaporators for inverter-driven heat pump ranges',
    annualRevenue: '$3,200M (Group) / $10–15M heat exchanger spend',
    sizeOperatingScale: '900,000 heat pumps/year, 5 European factories',
    keyContactPerson: 'Anders Lindström',
    designation: 'VP Engineering & Product Development',
    emailAddress: 'a.lindstrom@nibe.com',
    telephone: '+46 433 73 000',
    linkedInProfile: 'linkedin.com/in/anderslindstrom-nibe',
    website: 'www.nibe.com',
  },
  {
    sNo: 8,
    customerCompanyName: 'Trane Technologies - Epinal Plant',
    businessOverview: 'Water-cooled chiller and heat recovery chiller manufacturing for commercial and district energy projects.',
    hvacCustomerEntityType: 'Chiller Manufacturer',
    bpheApplication: 'R513A and R1234ze BPHE condensers for magnetic bearing chiller lines',
    annualRevenue: '$17,000M (Group) / $18–30M component procurement',
    sizeOperatingScale: '22,000 chillers/year, 4 product platforms',
    keyContactPerson: 'Pierre Moreau',
    designation: 'Plant Engineering Manager',
    emailAddress: 'p.moreau@tranetechnologies.com',
    telephone: '+33 3 29 82 82 82',
    linkedInProfile: 'linkedin.com/in/pierremoreau-trane',
    website: 'www.tranetechnologies.com',
  },
  {
    sNo: 9,
    customerCompanyName: 'SPIE Building Solutions - Paris',
    businessOverview: 'Pan-European HVAC EPC and maintenance provider for offices, hospitals, and public buildings.',
    hvacCustomerEntityType: 'HVAC Contractor and System Integrator',
    bpheApplication: 'BPHE substations and heat recovery packages for building retrofit programmes',
    annualRevenue: '$9,800M (Group) / $6–10M annual HVAC equipment sourcing',
    sizeOperatingScale: '1,200+ active service contracts, 15 countries',
    keyContactPerson: 'Claire Dubois',
    designation: 'Director of Technical Procurement',
    emailAddress: 'c.dubois@spie.com',
    telephone: '+33 1 34 41 65 00',
    linkedInProfile: 'linkedin.com/in/clairedubois-spie',
    website: 'www.spie.com',
  },
]

const buyDrivers = [
  {
    bphePurchaseCriteria: 'F-Gas compliance, compact footprint, R290 safety certification',
    hvacSystemPainPoints: 'Shell-and-tube units too bulky for monobloc designs, long lead times',
    refrigerantEfficiencyCompliance: 'EU F-Gas Phase-down, EN 378 flammable refrigerant limits',
    riskExposure: 'Product launch delays costing €2M/month in lost revenue',
    buyingTriggers: 'New R290 platform launch Q2 2026, F-Gas retrofit mandate',
  },
  {
    bphePurchaseCriteria: 'Low-GWP refrigerant compatibility, COP improvement, PED certification',
    hvacSystemPainPoints: 'Aging R-410A chiller platforms, rising energy costs for customers',
    refrigerantEfficiencyCompliance: 'F-Gas Regulation, Ecodesign Lot 21, MEPS compliance',
    riskExposure: 'Market share loss to competitors with R454B-ready products',
    buyingTriggers: 'Next-gen scroll chiller platform, 2027 efficiency regulation',
  },
  {
    bphePurchaseCriteria: 'Heat recovery efficiency, multi-refrigerant capability, OEM integration support',
    hvacSystemPainPoints: 'Heat recovery performance below competitor benchmarks',
    refrigerantEfficiencyCompliance: 'R32/R454B transition, VRF efficiency labelling',
    riskExposure: 'Tender losses on commercial projects requiring heat recovery',
    buyingTriggers: 'VRF platform refresh, new AHU heat recovery module',
  },
  {
    bphePurchaseCriteria: 'High uptime, CO₂ system experience, remote monitoring integration',
    hvacSystemPainPoints: 'PUE targets not met with existing dry cooler efficiency',
    refrigerantEfficiencyCompliance: 'EU Code of Conduct for Data Centres, carbon reporting',
    riskExposure: 'SLA penalties for cooling failures, €500K/day downtime cost',
    buyingTriggers: 'Hall expansion Phase 3, liquid cooling hybrid upgrade',
  },
  {
    bphePurchaseCriteria: 'Retrofit compatibility, district heating interface, space constraints',
    hvacSystemPainPoints: 'Legacy HVAC systems failing efficiency audits',
    refrigerantEfficiencyCompliance: 'UK MEES regulations, EPC rating requirements',
    riskExposure: 'Tenant churn from poor HVAC performance, compliance fines',
    buyingTriggers: 'Portfolio-wide HVAC retrofit programme 2026–2028',
  },
  {
    bphePurchaseCriteria: 'Project delivery speed, technical support, competitive pricing',
    hvacSystemPainPoints: 'Inconsistent BPHE quality across suppliers, installation complexity',
    refrigerantEfficiencyCompliance: 'National building codes, heat pump subsidy schemes',
    riskExposure: 'Project margin erosion from equipment failures on site',
    buyingTriggers: 'Nordic heat pump rollout, framework agreement renewal',
  },
  {
    bphePurchaseCriteria: 'R290 certified components, inverter compatibility, Nordic climate rating',
    hvacSystemPainPoints: 'BPHE frosting in cold climates, defrost cycle losses',
    refrigerantEfficiencyCompliance: 'Swedish building code, F-Gas, ATEX requirements',
    riskExposure: 'Warranty claims from heat exchanger failures in cold markets',
    buyingTriggers: 'New inverter heat pump range, capacity expansion at Markaryd',
  },
  {
    bphePurchaseCriteria: 'Magnetic bearing compatibility, low charge, acoustic performance',
    hvacSystemPainPoints: 'Condenser fouling reducing chiller efficiency over time',
    refrigerantEfficiencyCompliance: 'HFO transition roadmap, Paris Agreement targets',
    riskExposure: 'Chiller efficiency warranty claims from end customers',
    buyingTriggers: 'Magnetic bearing chiller line upgrade, Epinal plant modernisation',
  },
  {
    bphePurchaseCriteria: 'Multi-project framework pricing, service network, fast delivery',
    hvacSystemPainPoints: 'Fragmented supplier base, inconsistent technical documentation',
    refrigerantEfficiencyCompliance: 'French RE2020 regulation, EU Taxonomy alignment',
    riskExposure: 'Contract penalties for late project handover',
    buyingTriggers: 'Public sector HVAC framework renewal, hospital retrofit pipeline',
  },
]

const procurementMetrics = [
  {
    budgetOwner: 'Head of R&D - Heat Pump Systems',
    procurementModel: 'OEM direct sourcing with approved vendor list',
    vendorSelectionCriteria: 'R290 certification, European manufacturing, engineering support',
    preferredEngagementMode: 'Joint development with engineering workshops',
    preferredDeploymentContract: 'Annual supply agreement with volume tiers',
    preferredSolutionType: 'Custom R290 BPHE platforms for monobloc units',
    integrationTechnicalRequirement: 'Compact design <200mm height, brazed copper connections',
    performanceExpectation: 'COP contribution ≥3% improvement vs. current design',
    benchmarkSummary: 'Tier 1 – Strategic OEM, high volume potential across 3 platforms',
    additionalCmiNotes: 'Evaluating SWEP and Alfa Laval; pilot unit decision Q1 2026',
  },
  {
    budgetOwner: 'Director of Product Engineering',
    procurementModel: 'Global category management with regional sourcing',
    vendorSelectionCriteria: 'Chiller industry references, R454B test data, global logistics',
    preferredEngagementMode: 'RFP with technical and commercial scoring',
    preferredDeploymentContract: 'Multi-year framework with price indexing',
    preferredSolutionType: 'Standardised condenser modules for scroll chiller range',
    integrationTechnicalRequirement: 'R454B compatibility, -15°C ambient rating',
    performanceExpectation: '5% COP improvement over R-410A baseline',
    benchmarkSummary: 'Tier 1 – Global chiller leader, replication across 3 plants',
    additionalCmiNotes: 'Carrier global standards approval required; 9-month qualification',
  },
  {
    budgetOwner: 'Senior Manager - Component Engineering',
    procurementModel: 'Regional procurement with Japan HQ technical approval',
    vendorSelectionCriteria: 'VRF/AHU experience, heat recovery performance data',
    preferredEngagementMode: 'Technical evaluation → pilot → fleet adoption',
    preferredDeploymentContract: 'Supply + validation testing + warranty',
    preferredSolutionType: 'Heat recovery BPHE modules for VRF outdoor units',
    integrationTechnicalRequirement: 'Integration with inverter compressor controls',
    performanceExpectation: 'Heat recovery efficiency ≥85% at part load',
    benchmarkSummary: 'Tier 1 – Major HVAC OEM, pan-European rollout potential',
    additionalCmiNotes: 'Ostend pilot tied to 2027 VRF platform launch',
  },
  {
    budgetOwner: 'Director of Critical Facilities',
    procurementModel: 'Project-based procurement via EPC partners',
    vendorSelectionCriteria: 'Data centre references, CO₂ experience, 24/7 support',
    preferredEngagementMode: 'EPC-led with Equinix technical sign-off',
    preferredDeploymentContract: 'Performance-guaranteed supply + commissioning',
    preferredSolutionType: 'CO₂ gas cooler and economizer assemblies',
    integrationTechnicalRequirement: 'BMS integration, redundancy N+1 design',
    performanceExpectation: 'PUE improvement target 1.25 → 1.18',
    benchmarkSummary: 'Tier 1 – Hyperscale operator, reference for EU portfolio',
    additionalCmiNotes: 'AM3 expansion linked to new AI workload cooling demand',
  },
  {
    budgetOwner: 'Head of Building Engineering',
    procurementModel: 'Portfolio framework with project-level awards',
    vendorSelectionCriteria: 'Retrofit experience, UK compliance, tenant minimal disruption',
    preferredEngagementMode: 'Framework tender with per-building call-offs',
    preferredDeploymentContract: 'Supply + installation supervision + warranty',
    preferredSolutionType: 'District heating interface BPHE substations',
    integrationTechnicalRequirement: 'Low-noise, compact for plant room retrofits',
    performanceExpectation: '20% HVAC energy reduction per building',
    benchmarkSummary: 'Tier 2 – Portfolio owner, steady retrofit pipeline 2026–2030',
    additionalCmiNotes: 'The Shard pilot success unlocks 11-building rollout',
  },
  {
    budgetOwner: 'Technical Sales Director - HVAC',
    procurementModel: 'Regional distributor agreements with project pricing',
    vendorSelectionCriteria: 'Nordic project references, stock availability, training support',
    preferredEngagementMode: 'Direct supplier relationship with quarterly reviews',
    preferredDeploymentContract: 'Annual framework with project-level pricing',
    preferredSolutionType: 'Standard catalog BPHE for heat pump installations',
    integrationTechnicalRequirement: 'Easy field installation, universal connection kits',
    performanceExpectation: 'Zero field failure rate, <48hr replacement SLA',
    benchmarkSummary: 'Tier 2 – High project volume, price-competitive market',
    additionalCmiNotes: 'Competitive bid every 18 months; Danfoss and Kaeser incumbents',
  },
  {
    budgetOwner: 'VP Engineering & Product Development',
    procurementModel: 'Centralised Nordic procurement with factory sign-off',
    vendorSelectionCriteria: 'Cold climate performance, R290 safety, Scandinavian delivery',
    preferredEngagementMode: 'Engineering partnership with joint testing',
    preferredDeploymentContract: 'Supply + cold climate validation + warranty',
    preferredSolutionType: 'R290 evaporator modules for inverter heat pumps',
    integrationTechnicalRequirement: '-25°C ambient operation, anti-freeze design',
    performanceExpectation: 'SCOP improvement ≥5% in Nordic climate zones',
    benchmarkSummary: 'Tier 1 – Leading Nordic heat pump OEM, 900K units/year',
    additionalCmiNotes: 'Markaryd factory expansion driving new supplier qualification',
  },
  {
    budgetOwner: 'Plant Engineering Manager',
    procurementModel: 'Plant-level procurement with global engineering standards',
    vendorSelectionCriteria: 'Chiller OEM references, HFO compatibility, acoustic data',
    preferredEngagementMode: 'Technical workshop → prototype → production approval',
    preferredDeploymentContract: 'Supply + performance testing + 3-year warranty',
    preferredSolutionType: 'Condenser modules for magnetic bearing chiller line',
    integrationTechnicalRequirement: 'Low vibration mounting, R513A/R1234ze dual use',
    performanceExpectation: 'IEER improvement ≥8% vs. previous generation',
    benchmarkSummary: 'Tier 1 – Global chiller platform, Epinal as EU reference plant',
    additionalCmiNotes: 'Tied to magnetic bearing platform refresh; decision gate Q3 2026',
  },
  {
    budgetOwner: 'Director of Technical Procurement',
    procurementModel: 'Group framework with country-level execution',
    vendorSelectionCriteria: 'Public sector references, multi-country logistics, service network',
    preferredEngagementMode: 'Structured RFP with technical and commercial gates',
    preferredDeploymentContract: 'Framework agreement + per-project supply',
    preferredSolutionType: 'Retrofit BPHE packages for building HVAC upgrades',
    integrationTechnicalRequirement: 'Plug-and-play for existing hydronic circuits',
    performanceExpectation: 'On-time delivery ≥98%, defect rate <0.5%',
    benchmarkSummary: 'Tier 2 – Large integrator, steady public sector pipeline',
    additionalCmiNotes: 'French hospital framework renewal due Q4 2026',
  },
]

export const proposition1Data: CustomerBase[] = baseCustomers

export const proposition2Data: CustomerProposition2[] = baseCustomers.map((base, i) => ({
  ...base,
  ...buyDrivers[i],
}))

export const proposition3Data: CustomerProposition3[] = baseCustomers.map((base, i) => ({
  ...base,
  ...buyDrivers[i],
  ...procurementMetrics[i],
}))
