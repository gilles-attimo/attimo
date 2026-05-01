export const Story = () => {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-[hsl(var(--product-background))]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-olive-dark leading-tight">
              Five Centuries of
              <span className="block text-gold-rich">Mediterranean Tradition</span>
            </h2>
            <div className="space-y-6 text-lg text-olive-medium leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <p>Our story begins in the sun-drenched hills of the Mediterranean, where ancient olive groves have stood for over 500 years. These majestic trees, witnesses to countless seasons and generations, produce olives of unparalleled quality.</p>
              <p>Using time-honored methods passed down through generations, we harvest our olives at the perfect moment of ripeness. Within 24 hours, they're cold-pressed using traditional stone mills, ensuring every drop captures the essence of our heritage.</p>
              <p>Each bottle represents not just olive oil, but liquid history – a testament to the dedication of countless farmers who have tended these groves with love and respect for the land.</p>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="h-1 w-16 bg-gradient-to-r from-gold-rich to-olive-medium rounded-full" />
              <span className="text-olive-dark font-semibold">Est. 1523</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-olive-light to-gold-light p-8 shadow-2xl">
              <div className="w-full h-full rounded-xl bg-olive-dark/10 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-olive-dark">500+</div>
                  <div className="text-xl text-olive-medium">Years of Heritage</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-gold-rich to-accent shadow-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-olive-dark">2024</div>
                <div className="text-sm text-olive-dark">Launch</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
