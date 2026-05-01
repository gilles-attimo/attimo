import { SicilyMapbox } from "@/components/SicilyMapbox";

interface ProductOriginRegionProps {
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  heading?: string;
  body?: string;
  markerLon?: number;
  markerLat?: number;
  markerLabel?: string;
  centerLon?: number;
  centerLat?: number;
  mapZoom?: number;
  markerStyle?: "dot-line" | "pill-only";
}

export const ProductOriginRegion = ({
  backgroundColor = '#1B4229',
  headingColor = '#ECA948',
  textColor = '#FFFAEA',
  heading = 'From grove to bottle',
  body = "ATTIMO Nocellara is directly sourced from a small farm in the Belice valley on Sicily's west coast, where people have been making olive oil since before the Romans.\n\nHere, chalky soil and dry summers stress the olive trees, causing fruits to stay small with concentrated flavour. The coast keeps the nights cool, which slows the accumulation of the more aggressive phenolic compounds. Harvested early, the result is an oil that is high in polyphenols but gentle in character — softer and rounder than anything produced further inland.",
  markerLon,
  markerLat,
  markerLabel,
  centerLon,
  centerLat,
  mapZoom,
  markerStyle,
}: ProductOriginRegionProps) => {
  return (
    <section className="py-14 md:py-20 lg:py-24" style={{ backgroundColor }}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <SicilyMapbox
              className="w-full max-w-[400px] aspect-square"
              bgColor={backgroundColor}
              strokeColor={headingColor}
              labelColor={textColor}
              markerLon={markerLon}
              markerLat={markerLat}
              markerLabel={markerLabel}
              centerLon={centerLon}
              centerLat={centerLat}
              mapZoom={mapZoom}
              markerStyle={markerStyle}
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-bold tracking-tight" style={{ fontFamily: "'UDC Working Man Sans', sans-serif", color: headingColor, fontSize: 'clamp(1.75rem, 3vw, 3rem)' }}>
              {heading}
            </h2>
            {body.split('\n\n').map((paragraph, i) => (
              <p key={i} className="leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', color: textColor, fontSize: 'clamp(1rem, 1.2vw, 1.25rem)' }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
