import { Check, X } from "lucide-react";

const alwaysItems = ["Fresh", "Single-source", "Lab-tested", "Tasty", "Traceable"];
const neverItems = ["Old", "Blended", "From unknown sources", "Mixed with cheap oils", "Untested"];

export const ProductAlwaysNever = () => {
  return (
    <section className="py-14 md:py-20 lg:py-24" style={{ backgroundColor: '#1B4229' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 space-y-5" style={{ backgroundColor: 'rgba(205, 219, 45, 0.15)', border: '1px solid rgba(205, 219, 45, 0.3)' }}>
            <h3 className="font-bold tracking-tight" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', color: '#CDDB2D', fontSize: 'clamp(1.25rem, 1.5vw, 1.75rem)' }}>
              Our oil is always
            </h3>
            <ul className="space-y-3">
              {alwaysItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#FFFAEA', fontSize: 'clamp(1rem, 1.15vw, 1.2rem)' }}>
                  <Check className="w-5 h-5 flex-shrink-0" style={{ color: '#CDDB2D' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-8 space-y-5" style={{ backgroundColor: 'rgba(255, 250, 234, 0.08)', border: '1px solid rgba(255, 250, 234, 0.15)' }}>
            <h3 className="font-bold tracking-tight" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', color: '#FFFAEA', fontSize: 'clamp(1.25rem, 1.5vw, 1.75rem)' }}>
              Our oil is never
            </h3>
            <ul className="space-y-3">
              {neverItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(255, 250, 234, 0.7)', fontSize: 'clamp(1rem, 1.15vw, 1.2rem)' }}>
                  <X className="w-5 h-5 flex-shrink-0 text-red-400/80" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
