import { Link } from "react-router";
import { useAdmin } from "../context/AdminContext";

const NR = "'Neue Regrade', sans-serif";

export function TiendaPage() {
  const { productos, tiendaActiva } = useAdmin();

  if (!tiendaActiva) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 border-b border-black" style={{ fontFamily: NR }}>
        <span style={{ fontSize: 48 }}>☆</span>
        <p className="text-black" style={{ fontSize: "clamp(20px, 2.5vw, 36px)", fontWeight: 700 }}>
          Tienda cerrada temporalmente
        </p>
        <p className="text-black/50" style={{ fontSize: "clamp(14px, 1.3vw, 20px)", fontWeight: 300 }}>
          Volvemos pronto. Escribinos a{" "}
          <a href="mailto:hola@laboratoriosatelital.cl" className="underline">
            hola@laboratoriosatelital.cl
          </a>
        </p>
      </div>
    );
  }

  return (
    <section id="tienda-page" className="bg-white min-h-screen" style={{ fontFamily: NR }}>
      {/* Header */}
      <div className="border-b border-black px-8 lg:px-16 py-5 flex items-baseline justify-between">
        <h1
          className="text-black"
          style={{ fontSize: "clamp(32px, 4vw, 64px)", fontWeight: 700 }}
        >
          TIENDA
        </h1>
        <span
          className="text-black/40 uppercase tracking-widest"
          style={{ fontSize: "clamp(12px, 1vw, 16px)", fontWeight: 600 }}
        >
          {productos.filter((p) => p.disponible).length} disponibles
        </span>
      </div>

      {/* Intro strip */}
      <div className="bg-[#d9d9d9] border-b border-black px-8 lg:px-16 py-5">
        <p
          className="text-black"
          style={{ fontSize: "clamp(15px, 1.5vw, 22px)", fontWeight: 300, lineHeight: 1.5 }}
        >
          Publicaciones impresas en risógrafo, afiches y objetos editoriales producidos en el
          laboratorio. Envíos a todo el país. Retiro en taller sin costo.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {productos.map((p, i) => {
          const isLastRow = i >= productos.length - (productos.length % 3 || 3);
          return (
            <Link
              key={p.id}
              to={`/tienda/${p.id}`}
              className={`group flex flex-col gap-0 border-b border-black transition-colors duration-200 relative no-underline
                ${(i + 1) % 3 !== 0 ? "lg:border-r" : ""}
                ${(i + 1) % 2 !== 0 ? "sm:border-r lg:border-r-0" : "sm:border-r-0"}
                ${(i + 1) % 3 !== 0 ? "lg:border-r" : ""}
                ${p.disponible ? "hover:bg-[#d9d9d9] cursor-pointer" : "opacity-60"}
              `}
            >
              {/* Imagen */}
              <div className="w-full aspect-square overflow-hidden bg-[#efefef] border-b border-black">
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-6 lg:p-8 flex flex-col gap-3 flex-1">
                {!p.disponible && (
                  <span
                    className="self-start border border-black/40 rounded-full px-3 py-0.5 text-black/40"
                    style={{ fontSize: "clamp(10px, 0.8vw, 12px)", fontWeight: 700, letterSpacing: "0.1em" }}
                  >
                    AGOTADO
                  </span>
                )}

                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p
                      className="text-black/40 uppercase tracking-widest mb-1"
                      style={{ fontSize: "clamp(10px, 0.8vw, 12px)", fontWeight: 700 }}
                    >
                      {p.tipo}
                    </p>
                    <h2
                      className="text-black"
                      style={{ fontSize: "clamp(18px, 1.8vw, 26px)", fontWeight: 700, lineHeight: 1.2 }}
                    >
                      {p.nombre}
                    </h2>
                  </div>
                  <span
                    className="text-black flex-shrink-0"
                    style={{ fontSize: "clamp(18px, 1.8vw, 26px)", fontWeight: 700 }}
                  >
                    {p.precio}
                  </span>
                </div>

                <div
                  className="text-black/50 space-y-0.5"
                  style={{ fontSize: "clamp(12px, 1vw, 15px)", fontWeight: 400 }}
                >
                  <p>{p.colores}</p>
                  <p>{p.tiraje}</p>
                </div>

                <div className="mt-auto pt-2 flex items-center justify-between">
                  <span
                    className="text-black/40 group-hover:text-black transition-colors"
                    style={{ fontSize: "clamp(12px, 1vw, 15px)", fontWeight: 600 }}
                  >
                    VER PRODUCTO →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Footer strip */}
      <div className="border-t border-black px-8 lg:px-16 py-6 bg-[#d9d9d9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p
          className="text-black/60"
          style={{ fontSize: "clamp(13px, 1.1vw, 17px)", fontWeight: 300 }}
        >
          ¿Querés algo que no está acá? Escribinos —{" "}
          <a
            href="mailto:hola@laboratoriosatelital.cl"
            className="underline text-black hover:text-black/60 transition-colors"
          >
            hola@laboratoriosatelital.cl
          </a>
        </p>
        <p
          className="text-black/40"
          style={{ fontSize: "clamp(12px, 0.9vw, 14px)", fontWeight: 600, letterSpacing: "0.1em" }}
        >
          ENVÍOS A TODO EL PAÍS
        </p>
      </div>
    </section>
  );
}
