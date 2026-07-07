import { Link } from "react-router";

const NR = "'Neue Regrade', sans-serif";

const redes = [
  {
    nombre: "Instagram",
    handle: "@lab.satelital",
    url: "https://www.instagram.com/lab.satelital/",
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    nombre: "Facebook",
    handle: "Laboratorio Satelital",
    url: "https://www.facebook.com/labsatelital",
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    nombre: "TikTok",
    handle: "@lab.satelital",
    url: "https://tiktok.com/@lab.satelital",
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
  },
];

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/talleres", label: "Talleres" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/tienda", label: "Tienda" },
  { to: "/imprenta", label: "Imprenta" },
  { to: "/nosotrxs", label: "Nosotrxs" },
  { to: "/contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-black" style={{ fontFamily: NR }}>
      {/* Main footer grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {/* ── Redes sociales (izquierda) ── */}
        <div className="px-8 lg:px-12 py-10 flex flex-col gap-6">
          <h3
            className="text-white/40 uppercase tracking-widest"
            style={{ fontSize: 12, fontWeight: 700 }}
          >
            Redes sociales
          </h3>
          <div className="flex flex-col gap-4">
            {redes.map((r) => (
              <a
                key={r.nombre}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200 group"
              >
                <span className="flex-shrink-0 text-white/40 group-hover:text-white transition-colors">
                  {r.icono}
                </span>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.2 }}>{r.nombre}</p>
                  <p style={{ fontSize: 13, fontWeight: 300 }}>{r.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── Navegación (centro) ── */}
        <div className="px-8 lg:px-12 py-10 flex flex-col gap-6">
          <h3
            className="text-white/40 uppercase tracking-widest"
            style={{ fontSize: 12, fontWeight: 700 }}
          >
            Navegación
          </h3>
          <nav className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-white/60 hover:text-white transition-colors duration-200"
                style={{ fontSize: 16, fontWeight: 400 }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ── Contacto + info (derecha) ── */}
        <div className="px-8 lg:px-12 py-10 flex flex-col gap-6">
          <h3
            className="text-white/40 uppercase tracking-widest"
            style={{ fontSize: 12, fontWeight: 700 }}
          >
            Contacto
          </h3>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-white/40 uppercase tracking-widest mb-1" style={{ fontSize: 11, fontWeight: 700 }}>
                Email
              </p>
              <a
                href="mailto:lab.satelital@gmail.com"
                className="text-white/70 hover:text-white transition-colors"
                style={{ fontSize: 15, fontWeight: 300 }}
              >
                lab.satelital@gmail.com
              </a>
            </div>
            <div>
              <p className="text-white/40 uppercase tracking-widest mb-1" style={{ fontSize: 11, fontWeight: 700 }}>
                Horario
              </p>
              <p className="text-white/70" style={{ fontSize: 15, fontWeight: 300 }}>
                Lunes a Viernes
                <br />
                10:00 – 18:00
              </p>
            </div>
            <div>
              <p className="text-white/40 uppercase tracking-widest mb-1" style={{ fontSize: 11, fontWeight: 700 }}>
                Dirección
              </p>
              <p className="text-white/70" style={{ fontSize: 15, fontWeight: 300 }}>
                Puebla, Mx.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-8 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-white/30" style={{ fontSize: 13, fontWeight: 400 }}>
          © 2026 Laboratorio Satelital — Todos los derechos reservados
        </p>
        <p className="text-white/20" style={{ fontSize: 13, fontWeight: 400 }}>
          Hecho con risógrafía ☆
        </p>
      </div>
    </footer>
  );
}
