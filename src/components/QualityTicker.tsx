export const QualityTicker = () => {
  const items = [
    { text: "PREMIUM QUALITY", icon: "/icons/olive.svg" },
    { text: "DIRECT FROM GROVES", icon: "/icons/branch-2.svg" },
    { text: "LAB TESTED", icon: "/icons/flask.svg" },
    { text: "FRESH HARVEST", icon: "/icons/basket-2.svg" },
    { text: "TRACEABLE", icon: "/icons/amphora-2.svg" },
    { text: "ARTISANAL", icon: "/icons/mortar.svg" },
    { text: "SMALL BATCH", icon: "/icons/caraf-2.svg" },
  ];

  return (
    <div className="bg-accent py-6 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee inline-block">
        <span className="text-olive-dark font-working-man-light font-bold text-2xl tracking-wider">
          {Array(10).fill(null).map((_, i) => (
            <span key={i}>
              {items.map((item, index) => (
                <span key={index} className="inline-flex items-center">
                  {item.text}
                  <img
                    src={item.icon}
                    alt=""
                    className="w-5 h-5 mx-4 inline-block"
                    style={{ filter: "brightness(0)" }}
                  />
                </span>
              ))}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};