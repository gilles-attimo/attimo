import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";
import { WaitlistForm } from "@/components/WaitlistForm";

const PrivacyPolicy = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  useEffect(() => { document.title = 'Privacy Policy | ATTIMO Specialty Extra Virgin Olive Oil'; return () => { document.title = 'ATTIMO Specialty Extra Virgin Olive Oil'; }; }, []);

  return (
    <div className="min-h-screen overflow-y-scroll h-screen" style={{ backgroundColor: '#FFFAEA' }}>
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} forceScrolled />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#1B4229' }}>
            Privacy Policy
          </h1>
          <p className="text-sm mb-12" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#1B4229', opacity: 0.6 }}>
            Last updated: March 2026
          </p>

          <div className="space-y-10" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#1B4229' }}>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Who we are</h2>
              <p className="leading-relaxed opacity-80">
                ATTIMO is a brand operated by Ablaze Growth Studio CV, located at Gelijkheidstraat 5, 2018 Antwerp, Belgium (VAT: BE0732.647.334). We sell premium olive oil online to customers across the European Union. When you interact with our website or place an order, we collect certain personal data. This policy explains what we collect, why, and what your rights are.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">What personal data we collect</h2>
              <p className="leading-relaxed opacity-80 mb-3">
                Depending on how you use our site, we may collect the following information:
              </p>
              <ul className="list-disc pl-6 space-y-2 opacity-80">
                <li><strong>Name</strong> — to personalise your experience and process orders</li>
                <li><strong>Email address</strong> — for order confirmations, shipping updates, and (if you opt in) marketing communications</li>
                <li><strong>Shipping address</strong> — to deliver your order</li>
                <li><strong>Payment information</strong> — processed securely by our payment provider; we do not store your card details</li>
                <li><strong>Waitlist or contact form submissions</strong> — name, email, or other contact details you voluntarily provide</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Why we collect it and our legal basis</h2>
              <p className="leading-relaxed opacity-80 mb-3">
                Under the General Data Protection Regulation (GDPR), we process your data based on the following legal grounds:
              </p>
              <ul className="list-disc pl-6 space-y-2 opacity-80">
                <li><strong>Contract fulfillment</strong> — processing orders, handling payments, and arranging delivery</li>
                <li><strong>Legitimate interest</strong> — improving our website, understanding customer behaviour through analytics, and preventing fraud</li>
                <li><strong>Consent</strong> — sending marketing emails or newsletters (you can withdraw consent at any time)</li>
                <li><strong>Legal obligation</strong> — retaining invoices and transaction records as required by Belgian law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">How long we keep your data</h2>
              <p className="leading-relaxed opacity-80">
                We retain your personal data only as long as necessary for the purposes described above. Order and transaction data is kept for 7 years to comply with Belgian accounting regulations. Waitlist and marketing data is kept until you unsubscribe or request deletion. Analytics data is anonymised or deleted after 26 months.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Third-party sharing</h2>
              <p className="leading-relaxed opacity-80 mb-3">
                We never sell your data. We share it only with trusted third parties who help us run our business:
              </p>
              <ul className="list-disc pl-6 space-y-2 opacity-80">
                <li><strong>Payment processors</strong> — to securely handle transactions</li>
                <li><strong>Shipping providers</strong> — to deliver your orders</li>
                <li><strong>Email service providers</strong> — to send transactional and marketing emails</li>
                <li><strong>Analytics tools</strong> — to understand how visitors use our website</li>
              </ul>
              <p className="leading-relaxed opacity-80 mt-3">
                All third parties are bound by data processing agreements and are required to handle your data in compliance with the GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Your rights under GDPR</h2>
              <p className="leading-relaxed opacity-80 mb-3">
                As an EU resident, you have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 opacity-80">
                <li><strong>Right of access</strong> — request a copy of the data we hold about you</li>
                <li><strong>Right to rectification</strong> — ask us to correct inaccurate or incomplete data</li>
                <li><strong>Right to erasure</strong> — request deletion of your personal data ("right to be forgotten")</li>
                <li><strong>Right to data portability</strong> — receive your data in a structured, machine-readable format</li>
                <li><strong>Right to restrict processing</strong> — limit how we use your data in certain circumstances</li>
                <li><strong>Right to object</strong> — object to processing based on legitimate interest or direct marketing</li>
              </ul>
              <p className="leading-relaxed opacity-80 mt-3">
                To exercise any of these rights, contact us at{' '}
                <a href="mailto:hello@attimo-oil.com" className="underline font-medium">hello@attimo-oil.com</a>.
                We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
              <p className="leading-relaxed opacity-80 mb-3">
                Our website uses cookies — small text files stored on your device — to ensure the site works properly and to help us understand how visitors use it.
              </p>

              <h3 className="text-lg font-semibold mt-5 mb-2">Functional cookies</h3>
              <p className="leading-relaxed opacity-80">
                These are essential for the website to function correctly. They handle things like keeping items in your cart and remembering your preferences. These cookies cannot be disabled without breaking the site experience.
              </p>

              <h3 className="text-lg font-semibold mt-5 mb-2">Analytical cookies</h3>
              <p className="leading-relaxed opacity-80">
                We use analytics tools to understand how visitors browse our site — which pages are visited most, how long people stay, and where they come from. This data is aggregated and anonymised wherever possible.
              </p>

              <h3 className="text-lg font-semibold mt-5 mb-2">Marketing cookies</h3>
              <p className="leading-relaxed opacity-80">
                These cookies may be used to show you relevant ads or to measure the effectiveness of our advertising campaigns. They are placed by third-party advertising platforms.
              </p>

              <h3 className="text-lg font-semibold mt-5 mb-2">Managing cookies</h3>
              <p className="leading-relaxed opacity-80">
                You can manage or refuse cookies through your browser settings at any time. Please note that disabling certain cookies may affect your experience on our site. By continuing to use our website, you accept the use of functional cookies, which are necessary for the site to operate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact</h2>
              <p className="leading-relaxed opacity-80">
                If you have any questions about this privacy policy or how we handle your data, please reach out:
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

export default PrivacyPolicy;
