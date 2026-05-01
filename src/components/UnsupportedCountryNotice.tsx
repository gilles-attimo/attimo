import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { MapPin } from "lucide-react";

interface UnsupportedCountryNoticeProps {
  countryName: string;
  countryCode: string;
  productName?: string;
}

export const UnsupportedCountryNotice = ({
  countryName,
  countryCode,
  productName,
}: UnsupportedCountryNoticeProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from("shipping_expansion_requests")
        .insert({
          email: email.trim(),
          country_code: countryCode,
          country_name: countryName,
          product_name: productName ?? null,
        });

      if (error) throw error;
      setSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="rounded-2xl p-5 md:p-6 space-y-4"
      style={{ backgroundColor: "rgba(27,66,41,0.06)" }}
    >
      <div className="flex items-start gap-3">
        <MapPin
          size={20}
          strokeWidth={1.5}
          className="flex-shrink-0 mt-0.5"
          style={{ color: "#1B4229" }}
        />
        <p
          className="leading-relaxed"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            color: "#1B4229",
            fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)",
          }}
        >
          We don't ship to <strong>{countryName}</strong> yet — but we're
          working on it.
        </p>
      </div>

      {submitted ? (
        <p
          className="text-sm pl-8"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            color: "#1B4229",
            opacity: 0.7,
          }}
        >
          We'll let you know as soon as we ship to {countryName}. ✓
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2 pl-8">
          <input
            type="email"
            required
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-xl border-2 px-4 py-2.5 text-sm outline-none transition-colors"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              borderColor: "rgba(27,66,41,0.2)",
              backgroundColor: "white",
              color: "#1B4229",
            }}
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-50"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              backgroundColor: "#1B4229",
              color: "#FFFAEA",
            }}
          >
            {loading ? "..." : "Notify me"}
          </button>
        </form>
      )}
    </div>
  );
};
