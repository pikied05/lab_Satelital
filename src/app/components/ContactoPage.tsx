import { useState } from "react";
import { useSearchParams } from "react-router";

const NR = "'Neue Regrade', sans-serif";

const serviciosOpciones = [
  "Impresión Risográfica",
  "Diseño + Impresión",
  "Publicaciones & Fanzines",
  "Impresión Libre / Auto-operada",
  "Talleres",
  "Otro",
];

export function ContactoPage() {
  const [searchParams] = useSearchParams();
  const servicioParam = searchParams.get("servicio") ?? "";

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    servicio: serviciosOpciones.find((s) =>
      s.toLowerCase().includes(servicioParam.toLowerCase())
    ) ?? "",
    tiraje: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section className="bg-white min-h-screen" style={{ fontFamily: NR }}>
      {/* Header */}
      <div className="border-b border-black px-8 lg:px-16 py-5 flex items-baseline justify-between">
        <h1
          className="text-black"
          style={{ fontSize: "clamp(32px, 4vw, 64px)", fontWeight: 700 }}
        >
          CONTACTO
        </h1>
        <span
          className="text-black/40 uppercase tracking-widest"
          style={{ fontSize: "clamp(12px, 1vw, 16px)", fontWeight: 600 }}
        >
          Laboratorio Satelital
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-90px-73px)]">
        {/* Info lateral */}
        <div className="border-b lg:border-b-0 lg:border-r border-black px-8 lg:px-16 py-12 flex flex-col gap-10 bg-[#d9d9d9]">
          <div>
            <p
              className="text-black"
              style={{ fontSize: "clamp(22px, 2.8vw, 44px)", fontWeight: 300, lineHeight: 1.4 }}
            >
              Contanos tu proyecto y te respondemos en menos de{" "}
              <strong style={{ fontWeight: 700 }}>48 horas hábiles.</strong>
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p
                className="text-black/50 uppercase tracking-widest mb-1"
                style={{ fontSize: "clamp(11px, 0.85vw, 13px)", fontWeight: 700 }}
              >
                Email
              </p>
              <a
                href="mailto:hola@laboratoriosatelital.cl"
                className="text-black hover:text-black/60 transition-colors"
                style={{ fontSize: "clamp(15px, 1.5vw, 22px)", fontWeight: 400 }}
              >
                hola@laboratoriosatelital.cl
              </a>
            </div>
            <div>
              <p
                className="text-black/50 uppercase tracking-widest mb-1"
                style={{ fontSize: "clamp(11px, 0.85vw, 13px)", fontWeight: 700 }}
              >
                Instagram
              </p>
              <a
                href="https://instagram.com/laboratoriosatelital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black/60 transition-colors"
                style={{ fontSize: "clamp(15px, 1.5vw, 22px)", fontWeight: 400 }}
              >
                @laboratoriosatelital
              </a>
            </div>
            <div>
              <p
                className="text-black/50 uppercase tracking-widest mb-1"
                style={{ fontSize: "clamp(11px, 0.85vw, 13px)", fontWeight: 700 }}
              >
                Horario
              </p>
              <p
                className="text-black"
                style={{ fontSize: "clamp(15px, 1.5vw, 22px)", fontWeight: 300 }}
              >
                Martes a sábado, 10:00 – 19:00
              </p>
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-black/20">
            <p
              className="text-black/50"
              style={{ fontSize: "clamp(13px, 1.1vw, 17px)", fontWeight: 300, lineHeight: 1.6 }}
            >
              ☆ Para consultas de talleres incluí la fecha de interés. Para
              imprenta, el formato y tiraje aproximado. Así podemos darte un
              presupuesto más preciso.
            </p>
          </div>
        </div>

        {/* Formulario */}
        <div className="px-8 lg:px-16 py-12">
          {enviado ? (
            <div className="flex flex-col items-start gap-6 h-full justify-center">
              <div
                className="text-black"
                style={{ fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 700, lineHeight: 1 }}
              >
                ☆
              </div>
              <h2
                className="text-black"
                style={{ fontSize: "clamp(22px, 2.5vw, 38px)", fontWeight: 700 }}
              >
                ¡Mensaje enviado!
              </h2>
              <p
                className="text-black/60 max-w-[420px]"
                style={{ fontSize: "clamp(15px, 1.4vw, 22px)", fontWeight: 300, lineHeight: 1.6 }}
              >
                Te respondemos a <strong style={{ fontWeight: 600 }}>{form.email}</strong> en
                menos de 48 horas hábiles.
              </p>
              <button
                onClick={() => setEnviado(false)}
                className="border border-black rounded-[6px] px-6 py-2 text-black hover:bg-black hover:text-white transition-all duration-200 mt-4"
                style={{ fontSize: "clamp(13px, 1.1vw, 17px)", fontWeight: 600 }}
              >
                ENVIAR OTRO MENSAJE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Nombre */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="nombre"
                  className="text-black/50 uppercase tracking-widest"
                  style={{ fontSize: "clamp(11px, 0.85vw, 13px)", fontWeight: 700 }}
                >
                  Nombre *
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre o colectivo"
                  className="border-b border-black bg-transparent py-2 text-black placeholder:text-black/25 outline-none focus:border-black transition-colors"
                  style={{ fontSize: "clamp(16px, 1.6vw, 24px)", fontWeight: 300 }}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-black/50 uppercase tracking-widest"
                  style={{ fontSize: "clamp(11px, 0.85vw, 13px)", fontWeight: 700 }}
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="correo@ejemplo.com"
                  className="border-b border-black bg-transparent py-2 text-black placeholder:text-black/25 outline-none focus:border-black transition-colors"
                  style={{ fontSize: "clamp(16px, 1.6vw, 24px)", fontWeight: 300 }}
                />
              </div>

              {/* Servicio */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="servicio"
                  className="text-black/50 uppercase tracking-widest"
                  style={{ fontSize: "clamp(11px, 0.85vw, 13px)", fontWeight: 700 }}
                >
                  Servicio de interés
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  value={form.servicio}
                  onChange={handleChange}
                  className="border-b border-black bg-transparent py-2 text-black outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                  style={{ fontSize: "clamp(16px, 1.6vw, 24px)", fontWeight: 300 }}
                >
                  <option value="">Seleccionar...</option>
                  {serviciosOpciones.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tiraje */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="tiraje"
                  className="text-black/50 uppercase tracking-widest"
                  style={{ fontSize: "clamp(11px, 0.85vw, 13px)", fontWeight: 700 }}
                >
                  Tiraje aproximado
                </label>
                <input
                  id="tiraje"
                  name="tiraje"
                  type="text"
                  value={form.tiraje}
                  onChange={handleChange}
                  placeholder="ej: 50 ejemplares A5, 2 colores"
                  className="border-b border-black bg-transparent py-2 text-black placeholder:text-black/25 outline-none focus:border-black transition-colors"
                  style={{ fontSize: "clamp(16px, 1.6vw, 24px)", fontWeight: 300 }}
                />
              </div>

              {/* Mensaje */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="mensaje"
                  className="text-black/50 uppercase tracking-widest"
                  style={{ fontSize: "clamp(11px, 0.85vw, 13px)", fontWeight: 700 }}
                >
                  Contanos tu proyecto *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={4}
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Describí tu idea, el formato, los plazos o cualquier detalle relevante..."
                  className="border-b border-black bg-transparent py-2 text-black placeholder:text-black/25 outline-none focus:border-black transition-colors resize-none"
                  style={{ fontSize: "clamp(16px, 1.6vw, 24px)", fontWeight: 300 }}
                />
              </div>

              <button
                type="submit"
                className="mt-2 bg-black text-white rounded-[6px] px-8 py-4 hover:bg-[#d9d9d9] hover:text-black border border-black transition-all duration-200 self-start"
                style={{ fontSize: "clamp(15px, 1.4vw, 22px)", fontWeight: 600 }}
              >
                ENVIAR CONSULTA ☆
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
