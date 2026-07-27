import { Link, useParams } from "react-router";
import { proyectos } from "../data/proyectos";
import { ProjectDescription } from "./ProjectDescription";

const NR = "'Neue Regrade', sans-serif";

export function ProyectoDetalle() {
  const { id } = useParams<{ id: string }>();
  const proyecto = proyectos.find((item) => item.id === id);

  if (!proyecto) {
    return (
      <section className="min-h-[70vh] px-8 lg:px-16 py-16" style={{ fontFamily: NR }}>
        <p className="text-black" style={{ fontSize: "clamp(20px, 2.5vw, 36px)", fontWeight: 300 }}>
          Proyecto no encontrado.
        </p>
      </section>
    );
  }

  const imagenes = [
    "/src/app/assets/placeholder-project-1.jpg",
    "/src/app/assets/placeholder-project-2.jpg",
    "/src/app/assets/placeholder-project-3.jpg",
  ];

  return (
    <section className="bg-white min-h-screen" style={{ fontFamily: NR }}>
      <div className="border-b border-black px-8 lg:px-16 py-5 flex flex-col gap-3 lg:flex-row lg:items-baseline lg:justify-between">
        <div>
          <p className="text-black/40 uppercase tracking-widest" style={{ fontSize: 12, fontWeight: 700 }}>
            {proyecto.id}
          </p>
          <h1 className="text-black" style={{ fontSize: "clamp(32px, 4vw, 64px)", fontWeight: 700 }}>
            {proyecto.titulo}
          </h1>
        </div>
        <span className="text-black/50" style={{ fontSize: "clamp(14px, 1.2vw, 18px)", fontWeight: 600 }}>
          {proyecto.año}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] border-b border-black">
        <div className="p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-black">
          <p className="text-black/50 uppercase tracking-widest mb-4" style={{ fontSize: 12, fontWeight: 700 }}>
            {proyecto.categoria}
          </p>
          <p className="text-black" style={{ fontSize: "clamp(18px, 2vw, 30px)", fontWeight: 300, lineHeight: 1.6 }}>
            <ProjectDescription text={proyecto.descripcion} />
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {proyecto.tags.map((tag) => (
              <span key={tag} className="border border-black rounded-full px-3 py-1 text-black/70" style={{ fontSize: 13, fontWeight: 600 }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-8 lg:p-16 bg-[#d9d9d9]">
          <h2 className="text-black mb-6" style={{ fontSize: "clamp(20px, 2vw, 28px)", fontWeight: 700 }}>
            Imagenes del proyecto
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {imagenes.map((src, index) => (
              <div key={src + index} className="border border-black bg-white p-2">
                <img
                  src={src}
                  alt={`${proyecto.titulo} ${index + 1}`}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {proyecto.tecnicos && (
        <div className="border-b border-black px-8 lg:px-16 py-10 bg-[#f4f4f4]">
          <h2 className="text-black mb-6" style={{ fontSize: "clamp(20px, 2vw, 28px)", fontWeight: 700 }}>
            Información técnica
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {proyecto.tecnicos.colores && (
              <div>
                <p className="text-black/40 uppercase tracking-widest mb-2" style={{ fontSize: 11, fontWeight: 700 }}>Colores</p>
                <div className="flex flex-wrap gap-2">
                  {proyecto.tecnicos.colores.map((color) => (
                    <span key={color} className="border border-black rounded-full px-3 py-1 text-black/70" style={{ fontSize: 13, fontWeight: 600 }}>
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {proyecto.tecnicos.papel && (
              <div>
                <p className="text-black/40 uppercase tracking-widest mb-2" style={{ fontSize: 11, fontWeight: 700 }}>Papel</p>
                <p className="text-black" style={{ fontSize: 15, fontWeight: 400 }}>{proyecto.tecnicos.papel}</p>
              </div>
            )}
            {proyecto.tecnicos.tiraje && (
              <div>
                <p className="text-black/40 uppercase tracking-widest mb-2" style={{ fontSize: 11, fontWeight: 700 }}>Tiraje</p>
                <p className="text-black" style={{ fontSize: 15, fontWeight: 400 }}>{proyecto.tecnicos.tiraje}</p>
              </div>
            )}
            {proyecto.tecnicos.formato && (
              <div>
                <p className="text-black/40 uppercase tracking-widest mb-2" style={{ fontSize: 11, fontWeight: 700 }}>Formato</p>
                <p className="text-black" style={{ fontSize: 15, fontWeight: 400 }}>{proyecto.tecnicos.formato}</p>
              </div>
            )}
            {proyecto.tecnicos.tinta && (
              <div>
                <p className="text-black/40 uppercase tracking-widest mb-2" style={{ fontSize: 11, fontWeight: 700 }}>Tinta</p>
                <p className="text-black" style={{ fontSize: 15, fontWeight: 400 }}>{proyecto.tecnicos.tinta}</p>
              </div>
            )}
            {proyecto.tecnicos.notas && (
              <div className="md:col-span-2">
                <p className="text-black/40 uppercase tracking-widest mb-2" style={{ fontSize: 11, fontWeight: 700 }}>Notas</p>
                <p className="text-black" style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.6 }}>{proyecto.tecnicos.notas}</p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="border-b border-black px-8 lg:px-16 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <Link to="/proyectos" className="text-black/60 hover:text-black transition-colors" style={{ fontSize: "clamp(12px, 1vw, 15px)", fontWeight: 600 }}>
          ← Volver a todos los proyectos
        </Link>
        <Link to="/contacto" className="border border-black rounded-[6px] px-6 py-2 text-black hover:bg-black hover:text-white transition-all duration-200" style={{ fontSize: "clamp(14px, 1.3vw, 18px)", fontWeight: 600 }}>
          CONSULTAR PROYECTO ☆
        </Link>
      </div>
    </section>
  );
}
