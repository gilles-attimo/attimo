import { Beaker } from "lucide-react";

interface ProductLabTrustProps {
  content: {
    heading: string;
    subheading: string;
    values: Array<{ label: string; value: string; unit: string; standard: string; description: string }>;
  };
  labReportUrl?: string;
}

export const ProductLabTrust = ({ content, labReportUrl }: ProductLabTrustProps) => {
  const { heading, subheading, values: labValues } = content;
  return (
    <section className="pt-14 md:pt-20 lg:pt-24 pb-[35px] md:pb-[51px] lg:pb-[62px]" style={{ backgroundColor: '#FFFAEA' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            {/* Mobile: heading + small flask row, then paragraph below */}
            <div className="md:hidden">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h2 className="font-working-man font-bold text-olive-dark tracking-tight" style={{ fontSize: 'clamp(1.75rem, 3vw, 3rem)' }}>{heading}</h2>
                <img src="/icons/flask.svg" alt="Lab flask" className="flex-shrink-0 w-[100px] h-[100px]" />
              </div>
              <p className="text-olive-medium leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1rem, 1.2vw, 1.25rem)' }}>{subheading}</p>
              {labReportUrl && (
                <a
                  href={labReportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-olive-dark underline underline-offset-4 decoration-olive-dark/40 transition-opacity hover:opacity-70"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.95rem, 1.1vw, 1.15rem)' }}
                >
                  <Beaker size={18} />
                  View lab results
                </a>
              )}
            </div>
            {/* Desktop: original layout — heading + subheading left, flask right */}
            <div className="hidden md:flex items-start justify-between gap-8">
              <div className="max-w-3xl">
                <h2 className="font-working-man font-bold text-olive-dark mb-4 tracking-tight" style={{ fontSize: 'clamp(1.75rem, 3vw, 3rem)' }}>{heading}</h2>
                <p className="text-olive-medium leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1rem, 1.2vw, 1.25rem)' }}>{subheading}</p>
              {labReportUrl && (
                <a
                  href={labReportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-olive-dark underline underline-offset-4 decoration-olive-dark/40 transition-opacity hover:opacity-70"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.95rem, 1.1vw, 1.15rem)' }}
                >
                  <Beaker size={18} />
                  View lab results
                </a>
              )}
              </div>
              <img src="/icons/flask.svg" alt="Lab flask" className="flex-shrink-0" style={{ width: '230px', height: '230px' }} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {labValues.map((item, index) => (
              <div key={index} className="rounded-xl p-4" style={{ backgroundColor: 'rgba(27, 66, 41, 0.05)' }}>
                <p className="text-olive-medium uppercase tracking-widest mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.75rem, 0.9vw, 0.95rem)' }}>
                  {item.label}{item.value === '—' && <span className="italic normal-case tracking-normal text-olive-medium/60 ml-2">(Waiting for results)</span>}
                </p>
                <p className="text-olive-dark font-bold flex items-baseline gap-2" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(1.6rem, 2.1vw, 2.3rem)' }}>
                  <span>
                    {item.value}
                    {item.value !== '—' && item.unit && <span className="text-olive-medium font-normal ml-1" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.05rem)' }}>{item.unit}</span>}
                  </span>
                  <span className="text-olive-light font-normal" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.8rem, 0.9vw, 0.95rem)' }}>
                    {item.standard}
                  </span>
                </p>
                {item.description && (
                  <p className="text-olive-medium mt-1.5" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.8rem, 0.9vw, 0.95rem)' }}>
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
