// Product-specific content configuration keyed by Shopify handle

export interface ProductContent {
  // Hero section
  heroTitle: string;
  heroSubtitle: string;
  benefits: string[];
  benefitTooltip: string;
  labReportUrl: string;
  sourceLine: string;
  labelDisclosure: string;

  // Lab tiles in hero
  labTiles: Array<{
    key: string;
    label: string;
    value: string;
    unit: string;
    avg: string;
    description: string;
  }>;

  // Info tabs
  tabs: {
    details: {
      origin: string;
      olive: string;
      flavor: string;
      store: string;
      volume: string;
    };
    flavorProfile: Array<{ label: string; rating: number }>;
    harvest: string;
    uses: string;
    usesExtra?: string;
  };

  // Origin Story section
  originStory: {
    headline: string;
    quickRef: Array<{ label: string; value: string }>;
    features: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };

  // Lab Trust section
  labTrust: {
    heading: string;
    subheading: string;
    values: Array<{
      label: string;
      value: string;
      unit: string;
      standard: string;
      description: string;
    }>;
  };

  // Polyphenol comparison
  polyphenolValue: number;
  polyphenolLabel: string;
  buttonColor?: string;
  tileBackground?: string;
  tileAccent?: string;
  originRegion?: {
    heading: string;
    body: string;
    markerLon: number;
    markerLat: number;
    markerLabel: string;
    centerLon?: number;
    centerLat?: number;
    mapZoom?: number;
    markerStyle?: "dot-line" | "pill-only";
  };
}

export const productContentMap: Record<string, ProductContent> = {
  "attimo-extra-virgin-olive-oil-coratina-500ml": {
    heroTitle: "CORATINA D'ITALIA",
    heroSubtitle: "Organic Specialty Extra Virgin Olive Oil",
    benefits: [
      "100% Coratina olives harvested early and cold-pressed within hours",
      "Third-party lab tested for quality and purity",
      "Directly sourced from a small family grove in Puglia, Italy",
    ],
    benefitTooltip:
      "Polyphenols are natural compounds in olive oil that provide the health benefits you've heard about—anti-inflammatory properties, heart health support, and antioxidant protection.",
    labReportUrl: "/lab/Coratina2025.pdf",
    sourceLine: "Directly sourced from a small family grove in Puglia, Italy",
    labelDisclosure:
      "The bottle shown features our upcoming ATTIMO brand label. Your 2024/25 harvest oil will arrive under the original producer's label, containing the same superior quality oil.",
    labTiles: [
      { key: "polyphenols", label: "POLYPHENOLS", value: "847", unit: "mg/kg", avg: "avg. ~180mg/kg", description: "Natural antioxidants that give olive oil its health benefits." },
      { key: "oleocanthal", label: "OLEOCANTHAL", value: "471", unit: "mg/kg", avg: "avg. 10-30mg/kg", description: "A potent anti-inflammatory compound unique to olive oil." },
      { key: "oleacin", label: "OLEACIN", value: "336", unit: "mg/kg", avg: "avg. 10-30mg/kg", description: "A powerful antioxidant linked to cardiovascular protection." },
      { key: "acidity", label: "ACIDITY", value: "0.19", unit: "%", avg: "avg. ~0.8%", description: "Lower acidity means fresher olives and higher quality." },
    ],
    tabs: {
      details: {
        origin: "Puglia, Italy",
        olive: "Coratina",
        flavor: "Bold & Punchy",
        store: "keep away from light and heat",
        volume: "500ml",
      },
      flavorProfile: [
        { label: "PEPPERY", rating: 5 },
        { label: "FRUITY", rating: 4 },
        { label: "BITTER", rating: 5 },
        { label: "HERBAL", rating: 3 },
      ],
      harvest:
        "The olives are picked early in October when they're young, green and packed with polyphenols that boost flavour and health benefits. Cold-extracted within hours of harvest to preserve the oil's distinctive character.",
      uses: "Best used as a finishing touch; drizzle over food to add a vibrant pop of flavour.",
      usesExtra:
        "Perfect for steak, grilled vegetables, hearty soups, and bruschetta.",
    },
    originStory: {
      headline:
        "Coratina is an uncomprimising olive, the queen of polyphenols. It presses an intense, bitter oil with real grip, the kind aficionados take by the spoon as a daily longevity shot.",
      quickRef: [
        { label: "VARIETY", value: "100% Coratina" },
        { label: "ORIGIN", value: "Puglia, Italy" },
        { label: "FLAVOR", value: "Bold & Punchy" },
        { label: "USE", value: "drizzle over fresh foods" },
        { label: "STORE", value: "away from light and heat" },
      ],
      features: [
        {
          title: "Bold & Punchy",
          description: "Fresh herbs, artichoke and black pepper. Ultra high in polyphenols: intense kick and dry finish.",
          icon: "/icons/mortar.svg",
        },
        {
          title: "Early Harvest",
          description: "Harvested early when the olives are highest in polyphenols that boost flavour and health benefits.",
          icon: "/icons/basket-2.svg",
        },
        {
          title: "100% Coratina",
          description: "An Italian variety renowned for its exceptionally high polyphenol content and vigorous character.",
          icon: "/icons/branch-2.svg",
        },
        {
          title: "Cold Pressed",
          description: "Pressed within hours of harvest at low temperatures to preserve every drop of flavour and nutrition.",
          icon: "/icons/olive.svg",
        },
        {
          title: "Good On Everything",
          description: "Drizzle over veggies, finish meat and fish, punch up soups, dip with bread, try on ice cream.",
          icon: "/icons/bread-2.svg",
        },
      ],
    },
    labTrust: {
      heading: "lab-tested for quality and purity",
      subheading:
        "Health claims without receipts are just marketing. We have every batch independently lab-tested on key quality markers you can verify for yourself.",
      values: [
        { label: "Polyphenols", value: "847", unit: "mg/kg", standard: "avg. ~180 mg/kg", description: "Natural antioxidants that give olive oil its health benefits." },
        { label: "Oleocanthal", value: "471", unit: "mg/kg", standard: "avg. <10 mg/kg", description: "A potent anti-inflammatory compound unique to olive oil." },
        { label: "Oleacin", value: "336", unit: "mg/kg", standard: "avg. <40 mg/kg", description: "A powerful antioxidant linked to cardiovascular protection." },
        { label: "Acidity", value: "0.19", unit: "%", standard: "avg. ~0.8%", description: "Lower acidity means fresher olives and higher quality." },
        { label: "Peroxides", value: "7.2", unit: "meq/kg", standard: "avg. ~20 meq/kg", description: "Shows how fresh the oil is. Low peroxide = less oxidation." },
        { label: "K270", value: "0.15", unit: "", standard: "avg. ~0.22", description: "Measures oxidation over time. Lower values indicate fresher, better-preserved oil." },
      ],
    },
    polyphenolValue: 847,
    polyphenolLabel: "Coratina",
    buttonColor: "#B3E58C",
    tileBackground: "#10221B",
    tileAccent: "#B3E58C",
    originRegion: {
      heading: "From grove to bottle",
      body: "ATTIMO Coratina is directly sourced from a small family grove in Puglia, Italy. The region is the largest producer of olive oil in the country, known for its centuries-old trees and exceptional quality.\n\nThe coastal plains and Mediterranean climate create ideal growing conditions for the Coratina variety. Long, sun-drenched days concentrate the fruit's polyphenols, preserving the bold, peppery character that makes this oil exceptional.",
      markerLon: 16.8,
      markerLat: 41.1,
      markerLabel: "Puglia",
      markerStyle: "pill-only" as const,
    },
  },

  nocellara: {
    heroTitle: "NOCELLARA D'ITALIA",
    heroSubtitle: "Specialty Extra Virgin Olive Oil",
    benefits: [
      "100% Nocellara olives harvested early and cold-pressed within hours",
      "Third-party lab tested for quality and purity",
      "Directly sourced from a small family grove in Italy",
    ],
    benefitTooltip:
      "Polyphenols are natural compounds in olive oil that provide the health benefits you've heard about—anti-inflammatory properties, heart health support, and antioxidant protection.",
    labReportUrl: "/lab/Nocellara2025.pdf",
    sourceLine: "Directly sourced from a small family grove in Italy",
    labelDisclosure:
      "The bottle shown features our upcoming ATTIMO brand label. Your 2024/25 harvest oil will arrive under the original producer's label, containing the same superior quality oil.",
    labTiles: [
      { key: "polyphenols", label: "POLYPHENOLS", value: "400", unit: "mg/kg", avg: "avg. ~180mg/kg", description: "Natural antioxidants that give olive oil its health benefits." },
      { key: "oleocanthal", label: "OLEOCANTHAL", value: "137", unit: "mg/kg", avg: "avg. <10mg/kg", description: "A potent anti-inflammatory compound unique to olive oil." },
      { key: "oleacin", label: "OLEACIN", value: "209", unit: "mg/kg", avg: "avg. <40mg/kg", description: "a potent antioxidant linked to heart health and longevity" },
      { key: "acidity", label: "ACIDITY", value: "0.21%", unit: "", avg: "avg. ~0.8%", description: "Lower acidity means fresher olives and higher quality." },
    ],
    tabs: {
      details: {
        origin: "Sicily, Italy",
        olive: "Nocellara",
        flavor: "Gentle & Fruity",
        store: "keep away from light and heat",
        volume: "500ml",
      },
      flavorProfile: [
        { label: "FRUITY", rating: 5 },
        { label: "NUTTY", rating: 4 },
        { label: "BUTTERY", rating: 4 },
        { label: "PEPPERY", rating: 2 },
      ],
      harvest:
        "The olives are picked early in October when they're young, green and packed with polyphenols that boost flavour and health benefits. Cold-extracted within hours of harvest to preserve the oil's distinctive gentle, fruity character.",
      uses: "Good on everything — drizzle over fresh foods to add a gentle pop of flavour.",
      usesExtra:
        "Perfect for pasta, enrich eggs, finish seafood, dress leafy greens — and try it on ice cream.",
    },
    originStory: {
      headline:
        "Nocellara di Belice is a generous Sicilian olive, one of Italy's most prized cultivars. It presses a gentle oil with fruity notes and a velvety texture that is easy to like and use every day.",
      quickRef: [
        { label: "VARIETY", value: "100% Nocellara" },
        { label: "ORIGIN", value: "Sicily, Italy" },
        { label: "FLAVOR", value: "Gentle & Fruity" },
        { label: "USE", value: "drizzle over fresh foods" },
        { label: "STORE", value: "away from light and heat" },
      ],
      features: [
        {
          title: "Gentle & Fruity",
          description: "Fresh almond and green banana with a velvety texture and round finish. Perfect for all-round use.",
          icon: "/icons/bread-2.svg",
        },
        {
          title: "Early Harvest",
          description: "Picked early in October when the olives are packed with polyphenols that boost flavour and health benefits.",
          icon: "/icons/basket-2.svg",
        },
        {
          title: "100% Nocellara",
          description: "A generous Sicilian olive variety known for its gentle character and round, fruity notes.",
          icon: "/icons/branch-2.svg",
        },
        {
          title: "Cold Pressed",
          description: "Pressed within hours of harvest at low temperatures to preserve every drop of flavour and nutrition.",
          icon: "/icons/olive.svg",
        },
        {
          title: "Good On Everything",
          description: "Perfect for pasta, enrich eggs, finish seafood, dress leafy greens, try on ice cream.",
          icon: "/icons/bread-2.svg",
        },
      ],
    },
    labTrust: {
      heading: "lab-tested for quality and purity",
      subheading:
        "Health claims without receipts are just marketing. We have every batch independently lab-tested on key quality markers you can verify for yourself.",
      values: [
        { label: "Polyphenols", value: "400", unit: "mg/kg", standard: "avg. ~180 mg/kg", description: "Natural antioxidants that give olive oil its health benefits." },
        { label: "Oleocanthal", value: "137", unit: "mg/kg", standard: "avg. <10 mg/kg", description: "A potent anti-inflammatory compound unique to olive oil." },
        { label: "Oleacin", value: "209", unit: "mg/kg", standard: "avg. <40 mg/kg", description: "A potent antioxidant linked to heart health and longevity." },
        { label: "Acidity", value: "0.21", unit: "%", standard: "avg. ~0.8%", description: "Lower acidity means fresher olives and higher quality." },
        { label: "Peroxides", value: "7.8", unit: "meq/kg", standard: "avg. ~20 meq/kg", description: "Shows how fresh the oil is. Low peroxide = less oxidation." },
        { label: "K270", value: "0.11", unit: "", standard: "avg. ~0.22", description: "Measures oxidation over time. Lower values indicate fresher, better-preserved oil." },
      ],
    },
    polyphenolValue: 400,
    polyphenolLabel: "Nocellara",
    buttonColor: "#ECA948",
  },

  "attimo-extra-virgin-olive-oil-picual-500ml": {
    heroTitle: "PICUAL DE ESPAÑA",
    heroSubtitle: "Specialty Extra Virgin Olive Oil",
    benefits: [
      "100% Picual olives harvested early and cold-pressed within hours",
      "Third-party lab tested for quality and purity",
      "Directly sourced from a small family grove in Andalusia, Spain",
    ],
    benefitTooltip:
      "Polyphenols are natural compounds in olive oil that provide the health benefits you've heard about—anti-inflammatory properties, heart health support, and antioxidant protection.",
    labReportUrl: "/lab/Picual2025.pdf",
    sourceLine: "Directly sourced from a small family grove in Andalusia, Spain",
    labelDisclosure:
      "The bottle shown features our upcoming ATTIMO brand label. Your 2024/25 harvest oil will arrive under the original producer's label, containing the same superior quality oil.",
    labTiles: [
      { key: "polyphenols", label: "POLYPHENOLS", value: "675", unit: "mg/kg", avg: "avg. ~180mg/kg", description: "Natural antioxidants that give olive oil its health benefits." },
      { key: "oleocanthal", label: "OLEOCANTHAL", value: "—", unit: "mg/kg", avg: "avg. 10-30mg/kg", description: "A potent anti-inflammatory compound unique to olive oil." },
      { key: "oleacin", label: "OLEACIN", value: "—", unit: "mg/kg", avg: "avg. <40mg/kg", description: "A powerful antioxidant linked to cardiovascular protection." },
      { key: "acidity", label: "ACIDITY", value: "0.13", unit: "%", avg: "avg. ~0.8%", description: "Lower acidity means fresher olives and higher quality." },
    ],
    tabs: {
      details: {
        origin: "Jaén, Spain",
        olive: "Picual",
        flavor: "Green & Grassy",
        store: "keep away from light and heat",
        volume: "500ml",
      },
      flavorProfile: [
        { label: "PEPPERY", rating: 4 },
        { label: "FRUITY", rating: 3 },
        { label: "BITTER", rating: 3 },
        { label: "HERBAL", rating: 5 },
      ],
      harvest:
        "The olives are picked early in October when they're young, green and packed with polyphenols that boost flavour and health benefits. Cold-extracted within hours of harvest to preserve the oil's distinctive vibrant character.",
      uses: "Best used as a finishing touch; drizzle over food to add a vibrant pop of flavour.",
      usesExtra:
        "Great on grilled vegetables, soups, legumes, and toasted bread.",
    },
    originStory: {
      headline:
        "Picual is Spain’s most expressive and most planted olive. It presses a vibrant oil with a fresh green bite. An all-rounder in the kitchen, with enough character to stay interesting.",
      quickRef: [
        { label: "VARIETY", value: "100% Picual" },
        { label: "ORIGIN", value: "Jaén, Spain" },
        { label: "FLAVOR", value: "Green & Grassy" },
        { label: "USE", value: "drizzle over fresh foods" },
        { label: "STORE", value: "away from light and heat" },
      ],
      features: [
        {
          title: "Green & Grassy",
          description: "Fresh tomato leaf and cut grass aromas with a clean, assertive finish.",
          icon: "/icons/mortar.svg",
        },
        {
          title: "Early Harvest",
          description: "Picked early when the olives are green and packed with polyphenols.",
          icon: "/icons/basket-2.svg",
        },
        {
          title: "100% Picual",
          description: "Spain's flagship variety, known for its stability, bold character and high polyphenol content.",
          icon: "/icons/branch-2.svg",
        },
        {
          title: "Cold Pressed",
          description: "Pressed within hours of harvest at low temperatures to preserve every drop of flavour and nutrition.",
          icon: "/icons/olive.svg",
        },
        {
          title: "Good On Everything",
          description: "dress veggies & salads, top anything grilled, liven up salads, finish fresh cheese & yogurt, try with chocolate",
          icon: "/icons/bread-2.svg",
        },
      ],
    },
    labTrust: {
      heading: "lab-tested for quality and purity",
      subheading:
        "Health claims without receipts are just marketing. We have every batch independently lab-tested on key quality markers you can verify for yourself.",
      values: [
        { label: "Polyphenols", value: "675", unit: "mg/kg", standard: "avg. ~180 mg/kg", description: "Natural antioxidants that give olive oil its health benefits." },
        { label: "Oleocanthal", value: "—", unit: "mg/kg", standard: "avg. <10 mg/kg", description: "A potent anti-inflammatory compound unique to olive oil." },
        { label: "Oleacin", value: "—", unit: "mg/kg", standard: "avg. <40 mg/kg", description: "A powerful antioxidant linked to cardiovascular protection." },
        { label: "Acidity", value: "0.13", unit: "%", standard: "avg. ~0.8%", description: "Lower acidity means fresher olives and higher quality." },
        { label: "Peroxides", value: "5.7", unit: "meq/kg", standard: "avg. ~20 meq/kg", description: "Shows how fresh the oil is. Low peroxide = less oxidation." },
        { label: "K270", value: "—", unit: "", standard: "avg. ~0.22", description: "Measures oxidation over time. Lower values indicate fresher, better-preserved oil." },
      ],
    },
    polyphenolValue: 675,
    polyphenolLabel: "Picual",
    buttonColor: "#B3E58C",
    tileBackground: "#B3E58C",
    tileAccent: "#1B4229",
    originRegion: {
      heading: "From grove to bottle",
      body: "ATTIMO Picual is directly sourced from a small family grove in Jaén, the heart of Andalucía and the olive oil capital of the world. This province alone produces more olive oil than any entire country outside Spain.\n\nThe rugged Sierra landscape, with its hot days and cool nights, pushes the Picual olive to concentrate its natural defences — resulting in an oil that is exceptionally rich in polyphenols and built for stability. Harvested early and pressed within hours, the result is a vibrantly green oil with a structured character.",
      markerLon: -3.79,
      markerLat: 37.77,
      markerLabel: "Jaén",
      centerLon: -3.5,
      centerLat: 39.5,
      mapZoom: 18,
      markerStyle: "pill-only" as const,
    },
  },
};

// Map URL slugs to Shopify handles (when they differ)
export const handleToShopifyHandle: Record<string, string> = {
  nocellara: "nocellara",
  coratina: "attimo-extra-virgin-olive-oil-coratina-500ml",
  picual: "attimo-extra-virgin-olive-oil-picual-500ml",
};

export function resolveShopifyHandle(urlHandle: string | undefined): string {
  if (!urlHandle) return "nocellara";
  return handleToShopifyHandle[urlHandle] || urlHandle;
}

// Default to nocellara if handle not found
export function getProductContent(handle: string | undefined): ProductContent {
  if (!handle) return productContentMap["nocellara"];

  const contentKey = handleToShopifyHandle[handle] || handle;
  return productContentMap[contentKey] || productContentMap["nocellara"];
}