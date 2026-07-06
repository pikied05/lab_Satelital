import { Link, useParams } from "react-router";
import { useAdmin } from "../context/AdminContext";

const NR = "'Neue Regrade', sans-serif";

export function TiendaDetalle() {
  const { id } = useParams<{ id: string }>();
  const { productos } = useAdmin();
  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return (
      <div
        className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-8"
        style={{ fontFamily: NR }}
      >
        <p className="text-black" style={{ fontSize: "clamp(20px, 2.5vw, 36px)", fontWeight: 300 }}>
          Producto no encontrado.
        </p>
        <Link
          to="/tienda"
          className="border border-black rounded-[6px] px-6 py-2 text-black hover:bg-black hover:text-white transition-all duration-200"
          style={{ fontSize: "16px", fontWeight: 600 }}
        >
          ← Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen" style={{ fontFamily: NR }}>
      {/* Breadcrumb */}
      <div className="border-b border-black px-8 lg:px-16 py-5 flex items-center gap-4">
        <Link
          to="/tienda"
          className="text-black/40 hover:text-black transition-colors"
          style={{ fontSize: "clamp(13px, 1.1vw, 17px)", fontWeight: 600 }}
        >
          ← TIENDA
        </Link>
        <span className="text-black/20">/</span>
        <span
          className="text-black"
          style={{ fontSize: "clamp(13px, 1.1vw, 17px)", fontWeight: 600 }}
        >
          {producto.nombre.toUpperCase()}
        </span>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Imagen */}
        <div className="border-b lg:border-b-0 lg:border-r border-black bg-[#d9d9d9] flex items-center justify-center p-8 lg:p-12 min-h-[50vw] lg:min-h-0">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-full object-cover"
            style={{ maxHeight: "70vh" }}
          />
        </div>

        {/* Info */}
        <div className="flex flex-col divide-y divide-black">
          {/* Título */}
          <div className="px-8 lg:px-12 py-10 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span
                className="text-black/40 uppercase tracking-widest"
                style={{ fontSize: "clamp(11px, 0.85vw, 13px)", fontWeight: 700 }}
              >
                {producto.tipo} — {producto.año}
              </span>
              {!producto.disponible && (
                <span
                  className="border border-black/40 rounded-full px-3 py-0.5 text-black/40"
                  style={{ fontSize: "clamp(10px, 0.8vw, 12px)", fontWeight: 700, letterSpacing: "0.1em" }}
                >
                  AGOTADO
                </span>
              )}
            </div>
            <h1
              className="text-black"
              style={{ fontSize: "clamp(28px, 3.5vw, 56px)", fontWeight: 700, lineHeight: 1.1 }}
            >
              {producto.nombre}
            </h1>
            <p
              className="text-black"
              style={{ fontSize: "clamp(24px, 2.5vw, 40px)", fontWeight: 700 }}
            >
              {producto.precio}
            </p>
          </div>

          {/* Descripción */}
          <div className="px-8 lg:px-12 py-8">
            <p
              className="text-black/70"
              style={{ fontSize: "clamp(15px, 1.4vw, 21px)", fontWeight: 300, lineHeight: 1.7 }}
            >
              {producto.descripcion}
            </p>
          </div>

          {/* Especificaciones */}
          <div className="px-8 lg:px-12 py-8 grid grid-cols-2 gap-x-6 gap-y-5">
            {[
              { label: "Páginas / Formato", valor: producto.paginas },
              { label: "Dimensiones", valor: producto.dimensiones },
              { label: "Colores de impresión", valor: producto.colores },
              { label: "Papel", valor: producto.papel },
              { label: "Tiraje", valor: producto.tiraje },
              { label: "Año", valor: producto.año },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span
                  className="text-black/40 uppercase tracking-widest"
                  style={{ fontSize: "clamp(10px, 0.8vw, 12px)", fontWeight: 700 }}
                >
                  {s.label}
                </span>
                <span
                  className="text-black"
                  style={{ fontSize: "clamp(13px, 1.1vw, 17px)", fontWeight: 400 }}
                >
                  {s.valor}
                </span>
              </div>
            ))}
          </div>

          {/* Extras */}
          <div className="px-8 lg:px-12 py-6">
            <ul className="flex flex-wrap gap-2">
              {producto.extras.map((e) => (
                <li
                  key={e}
                  className="border border-black rounded-full px-3 py-1 text-black"
                  style={{ fontSize: "clamp(11px, 0.85vw, 13px)", fontWeight: 600 }}
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="px-8 lg:px-12 py-8 mt-auto flex flex-col gap-3">
            {producto.disponible ? (
              <>
                <button
                  className="w-full bg-black text-white rounded-[6px] py-4 hover:bg-[#d9d9d9] hover:text-black border border-black transition-all duration-200"
                  style={{ fontSize: "clamp(15px, 1.4vw, 22px)", fontWeight: 600 }}
                >
                  AGREGAR AL CARRITO ☆
                </button>
                <Link
                  to="/contacto?servicio=Tienda"
                  className="w-full text-center border border-black rounded-[6px] py-3 text-black hover:bg-[#d9d9d9] transition-all duration-200"
                  style={{ fontSize: "clamp(13px, 1.1vw, 17px)", fontWeight: 600 }}
                >
                  CONSULTAR POR ESTE PRODUCTO
                </Link>
              </>
            ) : (
              <>
                <div
                  className="w-full text-center border border-black/30 rounded-[6px] py-4 text-black/30"
                  style={{ fontSize: "clamp(15px, 1.4vw, 22px)", fontWeight: 600 }}
                >
                  AGOTADO
                </div>
                <Link
                  to="/contacto?servicio=Tienda"
                  className="w-full text-center border border-black rounded-[6px] py-3 text-black hover:bg-[#d9d9d9] transition-all duration-200"
                  style={{ fontSize: "clamp(13px, 1.1vw, 17px)", fontWeight: 600 }}
                >
                  CONSULTAR REIMPRESIÓN
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Otros productos */}
      <div className="border-t border-black">
        <div className="px-8 lg:px-16 py-5 border-b border-black">
          <h2
            className="text-black"
            style={{ fontSize: "clamp(14px, 1.2vw, 18px)", fontWeight: 700, letterSpacing: "0.1em" }}
          >
            OTROS PRODUCTOS ☆
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-black">
          {productos
            .filter((p) => p.id !== producto.id)
            .slice(0, 4)
            .map((p) => (
              <Link
                key={p.id}
                to={`/tienda/${p.id}`}
                className={`group flex flex-col gap-3 p-6 hover:bg-[#d9d9d9] transition-colors duration-200 border-b border-black ${!p.disponible ? "opacity-50" : ""}`}
              >
                <div className="aspect-square overflow-hidden bg-[#efefef]">
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <p
                    className="text-black/40 uppercase"
                    style={{ fontSize: "clamp(10px, 0.75vw, 12px)", fontWeight: 700, letterSpacing: "0.1em" }}
                  >
                    {p.tipo}
                  </p>
                  <p
                    className="text-black"
                    style={{ fontSize: "clamp(13px, 1.1vw, 17px)", fontWeight: 700, lineHeight: 1.2 }}
                  >
                    {p.nombre}
                  </p>
                  <p
                    className="text-black mt-1"
                    style={{ fontSize: "clamp(13px, 1.1vw, 17px)", fontWeight: 700 }}
                  >
                    {p.precio}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </article>
  );
}
