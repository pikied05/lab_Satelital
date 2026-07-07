const NR = "'Neue Regrade', sans-serif";

const talleres = [
  {
    id: "01",
    titulo: "Introducción a la Risografía",
    fecha: "Proximamente",
    duracion: "2 días / 8 horas",
    cupos: "10 personas",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aprende los fundamentos de la impresión risográfica, desde la preparación de archivos hasta la operación de la máquina. Exploraremos separación de colores, registro y las posibilidades expresivas únicas de este medio.",
  },
  {
    id: "02",
    titulo: "Diseño Editorial Experimental",
    fecha: "Proximamente",
    duracion: "3 días / 12 horas",
    cupos: "8 personas",
    descripcion:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Un taller enfocado en la construcción de publicaciones independientes desde el concepto hasta el objeto impreso. Exploraremos formatos, encuadernación básica y la relación entre diseño y producción.",
  },
  {
    id: "03",
    titulo: "Fanzine & Autoedición",
    fecha: "Proximamente",
    duracion: "1 día / 6 horas",
    cupos: "12 personas",
    descripcion:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Aprende a hacer tu propio fanzine desde cero. Técnicas de maquetación, impresión en risógrafo y encuadernación artesanal. Cada participante se lleva su propia publicación.",
  },
  {
    id: "04",
    titulo: "Risografía & Procesos Alternativos",
    fecha: "Proximamente",
    duracion: "2 días / 10 horas",
    cupos: "8 personas",
    descripcion:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Un espacio para experimentar con tintas, texturas y soportes no convencionales. Combinamos técnicas de impresión analógica con propuestas conceptuales propias.",
  },
];

export function Talleres() {
  return (
    <section
      id="talleres-page"
      className="bg-white border-b border-black"
      style={{ fontFamily: NR }}
    >
      {/* Section header */}
      <div className="flex items-baseline justify-between border-b border-black px-8 lg:px-16 py-5">
        <h2
          className="text-black"
          style={{ fontSize: "clamp(32px, 4vw, 64px)", fontWeight: 700 }}
        >
          TALLERES
        </h2>
        <span
          className="text-black/40"
          style={{ fontSize: "clamp(14px, 1.2vw, 18px)", fontWeight: 600 }}
        >
          {talleres.length} DISPONIBLES
        </span>
      </div>

      {/* Taller list */}
      <div>
        {talleres.map((taller, i) => (
          <div
            key={taller.id}
            className="border-b border-black last:border-b-0 px-8 lg:px-16 py-8 lg:py-10 flex flex-col lg:flex-row gap-6 lg:gap-16 group hover:bg-[#d9d9d9] transition-colors duration-200 cursor-pointer"
          >
            {/* Number + meta */}
            <div className="flex-shrink-0 lg:w-[220px]">
              <span
                className="text-black/30 block mb-3"
                style={{ fontSize: "clamp(36px, 4vw, 60px)", fontWeight: 700, lineHeight: 1 }}
              >
                {taller.id}
              </span>
              <div
                className="text-black/60 space-y-1"
                style={{ fontSize: "clamp(13px, 1.1vw, 16px)", fontWeight: 600 }}
              >
                <p>{taller.fecha}</p>
                <p>{taller.duracion}</p>
                <p>Cupos: {taller.cupos}</p>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3
                className="text-black mb-3"
                style={{ fontSize: "clamp(22px, 2.4vw, 36px)", fontWeight: 700, lineHeight: 1.2 }}
              >
                {taller.titulo}
              </h3>
              <p
                className="text-black/70"
                style={{ fontSize: "clamp(15px, 1.5vw, 22px)", fontWeight: 300, lineHeight: 1.6 }}
              >
                {taller.descripcion}
              </p>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0 flex items-end lg:items-center">
              <button
                className="border border-black rounded-[6px] px-6 py-2 text-black bg-transparent group-hover:bg-black group-hover:text-white transition-all duration-200"
                style={{ fontSize: "clamp(14px, 1.2vw, 18px)", fontWeight: 600, whiteSpace: "nowrap" }}
              >
                INSCRIBIRSE ☆
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
