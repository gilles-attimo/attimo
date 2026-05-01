import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const storyCards = [
  { front: { title: "What are Polyphenols?", subtitle: "Click to discover", visual: "🍃", bgColor: "from-emerald-600 to-emerald-700" }, back: { title: "Like Vitamins", content: "Polyphenols are an umbrella group—kind of like 'vitamins.' Different types have different structures and effects on the body.", bgColor: "from-emerald-700 to-emerald-800" } },
  { front: { title: "8,000+ Types", subtitle: "Naturally occurring", visual: "🌿", bgColor: "from-green-600 to-green-700" }, back: { title: "Found in Plants", content: "Polyphenols are micronutrients found in plants. There are over 8,000 types—each with a unique chemical structure.", bgColor: "from-green-700 to-green-800" } },
  { front: { title: "Health Benefits", subtitle: "Science-backed", visual: "❤️", bgColor: "from-red-500 to-red-600" }, back: { title: "Targeted Effects", content: "Some support heart health, others reduce inflammation. The key is getting the right types in meaningful amounts.", bgColor: "from-red-600 to-red-700" } },
  { front: { title: "Most Oils: 180mg", subtitle: "Industry average", visual: "📉", bgColor: "from-amber-600 to-amber-700" }, back: { title: "The Problem", content: "Average olive oil contains just 180 mg/kg. Even premium brands rarely exceed 400 mg/kg. EU health claim requires 250 mg/kg minimum.", bgColor: "from-amber-700 to-amber-800" } },
  { front: { title: "Our Oil: 904mg", subtitle: "Lab-tested potency", visual: "🏆", bgColor: "from-emerald-500 to-green-600" }, back: { title: "3x Higher", content: "Our olive oil delivers 904 mg/kg of polyphenols—over 3x higher than premium oils. Fresh-pressed, single-grove, lab-tested.", bgColor: "from-emerald-600 to-green-700" } }
];

const FlipCard = ({ card, index }: { card: typeof storyCards[0], index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="perspective-1000 group">
      <div className={`relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
        <div className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br ${card.front.bgColor} p-8 text-white shadow-lg`}>
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="text-5xl mb-4">{card.front.visual}</div>
            <h3 className="text-2xl font-bold mb-2">{card.front.title}</h3>
            <p className="text-white/80 text-sm uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{card.front.subtitle}</p>
            <div className="mt-6 text-xs text-white/60" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Click to flip</div>
          </div>
        </div>
        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br ${card.back.bgColor} p-8 text-white shadow-lg`}>
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-2xl font-bold mb-4 text-center">{card.back.title}</h3>
            <p className="text-lg leading-relaxed text-white/95" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{card.back.content}</p>
            <div className="mt-6 text-center text-xs text-white/60" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Click to flip back</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PolyphenolStory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const nextCards = () => { if (currentIndex + visibleCards < storyCards.length) setCurrentIndex(currentIndex + 1); };
  const prevCards = () => { if (currentIndex > 0) setCurrentIndex(currentIndex - 1); };

  return (
    <section className="py-14 md:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            The Science Behind <span className="font-medium text-emerald-400">Polyphenols</span>
          </h2>
           <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
             Flip each card to discover the fascinating world of polyphenols and why our oil delivers exceptional health benefits.
           </p>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white border-white/20" onClick={prevCards} disabled={currentIndex === 0}>
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white border-white/20" onClick={nextCards} disabled={currentIndex + visibleCards >= storyCards.length}>
            <ChevronRight className="h-6 w-6" />
          </Button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-16">
            {storyCards.slice(currentIndex, currentIndex + visibleCards).map((card, index) => (
              <FlipCard key={currentIndex + index} card={card} index={currentIndex + index} />
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(storyCards.length / visibleCards) }).map((_, index) => (
              <div key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${Math.floor(currentIndex / visibleCards) === index ? 'bg-emerald-400 scale-125' : 'bg-white/30'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
