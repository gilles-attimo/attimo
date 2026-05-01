import { useState } from "react";

const timelineSteps = [
  { id: 1, title: "What are Polyphenols?", content: "Polyphenols are an umbrella group—kind of like 'vitamins.' Different types have different structures and effects on the body.", visual: "🍃", color: "emerald" },
  { id: 2, title: "8,000+ Types", content: "Polyphenols are micronutrients found in plants. There are over 8,000 types—each with a unique chemical structure.", visual: "🌿", color: "green" },
  { id: 3, title: "Health Benefits", content: "Some support heart health, others reduce inflammation. The key is getting the right types in meaningful amounts.", visual: "❤️", color: "red" },
  { id: 4, title: "Most Oils: 180mg", content: "Average olive oil contains just 180 mg/kg. Even premium brands rarely exceed 400 mg/kg. EU health claim requires 250 mg/kg minimum.", visual: "📉", color: "amber" },
  { id: 5, title: "Our Oil: 904mg", content: "Our olive oil delivers 904 mg/kg of polyphenols—over 3x higher than premium oils. Fresh-pressed, single-grove, lab-tested.", visual: "🏆", color: "emerald" }
];

const getColorClasses = (color: string, active: boolean) => {
  const colorMap = {
    emerald: active ? 'bg-emerald-500 text-white' : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200',
    green: active ? 'bg-green-500 text-white' : 'bg-green-100 text-green-700 hover:bg-green-200',
    red: active ? 'bg-red-500 text-white' : 'bg-red-100 text-red-700 hover:bg-red-200',
    amber: active ? 'bg-amber-500 text-white' : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
  };
  return colorMap[color as keyof typeof colorMap];
};

export const PolyphenolTimeline = () => {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = timelineSteps.find(step => step.id === activeStep) || timelineSteps[0];

  return (
    <section className="py-14 md:py-20 lg:py-24" style={{ backgroundColor: '#FFFAEA' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
            Polyphenol <span className="font-medium text-emerald-600">Journey</span>
          </h2>
           <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
             Navigate through the timeline to explore how polyphenols work and why our oil is different.
           </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100" style={{ backgroundColor: '#FFFAEA' }}>
            <div className="text-center">
              <div className="text-6xl mb-6">{currentStep.visual}</div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">{currentStep.title}</h3>
               <p className="text-lg md:text-xl text-slate-600 leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                 {currentStep.content}
               </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 rounded-full -translate-y-1/2"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-emerald-500 rounded-full -translate-y-1/2 transition-all duration-500 ease-out"
              style={{ width: `${((activeStep - 1) / (timelineSteps.length - 1)) * 100}%` }}
            ></div>
            <div className="relative flex justify-between items-center">
              {timelineSteps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center">
                  <button
                    onClick={() => setActiveStep(step.id)}
                    className={`w-16 h-16 rounded-full border-4 border-white shadow-lg transition-all duration-300 z-10 flex items-center justify-center text-2xl ${
                      getColorClasses(step.color, activeStep === step.id)
                    } ${activeStep === step.id ? 'scale-110 shadow-xl' : 'hover:scale-105'}`}
                  >
                    {step.visual}
                  </button>
                  <div className="mt-4 text-center max-w-32">
                    <div className={`text-sm font-medium transition-colors duration-300 ${activeStep === step.id ? 'text-slate-800' : 'text-slate-500'}`}>
                      Step {step.id}
                    </div>
                    <div className={`text-xs mt-1 transition-colors duration-300 ${activeStep === step.id ? 'text-emerald-600' : 'text-slate-400'}`}>
                      {step.title.split(' ').slice(0, 2).join(' ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex items-center justify-center space-x-4">
              <button onClick={() => setActiveStep(Math.max(1, activeStep - 1))} disabled={activeStep === 1} className="px-6 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200">
                Previous
              </button>
              <span className="text-slate-500 text-sm">{activeStep} of {timelineSteps.length}</span>
              <button onClick={() => setActiveStep(Math.min(timelineSteps.length, activeStep + 1))} disabled={activeStep === timelineSteps.length} className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
