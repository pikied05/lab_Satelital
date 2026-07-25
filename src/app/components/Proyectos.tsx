import { Link } from "react-router";
import { ProjectDescription } from "./ProjectDescription";
import { proyectos } from "../data/proyectos";

const NR = "'Neue Regrade', sans-serif";

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
          <Link
            key={proyecto.id}
            to={`/proyectos/${proyecto.id}`}
            className={`p-8 lg:p-12 flex flex-col gap-4 border-black cursor-pointer group hover:bg-black hover:text-white transition-colors duration-300 no-underline
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
              <ProjectDescription text={proyecto.descripcion} />
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
          </Link>
        ))}
      </div>
    </section>
  );
}
