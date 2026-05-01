import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Truck, Package, ShieldCheck, Clock } from "lucide-react";

const tiers = [
  {
    name: "Core",
    countries: ["Belgium", "Germany", "Luxembourg", "Netherlands"],
    shippingCost: "€7",
    freeFrom: "2 bottles",
    delivery: "2–3 business days",
    highlight: true,
  },
  {
    name: "Tier 1",
    countries: [
      "Austria", "Bulgaria", "Croatia", "Czechia", "Denmark",
      "France", "Hungary", "Liechtenstein", "Malta", "Poland",
      "Slovakia", "Slovenia",
    ],
    shippingCost: "€11",
    freeFrom: "2 bottles",
    delivery: "3–5 business days",
  },
  {
    name: "Tier 2",
    countries: [
      "Estonia", "Ireland", "Italy", "Latvia",
      "Lithuania", "Spain", "Sweden",
    ],
    shippingCost: "€19",
    freeFrom: "3 bottles",
    delivery: "4–6 business days",
  },
  {
    name: "Tier 3",
    countries: ["Finland", "Greece", "Portugal", "Romania"],
    shippingCost: "€22",
    freeFrom: "4 bottles",
    delivery: "5–7 business days",
  },
];

const ShippingPage = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  useEffect(() => { document.title = 'Shipping | ATTIMO Specialty Extra Virgin Olive Oil'; return () => { document.title = 'ATTIMO Specialty Extra Virgin Olive Oil'; }; }, []);

  return (
    <div className="min-h-screen overflow-y-scroll h-screen" style={{ backgroundColor: "#FFFAEA" }}>
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} forceScrolled />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229" }}
            >
              Shipping Information
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229", opacity: 0.7 }}
            >
              We ship across the European Union. The more you order, the less you pay for shipping — or nothing at all.
            </p>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {[
              { icon: Clock, label: "Order today, ships tomorrow" },
              { icon: Truck, label: "Free shipping on multi-bottle orders" },
              { icon: Package, label: "Carefully packed for safe delivery" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl px-5 py-4"
                style={{ backgroundColor: "#1B4229" }}
              >
                <Icon size={22} strokeWidth={1.5} style={{ color: "#B3E58C" }} />
                <span
                  className="text-sm font-medium"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#FFFAEA" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Shipping tiers */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-semibold mb-8"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229" }}
            >
              Shipping rates & free shipping thresholds
            </h2>

            <div className="space-y-4">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="rounded-2xl border-2 overflow-hidden"
                  style={{
                    borderColor: tier.highlight ? "#1B4229" : "rgba(27,66,41,0.15)",
                    backgroundColor: tier.highlight ? "#1B4229" : "rgba(27,66,41,0.04)",
                  }}
                >
                  <div className="p-5 md:p-6">
                    {/* Top row */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span
                          className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full"
                          style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            backgroundColor: tier.highlight ? "#B3E58C" : "rgba(27,66,41,0.1)",
                            color: "#1B4229",
                          }}
                        >
                          {tier.name}
                        </span>
                        <span
                          className="text-sm"
                          style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            color: tier.highlight ? "#FFFAEA" : "#1B4229",
                            opacity: 0.7,
                          }}
                        >
                          Est. {tier.delivery}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span
                          className="text-sm"
                          style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            color: tier.highlight ? "rgba(255,250,234,0.6)" : "rgba(27,66,41,0.5)",
                          }}
                        >
                          Standard: {tier.shippingCost}
                        </span>
                        <span
                          className="text-sm font-bold px-3 py-1 rounded-full"
                          style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            backgroundColor: "#CDDB2D",
                            color: "#1B4229",
                          }}
                        >
                          FREE from {tier.freeFrom}
                        </span>
                      </div>
                    </div>

                    {/* Countries */}
                    <div className="flex flex-wrap gap-2">
                      {tier.countries.map((country) => (
                        <span
                          key={country}
                          className="text-sm px-3 py-1 rounded-full"
                          style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            backgroundColor: tier.highlight
                              ? "rgba(179,229,140,0.15)"
                              : "rgba(27,66,41,0.06)",
                            color: tier.highlight ? "#B3E58C" : "#1B4229",
                          }}
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p
              className="mt-4 text-sm italic"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229", opacity: 0.5 }}
            >
              Shipping costs are automatically calculated at checkout based on your delivery country.
            </p>
          </section>

          {/* Processing & delivery */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-semibold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229" }}
            >
              Processing & delivery
            </h2>
            <div
              className="space-y-4 leading-relaxed"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229", opacity: 0.8 }}
            >
              <p>
                Orders placed before the end of the day are packed and shipped the following business day. You'll receive a tracking link by email as soon as your order leaves our facility.
              </p>
              <p>
                Delivery times depend on your location. Most Core countries (Belgium, Germany, Luxembourg, Netherlands) receive their order within 2–3 business days. For other EU destinations, expect 3–7 business days depending on the carrier and destination.
              </p>
            </div>
          </section>

          {/* Returns & damages */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-semibold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229" }}
            >
              Returns & damages
            </h2>
            <div
              className="space-y-4 leading-relaxed"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229", opacity: 0.8 }}
            >
              <p>
                Because olive oil is a food product, it is exempt from the standard EU 14-day right of withdrawal under the Consumer Rights Directive. We do not accept returns on opened or undamaged products.
              </p>
              <div
                className="rounded-xl p-5 flex items-start gap-3"
                style={{ backgroundColor: "rgba(27,66,41,0.06)" }}
              >
                <ShieldCheck size={22} strokeWidth={1.5} style={{ color: "#1B4229", flexShrink: 0, marginTop: 2 }} />
                <p className="text-sm" style={{ opacity: 1 }}>
                  <strong>Damaged in transit?</strong> If your order arrives damaged or defective, contact us within 14 days at{" "}
                  <a
                    href="mailto:hello@attimo-oil.com"
                    className="underline font-medium"
                    style={{ color: "#1B4229" }}
                  >
                    hello@attimo-oil.com
                  </a>{" "}
                  with a photo of the damage. We'll arrange a replacement or full refund — no hassle.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section
            className="rounded-2xl p-6 md:p-8 text-center"
            style={{ backgroundColor: "#1B4229" }}
          >
            <h3
              className="text-xl font-semibold mb-2"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#FFFAEA" }}
            >
              Questions about your order?
            </h3>
            <p
              className="text-sm mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#B3E58C" }}
            >
              We're here to help. Reach out anytime.
            </p>
            <a
              href="mailto:hello@attimo-oil.com"
              className="inline-block text-sm font-bold px-6 py-3 rounded-xl transition-opacity hover:opacity-90"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                backgroundColor: "#CDDB2D",
                color: "#1B4229",
              }}
            >
              hello@attimo-oil.com
            </a>
          </section>
        </div>
      </main>

      <Footer />
      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
};

export default ShippingPage;
