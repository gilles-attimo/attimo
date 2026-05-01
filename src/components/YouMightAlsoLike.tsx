import { Link } from "@/lib/router-stub";
import coratinaImage from "@/assets/bottle-coratina.jpg?url";
import picualImage from "@/assets/bottle-picual.jpg?url";
import nocellaraImage from "@/assets/bottle-nocellara.jpg?url";

const allOils = [
{
  name: "Coratina",
  nameDetail: "d'Italia",
  flavor: "Bold & Punchy",
  origin: "Puglia, Italy",
  flag: "🇮🇹",
  handle: "coratina",
  image: coratinaImage,
  tagline: "A hit of healthy polyphenols",
  price: 24
},
{
  name: "Picual",
  nameDetail: "de España",
  flavor: "Green & Grassy",
  origin: "Jaén, Spain",
  flag: "🇪🇸",
  handle: "picual",
  image: picualImage,
  tagline: "All-round goodness",
  price: 24
},
{
  name: "Nocellara",
  nameDetail: "d'Italia",
  flavor: "Gentle & Fruity",
  origin: "Sicily, Italy",
  flag: "🇮🇹",
  handle: "nocellara",
  image: nocellaraImage,
  tagline: "Loved by everyone",
  price: 24
}];


interface YouMightAlsoLikeProps {
  currentHandle?: string;
  accentColor?: string;
}

// Helper: determine if a hex color is "light" (needs dark text) or "dark" (needs light text)
const isLightColor = (hex: string): boolean => {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150;
};

export const YouMightAlsoLike = ({ currentHandle, accentColor }: YouMightAlsoLikeProps) => {
  const otherOils = allOils.filter((oil) => oil.handle !== currentHandle);
  const bgColor = accentColor || "hsl(var(--section-light))";
  const textColor = accentColor && isLightColor(accentColor) ? "#1B4229" : accentColor ? "#FFFAEA" : "#1B4229";

  return (
    <section
      className="py-14 md:py-20 lg:py-24 px-4 md:px-6 relative overflow-hidden"
      style={{ backgroundColor: bgColor }}>
      
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
          `radial-gradient(circle at 1px 1px, ${textColor} 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }} />
      

      <div className="relative z-10 mx-auto" style={{ maxWidth: "1400px", zoom: 0.87 }}>
        <div className="text-center mb-8 md:mb-12">
          <h2
            className="mb-4 mx-auto"
            style={{
              fontFamily: "Beverly Drive, serif",
              color: textColor,
              fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
              letterSpacing: "0.05em"
            }}>
            
            More Varieties  
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 gap-16 lg:gap-10 mx-auto ${
          otherOils.length === 2 ?
          "lg:grid-cols-2 max-w-[950px]" :
          "lg:grid-cols-3"}`
          }>
          
          {otherOils.map((oil) =>
          <Link
            key={oil.handle}
            to={`/product/${oil.handle}`}
            className="group flex flex-col">
            
              <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-7 max-w-[85%] mx-auto"
              style={{ backgroundColor: "#1B4229" }}>
              
                <div
                className="absolute inset-0 opacity-[0.04] z-[1]"
                style={{
                  backgroundImage:
                  "radial-gradient(ellipse at 30% 20%, #FFFAEA 0.5px, transparent 0.5px), radial-gradient(ellipse at 70% 80%, #FFFAEA 0.3px, transparent 0.3px)",
                  backgroundSize: "18px 18px, 14px 14px"
                }} />
              

                <div className="absolute top-0 left-0 right-0 z-10 px-5 pt-5 flex justify-between items-start">
                  <span
                  className="oil-card-label"
                  style={{
                    fontFamily: "UDC Working Man Sans, sans-serif",
                    letterSpacing: "0.1em",
                    color: "#1B4229"
                  }}>
                  
                    {oil.flag} {oil.origin.toUpperCase()}
                  </span>
                  <span
                  className="oil-card-label"
                  style={{
                    fontFamily: "UDC Working Man Sans, sans-serif",
                    letterSpacing: "0.1em",
                    color: "#1B4229"
                  }}>
                  
                    500ML
                  </span>
                </div>

                <img
                src={oil.image}
                alt={`${oil.name} olive oil bottle`}
                className="w-full h-full object-cover relative z-[2] transition-transform duration-700 scale-[1.25] group-hover:scale-[1.28]" />
              
              </div>

              <div className="flex flex-col items-center text-center px-2">
                <h3
                className="mb-1.5"
                style={{
                  fontFamily: "Beverly Drive, serif",
                  color: textColor,
                  fontSize: "clamp(1.8rem, 2.7vw, 2.7rem)",
                  letterSpacing: "0.04em"
                }}>
                
                  {oil.name} {oil.nameDetail}
                </h3>

                <p
                className="uppercase mb-3"
                style={{
                  fontFamily: "UDC Working Man Sans, sans-serif",
                  color: textColor,
                  fontSize: "clamp(1.18rem, 1.46vw, 1.46rem)",
                  letterSpacing: "0.15em",
                  opacity: 0.7
                }}>
                
                  {oil.flavor}
                </p>

                <p
                className="mb-3"
                style={{
                  fontFamily: "UDC Working Man Sans, sans-serif",
                  color: textColor,
                  fontSize: "clamp(1.35rem, 1.8vw, 1.8rem)",
                  letterSpacing: "0.03em"
                }}>
                
                  €{oil.price}
                </p>

                <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: textColor,
                  fontSize: "clamp(1.18rem, 1.46vw, 1.46rem)",
                  opacity: 0.5,
                  lineHeight: 1.6
                }}>
                
                  {oil.tagline}
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>);

};