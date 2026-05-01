import { useState, useEffect, useRef } from "react";

const scrollStories = [
  { id: 1, title: "What are Polyphenols?", subtitle: "The Basics", content: "Polyphenols are an umbrella group—kind of like 'vitamins.' Different types have different structures and effects on the body.", visual: "🍃", bgColor: "from-emerald-600/20 to-emerald-800/30", textColor: "text-emerald-800" },
  { id: 2, title: "Found in Nature", subtitle: "8,000+ Varieties", content: "Polyphenols are micronutrients found in plants. There are over 8,000 types—each with a unique chemical structure.", visual: "🌿", bgColor: "from-green-600/20 to-green-800/30", textColor: "text-green-800" },
  { id: 3, title: "Health Connection", subtitle: "Targeted Benefits", content: "Some support heart health, others reduce inflammation. The key is getting the right types in meaningful amounts.", visual: "❤️", bgColor: "from-red-500/20 to-red-700/30", textColor: "text-red-800" },
  { id: 4, title: "The Problem", subtitle: "Most Oils Fall Short", content: "Average olive oil contains just 180 mg/kg. Even premium brands rarely exceed 400 mg/kg. EU health claim requires 250 mg/kg minimum.", visual: "📉", bgColor: "from-amber-500/20 to-amber-700/30", textColor: "text-amber-800" },
  { id: 5, title: "Our Solution", subtitle: "904mg/kg Potency", content: "Our olive oil delivers 904 mg/kg of polyphenols—over 3x higher than premium oils. Fresh-pressed, single-grove, lab-tested.", visual: "🏆", bgColor: "from-emerald-500/20 to-green-600/30", textColor: "text-emerald-800" }
];

export const PolyphenolScroll = () => {
  const [activeSection, setActiveSection] = useState(1);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const containerTop = containerRef.current?.offsetTop || 0;
      const containerHeight = containerRef.current?.offsetHeight || 0;
      
      if (scrollY >= containerTop && scrollY <= containerTop + containerHeight) {
        sectionRefs.current.forEach((ref, index) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
              setActiveSection(index + 1);
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: number) => {
    const section = sectionRefs.current[id - 1];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section ref={containerRef} className="relative py-14 md:py-20 lg:py-24" style={{ backgroundColor: '#FFFAEA' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
            Scroll Through the <span className="font-medium text-emerald-600">Science</span>
          </h2>
           <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
             Each section reveals as you scroll - discover the polyphenol story through immersive storytelling.
           </p>
        </div>

        <div className="relative flex">
          <div className="hidden lg:block sticky top-1/2 -translate-y-1/2 w-64 h-fit mr-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Navigation</h3>
              <div className="space-y-3">
                {scrollStories.map((story) => (
                  <button
                    key={story.id}
                    onClick={() => scrollToSection(story.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                      activeSection === story.id
                        ? 'bg-emerald-100 text-emerald-800 border-l-4 border-emerald-500'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{story.visual}</span>
                      <div>
                        <div className="font-medium text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{story.subtitle}</div>
                        <div className="text-xs opacity-75" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{story.title}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-32">
            {scrollStories.map((story, index) => (
              <div
                key={story.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className="min-h-screen flex items-center"
              >
                <div className={`w-full bg-gradient-to-br ${story.bgColor} rounded-3xl p-8 md:p-16 backdrop-blur-sm border border-white/30 shadow-xl transition-all duration-700 ${
                  activeSection === story.id 
                    ? 'scale-100 opacity-100 translate-y-0' 
                    : 'scale-95 opacity-70 translate-y-8'
                }`}>
                  <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div className={`${story.textColor} order-2 md:order-1`}>
                        <div className="mb-4">
                          <span className="text-sm font-medium opacity-75 uppercase tracking-wide">
                            Chapter {story.id}
                          </span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                          {story.title}
                        </h3>
                        <h4 className="text-xl md:text-2xl font-light mb-8 opacity-80">
                          {story.subtitle}
                        </h4>
                         <p className="text-lg md:text-xl leading-relaxed opacity-90" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                           {story.content}
                         </p>
                      </div>
                      <div className="order-1 md:order-2 flex justify-center">
                        <div className="text-8xl md:text-9xl transform transition-transform duration-700 hover:scale-110">
                          {story.visual}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50">
            <div className="flex space-x-2">
              {scrollStories.map((story) => (
                <button
                  key={story.id}
                  onClick={() => scrollToSection(story.id)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSection === story.id
                      ? 'bg-emerald-500 scale-125'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
