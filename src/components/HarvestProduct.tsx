import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Link, Info } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { QuantitySelector } from "./QuantitySelector";
import { ProductInfoTabs } from "./ProductInfoTabs";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { OriginMap } from "./OriginMap";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { getProductContent } from "@/lib/productContent";

export const HarvestProduct = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts(10);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const product = products[0]; // Use the first product with variants

  const handleAddToCart = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: 'add_to_cart_custom' });
    if (!product) return;
    const variant = product.node.variants.edges[0].node;
    
    addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: { amount: '24', currencyCode: 'EUR' },
      quantity: selectedQuantity,
      selectedOptions: variant.selectedOptions || []
    });
    toast.success(`Added ${selectedQuantity} bottle${selectedQuantity > 1 ? 's' : ''} to cart`);
  };

  if (loading) {
    return (
      <section id="harvest-product" className="py-14 md:py-20 lg:py-24 snap-start" style={{ backgroundColor: '#FFFAEA' }}>
        <div className="w-full flex items-center justify-center min-h-[600px]">
          <p className="text-olive-medium">Loading products...</p>
        </div>
      </section>
    );
  }

  if (!product) {
    return (
      <section id="harvest-product" className="py-14 md:py-20 lg:py-24 snap-start" style={{ backgroundColor: '#FFFAEA' }}>
        <div className="w-full flex items-center justify-center min-h-[600px]">
          <p className="text-olive-medium">No products found</p>
        </div>
      </section>
    );
  }

  const productImage = product.node.images?.edges?.[0]?.node?.url;
  const currencyCode = product.node.priceRange.minVariantPrice.currencyCode;
  
  const PRICE_PER_BOTTLE = 24;
  const totalPrice = selectedQuantity * PRICE_PER_BOTTLE;

  const labTiles = [
    { key: "polyphenols", label: "POLYPHENOLS", value: "904", unit: "mg/kg", avg: "avg. ~180mg/kg", description: "antioxidants that give EVOO its special health benefits" },
    { key: "oleic-acid", label: "OLEIC ACID", value: "74.9%", unit: "", avg: "avg. ~67%", description: "healthy fats that protect the oil and your health, higher = better" },
    { key: "peroxides", label: "PEROXIDES", value: "6.3", unit: "meq/kg", avg: "avg. ~20meq/kg", description: "lower = fresher oil, less oxidation and longer shelf life" },
    { key: "acidity", label: "ACIDITY", value: "0.16%", unit: "", avg: "avg. ~0.8%", description: "lower = fresher olives and higher quality" }
  ] as const;

  return (
    <section id="harvest-product" className="py-14 md:py-20 lg:py-24 snap-start" style={{ backgroundColor: '#FFFAEA' }}>
      <div className="w-full flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-stretch">
          {/* Product Image */}
          <div className="flex justify-start items-stretch lg:pl-0">
            <div className="w-full h-full lg:rounded-r-2xl bg-olive-light/10 relative">
              <img 
                src={productImage} 
                alt={product.node.title} 
                className="w-full h-full object-cover lg:rounded-r-2xl" 
              />
              
              {/* Label Preview - Bottom Left */}
              <div className="absolute bottom-4 left-4">
                <HoverCard openDelay={0} closeDelay={0}>
                  <HoverCardTrigger asChild>
                    <button 
                      className="flex items-center gap-1.5 backdrop-blur-sm px-3 py-1.5 rounded-md border border-cream/20 cursor-help transition-all hover:opacity-100 active:opacity-100"
                      style={{ backgroundColor: 'rgba(27, 66, 41, 0.9)' }}
                      onClick={(e) => e.currentTarget.focus()}
                    >
                      <span className="font-semibold uppercase tracking-wide" style={{ color: '#FFFAEA', fontSize: 'clamp(0.7rem, 0.9vw, 0.875rem)' }}>
                        LABEL PREVIEW
                      </span>
                      <Info className="w-3.5 h-3.5" style={{ color: '#FFFAEA' }} />
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent 
                    side="right" 
                    align="start" 
                    className="max-w-xs p-3" 
                    style={{ backgroundColor: '#1B4229', color: '#FFFAEA', borderColor: 'rgba(205, 219, 45, 0.3)' }}
                    onPointerDownOutside={(e) => e.preventDefault()}
                  >
                    <p className="text-sm leading-relaxed">
                      This bottle shows our upcoming ATTIMO brand. Your 2024 harvest will arrive with the original producer's label, containing the same exceptional quality oil.
                    </p>
                  </HoverCardContent>
                </HoverCard>
              </div>

            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-2 md:space-y-3 px-4 md:px-6 lg:pr-6 py-3 md:py-5">
            <header>
              <div className="flex items-center gap-2 mb-1.5">
                <HoverCard openDelay={0} closeDelay={0}>
                  <HoverCardTrigger asChild>
                    <button 
                      className="inline-flex items-center rounded-full border-transparent px-3 py-1.5 cursor-help transition-all hover:opacity-100 active:opacity-100"
                      style={{ backgroundColor: '#1B4229', color: '#CDDB2D', fontSize: 'clamp(0.75rem, 0.95vw, 1rem)', fontWeight: 600 }}
                      onClick={(e) => e.currentTarget.focus()}
                    >
                      2024/25 HARVEST
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent 
                    side="bottom" 
                    align="start" 
                    className="max-w-xs p-3" 
                    style={{ backgroundColor: '#1B4229', color: '#FFFAEA', borderColor: 'rgba(205, 219, 45, 0.3)' }}
                    onPointerDownOutside={(e) => e.preventDefault()}
                  >
                    <p className="text-sm leading-relaxed">
                      Oil from the latest harvest 2024/25 season. The new harvest is currently underway, with fresh oil arriving early 2026.
                    </p>
                  </HoverCardContent>
                </HoverCard>
                <Badge variant="secondary" className="bg-gold/20 text-gold-dark px-3 py-1.5" style={{ fontSize: 'clamp(0.75rem, 0.95vw, 1rem)' }}>
                  LAST BOTTLES
                </Badge>
              </div>
              
              <h1 className="font-bold text-olive-dark mb-1.5 flex items-baseline gap-2" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(1.5rem, 2.8vw, 2.8rem)' }}>
                GALEGA FROM ALENTEJO
                <span className="font-beverly text-olive-medium" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.2rem)' }}>500ml</span>
              </h1>
              
              <p className="text-olive-medium mb-1.5 font-beverly" style={{ textDecoration: 'underline', textDecorationStyle: 'dashed', textDecorationColor: 'currentColor', textUnderlineOffset: '3px', fontSize: 'clamp(1.1rem, 1.6vw, 1.8rem)' }}>
                High-Polyphenol Extra Virgin Olive Oil
              </p>
            </header>

            {/* Key Benefits */}
            <div className="space-y-1.5">
              <ul className="space-y-1.5 text-olive-medium" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.8rem, 1vw, 1.1rem)' }}>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-olive-medium rounded-full mt-2 flex-shrink-0"></div>
                  <span className="inline">
                    5x more antioxidant polyphenols than average EVOO
                    {' '}
                    <HoverCard openDelay={0} closeDelay={0}>
                      <HoverCardTrigger asChild>
                        <button 
                          className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-olive-medium text-olive-medium hover:bg-olive-medium hover:text-cream active:bg-olive-medium active:text-cream transition-colors cursor-help align-middle"
                          style={{ fontSize: '0.65rem', fontWeight: 'bold' }}
                          onClick={(e) => e.currentTarget.focus()}
                        >
                          ?
                        </button>
                      </HoverCardTrigger>
                      <HoverCardContent 
                        className="w-80 p-4" 
                        style={{ backgroundColor: '#1B4229', color: '#FFFAEA', borderColor: 'rgba(205, 219, 45, 0.3)' }}
                        onPointerDownOutside={(e) => e.preventDefault()}
                      >
                        <p className="text-sm leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          Polyphenols are natural compounds in olive oil that provide the health benefits you've heard about—anti-inflammatory properties, heart health support, and antioxidant protection. Most store-bought oils have low polyphenol levels due to processing and blending.
                        </p>
                      </HoverCardContent>
                    </HoverCard>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-olive-medium rounded-full mt-2 flex-shrink-0"></div>
                  <span className="flex items-center gap-1">
                    Third-party lab tested for quality and purity
                    <a href="/documents/lab-report-galega-2024.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center transition-transform hover:scale-110">
                      <Link className="w-4 h-4" style={{ color: '#1B4229' }} strokeWidth={2.5} />
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-olive-medium rounded-full mt-2 flex-shrink-0"></div>
                  <span>Directly sourced from a small family farm in Alentejo, Portugal</span>
                </li>
              </ul>
              
              {/* Label Disclosure Notice */}
              <div className="mt-2 p-2.5 rounded-lg bg-cream/40 border border-olive-light/20">
                <div className="flex items-start gap-2">
                  <Info className="w-3.5 h-3.5 text-olive-medium flex-shrink-0 mt-0.5" />
                  <p className="text-olive-medium/90 leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.75rem, 0.9vw, 0.95rem)' }}>
                    The bottle shown features our upcoming ATTIMO brand label. Your 2024/25 harvest oil will arrive under the original producer's label, containing the same superior category olive oil with lab-verified values.
                  </p>
                </div>
              </div>
            </div>

            <QuantitySelector
              quantity={selectedQuantity}
              onQuantityChange={setSelectedQuantity}
              pricePerUnit={24}
              onAddToCart={handleAddToCart}
              buttonId="buy-now-btn"
            />

            {/* Lab Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {labTiles.map(tile => (
                <div key={tile.key} className="rounded-xl border border-olive-dark overflow-hidden bg-transparent">
                  <div className="px-2.5 py-1.5" style={{ backgroundColor: '#1B4229' }}>
                    <div className="font-semibold uppercase tracking-wide text-center" style={{ color: '#FFFFFF', fontSize: 'clamp(0.8rem, 1vw, 1.1rem)' }}>
                      {tile.label}
                    </div>
                  </div>
                  <div className="p-2.5">
                    <div className="flex items-baseline gap-1.5 mb-0.5">
                      <div className="font-bold text-olive-dark leading-none" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(1.1rem, 1.5vw, 1.7rem)' }}>
                        {tile.value}
                        {tile.unit && <span className="ml-1 text-olive-dark/90" style={{ fontSize: 'clamp(0.8rem, 1.1vw, 1.15rem)' }}>{tile.unit}</span>}
                      </div>
                      <div className="text-olive-light" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.7rem, 0.85vw, 0.9rem)' }}>
                        {tile.avg}
                      </div>
                    </div>
                    <p className="text-olive-medium leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.8rem, 1vw, 1.05rem)' }}>
                      {tile.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Product Information Tabs */}
            <ProductInfoTabs content={getProductContent("coratina")} />
          </div>
        </div>
      </div>
    </section>
  );
};
