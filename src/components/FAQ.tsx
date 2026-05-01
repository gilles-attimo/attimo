import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ReactNode } from "react";
import { Link } from "@/lib/router-stub";

interface FaqItem {
  question: string;
  answer: string | null;
  answerElement?: ReactNode;
}

const originAnswers: Record<string, string> = {
  coratina:
    "ATTIMO Coratina is directly sourced from a small family grove in Puglia, Italy — the country's largest olive oil producing region, known for its centuries-old trees and exceptional quality.",
  nocellara:
    "ATTIMO Nocellara is directly sourced from a small family grove in the Belice Valley, Sicily — a region renowned for its mineral-rich soils and ideal Mediterranean growing conditions.",
  picual:
    "ATTIMO Picual is directly sourced from a small family grove in Jaén, Spain — the world's largest olive oil producing region, where Picual has been cultivated for centuries.",
};

const flavorAnswers: Record<string, string> = {
  coratina:
    "Coratina is one of the most intensely flavoured olive varieties. Expect bold notes of fresh herbs, artichoke and black pepper, with an ultra-high polyphenol kick and a dry, lingering finish. It's the olive oil aficionados take by the spoon.",
  nocellara:
    "Nocellara produces a gentle, fruity oil with notes of fresh tomato, almond, and green apple. It's smooth and approachable with a mild peppery finish — perfect for those who prefer a softer flavour profile.",
  picual:
    "Picual delivers a robust, grassy oil with notes of fresh-cut herbs, fig leaf, and a clean peppery finish. It's a versatile all-rounder, packed with polyphenols and perfect for everyday use.",
};

const useAnswers: Record<string, string> = {
  coratina:
    "Coratina is best used as a finishing oil to get the most from its bold flavour and health benefits. Drizzle it over steak, grilled vegetables, hearty soups, bruschetta, or even ice cream. It's best enjoyed raw or added after cooking, as high heat can break down the polyphenols.",
  nocellara:
    "Nocellara is a versatile everyday oil. Drizzle it over salads, fish, pasta, and fresh bread. Its gentle character makes it great for lighter dishes where you want flavour without overpowering the food. Best enjoyed raw or added after cooking.",
  picual:
    "Picual is a brilliant all-rounder. Use it to finish roasted vegetables, drizzle over hummus, dress grains and legumes, or dip with crusty bread. Its robust character holds up well, but it's best enjoyed raw or added after cooking to preserve the polyphenols.",
};

function getFaqs(handle?: string): FaqItem[] {
  const h = handle || "";

  return [
    {
      question: "What makes ATTIMO olive oil different?",
      answer:
        "ATTIMO sources directly from single groves, ensuring every bottle comes from the latest harvest with no blending or middlemen. Each bottle is lab-tested for quality markers like polyphenol content, giving you the real, health-boosting extra virgin olive oil most people have never tasted.",
    },
    {
      question: "Where does this olive oil come from?",
      answer:
        originAnswers[h] ||
        "ATTIMO sources from small, family-owned groves in Mediterranean regions known for exceptional olive oil. Each bottle comes from a single grove and is never blended, so you can trace exactly where your oil was produced.",
    },
    {
      question: h ? `What does ATTIMO ${h.charAt(0).toUpperCase() + h.slice(1)} taste like?` : "What does it taste like?",
      answer:
        flavorAnswers[h] ||
        "That bitterness and peppery kick come from polyphenols; the compounds that make olive oil healthy. Most people are used to bland, over-processed oils. Real extra virgin should have character: it's intense, fresh, and complex.",
    },
    {
      question: "What are polyphenols and why do they matter?",
      answer: null,
      answerElement: (
        <>
          Polyphenols are natural compounds in olive oil that provide the health benefits you've heard about—anti-inflammatory properties, heart health support, and antioxidant protection. Most store-bought oils have low polyphenol levels due to processing and blending. ATTIMO oils are high in polyphenols because they're fresh, unblended, and from quality sources.{" "}
          <Link
            to="/blog/polyphenols-in-olive-oil-explained"
            className="underline hover:no-underline"
            style={{ color: "#1B4229" }}
          >
            Learn more about polyphenols
          </Link>
          .
        </>
      ),
    },
    {
      question: "How fresh is the olive oil?",
      answer:
        "Every bottle is from the latest harvest and bottled quickly to preserve freshness. Unlike mass-produced oils that can sit for months or years, ATTIMO delivers oil within months of harvest. This ensures you get maximum flavour and health benefits.",
    },
    {
      question: "Can I see the lab results?",
      answer: h ? null : "Absolutely. Every batch of ATTIMO oil is independently lab tested by a third party, and the full results are available on each product page. We test for polyphenol content, acidity, peroxide values and more. We believe in complete transparency — you should always be able to verify the quality of what you're putting on your plate.",
      answerElement: h ? (() => {
        const labUrls: Record<string, string> = {
          coratina: "/lab/Coratina2025.pdf",
          nocellara: "/lab/Nocellara2025.pdf",
          picual: "/lab/Picual2025.pdf",
        };
        const labUrl = labUrls[h];
        const varietyName = h.charAt(0).toUpperCase() + h.slice(1);
        return (
          <>
            Yes. Every batch is third-party lab tested, and you can verify the quality markers yourself. We believe in complete transparency — you should know exactly what you're getting.{" "}
            <a
              href={labUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
              style={{ color: "#1B4229" }}
            >
              View lab results for {varietyName}
            </a>
            .
          </>
        );
      })() : undefined,
    },
    {
      question: "How should I use this olive oil?",
      answer: null,
      answerElement: (
        <>
          {useAnswers[h] ||
            "Use ATTIMO as a finishing oil to get the most from its flavour and health benefits. Drizzle it over salads, cooked vegetables, pasta, bread, or grilled meats. It's best enjoyed raw or added after cooking, as high heat can break down the polyphenols that make it special."}{" "}
          <Link
            to="/blog/should-you-cook-with-olive-oil"
            className="underline hover:no-underline"
            style={{ color: "#1B4229" }}
          >
            Read more about cooking with olive oil
          </Link>
          .
        </>
      ),
    },
    {
      question: "How should I store my olive oil?",
      answer:
        "Keep it in a cool, dark place away from heat and light. Once opened, use it within a few months for optimal freshness. The compounds that make it healthy break down over time, so fresher is always better.",
    },
    {
      question: "Can I change or cancel my order?",
      answer: null,
      answerElement: (
        <>
          Orders can be changed or cancelled before they are fulfilled. Once your order has shipped, we're unable to make changes. To request a change or cancellation, contact us as soon as possible at{" "}
          <a href="mailto:hello@attimo-oil.com" className="underline hover:no-underline" style={{ color: "#1B4229" }}>
            hello@attimo-oil.com
          </a>
          . Once your order ships you'll receive a tracking link by email so you can follow your delivery.
        </>
      ),
    },
    {
      question: "Is your olive oil organic?",
      answer:
        "Our Coratina is certified organic. For our other oils, organic certification isn't the primary lens we use — we care deeply about how olives are grown and processed, prioritising low-intervention farming, early harvest, and quality above all. Certified or not, we hold every oil to the same high standards.",
    },
    {
      question: "Do you sell wholesale or to restaurants?",
      answer: null,
      answerElement: (
        <>
          Yes — we work with restaurants, delis, specialty food shops, hotels, and other businesses, whether you're looking to serve it at the table, use it in the kitchen, or stock it on your shelves. Reach out via our{" "}
          <Link to="/contact" className="underline hover:no-underline" style={{ color: "#1B4229" }}>
            contact form
          </Link>
          {" "}or write directly to{" "}
          <a href="mailto:hello@attimo-oil.com" className="underline hover:no-underline" style={{ color: "#1B4229" }}>
            hello@attimo-oil.com
          </a>
          {" "}and we'll take it from there.
        </>
      ),
    },
    {
      question: "Where do you ship and how much does it cost?",
      answer: null,
      answerElement: (
        <>
          We ship across the European Union, from Belgium and the Netherlands to Finland and Portugal. Shipping starts at €7 for core countries and goes up to €22 for more remote destinations — but most orders qualify for free shipping when you order 2–4 bottles depending on your location. Orders placed today ship tomorrow, and delivery takes 2–7 business days depending on where you are.{" "}
          <a
            href="/shipping"
            className="underline hover:no-underline"
            style={{ color: "#1B4229" }}
          >
            View full shipping details
          </a>
          .
        </>
      ),
    },
  ];
}

interface FAQProps {
  handle?: string;
}

export const FAQ = ({ handle }: FAQProps) => {
  const faqs = getFaqs(handle);

  return (
    <section className="pt-[35px] md:pt-[51px] lg:pt-[62px] pb-14 md:pb-20 lg:pb-24" style={{ backgroundColor: "#FFFAEA" }}>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-beverly font-bold mb-4 tracking-tight" style={{ color: "#1B4229", fontSize: "clamp(2.2rem, 3.64vw, 4.1rem)" }}>
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-2xl px-6 overflow-hidden" style={{ borderColor: "#1B4229", backgroundColor: "white" }}>
              <AccordionTrigger className="text-left font-medium py-6 hover:no-underline" style={{ color: "#1B4229", fontSize: "clamp(1rem, 1.3vw, 1.5rem)" }}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 leading-relaxed" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229", fontSize: "clamp(0.875rem, 1.1vw, 1.25rem)" }}>
                {faq.answerElement || faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
