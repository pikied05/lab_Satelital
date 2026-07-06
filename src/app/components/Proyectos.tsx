const NR = "'Neue Regrade', sans-serif";

const proyectos = [
  {
    id: "001",
    año: "2025",
    titulo: "Órbita Común",
    categoria: "Publicación colectiva",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Publicación editorial en risógrafo desarrollada colectivamente por artistas de distintas disciplinas. Cuatro colores, treinta y dos páginas, tirada de 150 ejemplares.",
    tags: ["Risografía", "Publicación", "Colectivo"],
  },
  {
    id: "002",
    año: "2024",
    titulo: "Mapa de lo Invisible",
    categoria: "Intervención + impresión",
    descripcion:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Proyecto de cartografía afectiva que combinó talleres participativos con la producción de un mapa impreso en risógrafo de gran formato. Distribuido gratuitamente en espacios culturales.",
    tags: ["Cartografía", "Participativo", "Gran formato"],
  },
  {
    id: "003",
    año: "2024",
    titulo: "Archivo Desbordado",
    categoria: "Fanzine serie",
    descripcion:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Serie de cinco fanzines que exploran el archivo personal como material político. Cada número es una colaboración con un artista diferente. Impresión en risógrafo dos colores.",
    tags: ["Fanzine", "Archivo", "Serie"],
  },
  {
    id: "004",
    año: "2023",
    titulo: "Tinta & Territorio",
    categoria: "Residencia + publicación",
    descripcion:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Residencia de producción editorial que reunió a ocho artistas durante dos semanas para crear una publicación colectiva sobre territorio y paisaje. Resultado: libro de 64 páginas, cuatro colores.",
    tags: ["Residencia", "Territorio", "Colaboración"],
  },
];

export function Proyectos() {
  return (
    <section
      id="proyectos-page"
      className="bg-[#d9d9d9] border-b border-black"
      style={{ fontFamily: NR }}
    >
      {/* Section header */}
      <div className="flex items-baseline justify-between border-b border-black px-8 lg:px-16 py-5">
        <h2
          className="text-black"
          style={{ fontSize: "clamp(32px, 4vw, 64px)", fontWeight: 700 }}
        >
          PROYECTOS
        </h2>
        <span
          className="text-black/50"
          style={{ fontSize: "clamp(14px, 1.2vw, 18px)", fontWeight: 600 }}
        >
          {proyectos.length} TRABAJOS
        </span>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {proyectos.map((proyecto, i) => (
          <div
            key={proyecto.id}
            className={`p-8 lg:p-12 flex flex-col gap-4 border-black cursor-pointer group hover:bg-black hover:text-white transition-colors duration-300
              ${i % 2 === 0 ? "lg:border-r" : ""}
              ${i < proyectos.length - 2 ? "border-b" : ""}
              ${i === proyectos.length - 1 && proyectos.length % 2 !== 0 ? "lg:border-t-0" : ""}
            `}
          >
            {/* Top row: number + year */}
            <div className="flex items-center justify-between">
              <span
                className="text-black/30 group-hover:text-white/30 transition-colors"
                style={{ fontSize: "clamp(13px, 1vw, 16px)", fontWeight: 700 }}
              >
                {proyecto.id}
              </span>
              <span
                className="text-black/50 group-hover:text-white/50 transition-colors border border-current rounded-full px-3 py-0.5"
                style={{ fontSize: "clamp(12px, 0.9vw, 14px)", fontWeight: 600 }}
              >
                {proyecto.año}
              </span>
            </div>

            {/* Category */}
            <p
              className="text-black/50 group-hover:text-white/50 transition-colors uppercase tracking-widest"
              style={{ fontSize: "clamp(11px, 0.9vw, 13px)", fontWeight: 600 }}
            >
              {proyecto.categoria}
            </p>

            {/* Title */}
            <h3
              className="text-black group-hover:text-white transition-colors"
              style={{ fontSize: "clamp(24px, 2.8vw, 44px)", fontWeight: 700, lineHeight: 1.1 }}
            >
              {proyecto.titulo}
            </h3>

            {/* Description */}
            <p
              className="text-black/70 group-hover:text-white/70 transition-colors flex-1"
              style={{ fontSize: "clamp(14px, 1.3vw, 20px)", fontWeight: 300, lineHeight: 1.6 }}
            >
              {proyecto.descripcion}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {proyecto.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-current rounded-full px-3 py-0.5 text-black group-hover:text-white transition-colors"
                  style={{ fontSize: "clamp(11px, 0.85vw, 13px)", fontWeight: 600 }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Arrow CTA */}
            <div className="flex items-center gap-2 mt-2">
              <span
                className="text-black group-hover:text-white transition-colors"
                style={{ fontSize: "clamp(13px, 1.1vw, 16px)", fontWeight: 600 }}
              >
                VER PROYECTO
              </span>
              <span className="text-black group-hover:text-white transition-colors text-xl">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
