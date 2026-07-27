import { useState } from "react";
import { Link, useParams } from "react-router";
import { siteContent } from "../data";

const NR = "'Neue Regrade', sans-serif";
const papelesDisponiblesBase = [...siteContent.imprenta.papelesDisponibles];
const coloresDisponiblesBase = [...siteContent.imprenta.coloresDisponibles];

type PaperCatalogItem = {
  nombre: string;
  precio: string;
  imagenes?: string[];
  colores?: { nombre: string; hex: string }[];
  gsm?: string;
  dimensiones?: string;
  descripcion?: string;
};

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
    catalogo?: {
      master?: { label: string; precio: string }[];
      corte?: { label: string; precio: string }[];
      preprensa?: { label: string; precio: string }[];
      encuadernacion?: { label: string; precio: string }[];
      papeles?: PaperCatalogItem[];
    };
    notas: string;
    tiempoEntrega: string;
  }
> = {
  catalogo: {
    letra: "CAT",
    nombre: "Catálogo de producción",
    categoria: "Producción y acabados",
    descripcionCorta: "Papeles, master, corte, preprensa y encuadernación para preparar tu pieza.",
    descripcionLarga:
      "Este catálogo reúne las opciones de producción más comunes para trabajar en risografía. Desde el tipo de papel hasta las opciones de armado final, cada decisión influye en el resultado final del proyecto.",
    specs: [
      { label: "Formato", valor: "Consultable según proyecto" },
      { label: "Tiraje", valor: "A medida" },
      { label: "Entrega", valor: "Presupuesto y consulta previa" },
    ],
    papeles: [...papelesDisponiblesBase],
    coloresDisponibles: [...coloresDisponiblesBase],
    proceso: [
      { paso: "01 — Consulta", descripcion: "Te orientamos según el proyecto, formato, tiraje y estilo visual que buscás." },
      { paso: "02 — Selección de materiales", descripcion: "Elegimos papel, tinta, master, corte y acabados según la pieza." },
      { paso: "03 — Producción", descripcion: "Armamos la propuesta técnica y te enviamos presupuesto o indicaciones para avanzar." },
    ],
    precios: [
      { rango: "Papeles", precio: "Consultar por tipo y gramaje" },
      { rango: "Master", precio: "Consultar" },
      { rango: "Corte", precio: "Consultar" },
      { rango: "Preprensa", precio: "Consultar" },
    ],
    catalogo: {
      master: [
        { label: "Master base", precio: "Consultar" },
        { label: "Master para 2 colores", precio: "Consultar" },
      ],
      corte: [
        { label: "Corte manual", precio: "Consultar" },
        { label: "Corte con guillotina", precio: "Consultar" },
      ],
      preprensa: [
        { label: "Ajuste de archivo", precio: "Consultar" },
        { label: "Separación de colores", precio: "Consultar" },
      ],
      encuadernacion: [
        { label: "Grapado", precio: "Consultar" },
        { label: "Costura", precio: "Consultar" },
        { label: "Encuadernado rústica", precio: "Consultar" },
      ],
      papeles: [
        {
          nombre: "Munken Lynx 100g",
          precio: "Consultar",
          imagenes: ["/src/app/assets/placeholder-project-1.jpg", "/src/app/assets/placeholder-project-2.jpg", "/src/app/assets/placeholder-project-3.jpg"],
          colores: [{ nombre: "Natural", hex: "#d8c7a0" }, { nombre: "Crema", hex: "#e6d7b3" }, { nombre: "Blanco", hex: "#f7f4eb" }],
          gsm: "100 gsm",
          dimensiones: "A4 / A3 / A5",
          descripcion: "Papel de alta calidad para impresiones de tono suave y textura acogedora.",
        },
        {
          nombre: "Colorplan 135g",
          precio: "Consultar",
          imagenes: ["/src/app/assets/placeholder-project-2.jpg", "/src/app/assets/placeholder-project-1.jpg", "/src/app/assets/placeholder-project-3.jpg"],
          colores: [{ nombre: "Azul", hex: "#3255a4" }, { nombre: "Rosa", hex: "#ff48b0" }, { nombre: "Amarillo", hex: "#ffe800" }],
          gsm: "135 gsm",
          dimensiones: "A4 / A3",
          descripcion: "Papel de color compacto, ideal para piezas de impacto visual y edición experimental.",
        },
        {
          nombre: "Cartulina Bristol 200g",
          precio: "Consultar",
          imagenes: ["/src/app/assets/placeholder-project-3.jpg", "/src/app/assets/placeholder-project-1.jpg", "/src/app/assets/placeholder-project-2.jpg"],
          colores: [{ nombre: "Blanco", hex: "#f7f4eb" }, { nombre: "Crema", hex: "#e6d7b3" }, { nombre: "Gris", hex: "#c9c9c9" }],
          gsm: "200 gsm",
          dimensiones: "A3 / A4",
          descripcion: "Cartulina rígida y elegante para afiches, posters y piezas de presentación.",
        },
      ],
    },
    notas: "Las opciones de producción se ajustan según formato, tiraje, cantidad de colores y tiempo de armado.",
    tiempoEntrega: "Consultar según proyecto",
  },
  a: {
    letra: "A",
    nombre: "Impresión Risográfica",
    categoria: "Servicio base",
    descripcionCorta: "Impresión en risógrafo con tintas de soja. Tirajes mínimos de 20 ejemplares.",
    descripcionLarga:
      "La risografía es una técnica de impresión stencil que produce resultados únicos e irrepetibles. Cada pasada de tinta tiene su propia textura, y el registro imperfecto entre colores es parte del encanto del proceso. Ideal para fanzines, afiches, papelería y cualquier proyecto que busque una estética editorial artesanal y singular. Trabajamos con tintas de base soja sobre papel sin blanqueadores ópticos.",
    specs: [
      { label: "Formatos", valor: "A5 / A4 / A3 / (preguntar por otros)" },
      { label: "Colores por trabajo", valor: "Hasta 5 pasadas de color" },
      { label: "Tiraje mínimo", valor: "20 unidades" },
      { label: "Tiraje máximo", valor: "Sin límite (consultar tiempos)" },
      { label: "Sangrado", valor: "3 mm recomendado" },
      { label: "Resolución archivos", valor: "300 dpi mínimo, 600 dpi ideal" },
      { label: "Formato de entrega", valor: "PDF separado por color, escala de grises" },
    ],
    papeles: [...papelesDisponiblesBase],
    coloresDisponibles: [...coloresDisponiblesBase],
    proceso: [
      { paso: "01 — Envío de archivos", descripcion: "Nos mandás los archivos separados por color en PDF o TIFF 300 dpi, escala de grises. Si necesitás ayuda con la separación, consultá el servicio B." },
      { paso: "02 — Revisión técnica", descripcion: "Revisamos los archivos dentro de las 48 hs hábiles y te confirmamos que todo esté listo para imprimir. Si hay ajustes menores los hacemos nosotros." },
      { paso: "03 — Prueba de color", descripcion: "Para tirajes mayores a 100 ejemplares o proyectos con registro de colores, hacemos una prueba de 5 unidades antes de imprimir todo." },
      { paso: "04 — Impresión", descripcion: "Imprimimos en nuestro Riso Graph RP3700. El tiempo de producción varía según el tiraje y la cantidad de colores." },
      { paso: "05 — Entrega", descripcion: "Retiro en el laboratorio o envío por correo. Embalamos con cuidado para que lleguen en perfecto estado." },
    ],
    precios: [
      { rango: "20 – 50 unidades", precio: "Desde $4.5 / u." },
      { rango: "51 – 100 unidades", precio: "Desde $3.2 / u." },
      { rango: "101 – 300 unidades", precio: "Desde $2.1 / u." },
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
    papeles: [...papelesDisponiblesBase],
    coloresDisponibles: [...coloresDisponiblesBase],
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
    papeles: [...papelesDisponiblesBase],
    coloresDisponibles: [...coloresDisponiblesBase],
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
    papeles: [...papelesDisponiblesBase],
    coloresDisponibles: [...coloresDisponiblesBase],
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
  const isCatalogoPage = id === "catalogo";
  const contactoUrl = servicio
    ? `/contacto?servicio=${encodeURIComponent(servicio.nombre)}`
    : "/contacto";
  const [selectedPaper, setSelectedPaper] = useState<PaperCatalogItem | null>(null);
  const [selectedPaperIndex, setSelectedPaperIndex] = useState(0);

  const openPaperModal = (papel: PaperCatalogItem) => {
    setSelectedPaper(papel);
    setSelectedPaperIndex(0);
  };

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

        {/* Papel */}
        <div className="px-8 lg:px-10 py-8">
          <h2
            className="text-black mb-5 uppercase tracking-widest"
            style={{ fontSize: "clamp(12px, 1vw, 15px)", fontWeight: 700 }}
          >
            Papel ☆
          </h2>
          <div className="border border-black bg-[#f4f4f4] p-6">
            <p className="text-black/60 uppercase tracking-widest" style={{ fontSize: 11, fontWeight: 700 }}>
              Papeles disponibles
            </p>
            <ul className="mt-4 space-y-2 text-black" style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.6 }}>
              {siteContent.imprenta.papelesDisponibles.map((papel) => (
                <li key={papel} className="list-disc list-inside">
                  {papel}
                </li>
              ))}
            </ul>
            {!isCatalogoPage && (
              <Link
                to="/imprenta/catalogo"
                className="inline-flex items-center justify-center mt-6 border border-black rounded-[6px] px-6 py-3 text-black hover:bg-black hover:text-white transition-all duration-200"
                style={{ fontSize: 14, fontWeight: 600 }}
              >
                Ver el catálogo
              </Link>
            )}
          </div>
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

      {/* Catalogo */}
      {servicio.catalogo && (
        <div className="border-b border-black px-8 lg:px-16 py-10 bg-[#f7f7f7]">
          <h2 className="text-black mb-8" style={{ fontSize: "clamp(20px, 2.5vw, 38px)", fontWeight: 700 }}>
            Catálogo de producción
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicio.catalogo.papeles && servicio.catalogo.papeles.length > 0 && (
              <div className="border border-black p-6 bg-white">
                <h3 className="text-black mb-4 uppercase tracking-widest" style={{ fontSize: 12, fontWeight: 700 }}>Papeles</h3>
                <div className="space-y-3">
                  {servicio.catalogo.papeles.map((papel) => (
                    <div
                      key={papel.nombre}
                      className="flex items-center justify-between gap-4 border border-black/10 rounded-[6px] p-4 hover:bg-black/5 transition-colors duration-200 cursor-pointer"
                      onClick={() => openPaperModal(papel)}
                    >
                      <div>
                        <p className="text-black" style={{ fontSize: 15, fontWeight: 700 }}>{papel.nombre}</p>
                        <p className="text-black/60" style={{ fontSize: 14, fontWeight: 400 }}>{papel.gsm} · {papel.dimensiones}</p>
                      </div>
                      <span className="text-black" style={{ fontSize: 15, fontWeight: 700 }}>{papel.precio}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-6">
              {servicio.catalogo.master && servicio.catalogo.master.length > 0 && (
                <div className="border border-black p-6 bg-white">
                  <h3 className="text-black mb-3 uppercase tracking-widest" style={{ fontSize: 12, fontWeight: 700 }}>Master</h3>
                  <div className="space-y-2">
                    {servicio.catalogo.master.map((item) => (
                      <div key={item.label} className="flex items-center justify-between gap-4">
                        <span className="text-black/70" style={{ fontSize: 15, fontWeight: 300 }}>{item.label}</span>
                        <span className="text-black" style={{ fontSize: 15, fontWeight: 600 }}>{item.precio}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {servicio.catalogo.corte && servicio.catalogo.corte.length > 0 && (
                <div className="border border-black p-6 bg-white">
                  <h3 className="text-black mb-3 uppercase tracking-widest" style={{ fontSize: 12, fontWeight: 700 }}>Corte</h3>
                  <div className="space-y-2">
                    {servicio.catalogo.corte.map((item) => (
                      <div key={item.label} className="flex items-center justify-between gap-4">
                        <span className="text-black/70" style={{ fontSize: 15, fontWeight: 300 }}>{item.label}</span>
                        <span className="text-black" style={{ fontSize: 15, fontWeight: 600 }}>{item.precio}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {servicio.catalogo.preprensa && servicio.catalogo.preprensa.length > 0 && (
                <div className="border border-black p-6 bg-white">
                  <h3 className="text-black mb-3 uppercase tracking-widest" style={{ fontSize: 12, fontWeight: 700 }}>Preprensa</h3>
                  <div className="space-y-2">
                    {servicio.catalogo.preprensa.map((item) => (
                      <div key={item.label} className="flex items-center justify-between gap-4">
                        <span className="text-black/70" style={{ fontSize: 15, fontWeight: 300 }}>{item.label}</span>
                        <span className="text-black" style={{ fontSize: 15, fontWeight: 600 }}>{item.precio}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {servicio.catalogo.encuadernacion && servicio.catalogo.encuadernacion.length > 0 && (
                <div className="border border-black p-6 bg-white">
                  <h3 className="text-black mb-3 uppercase tracking-widest" style={{ fontSize: 12, fontWeight: 700 }}>Encuadernación</h3>
                  <div className="space-y-2">
                    {servicio.catalogo.encuadernacion.map((item) => (
                      <div key={item.label} className="flex items-center justify-between gap-4">
                        <span className="text-black/70" style={{ fontSize: 15, fontWeight: 300 }}>{item.label}</span>
                        <span className="text-black" style={{ fontSize: 15, fontWeight: 600 }}>{item.precio}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {selectedPaper && (
        <div className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4" onClick={() => setSelectedPaper(null)}>
          <div className="w-full max-w-5xl bg-white border border-black p-4 lg:p-8 relative" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedPaper(null)}
              className="absolute top-3 right-3 border border-black rounded-full w-9 h-9 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-200"
              aria-label="Cerrar"
            >
              ×
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
              <div>
                <div className="border border-black bg-[#f4f4f4] p-3">
                  <img
                    src={selectedPaper.imagenes?.[selectedPaperIndex] ?? selectedPaper.imagenes?.[0]}
                    alt={selectedPaper.nombre}
                    className="w-full h-[320px] object-cover"
                  />
                </div>

                {selectedPaper.imagenes && selectedPaper.imagenes.length > 1 && (
                  <div className="flex items-center gap-3 mt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedPaperIndex((prev) => (prev > 0 ? prev - 1 : selectedPaper.imagenes!.length - 1))}
                      className="border border-black rounded-[6px] px-3 py-2 text-black hover:bg-black hover:text-white transition-all duration-200"
                    >
                      ←
                    </button>
                    <div className="flex gap-2 overflow-x-auto">
                      {selectedPaper.imagenes.map((img, index) => (
                        <button
                          key={`${selectedPaper.nombre}-${index}`}
                          type="button"
                          onClick={() => setSelectedPaperIndex(index)}
                          className={`border ${selectedPaperIndex === index ? "border-black" : "border-black/30"}`}
                        >
                          <img src={img} alt={`${selectedPaper.nombre} ${index + 1}`} className="w-16 h-16 object-cover" />
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedPaperIndex((prev) => (prev < (selectedPaper.imagenes!.length - 1) ? prev + 1 : 0))}
                      className="border border-black rounded-[6px] px-3 py-2 text-black hover:bg-black hover:text-white transition-all duration-200"
                    >
                      →
                    </button>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-black/40 uppercase tracking-widest mb-2" style={{ fontSize: 11, fontWeight: 700 }}>Papel</p>
                  <h3 className="text-black" style={{ fontSize: "clamp(22px, 2vw, 32px)", fontWeight: 700 }}>{selectedPaper.nombre}</h3>
                  <p className="text-black/70 mt-2" style={{ fontSize: 15, fontWeight: 300 }}>{selectedPaper.descripcion}</p>
                </div>

                <div className="border border-black p-4 bg-[#f7f7f7]">
                  <p className="text-black/40 uppercase tracking-widest mb-3" style={{ fontSize: 11, fontWeight: 700 }}>Colores</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedPaper.colores?.map((color, index) => (
                      <button
                        key={color.nombre}
                        type="button"
                        onClick={() => setSelectedPaperIndex(index)}
                        className="flex items-center gap-2 border border-black/20 px-2 py-1"
                      >
                        <span className="block w-4 h-4 rounded-full border border-black/10" style={{ background: color.hex }} />
                        <span className="text-black" style={{ fontSize: 13, fontWeight: 500 }}>{color.nombre}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-black p-4">
                    <p className="text-black/40 uppercase tracking-widest mb-1" style={{ fontSize: 11, fontWeight: 700 }}>GSM</p>
                    <p className="text-black" style={{ fontSize: 15, fontWeight: 600 }}>{selectedPaper.gsm}</p>
                  </div>
                  <div className="border border-black p-4">
                    <p className="text-black/40 uppercase tracking-widest mb-1" style={{ fontSize: 11, fontWeight: 700 }}>Dimensiones</p>
                    <p className="text-black" style={{ fontSize: 15, fontWeight: 600 }}>{selectedPaper.dimensiones}</p>
                  </div>
                </div>

                <div className="border border-black p-4">
                  <p className="text-black/40 uppercase tracking-widest mb-2" style={{ fontSize: 11, fontWeight: 700 }}>Precio</p>
                  <p className="text-black" style={{ fontSize: 18, fontWeight: 700 }}>{selectedPaper.precio}</p>
                </div>

                <Link
                  to="/contacto"
                  className="inline-block border border-black rounded-[6px] px-6 py-3 text-black hover:bg-black hover:text-white transition-all duration-200 text-center"
                  style={{ fontSize: 14, fontWeight: 600 }}
                >
                  CONSULTAR ESTE PAPEL ☆
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

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
