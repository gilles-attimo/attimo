import { Check, X } from "lucide-react";

const getComparisonData = (polyphenolValue: string) => [
  { feature: "FRESH", attimo: { type: "check" }, them: { type: "text", value: "No, mixed with old oils" } },
  { feature: "EARLY HARVEST", attimo: { type: "check" }, them: { type: "cross" } },
  { feature: "SINGLE SOURCE", attimo: { type: "check" }, them: { type: "text", value: "Oil blended from 3+ countries" } },
  { feature: "TRACEABLE", attimo: { type: "check" }, them: { type: "cross" } },
  { feature: "LAB-TESTED", attimo: { type: "check" }, them: { type: "cross" } },
  { feature: "POLYPHENOLS", attimo: { type: "text", value: polyphenolValue }, them: { type: "text", value: "120-210 mg/kg" } },
];

interface OilComparisonProps {
  columnHeading?: string;
  polyphenolDisplay?: string;
}

export const OilComparison = ({ columnHeading = "ATTIMO", polyphenolDisplay = "400-900 mg/kg" }: OilComparisonProps) => {
  const comparisonData = getComparisonData(polyphenolDisplay);

  return <section className="pt-[35px] md:pt-[51px] lg:pt-[62px] pb-14 md:pb-20 lg:pb-24 snap-start" style={{ backgroundColor: '#FFFAEA' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', color: '#1B4229', fontSize: 'clamp(2.5rem, 4vw, 4.5rem)' }}>
              ATTIMO <span style={{ fontFamily: 'Beverly Drive, cursive' }}>vs</span> Others
            </h2>
          </div>
          <div>
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ borderBottom: '2px dashed #1B4229' }}>
                  <th className="py-3 px-2 md:py-6 md:px-8 text-left"></th>
                  <th className="py-3 px-2 md:py-6 md:px-8 text-center font-bold font-working-man" style={{ color: '#1B4229', backgroundColor: '#B3E58C', fontSize: 'clamp(1rem, 1.8vw, 2rem)' }}>{columnHeading}</th>
                  <th className="py-3 px-2 md:py-6 md:px-8 text-center font-bold" style={{ color: '#1B4229', fontSize: 'clamp(0.875rem, 1.8vw, 2rem)' }}>Supermarket EVOO</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => <tr key={index} style={{ borderBottom: index < comparisonData.length - 1 ? '1px dashed #1B4229' : 'none' }}>
                    <td className="py-3 px-2 md:py-6 md:px-8 font-working-man" style={{ color: '#1B4229', fontSize: 'clamp(0.75rem, 1.3vw, 1.5rem)' }}>{row.feature}</td>
                    <td className="py-3 px-2 md:py-6 md:px-8 text-center" style={{ backgroundColor: '#B3E58C' }}>
                      {row.attimo.type === "check" ? <div className="flex justify-center"><div className="w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A431D' }}><Check className="w-4 h-4 md:w-6 md:h-6" style={{ color: '#B3E58C' }} strokeWidth={3} /></div></div> : <span className="font-medium" style={{ color: '#1B4229', fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.75rem, 1.2vw, 1.375rem)' }}>{row.attimo.value}</span>}
                    </td>
                    <td className="py-3 px-2 md:py-6 md:px-8 text-center">
                      {row.them.type === "cross" ? <div className="flex justify-center"><div className="w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E53935' }}><X className="w-4 h-4 md:w-6 md:h-6 text-white" strokeWidth={3} /></div></div> : <span className="font-medium text-xs md:text-base" style={{ color: '#1B4229', fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.625rem, 1.2vw, 1.375rem)' }}>{row.them.value}</span>}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>;
};
