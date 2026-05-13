import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, Minus, Plus, Trash2, Loader2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { DEFAULT_LOCALE, formatPrice, localizeHref, type Locale } from "@/lib/i18n/config";
import { urlSlugForShopifyHandle } from "@/lib/productContent";
import { Link } from "@/lib/router-stub";
import { fetchProducts, type CartItem, type ShopifyProduct } from "@/lib/shopify";
import { detectCountry, getFreeShippingThreshold } from "@/lib/shipping";

// Subscription items are sold at a fixed ~8% discount across all locales
// (€22 vs €24 in the EUR config). Apply the same ratio to the displayed
// price in any locale so cart totals stay consistent with the product page.
const SUBSCRIPTION_RATIO = 22 / 24;

const PRODUCT_DISPLAY_NAMES: Record<string, string> = {
  coratina: "Coratina",
  picual: "Picual",
  nocellara: "Nocellara",
};

const PRODUCT_ORDER = ["coratina", "picual", "nocellara"];

function localizedUnitPrice(item: CartItem, locale: Locale): number {
  const slug = urlSlugForShopifyHandle(item.product?.node?.handle);
  if (!slug) return parseFloat(item.price.amount);
  const base = locale.prices[slug];
  const isSubscription = !!(item.isSubscription || item.sellingPlanId);
  return isSubscription ? base * SUBSCRIPTION_RATIO : base;
}

export const CartDrawer = ({ darkIcon = false, locale = DEFAULT_LOCALE }: { darkIcon?: boolean; locale?: Locale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    items,
    isLoading,
    updateQuantity,
    removeItem,
    addItem,
    createCheckout,
  } = useCartStore();

  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [products, setProducts] = useState<ShopifyProduct[] | null>(null);

  // Toggle a body class while the drawer is open so the geo-targeted
  // shipping announcement bar can hide itself on mobile (where the drawer
  // is full-screen and the bar would overlap the cart title).
  useEffect(() => {
    document.body.classList.toggle('cart-open', isOpen);
    return () => document.body.classList.remove('cart-open');
  }, [isOpen]);

  // Same call shape used on product pages — keeps the threshold consistent
  // between the cart nudge and what was promised on the PDP.
  useEffect(() => {
    detectCountry().then(({ countryCode: cc }) => setCountryCode(cc));
  }, []);

  // Lazy-load product catalog the first time the drawer opens, for the
  // recommendations section. Cached for the rest of the session.
  useEffect(() => {
    if (!isOpen || products !== null) return;
    fetchProducts(50)
      .then((p) => setProducts(p))
      .catch(() => setProducts([]));
  }, [isOpen, products]);

  console.log('[CartDrawer] Rendering, items:', items.length, 'isOpen:', isOpen);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + localizedUnitPrice(item, locale) * item.quantity,
    0
  );

  const freeShippingThreshold = useMemo(
    () => getFreeShippingThreshold(countryCode),
    [countryCode]
  );
  const qualifiesForFreeShipping = totalItems >= freeShippingThreshold;
  const bottlesNeeded = Math.max(0, freeShippingThreshold - totalItems);

  const recommendations = useMemo(() => {
    if (!products) return [];
    const inCartHandles = new Set(
      items.map((it) => it.product?.node?.handle).filter(Boolean) as string[]
    );
    return products
      .filter((p) => {
        const slug = urlSlugForShopifyHandle(p.node.handle);
        return slug !== null && !inCartHandles.has(p.node.handle);
      })
      .sort((a, b) => {
        const aSlug = urlSlugForShopifyHandle(a.node.handle) || "";
        const bSlug = urlSlugForShopifyHandle(b.node.handle) || "";
        return PRODUCT_ORDER.indexOf(aSlug) - PRODUCT_ORDER.indexOf(bSlug);
      });
  }, [products, items]);

  const handleAddRecommendation = (product: ShopifyProduct) => {
    const slug = urlSlugForShopifyHandle(product.node.handle);
    if (!slug) return;
    const variant = product.node.variants?.edges?.[0]?.node;
    if (!variant) return;
    const price = locale.prices[slug];
    addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: { amount: String(price), currencyCode: locale.currency.code },
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
      isSubscription: false,
    });
  };

  const handleCheckout = async () => {
    try {
      await createCheckout();
      const checkoutUrl = useCartStore.getState().checkoutUrl;
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error('Checkout failed:', error);
    }
  };

  // Grid of recommendation cards, shared by both the empty state and the
  // "You might also like" block below the line items. Heading lives at the
  // call site so each view can use its own copy.
  const recommendationsGrid = recommendations.length > 0 ? (
    <div className="grid grid-cols-3 gap-2">
      {recommendations.map((product) => {
        const slug = urlSlugForShopifyHandle(product.node.handle);
        if (!slug) return null;
        const variant = product.node.variants?.edges?.[0]?.node;
        if (!variant) return null;
        const image = product.node.images?.edges?.[0]?.node?.url;
        const name = PRODUCT_DISPLAY_NAMES[slug] ?? slug;
        const price = locale.prices[slug];
        return (
          <div key={product.node.id} className="flex flex-col items-center text-center">
            {image && (
              <Link
                to={localizeHref(`/product/${slug}`, locale)}
                aria-label={`View ${name}`}
                className="block w-full aspect-square rounded-lg overflow-hidden mb-1.5 transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#1B4229' }}
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover object-center"
                />
              </Link>
            )}
            <p
              className="text-xs font-medium leading-tight"
              style={{ color: '#1B4229', fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {name}
            </p>
            <p
              className="text-xs mb-1.5"
              style={{ color: '#1B4229', opacity: 0.75, fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {formatPrice(price, locale)}
            </p>
            <button
              type="button"
              onClick={() => handleAddRecommendation(product)}
              className="px-3 py-1 text-xs font-bold rounded transition-opacity hover:opacity-90"
              style={{
                backgroundColor: 'rgb(205, 219, 45)',
                color: '#1B4229',
                fontFamily: 'UDC Working Man Sans, sans-serif',
              }}
            >
              + Add
            </button>
          </div>
        );
      })}
    </div>
  ) : null;

  const recommendationsHeadingStyle = {
    fontFamily: 'UDC Working Man Sans, sans-serif',
    color: '#1B4229',
    letterSpacing: '0.05em',
  } as const;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          onClick={(e) => {
            console.log('[CartDrawer] Cart icon clicked', e);
            e.stopPropagation();
          }}
          className={`${darkIcon ? 'text-olive-dark' : 'text-white'} hover:opacity-80 transition-opacity relative`}
          aria-label="Shopping cart"
        >
          <ShoppingCart className="h-7 w-7 md:h-8 md:w-8" />
          {totalItems > 0 && (
            <Badge
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs font-semibold"
              style={{
                backgroundColor: 'rgb(205, 219, 45)',
                color: '#1B4229',
                border: 'none'
              }}
            >
              {totalItems}
            </Badge>
          )}
        </button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg flex flex-col h-full" style={{ backgroundColor: 'rgb(255, 250, 234)' }}>
        <SheetHeader className="flex-shrink-0 text-left">
          <SheetTitle asChild>
            <h1
              className="font-bold uppercase tracking-tight m-0"
              style={{
                fontFamily: 'UDC Working Man Sans, sans-serif',
                color: '#1B4229',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                lineHeight: 1.05,
              }}
            >
              Shopping Cart
            </h1>
          </SheetTitle>
          <SheetDescription className={totalItems === 0 ? "sr-only" : undefined}>
            {totalItems === 0
              ? "Your shopping cart is currently empty."
              : `${totalItems} item${totalItems !== 1 ? 's' : ''} in your cart`}
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col flex-1 pt-6 min-h-0">
          {items.length === 0 ? (
            <div className="flex flex-col flex-1 min-h-0">
              <h3
                className="text-sm uppercase mb-3 flex-shrink-0"
                style={recommendationsHeadingStyle}
              >
                Looks like you haven&apos;t added anything yet. Let&apos;s get you started.
              </h3>
              {recommendationsGrid && (
                <div className="flex-1 overflow-y-auto pr-2 min-h-0">
                  {recommendationsGrid}
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Free-shipping nudge — same threshold/geo logic as the PDP. */}
              <div className="flex-shrink-0 mb-3">
                {qualifiesForFreeShipping ? (
                  <div
                    className="px-3 py-2 rounded-md text-sm font-semibold text-center"
                    style={{
                      backgroundColor: 'rgba(205, 219, 45, 0.25)',
                      color: '#1B4229',
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    Free shipping ✓
                  </div>
                ) : (
                  <div
                    className="px-3 py-2 rounded-md text-sm text-center"
                    style={{
                      backgroundColor: 'rgba(27, 66, 41, 0.06)',
                      color: '#1B4229',
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    Add {bottlesNeeded} more bottle{bottlesNeeded > 1 ? 's' : ''} for free shipping
                  </div>
                )}
              </div>

              {/* Items + recommendations scroll together. */}
              <div className="flex-1 overflow-y-auto pr-2 min-h-0">
                <div className="divide-y divide-olive-dark/10">
                  {items.map((item) => (
                    <div key={item.variantId} className="flex items-center gap-5 py-3">
                      <div className="w-28 h-28 rounded-lg overflow-hidden flex-shrink-0">
                        {item.product.node.images?.edges?.[0]?.node && (
                          <img
                            src={item.product.node.images.edges[0].node.url}
                            alt={item.product.node.title}
                            className="w-full h-full object-cover object-center"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                        <h4 className="font-medium text-sm leading-tight">{item.product.node.title}</h4>
                        <p className="font-semibold text-sm">
                          {formatPrice(localizedUnitPrice(item, locale), locale)}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.variantId, item.quantity - 1)}>
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-6 text-center text-sm">{item.quantity}</span>
                            <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.variantId, item.quantity + 1)}>
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeItem(item.variantId)}>
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {recommendationsGrid && (
                  <div className="mt-4 pt-4 border-t border-olive-dark/10">
                    <h3 className="text-sm uppercase mb-3" style={recommendationsHeadingStyle}>
                      You might also like
                    </h3>
                    {recommendationsGrid}
                  </div>
                )}
              </div>

              {/* Subtotal + Shipping rows — no combined total per spec. */}
              <div className="flex-shrink-0 space-y-1 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-base" style={{ color: '#1B4229' }}>Subtotal</span>
                  <span className="text-base font-semibold" style={{ color: '#1B4229' }}>
                    {formatPrice(subtotal, locale)}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-base" style={{ color: '#1B4229' }}>Shipping</span>
                  <span
                    className="text-base font-semibold"
                    style={{ color: qualifiesForFreeShipping ? '#1B4229' : 'rgba(27, 66, 41, 0.7)' }}
                  >
                    {qualifiesForFreeShipping ? 'Free' : 'Calculated at checkout'}
                  </span>
                </div>

                <Button
                  onClick={handleCheckout}
                  className="w-full h-14 text-lg font-bold hover:opacity-90 transition-opacity"
                  disabled={items.length === 0 || isLoading}
                  style={{
                    backgroundColor: 'rgb(205, 219, 45)',
                    color: '#1B4229',
                    fontFamily: 'UDC Working Man Sans, sans-serif'
                  }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Creating Checkout...
                    </>
                  ) : (
                    'Checkout with Shopify'
                  )}
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
