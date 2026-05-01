import { AutoplayVideo } from "@/components/AutoplayVideo";

interface ProductOriginStoryProps {
  content: {
    headline: string;
    quickRef: Array<{ label: string; value: string }>;
    features: Array<{ title: string; description: string; icon: string; video?: string }>;
  };
  tileBackground?: string;
  tileAccent?: string;
  headlineMaxWidth?: string;
}

export const ProductOriginStory = ({ content, tileBackground, tileAccent, headlineMaxWidth }: ProductOriginStoryProps) => {
  const { headline, features } = content;
  const bg = tileBackground || "#1B4229";
  const accent = tileAccent || "#ECA948";

  const renderTile = (index: number) => (
    <div className="rounded-2xl px-4 py-6 h-[250px] lg:h-auto" style={{ backgroundColor: bg }}>
      <div className="h-full flex flex-col justify-center items-center text-center gap-3">
        <div
          className="w-[56px] h-[48px] flex-shrink-0"
          style={{
            backgroundColor: accent,
            WebkitMaskImage: `url(${features[index]?.icon})`,
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskImage: `url(${features[index]?.icon})`,
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        />
        <h3 className="text-lg" style={{ fontFamily: "UDC Working Man Sans, sans-serif", color: accent }}>
          {features[index]?.title}
        </h3>
        <p
          className="tracking-wide leading-relaxed max-w-[280px] xl:max-w-[310px] whitespace-pre-line"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(0.85rem, 1vw, 1rem)",
            letterSpacing: "0.04em",
            color: accent,
          }}
        >
          {features[index]?.description}
        </p>
      </div>
    </div>
  );

  const renderVideo = (index: number, fallback: string) => (
    <div className="rounded-2xl relative overflow-hidden h-[250px] lg:h-auto">
      <AutoplayVideo
        src={features[index]?.video || fallback}
        className="w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden"
      />
    </div>
  );

  return (
    <section className="py-10 md:py-14 lg:py-16 xl:py-24" style={{ backgroundColor: "#FFFAEA" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <p
            className="font-beverly font-bold text-olive-dark tracking-tight mx-auto text-xl lg:text-2xl xl:text-3xl"
            style={{ maxWidth: headlineMaxWidth || "67rem", lineHeight: 1.2 }}
          >
            {headline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:hidden lg:grid lg:grid-cols-3 lg:grid-rows-3 gap-4 max-w-[90vw] mx-auto lg:h-[580px] xl:h-[640px] 3xl:h-[760px]">
          {renderTile(0)}
          {renderVideo(0, "/videos/content-video-1.mp4")}
          {renderTile(1)}

          {renderVideo(1, "/videos/kleia-way-video-3.mp4")}
          {renderTile(2)}
          {renderVideo(2, "/videos/kleia-way-video.mp4")}

          {renderTile(3)}
          {renderVideo(3, "/videos/harvest-2024-1.mp4")}
          {renderTile(4)}
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-4 max-w-[90vw] mx-auto">
          {renderTile(0)}
          {renderVideo(0, "/videos/content-video-1.mp4")}

          {renderVideo(1, "/videos/kleia-way-video-3.mp4")}
          {renderTile(1)}

          {renderTile(2)}
          {renderVideo(2, "/videos/kleia-way-video.mp4")}

          {renderVideo(3, "/videos/harvest-2024-1.mp4")}
          {renderTile(4)}
        </div>
      </div>
    </section>
  );
};
