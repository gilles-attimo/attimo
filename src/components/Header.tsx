import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Link } from "@/lib/router-stub";
import navbarLogo from "@/assets/navbar-logo-latest.svg?url";
import coratinaImage from "@/assets/bottle-coratina.jpg?url";
import picualImage from "@/assets/bottle-picual.jpg?url";
import nocellaraImage from "@/assets/bottle-nocellara.jpg?url";
import { CartDrawer } from "./CartDrawer";

const shopProducts = [
  { name: "Coratina d'Italia", flavor: "Bold & Punchy", handle: "coratina", image: coratinaImage },
  { name: "Picual de España", flavor: "Green & Grassy", handle: "picual", image: picualImage },
  { name: "Nocellara d'Italia", flavor: "Gentle & Fruity", handle: "nocellara", image: nocellaraImage },
];

interface HeaderProps {
  onWaitlistClick: () => void;
  forceScrolled?: boolean;
  forceTransparent?: boolean;
  darkNav?: boolean;
}
export const Header = ({
  onWaitlistClick,
  forceScrolled = false,
  forceTransparent = false,
  darkNav = false,
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(forceScrolled);
  const [shopOpen, setShopOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Always-solid case: don't bother with listeners
    if (forceScrolled && !forceTransparent) {
      setIsScrolled(true);
      return;
    }

    let raf: number | null = null;

    const readScroll = () => {
      // Check every plausible scroll source — the page might scroll on the
      // window, the document element, the body, or the `.overflow-y-scroll`
      // wrapper that the React app sometimes nests its content inside.
      const candidates: number[] = [
        window.scrollY || 0,
        document.documentElement?.scrollTop || 0,
        document.body?.scrollTop || 0,
      ];
      document.querySelectorAll<HTMLElement>('.overflow-y-scroll').forEach((el) => {
        candidates.push(el.scrollTop || 0);
      });
      return Math.max(...candidates);
    };

    const apply = () => {
      raf = null;
      const scrollY = readScroll();
      const next = forceTransparent ? scrollY > 50 : (forceScrolled || scrollY > 50);
      setIsScrolled((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (raf !== null) return;
      raf = requestAnimationFrame(apply);
    };

    // Set the correct initial state — handles page-loads where the user is
    // already scrolled (back-button, anchor link, etc.).
    apply();

    const containers = Array.from(document.querySelectorAll<HTMLElement>('.overflow-y-scroll'));
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true, capture: true });
    containers.forEach((c) => c.addEventListener('scroll', onScroll, { passive: true }));

    return () => {
      if (raf !== null) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('scroll', onScroll, { capture: true } as any);
      containers.forEach((c) => c.removeEventListener('scroll', onScroll));
    };
  }, [forceScrolled, forceTransparent]);

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setShopOpen(true);
    requestAnimationFrame(() => setDropdownVisible(true));
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setDropdownVisible(false);
      setShopOpen(false);
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-6 ${(isScrolled || shopOpen) ? 'shadow-lg' : 'bg-transparent'}`}
      style={{ backgroundColor: (isScrolled || shopOpen) ? '#1B4229' : 'transparent', transition: 'box-shadow 0.3s ease, background-color 0.3s ease' }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img src={navbarLogo} alt="ATTIMO" className="h-7 md:h-9 lg:h-11 w-auto" style={darkNav && !isScrolled && !shopOpen ? { filter: 'brightness(0) saturate(100%) invert(18%) sepia(30%) saturate(1200%) hue-rotate(100deg) brightness(0.7)' } : undefined} />
            </Link>
          </div>
          <div className="flex items-center gap-3 md:gap-6 ml-auto">
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link to="/#shop" className={`${darkNav && !isScrolled && !shopOpen ? 'text-olive-dark' : 'text-white'} hover:opacity-80 transition-opacity text-base md:text-lg font-medium`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Shop
              </Link>
            </div>
            <Link to="/blog" className={`${darkNav && !isScrolled && !shopOpen ? 'text-olive-dark' : 'text-white'} hover:opacity-80 transition-opacity text-base md:text-lg font-medium`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Blog
            </Link>
            <CartDrawer darkIcon={darkNav && !isScrolled && !shopOpen} />
          </div>
        </div>
      </div>

      {shopOpen && (
        <div
          className="absolute left-0 right-0 top-full z-50 shadow-2xl overflow-hidden"
          style={{
            backgroundColor: '#1B4229',
            opacity: dropdownVisible ? 1 : 0,
            maxHeight: dropdownVisible ? '90vh' : '0px',
            transition: 'opacity 0.25s ease, max-height 0.3s ease',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mx-auto px-6 md:px-12 py-5 md:py-8" style={{ maxWidth: '1200px' }}>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-3 md:gap-8" style={{ transform: 'scale(0.9)', transformOrigin: 'top center' }}>
              {shopProducts.map((product) => (
                <Link key={product.handle} to={`/product/${product.handle}`} onClick={() => setShopOpen(false)} className="flex md:flex-col items-center gap-4 md:gap-5 group">
                  <div className="w-28 h-28 md:w-full md:aspect-[3/4] md:h-auto rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0" style={{ backgroundColor: 'rgba(255,250,234,0.06)' }}>
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center transition-transform duration-500 scale-[1.05] group-hover:scale-[1.08]" />
                  </div>
                  <div className="flex flex-col md:items-center gap-0.5 md:gap-1">
                    <span style={{ fontFamily: 'Beverly Drive, serif', color: '#FFFAEA', fontSize: 'clamp(1.4rem, 2vw, 2rem)', letterSpacing: '0.03em' }}>
                      {product.name}
                    </span>
                    <span className="uppercase" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', color: '#B3E58C', fontSize: 'clamp(0.9rem, 1vw, 1.25rem)', letterSpacing: '0.1em' }}>
                      {product.flavor}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
