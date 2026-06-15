const fs = require('fs');
const path = require('path');

// Years: 2021-2033
const years = [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033];

// Europe-only geographic hierarchy
const regions = {
  Europe: ['U.K.', 'Germany', 'Italy', 'France', 'Spain', 'Russia', 'Rest of Europe'],
};

const countryShares = {
  Europe: {
    'U.K.': 0.18,
    Germany: 0.22,
    Italy: 0.12,
    France: 0.16,
    Spain: 0.10,
    Russia: 0.08,
    'Rest of Europe': 0.14,
  },
};

// Europe BPHE HVAC market base (USD Million) for 2021
const regionBaseValues = { Europe: 450 };
const regionGrowthRates = { Europe: 0.082 };

// Segment hierarchy: parent -> children with leaf shares (relative within parent)
// Leaf nodes use { share: number }, parents use { children: { ... } }
const segmentHierarchy = {
  'By Product Function': {
    'Evaporator BPHEs': {
      children: {
        'Direct Expansion Evaporators': { share: 0.40 },
        'Flooded Evaporators': { share: 0.35 },
        'Recirculated Evaporators': { share: 0.25 },
      },
    },
    'Condenser BPHEs': {
      children: {
        'Standard Condensers': { share: 0.65 },
        'Heat Recovery Condensers': { share: 0.35 },
      },
    },
    'Desuperheater BPHEs': { share: 0.08 },
    'Economizer BPHEs': { share: 0.12 },
    'Subcooler BPHEs': { share: 0.10 },
    'Cascade BPHEs': { share: 0.08 },
    'Others (Receiver Subcooler BPHEs, Suction Gas Heat Exchanger BPHEs, Liquid Line Heat Exchanger BPHEs)': {
      share: 0.07,
    },
  },
  'By Refrigerant Type': {
    'HFC Refrigerants': {
      children: {
        R134a: { share: 0.35 },
        'R407 Series': { share: 0.30 },
        'Others (R404A, R507A, R410A)': { share: 0.35 },
      },
    },
    'HFO Refrigerants': {
      children: {
        R1234yf: { share: 0.45 },
        R1234ze: { share: 0.35 },
        'Others (R1233zd, R1336mzz, etc.)': { share: 0.20 },
      },
    },
    'Low-GWP Refrigerant Blends': {
      children: {
        R454B: { share: 0.25 },
        R454C: { share: 0.20 },
        R455A: { share: 0.20 },
        R513A: { share: 0.20 },
        'Others (R448A, R449A, R452A, etc.)': { share: 0.15 },
      },
    },
    'Natural Refrigerants': {
      children: {
        'CO2 R744': { share: 0.40 },
        'Ammonia R717': { share: 0.25 },
        'Propane R290': { share: 0.25 },
        'Others (Isobutane R600a, Propylene R1270, etc.)': { share: 0.10 },
      },
    },
  },
  'By Liquid Medium': {
    Water: { share: 0.40 },
    'Water-Glycol Mixtures': {
      children: {
        'Ethylene Glycol': { share: 0.55 },
        'Propylene Glycol': { share: 0.45 },
      },
    },
    'Brine Solutions': {
      children: {
        'Calcium Chloride Brine': { share: 0.30 },
        'Sodium Chloride Brine': { share: 0.25 },
        'Potassium Formate Brine': { share: 0.20 },
        'Potassium Acetate Brine': { share: 0.15 },
        'Others (Magnesium Chloride Brine, Ammonia-Water Brine)': { share: 0.10 },
      },
    },
    'Specialty Heat Transfer Fluids': {
      children: {
        'Food-Grade Heat Transfer Fluids': { share: 0.40 },
        'Dielectric Fluids': { share: 0.30 },
        'Thermal Oils': { share: 0.30 },
      },
    },
  },
  'By Capacity': {
    'Up to 10 kW': { share: 0.15 },
    '10 to 50 kW': { share: 0.25 },
    '50 to 200 kW': { share: 0.28 },
    '200 to 1,000 kW': { share: 0.18 },
    '1,000 to 5,000 kW': { share: 0.10 },
    'Above 5,000 kW': { share: 0.04 },
  },
  'By Installation Type': {
    'New Installations': { share: 0.45 },
    'Replacement Installations': { share: 0.35 },
    'Retrofit and Refrigerant Conversion Projects': { share: 0.20 },
  },
  'By End-Use Application': {
    'Heat Pumps': {
      children: {
        'Air-to-Water Heat Pumps': { share: 0.35 },
        'Ground Source Heat Pumps': { share: 0.25 },
        'Water Source Heat Pumps': { share: 0.25 },
        'High Temperature Heat Pumps': { share: 0.15 },
      },
    },
    Chillers: {
      children: {
        'Air-Cooled Chillers': { share: 0.40 },
        'Water-Cooled Chillers': { share: 0.45 },
        'Heat Recovery Chillers': { share: 0.15 },
      },
    },
    'District Heating & Cooling Systems': { share: 0.10 },
    'Data Center HVAC Cooling Systems': { share: 0.12 },
    'Thermal Energy Storage Systems': { share: 0.08 },
    'Others (VRF/VRV Systems, Rooftop & Packaged HVAC Systems, etc.)': { share: 0.10 },
  },
};

// Parent-level shares within each segment type (for top-level allocation)
const parentShares = {
  'By Product Function': {
    'Evaporator BPHEs': 0.30,
    'Condenser BPHEs': 0.25,
    'Desuperheater BPHEs': 0.08,
    'Economizer BPHEs': 0.12,
    'Subcooler BPHEs': 0.10,
    'Cascade BPHEs': 0.08,
    'Others (Receiver Subcooler BPHEs, Suction Gas Heat Exchanger BPHEs, Liquid Line Heat Exchanger BPHEs)': 0.07,
  },
  'By Refrigerant Type': {
    'HFC Refrigerants': 0.25,
    'HFO Refrigerants': 0.20,
    'Low-GWP Refrigerant Blends': 0.22,
    'Natural Refrigerants': 0.33,
  },
  'By Liquid Medium': {
    Water: 0.40,
    'Water-Glycol Mixtures': 0.25,
    'Brine Solutions': 0.20,
    'Specialty Heat Transfer Fluids': 0.15,
  },
  'By Capacity': {
    'Up to 10 kW': 0.15,
    '10 to 50 kW': 0.25,
    '50 to 200 kW': 0.28,
    '200 to 1,000 kW': 0.18,
    '1,000 to 5,000 kW': 0.10,
    'Above 5,000 kW': 0.04,
  },
  'By Installation Type': {
    'New Installations': 0.45,
    'Replacement Installations': 0.35,
    'Retrofit and Refrigerant Conversion Projects': 0.20,
  },
  'By End-Use Application': {
    'Heat Pumps': 0.28,
    Chillers: 0.32,
    'District Heating & Cooling Systems': 0.10,
    'Data Center HVAC Cooling Systems': 0.12,
    'Thermal Energy Storage Systems': 0.08,
    'Others (VRF/VRV Systems, Rooftop & Packaged HVAC Systems, etc.)': 0.10,
  },
};

const volumePerMillionUSD = 1200;

let seed = 42;
function seededRandom() {
  seed = (seed * 16807 + 0) % 2147483647;
  return (seed - 1) / 2147483646;
}

function addNoise(value, noiseLevel = 0.03) {
  return value * (1 + (seededRandom() - 0.5) * 2 * noiseLevel);
}

function roundTo1(val) {
  return Math.round(val * 10) / 10;
}

function roundToInt(val) {
  return Math.round(val);
}

function generateTimeSeries(baseValue, growthRate, roundFn) {
  const series = {};
  for (let i = 0; i < years.length; i++) {
    const year = years[i];
    const rawValue = baseValue * Math.pow(1 + growthRate, i);
    series[year] = roundFn(addNoise(rawValue));
  }
  return series;
}

function sumTimeSeries(seriesList) {
  const result = {};
  for (const year of years) {
    result[year] = seriesList.reduce((sum, s) => sum + (s[year] || 0), 0);
  }
  return result;
}

function buildSegmentNode(nodeDef, baseValue, growthRate, roundFn) {
  if (nodeDef.children) {
    const result = {};
    const childSeries = [];

    for (const [childName, childDef] of Object.entries(nodeDef.children)) {
      const childBase = baseValue * childDef.share;
      const childGrowth = growthRate * (0.95 + seededRandom() * 0.1);
      const childResult = buildSegmentNode(childDef, childBase, childGrowth, roundFn);
      result[childName] = childResult.node;
      childSeries.push(...childResult.leafSeriesList);
    }

    const parentSeries = sumTimeSeries(childSeries);
    for (const [year, val] of Object.entries(parentSeries)) {
      result[year] = roundFn(val);
    }

    return { node: result, leafSeriesList: childSeries };
  }

  const series = generateTimeSeries(baseValue, growthRate, roundFn);
  return { node: series, leafSeriesList: [series] };
}

function buildSegmentTypeData(segType, segDef, marketBase, growthRate, roundFn) {
  const result = {};
  const shares = parentShares[segType];

  for (const [segName, nodeDef] of Object.entries(segDef)) {
    const segShare = shares[segName];
    const segBase = marketBase * segShare;
    const segGrowth = growthRate * (0.92 + seededRandom() * 0.16);
    const built = buildSegmentNode(nodeDef, segBase, segGrowth, roundFn);
    result[segName] = built.node;
  }

  return result;
}

function buildSegmentationAnalysis() {
  function buildStructure(nodeDef) {
    if (nodeDef.children) {
      const result = {};
      for (const [childName, childDef] of Object.entries(nodeDef.children)) {
        result[childName] = buildStructure(childDef);
      }
      return result;
    }
    return {};
  }

  const analysis = { Europe: {} };

  for (const [segType, segDef] of Object.entries(segmentHierarchy)) {
    analysis.Europe[segType] = {};
    for (const [segName, nodeDef] of Object.entries(segDef)) {
      if (nodeDef.children) {
        analysis.Europe[segType][segName] = buildStructure(nodeDef);
      } else {
        analysis.Europe[segType][segName] = {};
      }
    }
  }

  analysis.Europe['By Region'] = {};
  for (const [region, regionCountries] of Object.entries(regions)) {
    analysis.Europe['By Region'][region] = {};
    for (const country of regionCountries) {
      analysis.Europe['By Region'][region][country] = {};
    }
  }

  return analysis;
}

function generateGeoData(marketBase, growthRate, isVolume) {
  const roundFn = isVolume ? roundToInt : roundTo1;
  const geoData = {};

  for (const [segType, segDef] of Object.entries(segmentHierarchy)) {
    geoData[segType] = buildSegmentTypeData(segType, segDef, marketBase, growthRate, roundFn);
  }

  return geoData;
}

function generateData(isVolume) {
  const data = {};
  const multiplier = isVolume ? volumePerMillionUSD : 1;

  // Region level (Europe only — no Global)
  for (const [regionName, countries] of Object.entries(regions)) {
    const regionBase = regionBaseValues[regionName] * multiplier;
    const regionGrowth = regionGrowthRates[regionName];

    data[regionName] = generateGeoData(regionBase, regionGrowth, isVolume);

    data[regionName]['By Country'] = {};
    for (const country of countries) {
      const cShare = countryShares[regionName][country];
      const countryBase = regionBase * cShare;
      const countryGrowth = regionGrowth * (0.97 + seededRandom() * 0.06);
      data[regionName]['By Country'][country] = generateTimeSeries(
        countryBase,
        countryGrowth,
        isVolume ? roundToInt : roundTo1
      );
    }

    for (const country of countries) {
      const cShare = countryShares[regionName][country];
      const countryBase = regionBase * cShare;
      const countryGrowth = regionGrowth * (0.96 + seededRandom() * 0.08);
      data[country] = generateGeoData(countryBase, countryGrowth, isVolume);
    }
  }

  return data;
}

seed = 42;
const valueData = generateData(false);
seed = 7777;
const volumeData = generateData(true);
const segAnalysis = buildSegmentationAnalysis();

const outDir = path.join(__dirname, 'public', 'data');
fs.writeFileSync(path.join(outDir, 'value.json'), JSON.stringify(valueData, null, 2));
fs.writeFileSync(path.join(outDir, 'volume.json'), JSON.stringify(volumeData, null, 2));
fs.writeFileSync(path.join(outDir, 'segmentation_analysis.json'), JSON.stringify(segAnalysis, null, 2));

console.log('Generated HVAC BPHE data successfully');
console.log('Geographies:', Object.keys(valueData));
console.log('Segment types:', Object.keys(valueData.Europe).filter((k) => k !== 'By Region' && k !== 'By Country'));
console.log(
  'Sample - Europe, By Product Function:',
  JSON.stringify(valueData.Europe['By Product Function']['Evaporator BPHEs'], null, 2).slice(0, 500)
);
