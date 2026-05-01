import { Button } from "@/components/ui/button";
import { AutoplayVideo } from "@/components/AutoplayVideo";
import { OliveLeaf } from './OliveLeaf';
import kleiaLogo from '@/assets/attimo-main-logo.svg?url';
interface HeroProps {
  onWaitlistClick: () => void;
}
export const Hero = ({
  onWaitlistClick
}: HeroProps) => {
  return <section className="relative flex items-center justify-center overflow-hidden h-screen snap-start hero-full">
      <AutoplayVideo
      src="/videos/hero-video-new.mp4"
      poster="/images/hero-poster.png"
      className="absolute inset-0 w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden" />
    
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
      
      <div className="relative z-10 container mx-auto px-6 flex items-center justify-center" style={{ height: 'calc(100vh - 100px)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 md:mb-8 flex justify-center animate-fade-in">
            <img
            src={kleiaLogo}
            alt="ATTIMO olive oil logo"
            className="object-contain drop-shadow-2xl w-auto max-h-[290px] md:max-h-[358px] lg:max-h-[426px]"
            style={{ width: 'min(444px, 61.25vw, 43vh)', height: 'auto' }} />
          
          </div>

          <div className="flex justify-center mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
            onClick={() => {
              const el = document.getElementById('oil-collection');
              if (el) {
                const container = el.closest('.overflow-y-scroll') as HTMLElement;
                if (container) {
                  const target = el.querySelector('h2') ?? el;
                  const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0;
                  const containerRect = container.getBoundingClientRect();
                  const targetRect = target.getBoundingClientRect();
                  const offset = container.scrollTop + targetRect.top - containerRect.top - headerHeight - 48;
                  container.scrollTo({ top: Math.max(offset, 0), behavior: 'smooth' });
                } else {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }
            }}
            className="text-base md:text-lg lg:text-lg py-3.5 px-9 lg:py-4 lg:px-11 hover:scale-105 transition-all duration-300 font-semibold backdrop-blur-sm shadow-2xl"
            style={{
              fontFamily: 'UDC Working Man Sans, sans-serif',
              border: '2px solid #CDDB2D',
              color: '#1B4229',
              backgroundColor: '#CDDB2D',
              borderRadius: '8px',
            }}>
              Shop New Harvest
            </Button>
          </div>

          



        
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-40 bg-accent py-3 lg:py-2 overflow-hidden border-t border-olive-dark/10">
        <div className="flex hero-ticker-marquee" style={{ width: 'max-content' }}>
          {Array(4).fill(null).map((_, i) => <div key={i} className="flex items-center whitespace-nowrap">
              {[
                { text: "LAB-TESTED", icon: "/icons/branch-2.svg" },
                { text: "EARLY HARVEST", icon: "/icons/lady-2.svg" },
                { text: "SINGLE VARIETY", icon: "/icons/basket-2.svg" },
                { text: "FROM GROVE TO TABLE", icon: "/icons/bread-2.svg" },
                { text: "ALWAYS FRESH", icon: "/icons/mortar.svg" },
                { text: "COLD-PRESSED", icon: "/icons/sun-2.svg" },
              ].map((item, idx) =>
          <span key={`${i}-${idx}`} className="inline-flex items-center">
                  <span className="hero-ticker-text font-working-man-light font-bold tracking-[0.15em]" style={{ color: '#1B4229' }}>{item.text}</span>
                  <span
                    className="inline-block mx-4 md:mx-6 lg:mx-4"
                    style={{
                      width: '1.85em',
                      height: '1.85em',
                      backgroundColor: '#1B4229',
                      WebkitMaskImage: `url(${item.icon})`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url(${item.icon})`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </span>
          )}
            </div>)}
        </div>
      </div>
    </section>;
};