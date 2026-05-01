import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Flower2, Sprout, UtensilsCrossed, Truck } from "lucide-react";
import { ProductContent } from "@/lib/productContent";

interface ProductInfoTabsProps {
  content: ProductContent;
}

export const ProductInfoTabs = ({ content }: ProductInfoTabsProps) => {
  const { tabs, labReportUrl } = content;

  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="flavor" className="border-olive-light/30">
          <AccordionTrigger className="py-5 hover:no-underline">
            <span className="flex items-center gap-3 text-olive-dark font-semibold uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.95rem, 1.1vw, 1.2rem)' }}>
              <Flower2 size={20} className="text-olive-dark" />
              Flavour Profile
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-1 pb-2">
              {tabs.flavorProfile.map(flavor => (
                <div key={flavor.label} className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-olive-dark uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {flavor.label}
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <img key={i} src="/icons/olive.svg" alt="" className={`w-4 h-6 ${i <= flavor.rating ? 'opacity-100' : 'opacity-30'}`} style={{ filter: i <= flavor.rating ? 'none' : 'grayscale(100%)' }} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="harvest" className="border-olive-light/30">
          <AccordionTrigger className="py-5 hover:no-underline">
            <span className="flex items-center gap-3 text-olive-dark font-semibold uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.95rem, 1.1vw, 1.2rem)' }}>
              <Sprout size={20} className="text-olive-dark" />
              Harvest Details
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-olive-medium leading-relaxed pt-1 pb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)' }}>
              <p>{tabs.harvest}</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="uses" className="border-olive-light/30">
          <AccordionTrigger className="py-5 hover:no-underline">
            <span className="flex items-center gap-3 text-olive-dark font-semibold uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.95rem, 1.1vw, 1.2rem)' }}>
              <UtensilsCrossed size={20} className="text-olive-dark" />
              Best Uses
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-olive-medium leading-relaxed pt-1 pb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)' }}>
              <p>{tabs.uses}</p>
              {tabs.usesExtra && <p className="mt-3">{tabs.usesExtra}</p>}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="shipping" className="border-olive-light/30">
          <AccordionTrigger className="py-5 hover:no-underline">
            <span className="flex items-center gap-3 text-olive-dark font-semibold uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.95rem, 1.1vw, 1.2rem)' }}>
              <Truck size={20} className="text-olive-dark" />
              Shipping & Delivery
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-olive-medium leading-relaxed pt-1 pb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)' }}>
              <p>We ship across Europe. Orders are carefully packed and dispatched the next business day. Delivery typically takes 2–7 business days depending on your location. Most multi-bottle orders qualify for free shipping.</p>
              <p className="mt-3">
                <a href="/shipping" className="underline hover:no-underline text-olive-dark font-medium">View full shipping rates & delivery times →</a>
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
