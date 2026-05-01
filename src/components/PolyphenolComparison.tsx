import { useState } from "react";

const tweets = [{
  id: 1, name: "Olive", handle: "@olvlimits", avatar: "🫒",
  content: "Polyphenols are a type of antioxidant found in olives.",
  content2: "They strengthen the body's defenses against cell aging and contribute to long-term metabolic and heart health."
}, {
  id: 2, name: "Olive", handle: "@olvlimits", avatar: "🫒",
  content: "The highest polyphenol counts come from early-harvest olives, picked and pressed within hours.",
  content2: "Once bottled, levels steadily decline over time."
}, {
  id: 3, name: "Olive", handle: "@olvlimits", avatar: "🫒",
  content: "Commercial oils combine batches from across countries and years to maintain supply.",
  content2: "This process dilutes the polyphenol content far below fresh-pressed levels."
}];

const barTooltips: Record<number, {title: string;subtitle: string;description: string;}> = {
  0: {
    title: "Average Extra Virgin",
    subtitle: "~180 mg/kg polyphenols",
    description: "Most supermarket EVOOs test between 100–250 mg/kg. Blending, age, and industrial processing all reduce polyphenol content."
  },
  1: {
    title: "EU Health Claim",
    subtitle: "250 mg/kg polyphenols",
    description: "The European Food Safety Authority (EFSA) allows a health claim for olive oil that contains at least 250 mg/kg of polyphenols."
  },
  2: {
    title: "Blueprint Olive Oil",
    subtitle: "400 mg/kg polyphenols",
    description: "Bryan Johnson spends millions optimizing his health for longevity. His Blueprint olive oil, at 400 mg/kg polyphenols, is one of the most recognized high-polyphenol oils on the market."
  },
  3: {
    title: "ATTIMO Olive Oil",
    subtitle: "400–900 mg/kg polyphenols",
    description: "Our olive oils range between 400 and 900 mg/kg polyphenols depending on the variety."
  }
};

interface PolyphenolComparisonProps {
  productValue?: number;
  productLabel?: string;
}

export const PolyphenolComparison = ({ productValue = 904, productLabel = "ATTIMO OLIVE OIL" }: PolyphenolComparisonProps) => {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const comparisonData = [
  { name: "Avg. Supermarket EVOO", value: 180, color: "bg-[#A8B88F]" },
  { name: "EU Health Claim", value: 250, color: "bg-[#8A9B6F]" },
  { name: "Blueprint Olive Oil", value: 400, color: "bg-[#5C6E45]" },
  { name: productLabel, value: productValue, color: "bg-[#1B4229]" }];


  const maxValue = Math.max(...comparisonData.map((item) => item.value));

  return (
    <section className="pt-14 md:pt-20 lg:pt-24 pb-[35px] md:pb-[51px] lg:pb-[62px] snap-start" style={{ backgroundColor: '#FFFAEA' }}>
      <div>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto" style={{ zoom: 0.88 }}>
            <h2 className="font-bold leading-[0.92] text-olive-dark mb-6 tracking-tight" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(2.5rem, 4vw, 4.5rem)' }}>
              the polyphenol difference
            </h2>
            <p className="text-olive-medium leading-relaxed mb-12" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1rem, 1.2vw, 1.375rem)', maxWidth: '53.2rem' }}>Polyphenols make all the difference for olive oil health benefits and flavour. ATTIMO oils are pressed from olives that are harvested early, when polyphenols are at maximum levels.

            </p>

            <div className="space-y-4">
              {comparisonData.map((item, index) => {
                let width: string;
                if (index === 0) width = '35%';else
                if (index === 1) width = '40%';else
                if (index === 2) width = '50%';else
                width = '95%';

                const tooltip = barTooltips[index];

                return (
                  <div
                    key={index}
                    className="relative flex items-center gap-4"
                    onMouseEnter={() => setHoveredBar(index)}
                    onMouseLeave={() => setHoveredBar(null)}>
                    
                    <div
                      className={`h-16 rounded-lg ${item.color} flex items-center px-4 md:px-6 text-cream font-medium transition-all duration-700 ease-out ${index === 3 ? 'justify-between' : ''} cursor-default`}
                      style={{ width }}>
                      
                      <span
                        className={`font-medium whitespace-nowrap text-sm md:text-base ${index === 3 ? 'font-working-man' : ''}`}
                        style={index !== 3 ? { fontFamily: 'Space Grotesk, sans-serif' } : {}}>
                        
                        {item.name}
                      </span>
                      {index === 3 &&
                      <span className="font-bold text-cream whitespace-nowrap text-sm md:text-base" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.375rem)' }}>
                          400-900 mg/kg
                        </span>
                      }
                    </div>
                    {index !== 3 &&
                    <span className="font-bold text-olive-dark whitespace-nowrap text-sm md:text-base" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.375rem)' }}>
                        {index === 2 ? '400 mg/kg' : `${item.value} mg/kg`}
                      </span>
                    }

                    {/* Hover tooltip */}
                    {tooltip && hoveredBar === index &&
                    <div
                      className="absolute z-50 rounded-xl shadow-xl border border-olive-dark/10 p-5 w-72 md:w-80 pointer-events-none"
                      style={{
                        backgroundColor: '#FFFAEA',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        left: width,
                        marginLeft: '4.5rem',
                        animation: 'fadeInTooltip 0.2s ease-out',
                        boxShadow: '0 8px 32px -4px rgba(27, 66, 41, 0.12), 0 2px 8px -2px rgba(27, 66, 41, 0.08)'
                      }}>
                      
                        <h4 className="font-bold text-olive-dark text-base mb-1" style={{ fontFamily: 'UDC Working Man Sans, sans-serif' }}>
                          {tooltip.title}
                        </h4>
                        <p className="text-olive-medium text-sm mb-2.5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          {tooltip.subtitle}
                        </p>
                        <p className="text-olive-dark/60 text-sm leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          {tooltip.description}
                        </p>
                      </div>
                    }
                  </div>);

              })}
            </div>

            <div className="mt-4 md:mt-8 lg:mt-16">
              <div className="bg-accent rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 min-h-0 md:min-h-64 lg:min-h-96">
                <div className="grid grid-cols-1 md:grid-cols-3 h-full divide-y md:divide-y-0 md:divide-x divide-olive-dark/10">
                  {tweets.map((tweet, index) => {
                    const bgColors = ['#B3E58C', '#CDDB2D', '#EBDD21'];
                    const textColors = ['text-olive-dark', 'text-olive-dark', 'text-olive-dark'];
                    const icons = ['/icons/lady-2.svg', '/icons/basket-2.svg', '/icons/branch-2.svg'];

                    return (
                      <div key={tweet.id} className="p-6 flex flex-col h-full min-h-0 md:min-h-64 lg:min-h-96" style={{ backgroundColor: bgColors[index] }}>
                        <div className="space-y-4 flex-grow">
                          <p className={`${textColors[index]} leading-relaxed`} style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.125rem, 1.1vw, 1.25rem)' }}>
                            {tweet.content}
                          </p>
                          <p className="text-olive-dark/80 leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.125rem, 1.1vw, 1.25rem)' }}>
                            {tweet.content2}
                          </p>
                        </div>
                        <div className="flex items-center justify-center mt-4">
                          <div className="w-[92px] h-[92px] md:w-[92px] md:h-[92px] lg:w-[115px] lg:h-[115px] flex items-center justify-center">
                            <img src={icons[index]} alt="icon" className="w-full h-full object-contain" style={{ filter: 'invert(14%) sepia(23%) saturate(1471%) hue-rotate(98deg) brightness(95%) contrast(92%)' }} />
                          </div>
                        </div>
                      </div>);

                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInTooltip {
          from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
          to { opacity: 1; transform: translateY(-50%) translateX(0); }
        }
      `}</style>
    </section>);

};