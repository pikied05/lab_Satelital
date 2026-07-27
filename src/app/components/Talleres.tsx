import { Link } from "react-router";
import { siteContent } from "../data/siteContent";

const NR = "'Neue Regrade', sans-serif";

const talleres = siteContent.talleres;

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
        {talleres.map((taller) => (
          <Link
            key={taller.id}
            to={`/talleres/${taller.id}`}
            className="border-b border-black last:border-b-0 px-8 lg:px-16 py-8 lg:py-10 flex flex-col lg:flex-row gap-6 lg:gap-16 group hover:bg-[#d9d9d9] transition-colors duration-200 cursor-pointer no-underline"
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
              <span
                className="border border-black rounded-[6px] px-6 py-2 text-black bg-transparent group-hover:bg-black group-hover:text-white transition-all duration-200"
                style={{ fontSize: "clamp(14px, 1.2vw, 18px)", fontWeight: 600, whiteSpace: "nowrap" }}
              >
                VER MÁS ☆
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
