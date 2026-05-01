import { Link } from "@/lib/router-stub";
import coratinaImage from "@/assets/bottle-coratina.jpg?url";
import picualImage from "@/assets/bottle-picual.jpg?url";
import nocellaraImage from "@/assets/bottle-nocellara.jpg?url";

const oils = [
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
  tagline: "Effortlessly likeable",
  price: 24
}];


export const OilProductWidgets = () => {
  return (
    <section id="oil-collection"
    className="snap-start pt-14 md:pt-20 pb-10 md:pb-14 lg:pb-20 px-4 md:px-6 relative overflow-hidden scroll-mt-0"
    style={{ backgroundColor: "hsl(var(--section-light))" }}>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
          "radial-gradient(circle at 1px 1px, #1B4229 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }} />


      <div className="relative z-10 mx-auto" style={{ maxWidth: "1400px", zoom: 0.79 }}>
        <div className="text-center mb-14 md:mb-20">
          <h2
            className="mb-4 mx-auto collection-heading-mobile-width"
            style={{
              fontFamily: "Beverly Drive, serif",
              color: "#1B4229",
              fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
              letterSpacing: "0.05em"
            }}>Specialty Extra Virgin Olive Oil
          </h2>
          <p
            className="mx-auto text-center collection-subtitle-mobile-width collection-subtitle-mobile-size"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#1B4229",
              opacity: 0.5,
              fontSize: "clamp(1.4rem, 1.8vw, 1.8rem)",
              lineHeight: 1.7,
              maxWidth: "800px"
            }}>Single-variety olives harvested early and cold-pressed within hours for maximum flavour and health benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-10">
          {oils.map((oil) =>
          <Link
            key={oil.handle}
            to={`/product/${oil.handle}`}
            className="group flex flex-col">

              <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4] mb-7 max-w-[85%] md:max-w-full mx-auto"
              style={{ backgroundColor: "#1B4229" }}>

                <div
                className="absolute inset-0 opacity-[0.04] z-[1]"
                style={{
                  backgroundImage:
                  "radial-gradient(ellipse at 30% 20%, #FFFAEA 0.5px, transparent 0.5px), radial-gradient(ellipse at 70% 80%, #FFFAEA 0.3px, transparent 0.3px)",
                  backgroundSize: "18px 18px, 14px 14px"
                }} />


                <div className="absolute top-0 left-0 right-0 z-10 px-3 pt-3 md:px-4 md:pt-4 lg:px-5 lg:pt-5 flex justify-between items-start">
                  <span
                  className="oil-card-label whitespace-nowrap"
                  style={{
                    fontFamily: "UDC Working Man Sans, sans-serif",
                    letterSpacing: "0.1em",
                    color: "#1B4229"
                  }}>
                    {oil.flag} {oil.origin.toUpperCase()}
                  </span>
                  <span
                  className="oil-card-label whitespace-nowrap"
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
                  color: "#1B4229",
                  fontSize: "clamp(1.8rem, 2.7vw, 2.7rem)",
                  letterSpacing: "0.04em"
                }}>

                  {oil.name} {oil.nameDetail}
                </h3>

                <p
                className="uppercase mb-3"
                style={{
                  fontFamily: "UDC Working Man Sans, sans-serif",
                  color: "#1B4229",
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
                  color: "#1B4229",
                  fontSize: "clamp(1.35rem, 1.8vw, 1.8rem)",
                  letterSpacing: "0.03em"
                }}>

                  €{oil.price}
                </p>

                <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#1B4229",
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

        <div className="text-center mt-20 md:mt-28">
          <p
            className="mb-7 text-sm md:text-base lg:text-lg"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#1B4229",
              fontSize: "clamp(1.4rem, 1.8vw, 1.8rem)",
              opacity: 0.85
            }}>

            Not sure which one is for you?
          </p>
          <Link
            to="/quiz"
            className="text-sm md:text-base inline-flex items-center gap-3 px-12 py-5 rounded-lg transition-all duration-300 hover:scale-105 font-semibold"
            style={{
              fontFamily: "UDC Working Man Sans, sans-serif",
              backgroundColor: "#CDDB2D",
              color: "#1B4229",
              fontSize: "clamp(1.2rem, 1.6vw, 1.6rem)",
              letterSpacing: "0.05em"
            }}>

            Find Your Oil →
          </Link>
        </div>
      </div>
    </section>);

};