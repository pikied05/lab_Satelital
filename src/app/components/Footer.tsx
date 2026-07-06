import { Link } from "react-router";

const NR = "'Neue Regrade', sans-serif";

const redes = [
  {
    nombre: "Instagram",
    handle: "@laboratoriosatelital",
    url: "https://instagram.com/laboratoriosatelital",
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
    url: "https://facebook.com/laboratoriosatelital",
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    nombre: "TikTok",
    handle: "@laboratoriosatelital",
    url: "https://tiktok.com/@laboratoriosatelital",
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
  },
  {
    nombre: "Behance",
    handle: "laboratoriosatelital",
    url: "https://behance.net/laboratoriosatelital",
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.5 11.5c.97 0 1.75-.78 1.75-1.75S8.47 8 7.5 8H4v3.5h3.5zm.25 1.5H4V16h3.75c1.1 0 2-.9 2-2s-.9-2-2-2zM0 6h10.5C13 6 14.5 7.5 14.5 9.75c0 1.4-.62 2.56-1.62 3.25C14.38 13.5 15.5 15 15.5 17c0 2.48-2.02 4.5-4.5 4.5H0V6zm15.5 3.5h6V8h-6v1.5zm-.5 3c0-1.93 1.57-3.5 3.5-3.5S22 10.57 22 12.5v.5h-4.5c.28 1 1.03 1.5 2 1.5.73 0 1.3-.3 1.7-.75l1.3.75C21.8 15.4 20.7 16 19.5 16c-2.21 0-4-1.79-4-3.5v-.5h-.5z" />
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
                href="mailto:hola@laboratoriosatelital.cl"
                className="text-white/70 hover:text-white transition-colors"
                style={{ fontSize: 15, fontWeight: 300 }}
              >
                hola@laboratoriosatelital.cl
              </a>
            </div>
            <div>
              <p className="text-white/40 uppercase tracking-widest mb-1" style={{ fontSize: 11, fontWeight: 700 }}>
                Horario
              </p>
              <p className="text-white/70" style={{ fontSize: 15, fontWeight: 300 }}>
                Martes a sábado
                <br />
                10:00 – 19:00
              </p>
            </div>
            <div>
              <p className="text-white/40 uppercase tracking-widest mb-1" style={{ fontSize: 11, fontWeight: 700 }}>
                Dirección
              </p>
              <p className="text-white/70" style={{ fontSize: 15, fontWeight: 300 }}>
                Tu dirección aquí
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-8 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-white/30" style={{ fontSize: 13, fontWeight: 400 }}>
          © 2025 Laboratorio Satelital — Todos los derechos reservados
        </p>
        <p className="text-white/20" style={{ fontSize: 13, fontWeight: 400 }}>
          Hecho con risógrafo ☆
        </p>
      </div>
    </footer>
  );
}
