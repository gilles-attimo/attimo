import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { PalateQuiz } from "@/components/PalateQuiz";

const queryClient = new QueryClient();

export default function QuizPageWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <PalateQuiz />
      <Sonner />
    </QueryClientProvider>
  );
}
