const NR = "'Neue Regrade', sans-serif";

const valores = [
  { label: "Autogestión", descripcion: "Funcionamos de forma independiente, sosteniendo el espacio colectivamente." },
  { label: "Colaboración", descripcion: "Priorizamos los procesos colaborativos y la construcción de redes entre artistas." },
  { label: "Experimentación", descripcion: "La impresión como laboratorio: un espacio donde el error es parte del proceso." },
  { label: "Accesibilidad", descripcion: "Creemos en democratizar el acceso a los medios de producción editorial." },
];

const integrantes = [
  { nombre: "M. Loa", rol: "Risografía & Producción & Diseño Editorial" },
  //{ nombre: "R. Soto", rol: "Gestión & Proyectos" },
  { nombre: "M. Niño", rol: "Arte & Experimentación" },
  { nombre: "V. Ortiz", rol: "Comunicación" },
];

export function Nosotrxs() {
  return (
    <section
      id="nosotrxs-page"
      className="bg-white"
      style={{ fontFamily: NR }}
    >
      {/* Header */}
      <div className="border-b border-black px-8 lg:px-16 py-5">
        <h2
          className="text-black"
          style={{ fontSize: "clamp(32px, 4vw, 64px)", fontWeight: 700 }}
        >
          NOSOTRXS
        </h2>
      </div>

      {/* Manifesto block */}
      <div className="border-b border-black px-8 lg:px-16 py-12 lg:py-16">
        <div className="max-w-[1100px]">
          <p
            className="text-black mb-6"
            style={{ fontSize: "clamp(22px, 3vw, 48px)", fontWeight: 300, lineHeight: 1.4 }}
          >
            Somos un{" "}
            <strong style={{ fontWeight: 700 }}>laboratorio editorial colectivo</strong>{" "}
            que orbita entre la impresión risográfica, el arte y la
            experimentación. Nos encontramos en un espacio compartido donde
            convergen{" "}
            <strong style={{ fontWeight: 700 }}>
              artistas, diseñadorxs, escritorxs y gestorixs culturales.
            </strong>
          </p>
          <p
            className="text-black/70"
            style={{ fontSize: "clamp(16px, 1.8vw, 28px)", fontWeight: 300, lineHeight: 1.6 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>

      {/* Valores + Integrantes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-black">
        {/* Valores */}
        <div className="border-b lg:border-b-0 lg:border-r border-black">
          <div className="px-8 lg:px-12 py-6 border-b border-black">
            <h3
              className="text-black"
              style={{ fontSize: "clamp(14px, 1.2vw, 18px)", fontWeight: 700, letterSpacing: "0.15em" }}
            >
              VALORES ☆
            </h3>
          </div>
          <div className="divide-y divide-black">
            {valores.map((v) => (
              <div key={v.label} className="px-8 lg:px-12 py-6 group hover:bg-[#d9d9d9] transition-colors duration-200">
                <h4
                  className="text-black mb-1"
                  style={{ fontSize: "clamp(18px, 1.8vw, 28px)", fontWeight: 700 }}
                >
                  {v.label}
                </h4>
                <p
                  className="text-black/60"
                  style={{ fontSize: "clamp(13px, 1.1vw, 17px)", fontWeight: 300, lineHeight: 1.6 }}
                >
                  {v.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Integrantes */}
        <div>
          <div className="px-8 lg:px-12 py-6 border-b border-black">
            <h3
              className="text-black"
              style={{ fontSize: "clamp(14px, 1.2vw, 18px)", fontWeight: 700, letterSpacing: "0.15em" }}
            >
              INTEGRANTES ☆
            </h3>
          </div>
          <div className="divide-y divide-black">
            {integrantes.map((p, i) => (
              <div
                key={p.nombre}
                className="px-8 lg:px-12 py-5 flex items-center justify-between group hover:bg-[#d9d9d9] transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-black/20 font-bold tabular-nums"
                    style={{ fontSize: "clamp(12px, 1vw, 15px)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4
                    className="text-black"
                    style={{ fontSize: "clamp(16px, 1.6vw, 24px)", fontWeight: 600 }}
                  >
                    {p.nombre}
                  </h4>
                </div>
                <p
                  className="text-black/50"
                  style={{ fontSize: "clamp(12px, 1vw, 15px)", fontWeight: 400 }}
                >
                  {p.rol}
                </p>
              </div>
            ))}
          </div>
          {/* Contact block inside Nosotrxs */}
          <div className="border-t border-black px-8 lg:px-12 py-8 bg-[#d9d9d9]">
            <p
              className="text-black mb-4"
              style={{ fontSize: "clamp(14px, 1.2vw, 18px)", fontWeight: 300, lineHeight: 1.6 }}
            >
              ¿Querés sumarte, colaborar o simplemente saber más de lo que
              hacemos?
            </p>
            <a
              href="mailto:hola@laboratorioateslital.cl"
              className="inline-block border border-black rounded-[6px] px-6 py-2 text-black hover:bg-black hover:text-white transition-all duration-200"
              style={{ fontSize: "clamp(13px, 1.1vw, 17px)", fontWeight: 600 }}
            >
              lab.satelital@gmail.com
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
