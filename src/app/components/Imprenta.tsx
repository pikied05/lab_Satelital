import { Link } from "react-router";

const NR = "'Neue Regrade', sans-serif";

const servicios = [
  {
    num: "A",
    id: "a",
    nombre: "Impresión Risográfica",
    formatos: "A5 / A4 / A3 / A2",
    colores: "Hasta 3 colores por trabajo",
    detalle:
      "Impresión en risógrafo con tintas de soja en papel reciclado o de tu elección. Tiradas mínimas de 20 ejemplares. Apto para fanzines, afiches, papelería y publicaciones.",
    tirada: "Desde 20 unidades",
  },
  {
    num: "B",
    id: "b",
    nombre: "Diseño + Impresión",
    formatos: "A5 / A4 / A3",
    colores: "1 a 2 colores",
    detalle:
      "Te acompañamos en el proceso de diseño y adaptación de tus archivos para lograr el mejor resultado en risógrafo. Separación de colores y ajuste técnico incluido.",
    tirada: "Desde 50 unidades",
  },
  {
    num: "C",
    id: "c",
    nombre: "Publicaciones & Fanzines",
    formatos: "A6 / A5 / A4 plegado",
    colores: "1 a 4 colores",
    detalle:
      "Producción integral de tu publicación: diseño, separación de colores, impresión, plegado y encuadernación artesanal. Ideal para autoeditorxs y colectivos.",
    tirada: "Desde 30 unidades",
  },
  {
    num: "D",
    id: "d",
    nombre: "Impresión Libre / Auto-operada",
    formatos: "Variable",
    colores: "1 color",
    detalle:
      "Alquilá tiempo en nuestra máquina y operá vos mismx. Requiere haber completado el taller introductorio. Disponible para integrantes de la red.",
    tirada: "Sin mínimo",
  },
];

export function Imprenta() {
  return (
    <section
      id="imprenta-page"
      className="bg-white border-b border-black"
      style={{ fontFamily: NR }}
    >
      {/* Header */}
      <div className="border-b border-black px-8 lg:px-16 py-5 flex items-baseline justify-between">
        <h2
          className="text-black"
          style={{ fontSize: "clamp(32px, 4vw, 64px)", fontWeight: 700 }}
        >
          IMPRENTA
        </h2>
        <span
          className="text-black/40 uppercase tracking-widest"
          style={{ fontSize: "clamp(12px, 1vw, 16px)", fontWeight: 600 }}
        >
          Risografía
        </span>
      </div>

      {/* Intro strip */}
      <div className="bg-[#d9d9d9] border-b border-black px-8 lg:px-16 py-6">
        <p
          className="text-black max-w-[900px]"
          style={{ fontSize: "clamp(16px, 2vw, 28px)", fontWeight: 300, lineHeight: 1.5 }}
        >
          Contamos con una{" "}
          <strong style={{ fontWeight: 700 }}>Riso Graph RP3700</strong> de dos
          colores. Trabajamos con{" "}
          <strong style={{ fontWeight: 700 }}>tintas de soja</strong> sobre
          papel reciclado. Producción consciente, tirajes accesibles, estética
          única.
        </p>
      </div>

      {/* Servicios table */}
      <div className="divide-y divide-black">
        {servicios.map((s) => (
          <Link
            key={s.num}
            to={`/imprenta/${s.id}`}
            className="block px-8 lg:px-16 py-8 lg:py-10 flex flex-col lg:flex-row gap-6 lg:gap-12 group hover:bg-[#d9d9d9] transition-colors duration-200 no-underline"
          >
            {/* Letter + meta */}
            <div className="flex-shrink-0 lg:w-[180px]">
              <span
                className="block text-black/20 group-hover:text-black/30 transition-colors"
                style={{ fontSize: "clamp(48px, 5vw, 72px)", fontWeight: 700, lineHeight: 1 }}
              >
                {s.num}
              </span>
              <div
                className="mt-2 text-black/60 space-y-0.5"
                style={{ fontSize: "clamp(12px, 1vw, 15px)", fontWeight: 600 }}
              >
                <p>{s.formatos}</p>
                <p>{s.colores}</p>
                <p className="text-black/80 mt-1">{s.tirada}</p>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3
                className="text-black mb-2"
                style={{ fontSize: "clamp(20px, 2.2vw, 34px)", fontWeight: 700, lineHeight: 1.2 }}
              >
                {s.nombre}
              </h3>
              <p
                className="text-black/70"
                style={{ fontSize: "clamp(14px, 1.4vw, 21px)", fontWeight: 300, lineHeight: 1.65 }}
              >
                {s.detalle}
              </p>
            </div>

            {/* Arrow CTA */}
            <div className="flex-shrink-0 flex items-center lg:items-end">
              <span
                className="border border-black rounded-[6px] px-6 py-2 text-black bg-transparent group-hover:bg-black group-hover:text-white transition-all duration-200 whitespace-nowrap flex items-center gap-2"
                style={{ fontSize: "clamp(13px, 1.1vw, 17px)", fontWeight: 600 }}
              >
                VER MÁS <span>→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA banner */}
      <div className="border-t border-black bg-black text-white px-8 lg:px-16 py-8 flex flex-col lg:flex-row items-center justify-between gap-4">
        <p
          style={{ fontSize: "clamp(18px, 2.2vw, 34px)", fontWeight: 300, lineHeight: 1.4 }}
        >
          ¿Tenés un proyecto? Hablemos.
        </p>
        <a
          href="mailto:hola@laboratoriosatelital.cl"
          className="border border-white rounded-[6px] px-8 py-3 text-white hover:bg-white hover:text-black transition-all duration-200 whitespace-nowrap"
          style={{ fontSize: "clamp(14px, 1.3vw, 20px)", fontWeight: 600 }}
        >
          CONTACTAR ☆
        </a>
      </div>
    </section>
  );
}
