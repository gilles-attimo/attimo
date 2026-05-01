import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ProductPage from "./ProductPage";
import type { ShopifyProduct, SellingPlan } from "@/lib/shopify";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60_000, refetchOnWindowFocus: false } },
});

interface Props {
  handle: string;
  initialProducts?: ShopifyProduct[];
  initialSellingPlans?: SellingPlan[];
}

export default function ProductPageWrapper({ handle, initialProducts, initialSellingPlans }: Props) {
  if (typeof globalThis !== "undefined") {
    (globalThis as any).__ASTRO_PARAMS__ = { handle };
  }
  return (
    <QueryClientProvider client={queryClient}>
      <ProductPage handle={handle} initialProducts={initialProducts} initialSellingPlans={initialSellingPlans} />
      <Sonner />
    </QueryClientProvider>
  );
}
