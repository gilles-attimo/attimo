import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface NotifyMeFormProps {
  productName: string;
  backgroundColor?: string;
}

export const NotifyMeForm = ({ productName, backgroundColor = "rgba(27, 66, 41, 0.05)" }: NotifyMeFormProps) => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSubmitting(true);
    try {
      const { error } = await supabase.from("restock_notifications").insert({
        email: email.trim(),
        product_name: productName,
      });

      if (error) throw error;

      setSubmitted(true);
      toast.success("You'll be notified when it's back in stock!", {
        position: "top-center",
      });
    } catch (err) {
      console.error("Error submitting notify form:", err);
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="rounded-xl px-5 py-6 text-center"
        style={{ backgroundColor }}
      >
        <p
          className="font-semibold text-olive-dark"
          style={{
            fontFamily: "UDC Working Man Sans, sans-serif",
            fontSize: "clamp(0.95rem, 1.1vw, 1.15rem)",
          }}
        >
          ✓ You're on the list
        </p>
        <p
          className="text-olive-medium mt-1"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(0.8rem, 0.95vw, 1rem)",
          }}
        >
          We'll email you when {productName} is in stock.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div
        className="rounded-xl px-5 py-5"
        style={{ backgroundColor }}
      >
        <p
          className="font-semibold text-olive-dark mb-1"
          style={{
            fontFamily: "UDC Working Man Sans, sans-serif",
            fontSize: "clamp(0.95rem, 1.1vw, 1.15rem)",
          }}
        >
          Coming Soon
        </p>
        <p
          className="text-olive-medium mb-4"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(0.8rem, 0.95vw, 1rem)",
          }}
        >
          Get notified when {productName} is in stock.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-lg border-2 border-olive-dark/20 bg-white px-4 py-2.5 text-olive-dark placeholder:text-olive-medium/50 focus:outline-none focus:border-olive-dark transition-colors"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(0.85rem, 1vw, 1rem)",
            }}
          />
          <button
            type="submit"
            disabled={submitting}
            className="rounded-lg px-5 py-2.5 font-semibold transition-all disabled:opacity-50"
            style={{
              backgroundColor: "#1B4229",
              color: "#FFFAEA",
              fontFamily: "UDC Working Man Sans, sans-serif",
              fontSize: "clamp(0.85rem, 1vw, 1rem)",
            }}
          >
            {submitting ? "..." : "Notify Me"}
          </button>
        </form>
      </div>
    </div>
  );
};
