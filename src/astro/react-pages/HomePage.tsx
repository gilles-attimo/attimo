import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OilProductWidgets } from "@/components/OilProductWidgets";
import { IndustryProblem } from "@/components/IndustryProblem";
import { KleiaWay } from "@/components/KleiaWay";
import { PolyphenolComparison } from "@/components/PolyphenolComparison";
import { OilComparison } from "@/components/OilComparison";
import { Testimonials } from "@/components/Testimonials";
import { BlogSection } from "@/components/BlogSection";
import { FAQ } from "@/components/FAQ";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 60_000, refetchOnWindowFocus: false } } });

interface InitialPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  coverImage: any;
}

interface InnerProps {
  initialPosts?: InitialPost[];
  locale?: Locale;
}

function HomePageInner({ initialPosts, locale = DEFAULT_LOCALE }: InnerProps) {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-y-scroll h-screen" style={{ backgroundColor: "#FFFAEA" }}>
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} locale={locale} />
      <Hero onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <OilProductWidgets locale={locale} />
      <IndustryProblem />
      <KleiaWay />
      <OilComparison />
      <Testimonials />
      <PolyphenolComparison />
      <FAQ />
      <BlogSection initialPosts={initialPosts} />
      <Footer locale={locale} />
      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      <Sonner />
    </div>
  );
}

export default function HomePage({ initialPosts, locale }: { initialPosts?: InitialPost[]; locale?: Locale }) {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePageInner initialPosts={initialPosts} locale={locale} />
    </QueryClientProvider>
  );
}
