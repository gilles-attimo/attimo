import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Leaf, Award, Heart } from "lucide-react";

const benefits = [
  { icon: Droplets, title: "Cold-Pressed Excellence", description: "Our olives are pressed within 24 hours of harvest using traditional stone mills, preserving maximum flavour and nutrients." },
  { icon: Leaf, title: "Ancient Heritage", description: "Sourced from 500-year-old olive trees in the heart of the Mediterranean, carrying centuries of tradition in every drop." },
  { icon: Award, title: "Premium Quality", description: "Award-winning extra virgin olive oil with less than 0.2% acidity, meeting the highest international standards." },
  { icon: Heart, title: "Health & Wellness", description: "Rich in antioxidants and healthy monounsaturated fats, supporting your journey to a healthier lifestyle." }
];

export const Benefits = () => {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-olive-dark mb-6">Why Our Olive Oil is Different</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Every bottle tells a story of tradition, quality, and passion. Discover what makes our olive oil truly exceptional.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-olive-light/20 hover:border-gold-rich/30 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-olive-light to-gold-light group-hover:from-gold-rich group-hover:to-gold-light transition-all duration-300">
                  <benefit.icon className="h-8 w-8 text-olive-dark" />
                </div>
                <h3 className="text-xl font-semibold text-olive-dark mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
