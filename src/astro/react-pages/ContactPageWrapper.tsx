import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ContactPage from "./ContactPage";

const queryClient = new QueryClient();

export default function ContactPageWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContactPage />
      <Sonner />
    </QueryClientProvider>
  );
}
