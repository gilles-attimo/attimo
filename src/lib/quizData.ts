export interface QuizOption {
  label: string;
  description: string;
  scores: { coratina: number; picual: number; nocellara: number };
}

export interface QuizQuestion {
  id: string;
  category: string;
  question: string;
  options: QuizOption[];
}

export interface OilResult {
  key: string;
  name: string;
  percentage: number;
  summary: string;
  handle: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "intensity",
    category: "Intensity",
    question: "How do you take your espresso?",
    options: [
      { label: "Ristretto, no sugar", description: "The punch is the point", scores: { coratina: 3, picual: 1, nocellara: 0 } },
      { label: "Double shot, maybe a splash of milk", description: "", scores: { coratina: 1, picual: 2, nocellara: 0 } },
      { label: "Flat white or cappuccino", description: "", scores: { coratina: 0, picual: 1, nocellara: 2 } },
      { label: "I don't drink coffee", description: "", scores: { coratina: 0, picual: 0, nocellara: 3 } },
    ],
  },
  {
    id: "bitterness",
    category: "Bitterness",
    question: "Dark chocolate: what % do you reach for?",
    options: [
      { label: "85% or higher", description: "", scores: { coratina: 3, picual: 1, nocellara: 0 } },
      { label: "70% — some edge, still enjoyable", description: "", scores: { coratina: 1, picual: 2, nocellara: 1 } },
      { label: "Milk chocolate", description: "", scores: { coratina: 0, picual: 0, nocellara: 3 } },
      { label: "I skip chocolate", description: "", scores: { coratina: 0, picual: 1, nocellara: 2 } },
    ],
  },
  {
    id: "peppery",
    category: "Peppery Finish",
    question: "A throat catch at the end of an olive oil — that slight burn:",
    options: [
      { label: "That's exactly what I want", description: "", scores: { coratina: 3, picual: 2, nocellara: 0 } },
      { label: "Fine, but not the main event", description: "", scores: { coratina: 0, picual: 2, nocellara: 1 } },
      { label: "I'd rather not feel it", description: "", scores: { coratina: 0, picual: 0, nocellara: 3 } },
    ],
  },
  {
    id: "use",
    category: "Use",
    question: "Where does this oil end up most?",
    options: [
      { label: "Raw, straight on food", description: "Drizzled at the table", scores: { coratina: 2, picual: 2, nocellara: 1 } },
      { label: "Cooking — sautéing, roasting, high heat", description: "", scores: { coratina: 0, picual: 3, nocellara: 2 } },
      { label: "Dipping, bread, cheese", description: "", scores: { coratina: 0, picual: 1, nocellara: 3 } },
      { label: "All of the above", description: "", scores: { coratina: 1, picual: 2, nocellara: 2 } },
    ],
  },
  {
    id: "food",
    category: "Food",
    question: "Pick the dish you'd most want a great olive oil on:",
    options: [
      { label: "Grilled lamb with charred aubergine", description: "", scores: { coratina: 3, picual: 1, nocellara: 0 } },
      { label: "Burrata, tomatoes, sea salt", description: "", scores: { coratina: 0, picual: 1, nocellara: 3 } },
      { label: "Gazpacho or pan con tomate", description: "", scores: { coratina: 1, picual: 3, nocellara: 0 } },
      { label: "Soft-boiled egg on toast", description: "", scores: { coratina: 0, picual: 0, nocellara: 3 } },
    ],
  },
  {
    id: "health",
    category: "Health Intent",
    question: "Why are you here?",
    options: [
      { label: "Polyphenols first, taste second", description: "", scores: { coratina: 3, picual: 1, nocellara: 0 } },
      { label: "I want both — high quality and good for me", description: "", scores: { coratina: 2, picual: 2, nocellara: 0 } },
      { label: "Taste is everything, health is a bonus", description: "", scores: { coratina: 0, picual: 2, nocellara: 2 } },
      { label: "I honestly just want something that tastes good", description: "", scores: { coratina: 0, picual: 0, nocellara: 3 } },
    ],
  },
  {
    id: "complexity",
    category: "Complexity",
    question: "When you eat, do you pick up subtle flavours or just enjoy the whole?",
    options: [
      { label: "I notice everything", description: "The back-of-throat finish, the aftertaste", scores: { coratina: 3, picual: 1, nocellara: 0 } },
      { label: "I appreciate complexity when it's there", description: "", scores: { coratina: 1, picual: 2, nocellara: 1 } },
      { label: "I eat for pleasure, not analysis", description: "", scores: { coratina: 0, picual: 1, nocellara: 3 } },
    ],
  },
  {
    id: "provenance",
    category: "Provenance",
    question: "How important is organic certification to you?",
    options: [
      { label: "Essential — it's a baseline requirement", description: "", scores: { coratina: 3, picual: 0, nocellara: 0 } },
      { label: "Important but not a dealbreaker", description: "", scores: { coratina: 2, picual: 1, nocellara: 0 } },
      { label: "Nice to have, not something I actively seek", description: "", scores: { coratina: 0, picual: 1, nocellara: 1 } },
      { label: "Doesn't factor into my decisions", description: "", scores: { coratina: 1, picual: 1, nocellara: 1 } },
    ],
  },
  {
    id: "pairing",
    category: "Pairing",
    question: "Which sounds most like your kitchen right now?",
    options: [
      { label: "Lentil soup, hearty stews, bitter greens", description: "", scores: { coratina: 3, picual: 1, nocellara: 0 } },
      { label: "Fish, salads, light pasta", description: "", scores: { coratina: 0, picual: 1, nocellara: 3 } },
      { label: "Tapas, seafood, anything Mediterranean", description: "", scores: { coratina: 0, picual: 3, nocellara: 1 } },
      { label: "Lots of eggs, bread, simple weeknight food", description: "", scores: { coratina: 0, picual: 2, nocellara: 2 } },
    ],
  },
  {
    id: "occasion",
    category: "Occasion",
    question: "When do you reach for a special bottle?",
    options: [
      { label: "Every meal", description: "Good oil is a daily non-negotiable", scores: { coratina: 2, picual: 2, nocellara: 1 } },
      { label: "When I want to impress", description: "A dinner, guests, something worth showing off", scores: { coratina: 0, picual: 1, nocellara: 3 } },
      { label: "When I'm eating simply and want the oil to be the thing", description: "", scores: { coratina: 3, picual: 1, nocellara: 0 } },
      { label: "I don't really think about it that way", description: "", scores: { coratina: 0, picual: 2, nocellara: 2 } },
    ],
  },
  {
    id: "memory",
    category: "Memory",
    question: "Pick the meal that stays with you:",
    options: [
      { label: "Ripe tomatoes, warm bread, oil that tasted like the harvest", description: "Soft, fruity, generous", scores: { coratina: 0, picual: 1, nocellara: 3 } },
      { label: "Bitter greens, white beans, oil so green it almost stung", description: "Intense, peppery, uncompromising", scores: { coratina: 3, picual: 1, nocellara: 0 } },
      { label: "Grilled fish, lemon, something bright and clean", description: "Grassy, fresh, direct", scores: { coratina: 0, picual: 3, nocellara: 1 } },
      { label: "None of these — I'm building the memory", description: "", scores: { coratina: 1, picual: 2, nocellara: 2 } },
    ],
  },
];

const oilSummaries: Record<string, string> = {
  nocellara: "Delicate, round, and elegant. An oil that lets the food breathe while adding something quietly beautiful.",
  picual: "Bright, grassy, and versatile. At home raw or cooked, it carries Mediterranean character without demanding attention.",
  coratina: "Intense, bitter, peppery — built for people who want to feel the oil. The highest polyphenol count in our lineup.",
};

const oilNames: Record<string, string> = {
  nocellara: "Nocellara d'Italia",
  picual: "Picual de España",
  coratina: "Coratina d'Italia",
};

const oilKeys = ["coratina", "picual", "nocellara"] as const;
type OilKey = (typeof oilKeys)[number];
type OilScores = Record<OilKey, number>;

const maximumPossibleScores: OilScores = quizQuestions.reduce(
  (maxScores, question) => {
    oilKeys.forEach((key) => {
      const questionMax = Math.max(...question.options.map((option) => option.scores[key]));
      maxScores[key] += questionMax;
    });

    return maxScores;
  },
  { coratina: 0, picual: 0, nocellara: 0 }
);

export function calculateResults(answers: Record<string, number>): OilResult[] {
  const totals: OilScores = { coratina: 0, picual: 0, nocellara: 0 };

  for (const [questionId, answerIdx] of Object.entries(answers)) {
    const question = quizQuestions.find((q) => q.id === questionId);
    if (!question) continue;

    const option = question.options[answerIdx];
    if (!option) continue;

    oilKeys.forEach((key) => {
      totals[key] += option.scores[key];
    });
  }

  const results: OilResult[] = oilKeys.map((key) => ({
    key,
    name: oilNames[key],
    percentage: Math.round((totals[key] / Math.max(maximumPossibleScores[key], 1)) * 100),
    summary: oilSummaries[key],
    handle: key,
  }));

  results.sort((a, b) => b.percentage - a.percentage);
  return results;
}
