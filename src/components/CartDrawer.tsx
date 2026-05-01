import { useState } from "react";
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
import { ShoppingCart, Minus, Plus, Trash2, ExternalLink, Loader2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";

export const CartDrawer = ({ darkIcon = false }: { darkIcon?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    items, 
    isLoading, 
    updateQuantity, 
    removeItem, 
    createCheckout 
  } = useCartStore();

  console.log('[CartDrawer] Rendering, items:', items.length, 'isOpen:', isOpen);
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (parseFloat(item.price.amount) * item.quantity), 0);

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
        <SheetHeader className="flex-shrink-0">
          <SheetTitle 
            className="text-3xl font-bold" 
            style={{ fontFamily: 'UDC Working Man Sans, sans-serif', color: '#1B4229' }}
          >
            Shopping Cart
          </SheetTitle>
          <SheetDescription>
            {totalItems === 0 ? "Your cart is empty" : `${totalItems} item${totalItems !== 1 ? 's' : ''} in your cart`}
          </SheetDescription>
        </SheetHeader>
        
        <div className="flex flex-col flex-1 pt-6 min-h-0">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto pr-2 min-h-0">
                <div className="divide-y divide-olive-dark/10">
                  {items.map((item) => (
                    <div key={item.variantId} className="flex items-center gap-5 py-3">
                      {/* Thumbnail */}
                      <div className="w-28 h-28 rounded-lg overflow-hidden flex-shrink-0">
                        {item.product.node.images?.edges?.[0]?.node && (
                          <img
                            src={item.product.node.images.edges[0].node.url}
                            alt={item.product.node.title}
                            className="w-full h-full object-cover object-center"
                          />
                        )}
                      </div>
                      {/* Details */}
                      <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                        <h4 className="font-medium text-sm leading-tight">{item.product.node.title}</h4>
                        <p className="font-semibold text-sm">
                          {item.price.currencyCode === 'EUR' ? '€' : item.price.currencyCode} {parseFloat(item.price.amount) % 1 === 0 ? parseFloat(item.price.amount).toFixed(0) : parseFloat(item.price.amount).toFixed(2)}
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
              </div>
              
              <div className="flex-shrink-0 space-y-4 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-xl font-bold">
                    {items[0]?.price.currencyCode === 'EUR' ? '€' : (items[0]?.price.currencyCode || '$')} {totalPrice % 1 === 0 ? totalPrice.toFixed(0) : totalPrice.toFixed(2)}
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
