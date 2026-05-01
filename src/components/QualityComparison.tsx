import { CheckCircle, X } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const comparisonData = [
  {
    category: "FRESH",
    us: true,
    supermarket: "no, mixed with old oils"
  },
  {
    category: "SINGLE SOURCE", 
    us: true,
    supermarket: "no, blended from multiple countries"
  },
  {
    category: "TRACEABLE",
    us: true,
    supermarket: false
  },
  {
    category: "LAB-TESTED",
    us: true,
    supermarket: false
  },
  {
    category: "POLYPHENOLS",
    us: "High (lab verified)",
    supermarket: "Usually low/unknown"
  }
];

export const QualityComparison = () => {
  return (
    <section className="py-14 md:py-20 lg:py-24" style={{ backgroundColor: '#FFFAEA' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-olive-dark mb-6 tracking-tight">
            CURATED SELECTION<br />
            <span className="text-olive-medium">VS SUPERMARKET</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-xl">
            <CardHeader className="bg-gradient-to-r from-gold-rich to-gold-light text-olive-dark">
              <div className="grid grid-cols-3 gap-4 text-center font-bold text-xl">
                <div></div>
                <div>OUR OILS</div>
                <div>SUPERMARKET</div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {comparisonData.map((row, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-3 gap-4 p-6 border-b border-gray-100`}
                  style={{ backgroundColor: '#FFFAEA' }}
                >
                  <div className="font-bold text-olive-dark text-lg flex items-center">
                    {row.category}
                  </div>
                  <div className="flex items-center justify-center">
                    {typeof row.us === 'boolean' ? (
                      row.us ? (
                        <CheckCircle className="text-olive-dark" size={32} />
                      ) : (
                        <X className="text-red-500" size={32} />
                      )
                    ) : (
                      <span className="font-bold text-olive-dark text-lg">{row.us}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    {typeof row.supermarket === 'boolean' ? (
                      row.supermarket ? (
                        <CheckCircle className="text-olive-dark" size={32} />
                      ) : (
                        <X className="text-red-500" size={32} />
                      )
                    ) : (
                      <span className="text-gray-600 text-lg">{row.supermarket}</span>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};