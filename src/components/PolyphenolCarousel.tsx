import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const carouselSlides = [
  { id: 1, title: "What are Polyphenols?", subtitle: "The Foundation of Health", content: "Polyphenols are an umbrella group—kind of like 'vitamins.' Different types have different structures and effects on the body.", visual: "🍃", bgGradient: "from-emerald-900 via-emerald-800 to-emerald-700", accent: "emerald" },
  { id: 2, title: "8,000+ Varieties", subtitle: "Nature's Diversity", content: "Polyphenols are micronutrients found in plants. There are over 8,000 types—each with a unique chemical structure.", visual: "🌿", bgGradient: "from-green-900 via-green-800 to-green-700", accent: "green" },
  { id: 3, title: "Targeted Benefits", subtitle: "Health Connection", content: "Some support heart health, others reduce inflammation. The key is getting the right types in meaningful amounts.", visual: "❤️", bgGradient: "from-red-900 via-red-800 to-red-700", accent: "red" },
  { id: 4, title: "The Industry Problem", subtitle: "Most Oils Fall Short", content: "Average olive oil contains just 180 mg/kg. Even premium brands rarely exceed 400 mg/kg. EU health claim requires 250 mg/kg minimum.", visual: "📉", bgGradient: "from-amber-900 via-amber-800 to-amber-700", accent: "amber" },
  { id: 5, title: "Our Solution", subtitle: "904mg/kg Excellence", content: "Our olive oil delivers 904 mg/kg of polyphenols—over 3x higher than premium oils. Fresh-pressed, single-grove, lab-tested.", visual: "🏆", bgGradient: "from-emerald-900 via-green-800 to-emerald-700", accent: "emerald" }
];

export const PolyphenolCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => { setCurrentSlide((prev) => (prev + 1) % carouselSlides.length); }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => { setCurrentSlide(index); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 10000); };
  const nextSlide = () => { setCurrentSlide((prev) => (prev + 1) % carouselSlides.length); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 10000); };
  const prevSlide = () => { setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 10000); };

  const currentSlideData = carouselSlides[currentSlide];

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.bgGradient} transition-all duration-1000 ease-in-out`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>
      </div>
      <Button variant="ghost" size="icon" onClick={prevSlide} className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm h-14 w-14"><ChevronLeft className="h-8 w-8" /></Button>
      <Button variant="ghost" size="icon" onClick={nextSlide} className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm h-14 w-14"><ChevronRight className="h-8 w-8" /></Button>
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-8xl md:text-9xl mb-8 animate-fade-in">{currentSlideData.visual}</div>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-white/20 shadow-2xl">
            <div className="mb-6"><span className="text-white/70 text-sm font-medium uppercase tracking-wider">Chapter {currentSlideData.id} of {carouselSlides.length}</span></div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">{currentSlideData.title}</h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-8">{currentSlideData.subtitle}</h3>
             <p className="text-lg md:text-xl lg:text-2xl text-white/85 leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{currentSlideData.content}</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {carouselSlides.map((_, index) => (<button key={index} onClick={() => goToSlide(index)} className={`transition-all duration-300 rounded-full ${currentSlide === index ? 'w-12 h-3 bg-white' : 'w-3 h-3 bg-white/50 hover:bg-white/70'}`} />))}
        </div>
      </div>
      <div className="absolute top-8 right-8 z-20">
        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
          <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
          <span className="text-white/70 text-xs">{isAutoPlaying ? 'Auto' : 'Manual'}</span>
        </div>
      </div>
      <div className="absolute top-8 left-8 z-20">
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
          <span className="text-white/90 text-sm font-medium">{String(currentSlide + 1).padStart(2, '0')} / {String(carouselSlides.length).padStart(2, '0')}</span>
        </div>
      </div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-full z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-light text-white/90 mb-4">Full-Screen <span className="font-medium">Experience</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">Immersive storytelling with dynamic backgrounds and smooth transitions.</p>
        </div>
      </div>
    </section>
  );
};
