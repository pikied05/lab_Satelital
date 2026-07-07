import { Link } from "react-router";
import imgSateliteConTambor from "../../imports/satelite_conTambor.png";
import imgMonitos1 from "figma:asset/b5501f120373347acfee5ba1f34957ae482e6e57.png";
import imgMonitos2 from "figma:asset/a4da76843fe6460a8f2082bc892a8a4f63552551.png";
import imgMonitos3 from "figma:asset/1d0cbd54a08d5623c2c91bfa1e601485b755149e.png";
import imgLogoNegro from "figma:asset/860ce298f8cc46b005b7ecb05f8428a5752d67b2.png";

const NR = "'Neue Regrade', sans-serif";
const BANNER_TEXT = "DESCARGA GUÍA DE IMPRESIÓN ☆ ";

const proyectosDestacados = [
  {
    id: "001",
    año: "2025",
    titulo: "Órbita Común",
    categoria: "Publicación colectiva",
    descripcion:
      "Publicación editorial en risógrafo desarrollada colectivamente por artistas de distintas disciplinas. Cuatro colores, treinta y dos páginas, tirada de 150 ejemplares.",
    tags: ["Risografía", "Publicación", "Colectivo"],
  },
  {
    id: "002",
    año: "2024",
    titulo: "Mapa de lo Invisible",
    categoria: "Intervención + impresión",
    descripcion:
      "Proyecto de cartografía afectiva que combinó talleres participativos con la producción de un mapa impreso en risógrafo de gran formato. Distribuido gratuitamente en espacios culturales.",
    tags: ["Cartografía", "Participativo", "Gran formato"],
  },
  {
    id: "003",
    año: "2024",
    titulo: "Archivo Desbordado",
    categoria: "Fanzine serie",
    descripcion:
      "Serie de cinco fanzines que exploran el archivo personal como material político. Cada número es una colaboración con un artista diferente. Impresión en risógrafo dos colores.",
    tags: ["Fanzine", "Archivo", "Serie"],
  },
];

function HeroSection() {
  return (
    <section
      className="relative bg-white overflow-hidden"
      style={{ minHeight: "calc(100vh - 90px)", fontFamily: NR }}
    >
      {/* ===== DESKTOP / TABLET (lg+): monitos a los costados, mas grandes ===== */}
      <div
        className="hidden lg:block absolute top-[6%] left-0 pointer-events-none select-none"
        style={{ width: "clamp(140px, 34%, 520px)", transform: "translateX(-10%)", zIndex: 0 }}
      >
        <img src={imgMonitos1} alt="" className="w-full h-auto" />
      </div>

      <div
        className="hidden lg:block absolute top-[12%] right-0 pointer-events-none select-none"
        style={{ width: "clamp(120px, 30%, 460px)", transform: "translateX(10%) scaleX(-1)", zIndex: 0 }}
      >
        <img src={imgMonitos2} alt="" className="w-full h-auto" />
      </div>

      <div className="hidden lg:block relative w-full px-3 sm:px-4 pt-4" style={{ zIndex: 1 }}>
        <img
          src={imgLogoNegro}
          alt="Laboratorio Satelital"
          className="w-full mx-auto block object-contain"
          style={{ maxWidth: "1280px", maxHeight: "55vh" }}
        />
      </div>

      <div
        className="hidden lg:flex relative flex-col items-center text-center px-5 pt-3 pb-10 gap-5"
        style={{ zIndex: 2 }}
      >
        <p
          className="text-black max-w-[560px]"
          style={{ fontSize: "clamp(15px, 2.4vw, 32px)", fontWeight: 300, lineHeight: 1.45 }}
        >
          orbita entre conceptos e ideas, conecta recibe información y la reproduce y acercan.
        </p>
        <Link
          to="/contacto"
          className="bg-[#d9d9d9] border-2 border-black rounded-[9px] px-7 py-3 hover:bg-black hover:text-white transition-all duration-200 no-underline text-black"
          style={{ fontSize: "clamp(15px, 2vw, 28px)", fontWeight: 300 }}
        >
          CONTÁCTANOS
        </Link>
      </div>

      {/* ===== MOBILE (hasta lg): todo centrado en columna, monito arriba y abajo ===== */}
      <div className="flex lg:hidden flex-col items-center text-center px-5 pt-2 pb-6 gap-1" style={{ zIndex: 1 }}>
        <div className="pointer-events-none select-none" style={{ width: "78%", maxWidth: 320 }}>
          <img src={imgMonitos1} alt="" className="w-full h-auto" />
        </div>

        <img
          src={imgLogoNegro}
          alt="Laboratorio Satelital"
          className="w-full mx-auto block object-contain -mt-20"
          style={{ maxWidth: 480 }}
        />

        <p
          className="text-black max-w-[420px] -mt-2"
          style={{ fontSize: "clamp(15px, 4vw, 20px)", fontWeight: 300, lineHeight: 1.45 }}
        >
          orbita entre conceptos e ideas, conecta recibe información y la reproduce y acercan.
        </p>

        <Link
          to="/contacto"
          className="bg-[#d9d9d9] border-2 border-black rounded-[9px] px-7 py-3 hover:bg-black hover:text-white transition-all duration-200 no-underline text-black mt-2"
          style={{ fontSize: "clamp(15px, 4vw, 20px)", fontWeight: 300 }}
        >
          CONTÁCTANOS
        </Link>

        <div className="pointer-events-none select-none -mt-4" style={{ width: "85%", maxWidth: 360, transform: "scaleX(-1)" }}>
          <img src={imgMonitos2} alt="" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

function MarqueeBanner() {
  const content = BANNER_TEXT.repeat(7);
  return (
    <div
      className="bg-[#d9d9d9] border-y border-black overflow-hidden"
      style={{ fontFamily: NR }}
    >
      <style>{`
        @keyframes lab-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .lab-marquee-track {
          display: flex;
          white-space: nowrap;
          animation: lab-marquee 10s linear infinite;
          will-change: transform;
        }
        .lab-marquee-track:hover { animation-play-state: paused; }
      `}</style>
      <div
        className="lab-marquee-track py-3"
        style={{ fontSize: "clamp(22px, 3vw, 46px)", fontWeight: 600 }}
      >
        <span>{content}</span>
        <span aria-hidden="true">{content}</span>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section className="bg-white border-x border-t border-black overflow-hidden" style={{ fontFamily: NR }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="px-8 lg:px-16 pt-10 pb-4">
          <h2
            className="text-black"
            style={{ fontSize: "clamp(24px, 3.5vw, 54px)", fontWeight: 700, lineHeight: 1.2 }}
          >
            [LABORATORIO SATELITAL]
          </h2>
        </div>

        <div className="flex items-start">
          <div
            className="flex-shrink-0 pointer-events-none select-none"
            style={{ width: "clamp(100px, 36%, 480px)", marginLeft: "-2%", mixBlendMode: "multiply" }}
          >
            <img src={imgMonitos3} alt="" className="w-full h-auto object-contain block" />
          </div>

          <div className="flex-1 pr-8 lg:pr-16 pb-12 pt-6">
            <p
              className="text-black"
              style={{ fontSize: "clamp(16px, 2.6vw, 40px)", fontWeight: 400, lineHeight: 1.5 }}
            >
              Laboratorio de <strong style={{ fontWeight: 700 }}>risografía</strong> enfocado en
              la <strong style={{ fontWeight: 700 }}>experimentación artística-editorial</strong>{" "}
              y en la{" "}
              <strong style={{ fontWeight: 700 }}>
                práctica colaborativa multidisciplinaria.
              </strong>{" "}
              Tomamos la <strong style={{ fontWeight: 700 }}>creatividad</strong> y la{" "}
              <strong style={{ fontWeight: 700 }}>exploración</strong> como órbitas que guían
              nuestro laboratorio, priorizando siempre{" "}
              <strong style={{ fontWeight: 700 }}>
                la diversidad, la autogestión y el desbordamiento de la imaginación.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProyectosPreview() {
  return (
    <section className="bg-white border border-black border-t-0" style={{ fontFamily: NR }}>
      {/* Header */}
      <div className="border-b border-black px-8 lg:px-16 py-5 flex items-baseline justify-between">
        <h2
          className="text-black"
          style={{ fontSize: "clamp(18px, 2vw, 30px)", fontWeight: 700, letterSpacing: "0.05em" }}
        >
          PROYECTOS RECIENTES
        </h2>
        <Link
          to="/proyectos"
          className="text-black/50 hover:text-black transition-colors"
          style={{ fontSize: "clamp(13px, 1.1vw, 16px)", fontWeight: 600 }}
        >
          VER TODOS →
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-black">
        {proyectosDestacados.map((p, i) => (
          <Link
            key={p.id}
            to="/proyectos"
            className="group flex flex-col gap-4 p-8 lg:p-10 hover:bg-[#d9d9d9] transition-colors duration-200 no-underline"
          >
            {/* Top */}
            <div className="flex items-center justify-between">
              <span
                className="text-black/30 group-hover:text-black/50 transition-colors"
                style={{ fontSize: "clamp(11px, 0.9vw, 14px)", fontWeight: 700, letterSpacing: "0.15em" }}
              >
                {p.id}
              </span>
              <span
                className="border border-black/30 group-hover:border-black transition-colors rounded-full px-3 py-0.5 text-black/50 group-hover:text-black"
                style={{ fontSize: "clamp(11px, 0.85vw, 13px)", fontWeight: 600 }}
              >
                {p.año}
              </span>
            </div>

            {/* Categoria */}
            <p
              className="text-black/40 uppercase tracking-widest"
              style={{ fontSize: "clamp(10px, 0.8vw, 12px)", fontWeight: 700 }}
            >
              {p.categoria}
            </p>

            {/* Título */}
            <h3
              className="text-black"
              style={{ fontSize: "clamp(22px, 2.4vw, 38px)", fontWeight: 700, lineHeight: 1.1 }}
            >
              {p.titulo}
            </h3>

            {/* Descripción */}
            <p
              className="text-black/60 flex-1"
              style={{ fontSize: "clamp(13px, 1.2vw, 18px)", fontWeight: 300, lineHeight: 1.6 }}
            >
              {p.descripcion}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-black/30 group-hover:border-black transition-colors rounded-full px-3 py-0.5 text-black/50 group-hover:text-black"
                  style={{ fontSize: "clamp(10px, 0.8vw, 12px)", fontWeight: 600 }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Arrow */}
            <div className="flex items-center gap-1 text-black/40 group-hover:text-black transition-colors">
              <span style={{ fontSize: "clamp(12px, 1vw, 15px)", fontWeight: 600 }}>VER PROYECTO</span>
              <span className="text-lg">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function CTAContacto() {
  return (
    <section
      className="bg-[#d9d9d9] border border-black border-t-0 overflow-hidden"
      style={{ fontFamily: NR }}
    >
      {/* ===== DESKTOP / TABLET (lg+): monito flotando a la izquierda ===== */}
      <div className="hidden lg:flex relative flex-col items-center text-center px-6 py-12 sm:py-16 lg:py-24 gap-7 min-h-[360px] justify-center">
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
          style={{ width: "clamp(80px, 20%, 300px)" }}
        >
          <img
            src={imgSateliteConTambor}
            alt=""
            className="w-full h-auto object-contain"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        <p
          className="text-black"
          style={{ fontSize: "clamp(26px, 4vw, 64px)", fontWeight: 700, lineHeight: 1.1 }}
        >
          ¿Quieres cotizar,<br />
          saber más o<br />
          proponernos<br />
          un proyecto?
        </p>

        <p
          className="text-black/60 max-w-[440px]"
          style={{ fontSize: "clamp(14px, 1.5vw, 22px)", fontWeight: 300, lineHeight: 1.6 }}
        >
          Escríbenos y te respondemos en menos de 48 horas hábiles. Trabajamos con artistas, colectivos, editoriales y cualquier persona con ganas de imprimir.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 w-full sm:w-auto">
          <Link
            to="/contacto"
            className="bg-black text-white rounded-[9px] px-8 py-4 hover:bg-white hover:text-black border-2 border-black transition-all duration-200 no-underline"
            style={{ fontSize: "clamp(15px, 1.6vw, 22px)", fontWeight: 600 }}
          >
            CONTÁCTANOS ☆
          </Link>
          <Link
            to="/imprenta"
            className="bg-transparent text-black rounded-[9px] px-8 py-4 hover:bg-black hover:text-white border-2 border-black transition-all duration-200 no-underline"
            style={{ fontSize: "clamp(15px, 1.6vw, 22px)", fontWeight: 300 }}
          >
            VER SERVICIOS
          </Link>
        </div>
      </div>

      {/* ===== MOBILE (hasta lg): monito entre la pregunta y el texto ===== */}
      <div className="flex lg:hidden flex-col items-center text-center px-6 py-10 gap-4">
        <p
          className="text-black"
          style={{ fontSize: "clamp(26px, 6vw, 40px)", fontWeight: 700, lineHeight: 1.1 }}
        >
          ¿Quieres cotizar,<br />
          saber más o<br />
          proponernos<br />
          un proyecto?
        </p>

        <div className="pointer-events-none select-none" style={{ width: "55%", maxWidth: 220 }}>
          <img
            src={imgSateliteConTambor}
            alt=""
            className="w-full h-auto object-contain"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        <p
          className="text-black/60 max-w-[420px]"
          style={{ fontSize: "clamp(14px, 4vw, 18px)", fontWeight: 300, lineHeight: 1.6 }}
        >
          Escríbenos y te respondemos en menos de 48 horas hábiles. Trabajamos con artistas, colectivos, editoriales y cualquier persona con ganas de imprimir.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 w-full sm:w-auto mt-2">
          <Link
            to="/contacto"
            className="bg-black text-white rounded-[9px] px-8 py-4 hover:bg-white hover:text-black border-2 border-black transition-all duration-200 no-underline"
            style={{ fontSize: "clamp(15px, 4vw, 20px)", fontWeight: 600 }}
          >
            CONTÁCTANOS ☆
          </Link>
          <Link
            to="/imprenta"
            className="bg-transparent text-black rounded-[9px] px-8 py-4 hover:bg-black hover:text-white border-2 border-black transition-all duration-200 no-underline"
            style={{ fontSize: "clamp(15px, 4vw, 20px)", fontWeight: 300 }}
          >
            VER SERVICIOS
          </Link>
        </div>
      </div>
    </section>
  );
}

export function InicioPage() {
  return (
    <>
      <HeroSection />
      <MarqueeBanner />
      <AboutSection />
      <ProyectosPreview />
      <CTAContacto />
    </>
  );
}