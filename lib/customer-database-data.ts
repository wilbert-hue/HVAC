/**
 * Customer Intelligence Database - Demo data
 * Europe Refrigerant-to-Liquid BPHE Market (Non-HVAC Applications)
 */

export const MARKET_TITLE =
  'Europe Refrigerant-to-Liquid Brazed Plate Heat Exchanger Market (Focus on Non-HVAC Applications Only) - Customer Database'

export const MARKET_SUBTITLE =
  'Verified directory and insight on customers (Industrial Refrigeration Operators, Food and Beverage Processors, Cold Storage and Cold Chain Operators, Electronics and Semiconductor Manufacturers, Marine and Offshore Operators, etc.)'

export interface CustomerBase {
  sNo: number
  customerCompanyName: string
  businessOverview: string
  nonHvacCustomerEntityType: string
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
  processCoolingPainPoints: string
  refrigerantProcessCompliance: string
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
    customerCompanyName: 'Arla Foods - Videbaek Dairy Complex',
    businessOverview: 'Large-scale dairy processing with ammonia-based industrial refrigeration for milk pasteurization and cold storage.',
    nonHvacCustomerEntityType: 'Food and Beverage Processor',
    bpheApplication: 'Ammonia condenser and subcooler BPHEs for process cooling loops',
    annualRevenue: '$12,400M (Group) / $8–12M process cooling budget',
    sizeOperatingScale: '3 production lines, 45 MW refrigeration capacity',
    keyContactPerson: 'Lars Hansen',
    designation: 'Head of Engineering & Refrigeration',
    emailAddress: 'l.hansen@arlafoods.com',
    telephone: '+45 89 38 10 00',
    linkedInProfile: 'linkedin.com/in/larshansen-arla',
    website: 'www.arlafoods.com',
  },
  {
    sNo: 2,
    customerCompanyName: 'Lineage Logistics - Rotterdam Cold Hub',
    businessOverview: 'Automated cold storage and distribution hub serving European food retail and export markets.',
    nonHvacCustomerEntityType: 'Cold Storage and Cold Chain Operator',
    bpheApplication: 'CO₂ transcritical BPHE gas coolers and economizers',
    annualRevenue: '$5,200M (Group) / $4–6M cold chain CAPEX cycle',
    sizeOperatingScale: '220,000 pallet positions, 18 MW cooling load',
    keyContactPerson: 'Sophie van der Berg',
    designation: 'Director of Facilities & Energy',
    emailAddress: 's.vanderberg@lineagelogistics.com',
    telephone: '+31 10 456 7890',
    linkedInProfile: 'linkedin.com/in/sophievanderberg',
    website: 'www.lineagelogistics.com',
  },
  {
    sNo: 3,
    customerCompanyName: 'BASF Ludwigshafen - Specialty Chemicals',
    businessOverview: 'Integrated chemical complex requiring precise process temperature control across reactor cooling circuits.',
    nonHvacCustomerEntityType: 'Industrial Refrigeration Operator',
    bpheApplication: 'Propylene glycol brine BPHE evaporators for reactor jacket cooling',
    annualRevenue: '$87,000M (Group) / $15–25M site utilities budget',
    sizeOperatingScale: '10 km² site, 35 process cooling circuits',
    keyContactPerson: 'Klaus Weber',
    designation: 'Plant Utilities Manager',
    emailAddress: 'k.weber@basf.com',
    telephone: '+49 621 60 0',
    linkedInProfile: 'linkedin.com/in/klausweber-basf',
    website: 'www.basf.com',
  },
  {
    sNo: 4,
    customerCompanyName: 'ASML Veldhoven Cleanroom Campus',
    businessOverview: 'Semiconductor lithography manufacturing with ultra-precise cleanroom environmental control.',
    nonHvacCustomerEntityType: 'Electronics and Semiconductor Manufacturer',
    bpheApplication: 'Dielectric fluid BPHE heat exchangers for tool thermal management',
    annualRevenue: '$27,600M (Group) / $6–10M facilities spend',
    sizeOperatingScale: 'Class 1 cleanrooms, 12 MW process cooling',
    keyContactPerson: 'Pieter de Vries',
    designation: 'Senior Manager - Fab Engineering',
    emailAddress: 'p.devries@asml.com',
    telephone: '+31 40 268 3000',
    linkedInProfile: 'linkedin.com/in/pieterdevries-asml',
    website: 'www.asml.com',
  },
  {
    sNo: 5,
    customerCompanyName: 'Maersk Container Industry - Tinglev',
    businessOverview: 'Refrigerated container manufacturing with in-house R-134a and R-513A test chambers.',
    nonHvacCustomerEntityType: 'Marine and Offshore Operator',
    bpheApplication: 'Container reefer unit BPHE condensers and evaporators',
    annualRevenue: '$51,000M (Group) / $3–5M manufacturing utilities',
    sizeOperatingScale: '2 production halls, 8 MW test facility cooling',
    keyContactPerson: 'Erik Lindqvist',
    designation: 'Manufacturing Engineering Lead',
    emailAddress: 'e.lindqvist@maersk.com',
    telephone: '+45 33 63 33 63',
    linkedInProfile: 'linkedin.com/in/eriklindqvist',
    website: 'www.maersk.com',
  },
  {
    sNo: 6,
    customerCompanyName: 'Nestlé España - Girona Ice Cream Plant',
    businessOverview: 'Frozen food production facility with ammonia refrigeration for blast freezing and storage.',
    nonHvacCustomerEntityType: 'Food and Beverage Processor',
    bpheApplication: 'Flooded ammonia evaporator BPHEs for blast freezer circuits',
    annualRevenue: '$94,000M (Group) / $2–4M plant refrigeration budget',
    sizeOperatingScale: '4 blast freezers, 6 MW ammonia plant',
    keyContactPerson: 'Carlos Mendoza',
    designation: 'Plant Engineering Manager',
    emailAddress: 'c.mendoza@nestle.es',
    telephone: '+34 972 47 67 00',
    linkedInProfile: 'linkedin.com/in/carlosmendoza-nestle',
    website: 'www.nestle.es',
  },
  {
    sNo: 7,
    customerCompanyName: 'Kuehne+Nagel Pharma Logistics - Milan Hub',
    businessOverview: 'GDP-compliant pharmaceutical cold chain hub with multi-temperature zone storage.',
    nonHvacCustomerEntityType: 'Cold Storage and Cold Chain Operator',
    bpheApplication: 'R-454C low-GWP BPHE condensers for 2–8°C and 15–25°C zones',
    annualRevenue: '$28,000M (Group) / $5–8M hub CAPEX',
    sizeOperatingScale: '85,000 m² hub, 14 temperature-controlled zones',
    keyContactPerson: 'Marco Rossi',
    designation: 'Head of Technical Operations',
    emailAddress: 'm.rossi@kuehne-nagel.com',
    telephone: '+39 02 913 751',
    linkedInProfile: 'linkedin.com/in/marcorossi-kn',
    website: 'www.kuehne-nagel.com',
  },
  {
    sNo: 8,
    customerCompanyName: 'Siemens Energy - Berlin Gas Turbine Test',
    businessOverview: 'Gas turbine test facility requiring high-capacity process cooling for thermal load simulation.',
    nonHvacCustomerEntityType: 'Industrial Refrigeration Operator',
    bpheApplication: 'Water-glycol BPHE economizers for turbine cooling water loops',
    annualRevenue: '$31,000M (Group) / $10–18M test facility budget',
    sizeOperatingScale: '1 test bay, 25 MW cooling capacity',
    keyContactPerson: 'Anna Schmidt',
    designation: 'Test Facility Engineering Director',
    emailAddress: 'a.schmidt@siemens-energy.com',
    telephone: '+49 30 386 28638',
    linkedInProfile: 'linkedin.com/in/annaschmidt-siemens',
    website: 'www.siemens-energy.com',
  },
  {
    sNo: 9,
    customerCompanyName: 'Heineken Zoeterwoude Brewery',
    businessOverview: 'Large brewery with glycol-based process cooling for fermentation and packaging lines.',
    nonHvacCustomerEntityType: 'Food and Beverage Processor',
    bpheApplication: 'Propylene glycol BPHE evaporators for fermentation tank cooling',
    annualRevenue: '$26,000M (Group) / $3–6M utilities & process cooling',
    sizeOperatingScale: '12 fermentation tanks, 8 MW glycol system',
    keyContactPerson: 'Jan Bakker',
    designation: 'Utilities & Sustainability Manager',
    emailAddress: 'j.bakker@heineken.com',
    telephone: '+31 71 545 9234',
    linkedInProfile: 'linkedin.com/in/janbakker-heineken',
    website: 'www.heineken.com',
  },
]

const buyDrivers = [
  {
    bphePurchaseCriteria: 'F-Gas compliance, ammonia safety certification, compact footprint',
    processCoolingPainPoints: 'Fouling on existing shell-and-tube units, high maintenance downtime',
    refrigerantProcessCompliance: 'EU F-Gas Regulation Phase-down, ATEX Zone 2 requirements',
    riskExposure: 'Production stoppage cost €120K/hour during cooling failure',
    buyingTriggers: 'Scheduled plant turnaround Q3 2026, F-Gas retrofit mandate',
  },
  {
    bphePurchaseCriteria: 'CO₂ system efficiency, low refrigerant charge, remote monitoring',
    processCoolingPainPoints: 'Energy cost escalation, aging R-404A rack systems',
    refrigerantProcessCompliance: 'CO₂ safety EN 378, PED pressure equipment directive',
    riskExposure: 'Cold chain integrity risk for €2M/day throughput',
    buyingTriggers: 'Hub expansion Phase 2, energy efficiency grant approval',
  },
  {
    bphePurchaseCriteria: 'Corrosion resistance, chemical compatibility, ASME/PED certification',
    processCoolingPainPoints: 'BPHE scaling in brine circuits, heat transfer degradation',
    refrigerantProcessCompliance: 'Seveso III, chemical process safety, REACH compliance',
    riskExposure: 'Reactor temperature excursion risk, €50M batch value',
    buyingTriggers: 'New reactor line commissioning, brine circuit upgrade',
  },
  {
    bphePurchaseCriteria: 'Particle-free design, dielectric fluid compatibility, ultra-low leakage',
    processCoolingPainPoints: 'Thermal drift affecting lithography precision',
    refrigerantProcessCompliance: 'Cleanroom ISO 14644, semiconductor tool OEM specs',
    riskExposure: 'Yield loss from thermal instability, €5M/week output',
    buyingTriggers: 'Next-gen EUV tool installation, fab capacity expansion',
  },
  {
    bphePurchaseCriteria: 'Marine-grade corrosion, compact size, multi-refrigerant compatibility',
    processCoolingPainPoints: 'Reefer test chamber inefficiency, long lead times on spares',
    refrigerantProcessCompliance: 'IMO refrigerant regulations, container certification',
    riskExposure: 'Test facility bottleneck delaying container delivery',
    buyingTriggers: 'New reefer platform launch, test capacity doubling',
  },
  {
    bphePurchaseCriteria: 'Food-grade materials, ammonia system experience, hygienic design',
    processCoolingPainPoints: 'Ice formation on evaporators, defrost cycle energy waste',
    refrigerantProcessCompliance: 'FDA/EU food safety, ammonia charge limits',
    riskExposure: 'Product quality risk from temperature fluctuation',
    buyingTriggers: 'Blast freezer retrofit, ammonia charge reduction project',
  },
  {
    bphePurchaseCriteria: 'GDP compliance documentation, multi-temp zone capability, redundancy',
    processCoolingPainPoints: 'Temperature mapping failures in 15–25°C zones',
    refrigerantProcessCompliance: 'EU GDP Guidelines, pharma cold chain validation',
    riskExposure: 'Batch rejection risk, regulatory audit findings',
    buyingTriggers: 'New pharma client onboarding, hub GDP re-certification',
  },
  {
    bphePurchaseCriteria: 'High-pressure rating, rapid thermal response, OEM technical support',
    processCoolingPainPoints: 'Cooling capacity insufficient for new turbine class',
    refrigerantProcessCompliance: 'Power plant safety standards, pressure vessel codes',
    riskExposure: 'Test schedule delays costing €200K/day',
    buyingTriggers: 'H-class turbine test program, cooling loop upgrade',
  },
  {
    bphePurchaseCriteria: 'Glycol compatibility, CIP resistance, energy efficiency',
    processCoolingPainPoints: 'Fermentation temperature control drift, glycol degradation',
    refrigerantProcessCompliance: 'Brewery hygiene standards, water conservation targets',
    riskExposure: 'Batch quality variation, brand reputation risk',
    buyingTriggers: 'Sustainability roadmap 2027, fermentation capacity increase',
  },
]

const procurementMetrics = [
  {
    budgetOwner: 'Head of Engineering & Refrigeration',
    procurementModel: 'Framework agreement with approved OEM list',
    vendorSelectionCriteria: 'Technical compliance, EU delivery, service network in Scandinavia',
    preferredEngagementMode: 'Direct OEM engagement with engineering workshop',
    preferredDeploymentContract: 'Supply + installation + 5-year service agreement',
    preferredSolutionType: 'Standard catalog BPHE with custom connection adapters',
    integrationTechnicalRequirement: 'Ammonia-compatible materials, DN150 flanged connections',
    performanceExpectation: '≥98% heat transfer efficiency vs. design spec',
    benchmarkSummary: 'Tier 1 – Strategic account, high retrofit potential in 2026',
    additionalCmiNotes: 'Existing SWEP units in 2 of 3 lines; open to dual-source strategy',
  },
  {
    budgetOwner: 'Director of Facilities & Energy',
    procurementModel: 'EPC-led procurement with equipment spec approval',
    vendorSelectionCriteria: 'CO₂ system track record, energy performance guarantee',
    preferredEngagementMode: 'RFP through EPC partner (Johnson Controls)',
    preferredDeploymentContract: 'Performance-based maintenance with KPI penalties',
    preferredSolutionType: 'Engineered CO₂ gas cooler modules',
    integrationTechnicalRequirement: 'Transcritical CO₂ compatibility, smart monitoring API',
    performanceExpectation: 'COP improvement ≥15% vs. existing R-404A system',
    benchmarkSummary: 'Tier 1 – Large fleet operator, multi-site rollout potential',
    additionalCmiNotes: 'Evaluating 3 hubs simultaneously; decision expected Q2 2026',
  },
  {
    budgetOwner: 'Plant Utilities Manager',
    procurementModel: 'Central corporate procurement with site technical sign-off',
    vendorSelectionCriteria: 'Chemical industry references, PED/ASME certification',
    preferredEngagementMode: 'Technical evaluation → pilot unit → fleet rollout',
    preferredDeploymentContract: 'Supply + commissioning + annual inspection',
    preferredSolutionType: 'Custom-engineered brine BPHE assemblies',
    integrationTechnicalRequirement: 'Hastelloy option for aggressive brine, -20°C design',
    performanceExpectation: 'Zero leakage tolerance, 20-year design life',
    benchmarkSummary: 'Tier 1 – Global chemical major, high technical bar',
    additionalCmiNotes: 'Long qualification cycle (12–18 months); pilot unit opportunity',
  },
  {
    budgetOwner: 'Senior Manager - Fab Engineering',
    procurementModel: 'OEM-specified equipment via tool vendor',
    vendorSelectionCriteria: 'Semiconductor fab references, particle count certification',
    preferredEngagementMode: 'Joint engineering with ASML facilities team',
    preferredDeploymentContract: 'Supply + validation + on-site technical support',
    preferredSolutionType: 'Ultra-clean dielectric fluid BPHE modules',
    integrationTechnicalRequirement: 'Sub-micron cleanliness, vibration-free mounting',
    performanceExpectation: '±0.1°C temperature stability under full load',
    benchmarkSummary: 'Tier 1 – Premium segment, high-margin opportunity',
    additionalCmiNotes: 'ASML-approved vendor list required; 6-month qualification',
  },
  {
    budgetOwner: 'Manufacturing Engineering Lead',
    procurementModel: 'Direct purchase with group framework pricing',
    vendorSelectionCriteria: 'Marine/container industry experience, global logistics',
    preferredEngagementMode: 'Direct supplier relationship with quarterly reviews',
    preferredDeploymentContract: 'Annual supply agreement with volume discounts',
    preferredSolutionType: 'Standardized reefer BPHE platforms (R-134a / R-513A)',
    integrationTechnicalRequirement: 'Compact footprint for container integration',
    performanceExpectation: 'Drop-in replacement compatibility with existing units',
    benchmarkSummary: 'Tier 2 – Volume opportunity, price-sensitive procurement',
    additionalCmiNotes: 'Competitive bid every 2 years; Kaeser and Alfa Laval incumbents',
  },
  {
    budgetOwner: 'Plant Engineering Manager',
    procurementModel: 'Regional procurement via Nestlé engineering standards',
    vendorSelectionCriteria: 'Food industry ammonia experience, global Nestlé approval',
    preferredEngagementMode: 'Nestlé engineering standards compliance review',
    preferredDeploymentContract: 'Supply + installation supervision + warranty',
    preferredSolutionType: 'Ammonia flooded evaporator BPHE packages',
    integrationTechnicalRequirement: 'Stainless steel plates, hygienic design certification',
    performanceExpectation: '15% energy reduction vs. current flooded units',
    benchmarkSummary: 'Tier 1 – Nestlé global network, replication across 12 EU plants',
    additionalCmiNotes: 'Girona pilot success could unlock pan-European rollout',
  },
  {
    budgetOwner: 'Head of Technical Operations',
    procurementModel: 'Group procurement with site-specific technical approval',
    vendorSelectionCriteria: 'Pharma GDP references, multi-refrigerant capability',
    preferredEngagementMode: 'Structured RFP with technical and commercial scoring',
    preferredDeploymentContract: 'Full-service contract including validation support',
    preferredSolutionType: 'Low-GWP R-454C condenser modules with redundancy',
    integrationTechnicalRequirement: 'N+1 redundancy, 24/7 remote monitoring integration',
    performanceExpectation: '100% uptime SLA for 2–8°C zones',
    benchmarkSummary: 'Tier 1 – Pharma logistics leader, high compliance requirements',
    additionalCmiNotes: 'Hub expansion tied to new Milan pharma corridor contract',
  },
  {
    budgetOwner: 'Test Facility Engineering Director',
    procurementModel: 'Project-based procurement with Siemens Energy standards',
    vendorSelectionCriteria: 'Power generation references, high-pressure capability',
    preferredEngagementMode: 'Engineering partnership with joint design review',
    preferredDeploymentContract: 'EPC-style supply + performance testing + warranty',
    preferredSolutionType: 'High-capacity water-glycol BPHE economizer banks',
    integrationTechnicalRequirement: '25 MW thermal capacity, 16 bar design pressure',
    performanceExpectation: 'Rapid load-following within 30 seconds',
    benchmarkSummary: 'Tier 1 – Strategic Siemens relationship, reference site potential',
    additionalCmiNotes: 'Tied to H-class turbine program; decision gate March 2026',
  },
  {
    budgetOwner: 'Utilities & Sustainability Manager',
    procurementModel: 'Local site procurement with Heineken group standards',
    vendorSelectionCriteria: 'Brewing industry experience, sustainability credentials',
    preferredEngagementMode: 'Direct engagement with sustainability team involvement',
    preferredDeploymentContract: 'Supply + installation + energy performance review',
    preferredSolutionType: 'Glycol-compatible BPHE evaporators for fermentation',
    integrationTechnicalRequirement: 'Food-grade glycol compatibility, CIP-safe design',
    performanceExpectation: '10% glycol system energy reduction target',
    benchmarkSummary: 'Tier 2 – Sustainability-driven buyer, moderate volume',
    additionalCmiNotes: 'Part of Heineken 2030 net-zero roadmap; pilot at Zoeterwoude first',
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
