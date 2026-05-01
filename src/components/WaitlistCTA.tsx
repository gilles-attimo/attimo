import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
interface WaitlistCTAProps {
  onWaitlistClick: () => void;
}
export const WaitlistCTA = ({ onWaitlistClick }: WaitlistCTAProps) => {
  return <section className="py-14 md:py-20 lg:py-24 snap-start relative overflow-hidden" style={{ backgroundColor: '#B3E58C' }}>
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(/patterns/waitlist-tile.svg?v=4)', backgroundRepeat: 'repeat' }} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1B4229' }}>
              <Bell className="w-8 h-8" style={{ color: '#B3E58C' }} strokeWidth={2.5} />
            </div>
          </div>
          <h2 className="font-bold mb-4" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', color: '#1B4229', fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', lineHeight: '1.2' }}>Get messaged<br />when new oils come in</h2>
          <p className="mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#1B4229', fontSize: 'clamp(1.25rem, 1.75vw, 1.75rem)', lineHeight: '1.6' }}>Harvest 2025 selection coming soon.</p>
          <Button onClick={onWaitlistClick} className="text-lg px-8 py-6 font-bold transition-all duration-300 hover:scale-105" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', backgroundColor: '#1B4229', color: 'rgb(205, 219, 45)', fontSize: 'clamp(1rem, 1.2vw, 1.25rem)', borderRadius: '8px' }}>
            JOIN THE WAITLIST
          </Button>
        </div>
      </div>
    </section>;
};
