import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";
import { WaitlistForm } from "@/components/WaitlistForm";

const TermsOfService = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  useEffect(() => { document.title = 'Terms of Service | ATTIMO Specialty Extra Virgin Olive Oil'; return () => { document.title = 'ATTIMO Specialty Extra Virgin Olive Oil'; }; }, []);

  return (
    <div className="min-h-screen overflow-y-scroll h-screen" style={{ backgroundColor: '#FFFAEA' }}>
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} forceScrolled />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#1B4229' }}>
            Terms of Service
          </h1>
          <p className="text-sm mb-12" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#1B4229', opacity: 0.6 }}>
            Last updated: March 2026
          </p>

          <div className="space-y-10" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#1B4229' }}>

            <section>
              <h2 className="text-2xl font-semibold mb-3">About ATTIMO</h2>
              <p className="leading-relaxed opacity-80">
                ATTIMO is an online olive oil shop operated by Ablaze Growth Studio CV, a company registered in Belgium at Gelijkheidstraat 5, 2018 Antwerp (VAT: BE0732.647.334). By placing an order or using our website, you agree to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Products and pricing</h2>
              <p className="leading-relaxed opacity-80">
                All prices on our website are listed in euros (EUR) and include VAT. We take care to ensure product descriptions and prices are accurate, but we reserve the right to correct errors. If a pricing error affects your order, we will contact you before processing it. Product images are representative — natural variations in colour and packaging may occur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Orders and confirmation</h2>
              <p className="leading-relaxed opacity-80">
                When you place an order, you will receive an email confirmation with your order details. This confirmation constitutes a binding agreement between you and ATTIMO. We reserve the right to refuse or cancel orders in case of suspected fraud, stock issues, or pricing errors. If we cancel your order, you will be fully refunded.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Shipping</h2>
              <p className="leading-relaxed opacity-80 mb-3">
                We currently ship to Belgium and throughout the European Union. Estimated delivery times are:
              </p>
              <ul className="list-disc pl-6 space-y-2 opacity-80">
                <li><strong>Belgium</strong> — 2–4 business days</li>
                <li><strong>EU countries</strong> — 5–10 business days</li>
              </ul>
              <p className="leading-relaxed opacity-80 mt-3">
                Delivery times are estimates and may vary depending on your location and carrier availability. Shipping costs, if applicable, are shown at checkout before you complete your purchase. Risk of loss passes to you upon delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Returns and refunds</h2>
              <p className="leading-relaxed opacity-80 mb-3">
                Our products are food items. Under the EU Consumer Rights Directive (Directive 2011/83/EU), perishable goods and sealed food products that have been opened after delivery are exempt from the 14-day right of withdrawal.
              </p>
              <p className="leading-relaxed opacity-80 mb-3">
                <strong>We do not accept returns</strong> unless the product arrives damaged or defective. In that case:
              </p>
              <ul className="list-disc pl-6 space-y-2 opacity-80">
                <li>Contact us within 14 days of receiving your order</li>
                <li>Send photo evidence of the damage to <a href="mailto:hello@attimo-oil.com" className="underline font-medium">hello@attimo-oil.com</a></li>
                <li>We will arrange a replacement or issue a full refund at our discretion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Payment</h2>
              <p className="leading-relaxed opacity-80">
                Payment is processed securely through our third-party payment provider at the time of checkout. We accept the payment methods displayed on our website. All transactions are encrypted and we never store your payment card details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Limitation of liability</h2>
              <p className="leading-relaxed opacity-80">
                To the fullest extent permitted by Belgian and EU law, ATTIMO (Ablaze Growth Studio CV) shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or products. Our total liability is limited to the amount you paid for your order. Nothing in these terms limits your statutory consumer rights under Belgian or EU law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Intellectual property</h2>
              <p className="leading-relaxed opacity-80">
                All content on this website — including text, images, logos, and design — is the property of Ablaze Growth Studio CV and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or use any content without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Governing law</h2>
              <p className="leading-relaxed opacity-80">
                These terms are governed by and construed in accordance with the laws of Belgium. Any disputes arising from these terms or your use of our website shall be subject to the exclusive jurisdiction of the courts of Antwerp, Belgium — without prejudice to your rights as a consumer to bring proceedings in the courts of your place of residence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Changes to these terms</h2>
              <p className="leading-relaxed opacity-80">
                We may update these terms from time to time. Changes will be posted on this page with an updated revision date. Continued use of our website after changes are posted constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact</h2>
              <p className="leading-relaxed opacity-80">
                For any questions about these terms, please contact us:
              </p>
              <div className="mt-3 opacity-80 space-y-1">
                <p>Ablaze Growth Studio CV</p>
                <p>Gelijkheidstraat 5, 2018 Antwerp, Belgium</p>
                <p>VAT: BE0732.647.334</p>
                <p>Email: <a href="mailto:gilles@attimo-oil.com" className="underline font-medium">gilles@attimo-oil.com</a></p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
};

export default TermsOfService;
