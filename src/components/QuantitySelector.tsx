import { Button } from "@/components/ui/button";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (qty: number) => void;
  pricePerUnit: number;
  onAddToCart: () => void;
  buttonId?: string;
  buttonColor?: string;
  freeShippingThreshold?: number;
}

const BASE_PRESETS = [
  { qty: 1, label: "1 Bottle" },
  { qty: 2, label: "2 Bottles" },
  { qty: 3, label: "3 Bottles" },
  { qty: 4, label: "4 Bottles" },
  { qty: 8, label: "8 Bottles" },
];

function buildPresets(threshold: number) {
  return BASE_PRESETS.map((p) => ({
    ...p,
    sub: p.qty >= threshold ? "Free Shipping" : undefined,
  }));
}

export const QuantitySelector = ({
  quantity,
  onQuantityChange,
  pricePerUnit,
  onAddToCart,
  buttonId,
  freeShippingThreshold = 2,
}: QuantitySelectorProps) => {
  const totalPrice = quantity * pricePerUnit;
  const threshold = freeShippingThreshold ?? 2;
  const presets = buildPresets(threshold);

  return (
    <div className="space-y-3">
      {/* Preset buttons */}
      <div className="grid grid-cols-5 gap-2">
        {presets.map((p) => (
          <button
            key={p.qty}
            type="button"
            onClick={() => onQuantityChange(p.qty)}
            className={`rounded-xl border-2 transition-all duration-200 text-center py-2.5 px-1 ${
              quantity === p.qty
                ? "border-olive-dark bg-olive-dark text-cream"
                : "border-olive-dark/20 bg-white/60 text-olive-dark hover:border-olive-dark/40"
            }`}
          >
            <span
              className="block font-semibold leading-tight"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "clamp(0.75rem, 0.9vw, 0.95rem)",
              }}
            >
              {p.label}
            </span>
            {p.sub && (
              <span
                className={`block leading-tight mt-0.5 ${
                  quantity === p.qty ? "text-cream/70" : "text-olive-medium/70"
                }`}
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "clamp(0.55rem, 0.65vw, 0.7rem)",
                }}
              >
                {p.sub}
              </span>
            )}
          </button>
        ))}
      </div>

    </div>
  );
};
