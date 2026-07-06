import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import imgLogoNegro from "figma:asset/860ce298f8cc46b005b7ecb05f8428a5752d67b2.png";

const NR = "'Neue Regrade', sans-serif";

/*
  feColorMatrix convierte cada píxel negro (R=0 G=0 B=0 A=1) al color exacto:
  R' = 0*R + 0*G + 0*B + r*A   → r (cuando A=1)
  G' = 0*R + 0*G + 0*B + g*A   → g
  B' = 0*R + 0*G + 0*B + b*A   → b
  A' = 0*R + 0*G + 0*B + 1*A   → 1 (preserva alpha)
  Píxeles transparentes (A=0) quedan transparentes.
*/
const RISO = [
  { id: "riso-azul",     r: 0.196, g: 0.333, b: 0.643 }, // #3255A4
  { id: "riso-naranja",  r: 1,     g: 0.424, b: 0.184 }, // #FF6C2F
  { id: "riso-rosa",     r: 1,     g: 0.282, b: 0.690 }, // #FF48B0
  { id: "riso-amarillo", r: 1,     g: 0.910, b: 0     }, // #FFE800
];

const links = [
  { to: "/talleres", label: "Talleres", side: "left" },
  { to: "/proyectos", label: "Proyectos", side: "left" },
  { to: "/tienda", label: "Tienda", side: "left" },
  { to: "/imprenta", label: "Imprenta", side: "right" },
  { to: "/nosotrxs", label: "Nosotrxs", side: "right" },
  { to: "/contacto", label: "Contacto", side: "right" },
] as const;

export function Navbar() {
  const { pathname } = useLocation();
  const [idx, setIdx] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % RISO.length), 500);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Filtros SVG — sin dimensión visible en el DOM */}
      <svg width="0" height="0" style={{ position: "absolute", overflow: "hidden" }} aria-hidden>
        <defs>
          {RISO.map((f) => (
            <filter id={f.id} key={f.id} colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values={`0 0 0 ${f.r} 0  0 0 0 ${f.g} 0  0 0 0 ${f.b} 0  0 0 0 1 0`}
              />
            </filter>
          ))}
        </defs>
      </svg>

      <style>{`
        .nav-link {
          color: rgba(0, 0, 0, 0.5);
          transition: color 0.15s ease;
        }
        .nav-link:hover,
        .nav-link.active {
          color: #000;
        }
      `}</style>

      <nav
        className="sticky top-0 z-50 bg-[#d9d9d9] border-b border-black"
        style={{ fontFamily: NR }}
      >
        <div className="relative flex items-center justify-between h-[90px] max-w-[1440px] mx-auto px-10 xl:px-20">
          <div className="flex gap-8 lg:gap-12">
            {links
              .filter((l) => l.side === "left")
              .map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`nav-link text-xl font-semibold tracking-wide${pathname === l.to ? " active" : ""}`}
                >
                  {l.label}
                </Link>
              ))}
          </div>

          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              src={imgLogoNegro}
              alt="Laboratorio Satelital"
              className="h-[100px] w-auto object-contain"
              style={{
                filter: hovered ? "none" : `url(#${RISO[idx].id})`,
                transition: hovered ? "filter 0.2s ease" : "none",
              }}
            />
          </Link>

          <div className="flex gap-8 lg:gap-12">
            {links
              .filter((l) => l.side === "right")
              .map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`nav-link text-xl font-semibold tracking-wide${pathname === l.to ? " active" : ""}`}
                >
                  {l.label}
                </Link>
              ))}
          </div>
        </div>
      </nav>
    </>
  );
}
