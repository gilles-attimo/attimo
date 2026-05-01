import { useState, useCallback } from "react";
import { quizQuestions, calculateResults, type OilResult } from "@/lib/quizData";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { Link } from "@/lib/router-stub";

import bottleCoratina from "@/assets/bottle-coratina.jpg?url";
import bottlePicual from "@/assets/bottle-picual.jpg?url";
import bottleNocellara from "@/assets/bottle-nocellara.jpg?url";

const bottleImages: Record<string, string> = {
  coratina: bottleCoratina,
  picual: bottlePicual,
  nocellara: bottleNocellara,
};

// ── Question Step ────────────────────────────────────────────────────────

function QuestionStep({
  question,
  selectedIndex,
  onSelect




}: {question: (typeof quizQuestions)[0];selectedIndex: number | undefined;onSelect: (idx: number) => void;}) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <p className="text-sm font-working-man tracking-[0.25em] uppercase text-olive-medium mb-3">
        {question.category}
      </p>
      <h2 className="font-sans text-3xl md:text-4xl font-light text-olive-dark leading-snug mb-8">
        {question.question}
      </h2>

      <div className="flex flex-col gap-3">
        {question.options.map((option, idx) => {
          const isSelected = selectedIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => onSelect(idx)}
              className={`
                text-left px-5 py-4 rounded-lg border transition-all duration-300
                ${
              isSelected ?
              "border-olive-dark bg-olive-dark text-primary-foreground shadow-md" :
              "border-border bg-card hover:border-olive-medium hover:shadow-sm"}
              `
              }>
              
              <span className={`block font-sans font-medium text-lg ${isSelected ? "text-primary-foreground" : "text-olive-dark"}`}>
                {option.label}
              </span>
              {option.description &&
              <span className={`block text-base mt-0.5 ${isSelected ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {option.description}
                </span>
              }
            </button>);

        })}
      </div>
    </div>);

}

// ── Results Screen ───────────────────────────────────────────────────────

function ResultsScreen({
  results,
  onRestart



}: {results: OilResult[];onRestart: () => void;}) {
  const topMatch = results[0];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-600">
      {/* Title */}
      <h2 className="font-sans text-3xl md:text-4xl font-light text-olive-dark leading-snug mb-8">
        Your match is <span className="font-beverly text-4xl md:text-[2.75rem]">{topMatch.name}</span>
      </h2>

      {/* Match bars */}
      <div className="flex flex-col gap-5 mb-8">
        {results.map((oil) =>
        <div key={oil.key}>
            <div className="flex items-baseline justify-between mb-1.5">
              <span className="font-sans font-medium text-lg text-olive-dark">
                {oil.name}
              </span>
              <span className="text-xl font-sans font-medium text-olive-dark tabular-nums">
                {oil.percentage}%
              </span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-secondary overflow-hidden">
              <div
              className="h-full rounded-full bg-olive-dark transition-all duration-700 ease-out"
              style={{ width: `${oil.percentage}%` }} />
            </div>
          </div>
        )}
      </div>

      {/* Bottle image — matches homepage product card styling */}
      <div className="flex justify-center mb-8">
        <div
          className="relative rounded-2xl overflow-hidden aspect-[3/4] w-full max-w-sm"
          style={{ backgroundColor: "#1B4229" }}>
          <div
            className="absolute inset-0 opacity-[0.04] z-[1]"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 30% 20%, #FFFAEA 0.5px, transparent 0.5px), radial-gradient(ellipse at 70% 80%, #FFFAEA 0.3px, transparent 0.3px)",
              backgroundSize: "18px 18px, 14px 14px"
            }} />
          <img
            src={bottleImages[topMatch.key]}
            alt={topMatch.name}
            className="w-full h-full object-cover relative z-[2] scale-[1.25]" />
        </div>
      </div>

      {/* Top match summary */}
      <div className="text-center mb-8">
        <p className="text-sm font-working-man tracking-[0.25em] uppercase text-olive-medium mb-2">
          Why {topMatch.name}?
        </p>
        <p className="text-base text-foreground/80 leading-relaxed max-w-md mx-auto">
          {topMatch.summary}
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button asChild variant="hero" className="flex-1 rounded-md px-8 py-4 shadow-none hover:shadow-none hover:translate-y-0">
          <Link to={`/product/${topMatch.key}`}>
            Shop {topMatch.name}
          </Link>
        </Button>
        <Button
          variant="outline"
          onClick={onRestart}
          className="gap-2 rounded-md px-8 py-4">
          <RotateCcw className="w-4 h-4" />
          Retake Quiz
        </Button>
      </div>
    </div>);

}

// ── Main Quiz Component ──────────────────────────────────────────────────

export function PalateQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [results, setResults] = useState<OilResult[] | null>(null);

  const totalQuestions = quizQuestions.length;
  const currentQuestion = quizQuestions[currentStep];
  const progressValue = results ?
  100 :
  currentStep / totalQuestions * 100;

  const handleSelect = useCallback(
    (idx: number) => {
      setAnswers((prev) => ({ ...prev, [currentQuestion.id]: idx }));
    },
    [currentQuestion]
  );

  const goNext = useCallback(() => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      setResults(calculateResults(answers));
    }
  }, [currentStep, totalQuestions, answers]);

  const goBack = useCallback(() => {
    if (results) {
      setResults(null);
      return;
    }
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  }, [currentStep, results]);

  const restart = useCallback(() => {
    setCurrentStep(0);
    setAnswers({});
    setResults(null);
  }, []);

  const canProceed = answers[currentQuestion?.id] !== undefined;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FFFAEA" }}>
      {/* Header bar */}
      <div className="w-full border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-base text-muted-foreground hover:text-olive-dark transition-colors">
            
            ← Back to ATTIMO
          </Link>
          <span className="text-sm font-working-man tracking-[0.2em] uppercase text-olive-medium">
            {results ? "Results" : `${currentStep + 1} / ${totalQuestions}`}
          </span>
        </div>
        <Progress value={progressValue} className="h-1 rounded-none" />
      </div>

      {/* Body */}
      <div className="flex-1 flex items-start justify-center px-6 py-12 md:py-20">
        <div className="w-full max-w-xl">
          {currentStep === 0 && !results &&
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">Answer a few quick questions to find out which of our three single-variety oils matches you best.


          </p>
          }

          {results ?
          <ResultsScreen results={results} onRestart={restart} /> :

          <>
              <QuestionStep
              key={currentQuestion.id}
              question={currentQuestion}
              selectedIndex={answers[currentQuestion.id]}
              onSelect={handleSelect} />
            

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10">
                <Button
                variant="ghost"
                onClick={goBack}
                disabled={currentStep === 0}
                className="gap-1.5 text-muted-foreground">
                
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
                <Button
                variant="hero"
                onClick={goNext}
                disabled={!canProceed}
                className="gap-1.5">
                
                  {currentStep === totalQuestions - 1 ? "See Results" : "Next"}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </>
          }
        </div>
      </div>
    </div>);

}