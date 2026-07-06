import { Link, useParams, useNavigate } from "react-router";

const NR = "'Neue Regrade', sans-serif";

const servicios: Record<
  string,
  {
    letra: string;
    nombre: string;
    categoria: string;
    descripcionCorta: string;
    descripcionLarga: string;
    specs: { label: string; valor: string }[];
    papeles: string[];
    coloresDisponibles: { nombre: string; hex: string }[];
    proceso: { paso: string; descripcion: string }[];
    precios: { rango: string; precio: string }[];
    notas: string;
    tiempoEntrega: string;
  }
> = {
  a: {
    letra: "A",
    nombre: "Impresión Risográfica",
    categoria: "Servicio base",
    descripcionCorta: "Impresión en risógrafo con tintas de soja. Tirajes mínimos de 20 ejemplares.",
    descripcionLarga:
      "La risografía es una técnica de impresión stencil que produce resultados únicos e irrepetibles. Cada pasada de tinta tiene su propia textura, y el registro imperfecto entre colores es parte del encanto del proceso. Ideal para fanzines, afiches, papelería y cualquier proyecto que busque una estética editorial artesanal y singular. Trabajamos con tintas de base soja sobre papel sin blanqueadores ópticos.",
    specs: [
      { label: "Formatos", valor: "A5 / A4 / A3 / A2 (preguntar por otros)" },
      { label: "Colores por trabajo", valor: "Hasta 3 pasadas de color" },
      { label: "Tiraje mínimo", valor: "20 unidades" },
      { label: "Tiraje máximo", valor: "Sin límite (consultar tiempos)" },
      { label: "Sangrado", valor: "3 mm recomendado" },
      { label: "Resolución archivos", valor: "300 dpi mínimo, 600 dpi ideal" },
      { label: "Formato de entrega", valor: "PDF separado por color, escala de grises" },
    ],
    papeles: [
      "Munken Lynx 100g (natural, sin blanqueadores)",
      "Biotop 80g (reciclado)",
      "Colorplan 135g (colores varios)",
      "Kraft 90g",
      "Papel de diario 52g",
      "Papel propio (consultar compatibilidad)",
    ],
    coloresDisponibles: [
      { nombre: "Negro", hex: "#1a1a1a" },
      { nombre: "Azul fluorescente", hex: "#0a4fff" },
      { nombre: "Rojo", hex: "#e8292a" },
      { nombre: "Amarillo", hex: "#ffe800" },
      { nombre: "Verde", hex: "#00a95c" },
      { nombre: "Naranja", hex: "#ff6c2f" },
      { nombre: "Rosa", hex: "#f06eaa" },
      { nombre: "Violeta", hex: "#6c52a3" },
    ],
    proceso: [
      { paso: "01 — Envío de archivos", descripcion: "Nos mandás los archivos separados por color en PDF o TIFF 300 dpi, escala de grises. Si necesitás ayuda con la separación, consultá el servicio B." },
      { paso: "02 — Revisión técnica", descripcion: "Revisamos los archivos dentro de las 48 hs hábiles y te confirmamos que todo esté listo para imprimir. Si hay ajustes menores los hacemos nosotros." },
      { paso: "03 — Prueba de color", descripcion: "Para tirajes mayores a 100 ejemplares o proyectos con registro de colores, hacemos una prueba de 5 unidades antes de imprimir todo." },
      { paso: "04 — Impresión", descripcion: "Imprimimos en nuestro Riso Graph RP3700. El tiempo de producción varía según el tiraje y la cantidad de colores." },
      { paso: "05 — Entrega", descripcion: "Retiro en el laboratorio o envío por correo. Embalamos con cuidado para que lleguen en perfecto estado." },
    ],
    precios: [
      { rango: "20 – 50 unidades", precio: "Desde $4.500 / u." },
      { rango: "51 – 100 unidades", precio: "Desde $3.200 / u." },
      { rango: "101 – 300 unidades", precio: "Desde $2.100 / u." },
      { rango: "+ 300 unidades", precio: "Precio especial" },
    ],
    notas:
      "Los precios varían según formato, cantidad de colores y tipo de papel. Pedí un presupuesto con los detalles de tu proyecto.",
    tiempoEntrega: "7 a 14 días hábiles según tiraje",
  },
  b: {
    letra: "B",
    nombre: "Diseño + Impresión",
    categoria: "Servicio integral",
    descripcionCorta: "Te acompañamos en el proceso de diseño y adaptación de archivos para risógrafo.",
    descripcionLarga:
      "No solo imprimimos: también te ayudamos a diseñar. Trabajamos junto a vos desde el concepto hasta el archivo listo para imprimir. Sabemos que adaptar archivos para risografía tiene sus particularidades (separación de canales, gestión de colores, tipografías en bitmap) y nos encargamos de que el resultado sea el mejor posible. Ideal para quien tiene una idea pero no maneja herramientas de diseño o no conoce las especificidades del proceso.",
    specs: [
      { label: "Formatos", valor: "A5 / A4 / A3" },
      { label: "Colores", valor: "1 a 2 colores" },
      { label: "Rondas de revisión", valor: "2 incluidas, adicionales con costo" },
      { label: "Tiraje mínimo", valor: "50 unidades" },
      { label: "Incluye", valor: "Diseño, separación de colores, impresión" },
      { label: "Entrega archivos", valor: "Opcional, con costo adicional" },
    ],
    papeles: [
      "Munken Lynx 100g",
      "Biotop 80g reciclado",
      "Colorplan 135g",
      "Papel propio (consultar)",
    ],
    coloresDisponibles: [
      { nombre: "Negro", hex: "#1a1a1a" },
      { nombre: "Azul fluorescente", hex: "#0a4fff" },
      { nombre: "Rojo", hex: "#e8292a" },
      { nombre: "Amarillo", hex: "#ffe800" },
      { nombre: "Verde", hex: "#00a95c" },
      { nombre: "Naranja", hex: "#ff6c2f" },
    ],
    proceso: [
      { paso: "01 — Brief", descripcion: "Nos contás tu proyecto: qué es, para qué sirve, quién lo va a leer, qué referencias tenés. Cuanto más info, mejor." },
      { paso: "02 — Propuesta de diseño", descripcion: "En 5 días hábiles te presentamos una propuesta inicial. Ajustamos hasta dos rondas de cambios dentro del presupuesto." },
      { paso: "03 — Aprobación y separación", descripcion: "Una vez aprobado el diseño, preparamos los archivos para la máquina: separación de colores y ajuste de tintas." },
      { paso: "04 — Impresión y entrega", descripcion: "Imprimimos y te avisamos cuando está listo para retirar o coordinar envío." },
    ],
    precios: [
      { rango: "Diseño pieza simple (afiche / flyer)", precio: "Desde $35.000" },
      { rango: "Diseño publicación (hasta 32 pág.)", precio: "Desde $80.000" },
      { rango: "Solo separación de colores", precio: "Desde $15.000" },
    ],
    notas:
      "El costo de diseño se cotiza por separado de la impresión. Pedí un presupuesto describiendo tu proyecto.",
    tiempoEntrega: "10 a 20 días hábiles",
  },
  c: {
    letra: "C",
    nombre: "Publicaciones & Fanzines",
    categoria: "Producción editorial",
    descripcionCorta: "Producción integral: diseño, impresión, plegado y encuadernación artesanal.",
    descripcionLarga:
      "Este servicio está pensado para autoeditorxs, colectivos y artistas que quieren producir su propia publicación de principio a fin. Nos encargamos de todo el proceso editorial: desde ayudarte a definir el formato hasta tener los ejemplares terminados en tus manos. Trabajamos con encuadernaciones artesanales (costura japonesa, hilo, grapa, encolado) y papeles pensados para risografía. Cada publicación es única.",
    specs: [
      { label: "Formatos", valor: "A6 / A5 / A4 / plegado / formato libre" },
      { label: "Páginas", valor: "8 a 96 páginas (múltiplos de 4)" },
      { label: "Colores", valor: "1 a 4 colores (consultar)" },
      { label: "Tiraje mínimo", valor: "30 unidades" },
      { label: "Encuadernación", valor: "Grapa / costura / encolado / rústica" },
      { label: "Incluye", valor: "Diseño opcional, impresión, armado y encuadernación" },
    ],
    papeles: [
      "Munken Lynx 100g (interior)",
      "Colorplan 270g (tapa)",
      "Biotop 80g (interior económico)",
      "Papel de diario 52g (newsprint)",
      "Kraft 90g (tapa alternativa)",
    ],
    coloresDisponibles: [
      { nombre: "Negro", hex: "#1a1a1a" },
      { nombre: "Azul fluorescente", hex: "#0a4fff" },
      { nombre: "Rojo", hex: "#e8292a" },
      { nombre: "Amarillo", hex: "#ffe800" },
      { nombre: "Verde", hex: "#00a95c" },
      { nombre: "Naranja", hex: "#ff6c2f" },
      { nombre: "Rosa", hex: "#f06eaa" },
      { nombre: "Violeta", hex: "#6c52a3" },
    ],
    proceso: [
      { paso: "01 — Concepto y formato", descripcion: "Definimos juntos el formato, la cantidad de páginas, los colores y el tipo de encuadernación según tu proyecto y presupuesto." },
      { paso: "02 — Maqueta y diseño", descripcion: "Si necesitás diseño, trabajamos la maqueta completa. Si ya tenés archivos, los revisamos y adaptamos para la riso." },
      { paso: "03 — Prueba editorial", descripcion: "Imprimimos y armamos un ejemplar de prueba para que apruebes antes de tirar toda la edición." },
      { paso: "04 — Impresión completa", descripcion: "Tiramos todos los pliegos y los organizamos por ejemplar para el armado." },
      { paso: "05 — Encuadernación y entrega", descripcion: "Armamos y encuadernamos a mano. El tiempo de encuadernación varía según la complejidad y el tiraje." },
    ],
    precios: [
      { rango: "Fanzine 8 pág. A5 / 30 u.", precio: "Desde $95.000" },
      { rango: "Publicación 32 pág. A5 / 50 u.", precio: "Desde $280.000" },
      { rango: "Libro 64 pág. A5 / 100 u.", precio: "Desde $520.000" },
      { rango: "Edición especial / formato libre", precio: "Presupuesto a medida" },
    ],
    notas:
      "Cada publicación se cotiza por separado. Contanos tu proyecto y te armamos un presupuesto detallado.",
    tiempoEntrega: "15 a 30 días hábiles según complejidad",
  },
  d: {
    letra: "D",
    nombre: "Impresión Libre / Auto-operada",
    categoria: "Para la comunidad",
    descripcionCorta: "Alquilá tiempo en nuestra máquina y operá vos mismx. Para integrantes de la red.",
    descripcionLarga:
      "Este servicio está disponible para quienes ya pasaron por nuestro taller de introducción a la risografía y quieren usar la máquina de forma independiente. Es una modalidad pensada para artistas y autoeditorxs que quieren tener control total del proceso: elegir la tinta, ajustar la velocidad, experimentar con el registro. El espacio es compartido y el tiempo se reserva con anticipación.",
    specs: [
      { label: "Requisito", valor: "Haber completado el Taller de Introducción" },
      { label: "Modalidad", valor: "Por turno de 3 horas" },
      { label: "Colores", valor: "1 color por turno (cambio de tinta extra)" },
      { label: "Formatos", valor: "Hasta A3" },
      { label: "Tiraje", valor: "Sin mínimo ni máximo por sesión" },
      { label: "Incluye", valor: "Acceso a máquina, uso de master y tinta del laboratorio" },
      { label: "Papel", valor: "Propio o del laboratorio (con costo adicional)" },
    ],
    papeles: [
      "Papel propio (recomendado traer)",
      "Stock del laboratorio disponible a costo",
    ],
    coloresDisponibles: [
      { nombre: "Negro", hex: "#1a1a1a" },
      { nombre: "Azul fluorescente", hex: "#0a4fff" },
      { nombre: "Rojo", hex: "#e8292a" },
      { nombre: "Amarillo", hex: "#ffe800" },
      { nombre: "Verde", hex: "#00a95c" },
      { nombre: "Naranja", hex: "#ff6c2f" },
      { nombre: "Rosa", hex: "#f06eaa" },
    ],
    proceso: [
      { paso: "01 — Requisito previo", descripcion: "Verificamos que hayas completado el taller introductorio. Si no lo hiciste, te inscribimos en la próxima fecha." },
      { paso: "02 — Reserva de turno", descripcion: "Reservás tu turno con al menos 72 hs de anticipación. Los turnos son de 3 horas, martes a sábado." },
      { paso: "03 — Preparación de archivos", descripcion: "Llegás con tus archivos listos en PDF o TIFF en escala de grises. El laboratorio tiene una computadora disponible como respaldo." },
      { paso: "04 — Sesión de impresión", descripcion: "Operás la máquina de forma autónoma. Hay una persona del laboratorio disponible para consultas técnicas puntuales." },
      { paso: "05 — Cierre y limpieza", descripcion: "Al finalizar dejás la máquina limpia y el espacio en condiciones. Parte del acuerdo de la red." },
    ],
    precios: [
      { rango: "Turno 3 horas (socios)", precio: "$18.000" },
      { rango: "Turno 3 horas (no socios)", precio: "$28.000" },
      { rango: "Cambio de color de tinta", precio: "$5.000 adicional" },
      { rango: "Membresía mensual (socios)", precio: "$35.000 / mes" },
    ],
    notas:
      "Para ser parte de la red y acceder a tarifas de socios, consultanos sobre la membresía del laboratorio.",
    tiempoEntrega: "Disponibilidad sujeta a agenda",
  },
};

export function ImprentaDetalle() {
  const { id } = useParams<{ id: string }>();
  const servicio = id ? servicios[id.toLowerCase()] : null;
  const contactoUrl = servicio
    ? `/contacto?servicio=${encodeURIComponent(servicio.nombre)}`
    : "/contacto";

  if (!servicio) {
    return (
      <div
        className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-8"
        style={{ fontFamily: NR }}
      >
        <p className="text-black" style={{ fontSize: "clamp(20px, 2.5vw, 36px)", fontWeight: 300 }}>
          Servicio no encontrado.
        </p>
        <Link
          to="/imprenta"
          className="border border-black rounded-[6px] px-6 py-2 text-black hover:bg-black hover:text-white transition-all duration-200"
          style={{ fontSize: "16px", fontWeight: 600 }}
        >
          ← Volver a Imprenta
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-white" style={{ fontFamily: NR }}>
      {/* Header */}
      <div className="border-b border-black px-8 lg:px-16 py-5 flex items-center gap-6">
        <Link
          to="/imprenta"
          className="text-black/40 hover:text-black transition-colors"
          style={{ fontSize: "clamp(13px, 1.1vw, 17px)", fontWeight: 600 }}
        >
          ← IMPRENTA
        </Link>
        <span className="text-black/20">/</span>
        <span
          className="text-black"
          style={{ fontSize: "clamp(13px, 1.1vw, 17px)", fontWeight: 600 }}
        >
          {servicio.nombre.toUpperCase()}
        </span>
      </div>

      {/* Hero */}
      <div className="border-b border-black px-8 lg:px-16 py-12 lg:py-16 flex flex-col lg:flex-row lg:items-end gap-6 justify-between">
        <div>
          <p
            className="text-black/30 mb-2"
            style={{ fontSize: "clamp(12px, 1vw, 16px)", fontWeight: 700, letterSpacing: "0.15em" }}
          >
            SERVICIO {servicio.letra} — {servicio.categoria.toUpperCase()}
          </p>
          <h1
            className="text-black"
            style={{ fontSize: "clamp(32px, 5vw, 80px)", fontWeight: 700, lineHeight: 1.05 }}
          >
            {servicio.nombre}
          </h1>
        </div>
        <p
          className="text-black/60 max-w-[480px]"
          style={{ fontSize: "clamp(16px, 1.6vw, 24px)", fontWeight: 300, lineHeight: 1.5 }}
        >
          {servicio.descripcionCorta}
        </p>
      </div>

      {/* Description */}
      <div className="border-b border-black px-8 lg:px-16 py-10 bg-[#d9d9d9]">
        <p
          className="text-black max-w-[900px]"
          style={{ fontSize: "clamp(17px, 1.8vw, 28px)", fontWeight: 300, lineHeight: 1.65 }}
        >
          {servicio.descripcionLarga}
        </p>
      </div>

      {/* Grid: specs + paper + colors */}
      <div className="border-b border-black grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-black">
        {/* Especificaciones */}
        <div className="px-8 lg:px-10 py-8">
          <h2
            className="text-black mb-5 uppercase tracking-widest"
            style={{ fontSize: "clamp(12px, 1vw, 15px)", fontWeight: 700 }}
          >
            Especificaciones ☆
          </h2>
          <div className="space-y-3">
            {servicio.specs.map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span
                  className="text-black/50"
                  style={{ fontSize: "clamp(11px, 0.85vw, 13px)", fontWeight: 700, letterSpacing: "0.1em" }}
                >
                  {s.label.toUpperCase()}
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
        </div>

        {/* Papeles */}
        <div className="px-8 lg:px-10 py-8">
          <h2
            className="text-black mb-5 uppercase tracking-widest"
            style={{ fontSize: "clamp(12px, 1vw, 15px)", fontWeight: 700 }}
          >
            Papeles disponibles ☆
          </h2>
          <ul className="space-y-2">
            {servicio.papeles.map((p) => (
              <li
                key={p}
                className="text-black flex items-start gap-2"
                style={{ fontSize: "clamp(13px, 1.1vw, 17px)", fontWeight: 300 }}
              >
                <span className="mt-1 text-black/30">—</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Colores */}
        <div className="px-8 lg:px-10 py-8">
          <h2
            className="text-black mb-5 uppercase tracking-widest"
            style={{ fontSize: "clamp(12px, 1vw, 15px)", fontWeight: 700 }}
          >
            Colores disponibles ☆
          </h2>
          <div className="flex flex-wrap gap-3">
            {servicio.coloresDisponibles.map((c) => (
              <div key={c.nombre} className="flex items-center gap-2">
                <span
                  className="block rounded-full border border-black/10 flex-shrink-0"
                  style={{ width: 20, height: 20, background: c.hex }}
                />
                <span
                  className="text-black"
                  style={{ fontSize: "clamp(12px, 0.95vw, 15px)", fontWeight: 400 }}
                >
                  {c.nombre}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proceso */}
      <div className="border-b border-black px-8 lg:px-16 py-10">
        <h2
          className="text-black mb-8"
          style={{ fontSize: "clamp(20px, 2.5vw, 38px)", fontWeight: 700 }}
        >
          Proceso
        </h2>
        <div className="space-y-0 divide-y divide-black/20">
          {servicio.proceso.map((p) => (
            <div key={p.paso} className="py-5 flex flex-col lg:flex-row gap-3 lg:gap-10">
              <span
                className="flex-shrink-0 text-black"
                style={{ fontSize: "clamp(13px, 1.1vw, 17px)", fontWeight: 700, minWidth: "220px" }}
              >
                {p.paso}
              </span>
              <p
                className="text-black/70 flex-1"
                style={{ fontSize: "clamp(14px, 1.3vw, 20px)", fontWeight: 300, lineHeight: 1.6 }}
              >
                {p.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Precios + CTA */}
      <div className="border-b border-black grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-black">
        {/* Precios */}
        <div className="px-8 lg:px-16 py-10">
          <h2
            className="text-black mb-6"
            style={{ fontSize: "clamp(20px, 2.5vw, 38px)", fontWeight: 700 }}
          >
            Precios orientativos
          </h2>
          <div className="divide-y divide-black/20">
            {servicio.precios.map((p) => (
              <div key={p.rango} className="py-4 flex items-center justify-between gap-6">
                <span
                  className="text-black"
                  style={{ fontSize: "clamp(14px, 1.3vw, 20px)", fontWeight: 300 }}
                >
                  {p.rango}
                </span>
                <span
                  className="text-black flex-shrink-0"
                  style={{ fontSize: "clamp(14px, 1.3vw, 20px)", fontWeight: 700 }}
                >
                  {p.precio}
                </span>
              </div>
            ))}
          </div>
          <p
            className="mt-5 text-black/50"
            style={{ fontSize: "clamp(12px, 1vw, 15px)", fontWeight: 300, lineHeight: 1.6 }}
          >
            {servicio.notas}
          </p>
        </div>

        {/* Tiempo + CTA */}
        <div className="px-8 lg:px-16 py-10 bg-black text-white flex flex-col justify-between gap-8">
          <div>
            <p
              className="text-white/40 mb-2 uppercase tracking-widest"
              style={{ fontSize: "clamp(11px, 0.85vw, 13px)", fontWeight: 700 }}
            >
              Tiempo de entrega
            </p>
            <p
              className="text-white"
              style={{ fontSize: "clamp(18px, 2vw, 30px)", fontWeight: 300, lineHeight: 1.4 }}
            >
              {servicio.tiempoEntrega}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p
              className="text-white/70"
              style={{ fontSize: "clamp(16px, 1.6vw, 24px)", fontWeight: 300, lineHeight: 1.5 }}
            >
              ¿Te interesa este servicio? Escribinos y te armamos un presupuesto a medida.
            </p>
            <Link
              to={contactoUrl}
              className="inline-block border border-white rounded-[6px] px-8 py-3 text-white hover:bg-white hover:text-black transition-all duration-200 text-center"
              style={{ fontSize: "clamp(14px, 1.3vw, 20px)", fontWeight: 600 }}
            >
              ENVIAR CONSULTA ☆
            </Link>
            <Link
              to="/imprenta"
              className="text-white/40 hover:text-white transition-colors text-center"
              style={{ fontSize: "clamp(12px, 1vw, 15px)", fontWeight: 400 }}
            >
              ← Volver a todos los servicios
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
