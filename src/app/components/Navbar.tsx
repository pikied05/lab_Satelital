import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import imgLogoNegro from "figma:asset/860ce298f8cc46b005b7ecb05f8428a5752d67b2.png";

const NR = "'Neue Regrade', sans-serif";

const RISO = [
  { id: "riso-azul",     r: 0.196, g: 0.333, b: 0.643 },
  { id: "riso-naranja",  r: 1,     g: 0.424, b: 0.184 },
  { id: "riso-rosa",     r: 1,     g: 0.282, b: 0.690 },
  { id: "riso-amarillo", r: 1,     g: 0.910, b: 0     },
];

const links = [
  { to: "/talleres",  label: "Talleres"  },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/tienda",    label: "Tienda"    },
  { to: "/imprenta",  label: "Imprenta"  },
  { to: "/nosotrxs",  label: "Nosotrxs"  },
  { to: "/contacto",  label: "Contacto"  },
];

const leftLinks  = links.slice(0, 3);
const rightLinks = links.slice(3);

export function Navbar() {
  const { pathname } = useLocation();
  const [idx, setIdx]         = useState(0);
  const [hovered, setHovered] = useState(false);
  const [open, setOpen]       = useState(false);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % RISO.length), 500);
    return () => clearInterval(id);
  }, []);

  /* Cierra el menú al cambiar de ruta */
  useEffect(() => { setOpen(false); }, [pathname]);

  /* Bloquea scroll cuando el menú está abierto */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Filtros SVG exactos */}
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
          color: rgba(0,0,0,0.5);
          transition: color 0.15s ease;
        }
        .nav-link:hover, .nav-link.active { color: #000; }
      `}</style>

      {/* ── Barra principal ── */}
      <nav
        className="sticky top-0 z-50 bg-[#d9d9d9] border-b border-black"
        style={{ fontFamily: NR }}
      >
        <div className="relative flex items-center justify-between h-[72px] lg:h-[90px] px-5 lg:px-10 xl:px-20 max-w-[1440px] mx-auto">

          {/* Desktop — links izquierda */}
          <div className="hidden lg:flex gap-8 xl:gap-12">
            {leftLinks.map((l) => (
              <Link key={l.to} to={l.to}
                className={`nav-link text-lg font-semibold tracking-wide${pathname === l.to ? " active" : ""}`}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Logo — centrado */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              src={imgLogoNegro}
              alt="Laboratorio Satelital"
              className="h-[72px] lg:h-[100px] w-auto object-contain"
              style={{
                filter: hovered ? "none" : `url(#${RISO[idx].id})`,
                transition: hovered ? "filter 0.2s ease" : "none",
              }}
            />
          </Link>

          {/* Desktop — links derecha */}
          <div className="hidden lg:flex gap-8 xl:gap-12">
            {rightLinks.map((l) => (
              <Link key={l.to} to={l.to}
                className={`nav-link text-lg font-semibold tracking-wide${pathname === l.to ? " active" : ""}`}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile — botón hamburguesa */}
          <button
            className="lg:hidden ml-auto p-2 flex flex-col gap-[5px] group"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
          >
            <span className="block w-6 h-[2px] bg-black" />
            <span className="block w-6 h-[2px] bg-black" />
            <span className="block w-4 h-[2px] bg-black" />
          </button>
        </div>
      </nav>

      {/* ── Menú móvil — overlay completo ── */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-[#d9d9d9] flex flex-col"
          style={{ fontFamily: NR }}
        >
          {/* Header del menú */}
          <div className="flex items-center justify-between px-5 border-b border-black h-[72px] flex-shrink-0">
            <Link to="/">
              <img
                src={imgLogoNegro}
                alt="Laboratorio Satelital"
                className="h-[56px] w-auto object-contain"
                style={{ filter: `url(#${RISO[idx].id})` }}
              />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="text-black text-3xl leading-none p-2"
              aria-label="Cerrar menú"
            >
              ✕
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 flex flex-col divide-y divide-black overflow-y-auto">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="flex items-center justify-between px-6 py-6 text-black hover:bg-black hover:text-white transition-colors duration-150"
                style={{ fontSize: "clamp(28px, 8vw, 42px)", fontWeight: 700 }}
              >
                {l.label}
                <span className="text-2xl opacity-40">→</span>
              </Link>
            ))}
          </nav>

          {/* Footer del menú */}
          <div className="border-t border-black px-6 py-5 flex-shrink-0">
            <p className="text-black/40" style={{ fontSize: 13, fontWeight: 400 }}>
              lab.satelital@gmail.com
            </p>
          </div>
        </div>
      )}
    </>
  );
}
