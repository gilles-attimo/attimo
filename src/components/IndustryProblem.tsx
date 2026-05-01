import { AlertTriangle, Blend, Eye, Building2 } from "lucide-react";
import { AutoplayVideo } from "@/components/AutoplayVideo";
import { Card, CardContent } from "@/components/ui/card";
export const IndustryProblem = () => {
  return <section className="py-16 md:py-28 lg:py-32 lg:min-h-screen px-8 md:px-12 lg:px-16 bg-[#1B4229] snap-start flex items-center">
      <div className="mx-auto px-4 w-[85vw]">
        <div className="relative overflow-hidden rounded-3xl lg:min-h-[85vh] lg:flex lg:flex-col lg:justify-center">
          <AutoplayVideo src="/videos/harvest-2024-1.mp4" className="absolute inset-0 w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden" />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="relative z-10 py-5 px-5 md:py-7 lg:py-24 md:px-10 max-w-[60vw] mx-auto">
        <div className="mx-auto">
          <div className="text-left mb-6 md:mb-6 lg:mb-10">
            <h2 className="font-light mb-3 md:mb-5 leading-tight tracking-tight whitespace-nowrap" style={{
                fontFamily: 'UDC Working Man Sans, sans-serif',
                color: '#CDDB2D',
                fontSize: 'clamp(1.5rem, 2.5vw, 3.5rem)'
              }}>
              The <span className="font-medium italic">"extra virgin" lie</span>
            </h2>
             <p className="text-white/90 leading-relaxed font-light" style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(0.9rem, 1vw, 1.6rem)'
              }}>Extra virgin olive oil is praised for health and longevity benefits, but 80% of EVOOs in supermarkets don't even meet basic standards and are actually low in the polyphenols that give it these benefits, plus flavour.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-6 lg:mb-10">
            <div className="text-center p-4 md:p-5 border border-white rounded-lg">
              <div className="font-working-man font-light text-white mb-2 md:mb-3" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 3.5rem)' }}>~80%</div>
               <p className="text-white/90 font-light leading-relaxed" style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: 'clamp(0.8rem, 0.9vw, 1.5rem)'
                 }}>olive oils sold as "extra virgin" in supermarkets don't meet those standards
                </p>
            </div>
            <div className="text-center p-4 md:p-5 border border-white rounded-lg">
              <div className="font-working-man font-light text-white mb-2 md:mb-3" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 3.5rem)' }}>~90%</div>
               <p className="text-white/90 font-light leading-relaxed" style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                   fontSize: 'clamp(0.8rem, 0.9vw, 1.5rem)'
                 }}>"extra virgin" olive oils are low in health-boosting polyphenols
                </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-10 mx-auto">
            <div className="space-y-2 md:space-y-2">
              <h3 className="font-bold text-white tracking-tight leading-tight" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(0.9rem, 1.1vw, 1.8rem)' }}>
                Flavour and health get blended away
              </h3>
               <p className="text-white/80 leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.8rem, 0.9vw, 1.5rem)' }}>Big producers scale by mixing oils from multiple sources and years into a standardized taste. This practice kills what makes real olive oil special: fresh distinct flavour and polyphenols that make it super healthy.</p>
            </div>
            <div className="space-y-2 md:space-y-2">
              <h3 className="font-bold text-white tracking-tight leading-tight" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(0.9rem, 1.1vw, 1.8rem)' }}>
                You've never tasted the real thing
              </h3>
               <p className="text-white/80 leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.8rem, 0.9vw, 1.5rem)' }}>
                 True extra virgin is intense: bitter, peppery, fragrant. Each oil has a fingerprint: olive variety, grove, harvest, craft. 
                 These are also the healthiest oils, but most people never get to taste them.
               </p>
            </div>
            <div className="space-y-2 md:space-y-2">
              <h3 className="font-bold text-white tracking-tight leading-tight" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(0.9rem, 1.1vw, 1.8rem)' }}>
                Big oil kills family groves
              </h3>
               <p className="text-white/80 leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.8rem, 0.9vw, 1.5rem)' }}>
                 Financial stress forces small producers to sell to industrial players. Their sublime oil sold gets blended into cheap stuff and sold for pennies. Making olive oil is an art much like wine, but when the artists don't get paid, the art disappears.
               </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>;
};
