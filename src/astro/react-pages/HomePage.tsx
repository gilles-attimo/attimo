import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { aggregateRating, reviews } from "@/lib/reviewSchema";
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
}

function HomePageInner({ initialPosts }: InnerProps) {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Attimo Olive Oil",
      url: "https://attimo-oil.com",
      aggregateRating,
      review: reviews,
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(orgSchema);
    document.head.appendChild(script);
    return () => {
      try {
        document.head.removeChild(script);
      } catch {}
    };
  }, []);

  return (
    <div className="min-h-screen overflow-y-scroll h-screen" style={{ backgroundColor: "#FFFAEA" }}>
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <Hero onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <OilProductWidgets />
      <IndustryProblem />
      <KleiaWay />
      <OilComparison />
      <Testimonials />
      <PolyphenolComparison />
      <FAQ />
      <BlogSection initialPosts={initialPosts} />
      <Footer />
      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      <Sonner />
    </div>
  );
}

export default function HomePage({ initialPosts }: { initialPosts?: InitialPost[] }) {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePageInner initialPosts={initialPosts} />
    </QueryClientProvider>
  );
}
