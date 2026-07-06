import { useState } from "react";
import { useAdmin } from "../context/AdminContext";
import { Producto } from "./tiendaData";

const NR = "'Neue Regrade', sans-serif";

const TIPOS = ["Fanzine", "Afiche", "Libro", "Objeto", "Otro"];

const productoVacio: Omit<Producto, "id"> = {
  nombre: "",
  tipo: "Fanzine",
  paginas: "",
  colores: "",
  tiraje: "",
  precio: "",
  disponible: true,
  imagen: "",
  descripcion: "",
  papel: "",
  dimensiones: "",
  año: String(new Date().getFullYear()),
  extras: [],
};

/* ─── Login ─────────────────────────────────────────────── */
function LoginView() {
  const { login } = useAdmin();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login(usuario, password)) setError(true);
  };

  return (
    <div className="min-h-screen bg-[#d9d9d9] flex items-center justify-center px-4" style={{ fontFamily: NR }}>
      <div className="w-full max-w-[420px] bg-white border border-black">
        <div className="border-b border-black px-8 py-6">
          <p className="text-black/40 uppercase tracking-widest mb-1" style={{ fontSize: 12, fontWeight: 700 }}>
            Laboratorio Satelital
          </p>
          <h1 className="text-black" style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700 }}>
            Administración
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="px-8 py-8 flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-black/50 uppercase tracking-widest" style={{ fontSize: 12, fontWeight: 700 }}>
              Usuario
            </label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => { setUsuario(e.target.value); setError(false); }}
              className="border-b border-black bg-transparent py-2 text-black outline-none"
              style={{ fontSize: 18, fontWeight: 300 }}
              autoFocus
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-black/50 uppercase tracking-widest" style={{ fontSize: 12, fontWeight: 700 }}>
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              className="border-b border-black bg-transparent py-2 text-black outline-none"
              style={{ fontSize: 18, fontWeight: 300 }}
            />
          </div>

          {error && (
            <p className="text-red-600" style={{ fontSize: 14, fontWeight: 400 }}>
              Usuario o contraseña incorrectos.
            </p>
          )}

          <button
            type="submit"
            className="bg-black text-white py-3 rounded-[6px] hover:bg-[#d9d9d9] hover:text-black border border-black transition-all duration-200 mt-2"
            style={{ fontSize: 16, fontWeight: 600 }}
          >
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  );
}

/* ─── Modal de producto ──────────────────────────────────── */
function ProductoModal({
  inicial,
  onGuardar,
  onCerrar,
}: {
  inicial: Omit<Producto, "id"> & { id?: string };
  onGuardar: (data: Omit<Producto, "id">) => void;
  onCerrar: () => void;
}) {
  const [form, setForm] = useState<Omit<Producto, "id">>({
    nombre: inicial.nombre,
    tipo: inicial.tipo,
    paginas: inicial.paginas,
    colores: inicial.colores,
    tiraje: inicial.tiraje,
    precio: inicial.precio,
    disponible: inicial.disponible,
    imagen: inicial.imagen,
    descripcion: inicial.descripcion,
    papel: inicial.papel,
    dimensiones: inicial.dimensiones,
    año: inicial.año,
    extras: inicial.extras,
  });

  const set = (key: keyof typeof form, value: unknown) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGuardar(form);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-end" style={{ fontFamily: NR }}>
      <div className="absolute inset-0 bg-black/40" onClick={onCerrar} />
      <div className="relative bg-white border-l border-black w-full max-w-[560px] h-screen overflow-y-auto flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-black px-8 py-5 flex items-center justify-between z-10">
          <h2 className="text-black" style={{ fontSize: 22, fontWeight: 700 }}>
            {inicial.id ? "Editar producto" : "Nuevo producto"}
          </h2>
          <button onClick={onCerrar} className="text-black/40 hover:text-black transition-colors text-2xl leading-none">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-0 divide-y divide-black/10 flex-1">
          {/* Imagen */}
          <div className="px-8 py-6 flex flex-col gap-3">
            <label className="text-black/50 uppercase tracking-widest" style={{ fontSize: 11, fontWeight: 700 }}>
              URL de imagen
            </label>
            {form.imagen && (
              <img src={form.imagen} alt="" className="w-full h-40 object-cover border border-black/10 rounded" />
            )}
            <input
              type="url"
              value={form.imagen}
              onChange={(e) => set("imagen", e.target.value)}
              placeholder="https://..."
              className="border-b border-black bg-transparent py-2 text-black outline-none placeholder:text-black/25"
              style={{ fontSize: 15, fontWeight: 300 }}
            />
          </div>

          {/* Nombre + tipo */}
          <div className="px-8 py-6 grid grid-cols-2 gap-5">
            <div className="col-span-2 flex flex-col gap-1.5">
              <label className="text-black/50 uppercase tracking-widest" style={{ fontSize: 11, fontWeight: 700 }}>
                Nombre *
              </label>
              <input
                required
                type="text"
                value={form.nombre}
                onChange={(e) => set("nombre", e.target.value)}
                className="border-b border-black bg-transparent py-2 text-black outline-none"
                style={{ fontSize: 16, fontWeight: 400 }}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-black/50 uppercase tracking-widest" style={{ fontSize: 11, fontWeight: 700 }}>
                Tipo
              </label>
              <select
                value={form.tipo}
                onChange={(e) => set("tipo", e.target.value)}
                className="border-b border-black bg-transparent py-2 text-black outline-none"
                style={{ fontSize: 15, fontWeight: 300 }}
              >
                {TIPOS.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-black/50 uppercase tracking-widest" style={{ fontSize: 11, fontWeight: 700 }}>
                Año
              </label>
              <input
                type="text"
                value={form.año}
                onChange={(e) => set("año", e.target.value)}
                className="border-b border-black bg-transparent py-2 text-black outline-none"
                style={{ fontSize: 15, fontWeight: 300 }}
              />
            </div>
          </div>

          {/* Specs */}
          <div className="px-8 py-6 grid grid-cols-2 gap-5">
            {(
              [
                { key: "precio", label: "Precio *", required: true },
                { key: "tiraje", label: "Tiraje" },
                { key: "paginas", label: "Páginas / Formato" },
                { key: "dimensiones", label: "Dimensiones" },
                { key: "colores", label: "Colores" },
                { key: "papel", label: "Papel" },
              ] as { key: keyof typeof form; label: string; required?: boolean }[]
            ).map(({ key, label, required }) => (
              <div key={key} className="flex flex-col gap-1.5">
                <label className="text-black/50 uppercase tracking-widest" style={{ fontSize: 11, fontWeight: 700 }}>
                  {label}
                </label>
                <input
                  required={required}
                  type="text"
                  value={form[key] as string}
                  onChange={(e) => set(key, e.target.value)}
                  className="border-b border-black bg-transparent py-2 text-black outline-none"
                  style={{ fontSize: 14, fontWeight: 300 }}
                />
              </div>
            ))}
          </div>

          {/* Descripción */}
          <div className="px-8 py-6 flex flex-col gap-1.5">
            <label className="text-black/50 uppercase tracking-widest" style={{ fontSize: 11, fontWeight: 700 }}>
              Descripción
            </label>
            <textarea
              rows={4}
              value={form.descripcion}
              onChange={(e) => set("descripcion", e.target.value)}
              className="border-b border-black bg-transparent py-2 text-black outline-none resize-none"
              style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.6 }}
            />
          </div>

          {/* Extras */}
          <div className="px-8 py-6 flex flex-col gap-1.5">
            <label className="text-black/50 uppercase tracking-widest" style={{ fontSize: 11, fontWeight: 700 }}>
              Extras (separados por coma)
            </label>
            <input
              type="text"
              value={form.extras.join(", ")}
              onChange={(e) =>
                set("extras", e.target.value.split(",").map((s) => s.trim()).filter(Boolean))
              }
              placeholder="Costura japonesa, Numerado, ..."
              className="border-b border-black bg-transparent py-2 text-black outline-none placeholder:text-black/25"
              style={{ fontSize: 14, fontWeight: 300 }}
            />
          </div>

          {/* Disponible toggle */}
          <div className="px-8 py-6 flex items-center justify-between">
            <span className="text-black" style={{ fontSize: 16, fontWeight: 600 }}>
              Disponible para la venta
            </span>
            <button
              type="button"
              onClick={() => set("disponible", !form.disponible)}
              className={`w-12 h-6 rounded-full border border-black transition-colors duration-200 relative ${
                form.disponible ? "bg-black" : "bg-white"
              }`}
            >
              <span
                className={`absolute top-0.5 w-5 h-5 rounded-full bg-white border border-black transition-all duration-200 ${
                  form.disponible ? "left-[calc(100%-22px)]" : "left-0.5"
                }`}
              />
            </button>
          </div>

          {/* Submit */}
          <div className="sticky bottom-0 bg-white border-t border-black px-8 py-5 flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-black text-white py-3 rounded-[6px] hover:bg-[#d9d9d9] hover:text-black border border-black transition-all duration-200"
              style={{ fontSize: 15, fontWeight: 600 }}
            >
              GUARDAR PRODUCTO
            </button>
            <button
              type="button"
              onClick={onCerrar}
              className="px-6 border border-black rounded-[6px] text-black hover:bg-[#d9d9d9] transition-colors"
              style={{ fontSize: 15, fontWeight: 600 }}
            >
              CANCELAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ─── Panel principal ────────────────────────────────────── */
function PanelView() {
  const { logout, productos, addProducto, updateProducto, deleteProducto, tiendaActiva, setTiendaActiva } = useAdmin();
  const [modal, setModal] = useState<null | (Omit<Producto, "id"> & { id?: string })>(null);
  const [confirmarEliminar, setConfirmarEliminar] = useState<string | null>(null);

  const abrirNuevo = () => setModal({ ...productoVacio });
  const abrirEditar = (p: Producto) => setModal({ ...p });
  const cerrarModal = () => setModal(null);

  const guardar = (data: Omit<Producto, "id">) => {
    if (modal?.id) {
      updateProducto(modal.id, data);
    } else {
      addProducto(data);
    }
    cerrarModal();
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: NR }}>
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#d9d9d9] border-b border-black px-8 lg:px-16 flex items-center justify-between h-[72px]">
        <div className="flex items-center gap-4">
          <h1 className="text-black" style={{ fontSize: "clamp(16px, 1.8vw, 24px)", fontWeight: 700 }}>
            PANEL DE ADMINISTRACIÓN
          </h1>
          <span className="text-black/30" style={{ fontSize: 14 }}>—</span>
          <a href="/" className="text-black/50 hover:text-black transition-colors" style={{ fontSize: 14, fontWeight: 600 }}>
            Ver sitio →
          </a>
        </div>
        <button
          onClick={logout}
          className="border border-black rounded-[6px] px-4 py-1.5 text-black hover:bg-black hover:text-white transition-all duration-200"
          style={{ fontSize: 13, fontWeight: 600 }}
        >
          CERRAR SESIÓN
        </button>
      </div>

      {/* Toggle tienda */}
      <div className={`border-b border-black px-8 lg:px-16 py-5 flex items-center justify-between ${tiendaActiva ? "bg-white" : "bg-[#d9d9d9]"}`}>
        <div>
          <p className="text-black" style={{ fontSize: "clamp(16px, 1.6vw, 22px)", fontWeight: 700 }}>
            Tienda {tiendaActiva ? "activa" : "desactivada"}
          </p>
          <p className="text-black/50" style={{ fontSize: 14, fontWeight: 300 }}>
            {tiendaActiva
              ? "Los clientes pueden ver y comprar productos."
              : "La tienda está oculta para los visitantes."}
          </p>
        </div>
        <button
          onClick={() => setTiendaActiva(!tiendaActiva)}
          className={`w-16 h-8 rounded-full border border-black transition-colors duration-300 relative flex-shrink-0 ${
            tiendaActiva ? "bg-black" : "bg-white"
          }`}
        >
          <span
            className={`absolute top-1 w-6 h-6 rounded-full bg-white border border-black transition-all duration-300 ${
              tiendaActiva ? "left-[calc(100%-28px)]" : "left-1"
            }`}
          />
        </button>
      </div>

      {/* Productos header */}
      <div className="border-b border-black px-8 lg:px-16 py-5 flex items-center justify-between">
        <h2 className="text-black" style={{ fontSize: "clamp(20px, 2.2vw, 32px)", fontWeight: 700 }}>
          PRODUCTOS{" "}
          <span className="text-black/30" style={{ fontWeight: 400 }}>
            ({productos.length})
          </span>
        </h2>
        <button
          onClick={abrirNuevo}
          className="bg-black text-white rounded-[6px] px-6 py-2.5 hover:bg-[#d9d9d9] hover:text-black border border-black transition-all duration-200 flex items-center gap-2"
          style={{ fontSize: 14, fontWeight: 600 }}
        >
          + AGREGAR PRODUCTO
        </button>
      </div>

      {/* Tabla */}
      <div className="divide-y divide-black">
        {productos.length === 0 && (
          <div className="px-8 lg:px-16 py-16 text-center">
            <p className="text-black/40" style={{ fontSize: 18, fontWeight: 300 }}>
              No hay productos. Agrega el primero.
            </p>
          </div>
        )}

        {productos.map((p) => (
          <div
            key={p.id}
            className="px-8 lg:px-16 py-5 flex items-center gap-6 hover:bg-[#d9d9d9]/40 transition-colors"
          >
            {/* Thumb */}
            <div className="flex-shrink-0 w-16 h-16 border border-black/10 overflow-hidden rounded bg-[#f0f0f0]">
              {p.imagen ? (
                <img src={p.imagen} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-black/20 text-xl">☆</div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-black" style={{ fontSize: 16, fontWeight: 700 }}>
                  {p.nombre}
                </span>
                <span
                  className="text-black/40 uppercase tracking-widest"
                  style={{ fontSize: 11, fontWeight: 700 }}
                >
                  {p.tipo}
                </span>
              </div>
              <div className="flex items-center gap-4 mt-0.5 flex-wrap">
                <span className="text-black" style={{ fontSize: 15, fontWeight: 600 }}>
                  {p.precio}
                </span>
                <span className="text-black/40" style={{ fontSize: 13 }}>
                  {p.colores}
                </span>
              </div>
            </div>

            {/* Toggle disponible */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-black/50" style={{ fontSize: 12, fontWeight: 600 }}>
                {p.disponible ? "Disponible" : "Agotado"}
              </span>
              <button
                onClick={() => updateProducto(p.id, { disponible: !p.disponible })}
                className={`w-10 h-5 rounded-full border border-black transition-colors duration-200 relative ${
                  p.disponible ? "bg-black" : "bg-white"
                }`}
              >
                <span
                  className={`absolute top-0.5 w-4 h-4 rounded-full bg-white border border-black transition-all duration-200 ${
                    p.disponible ? "left-[calc(100%-18px)]" : "left-0.5"
                  }`}
                />
              </button>
            </div>

            {/* Acciones */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => abrirEditar(p)}
                className="border border-black rounded-[6px] px-4 py-1.5 text-black hover:bg-black hover:text-white transition-all duration-200"
                style={{ fontSize: 13, fontWeight: 600 }}
              >
                EDITAR
              </button>
              {confirmarEliminar === p.id ? (
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => { deleteProducto(p.id); setConfirmarEliminar(null); }}
                    className="border border-red-600 rounded-[6px] px-3 py-1.5 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200"
                    style={{ fontSize: 12, fontWeight: 600 }}
                  >
                    CONFIRMAR
                  </button>
                  <button
                    onClick={() => setConfirmarEliminar(null)}
                    className="text-black/40 hover:text-black transition-colors px-2"
                    style={{ fontSize: 12 }}
                  >
                    cancelar
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConfirmarEliminar(p.id)}
                  className="text-black/30 hover:text-red-600 transition-colors px-2"
                  style={{ fontSize: 18, lineHeight: 1 }}
                  title="Eliminar"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modal && (
        <ProductoModal
          inicial={modal}
          onGuardar={guardar}
          onCerrar={cerrarModal}
        />
      )}
    </div>
  );
}

/* ─── Export principal ───────────────────────────────────── */
export function AdminPage() {
  const { isLoggedIn } = useAdmin();
  return isLoggedIn ? <PanelView /> : <LoginView />;
}
