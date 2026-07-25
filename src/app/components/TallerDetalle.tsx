import { Link, useParams } from "react-router";

const NR = "'Neue Regrade', sans-serif";

const talleres = [
  {
    id: "01",
    titulo: "Introducción a la Risografía",
    fecha: "Próximamente",
    duracion: "2 días / 8 horas",
    cupos: "10 personas",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aprende los fundamentos de la impresión risográfica, desde la preparación de archivos hasta la operación de la máquina. Exploraremos separación de colores, registro y las posibilidades expresivas únicas de este medio.",
    detalle:
      "Este taller está pensado para quienes quieren acercarse por primera vez a la risografía como herramienta de producción y experimentación. Trabajaremos con la máquina de forma guiada, entenderemos cómo preparar archivos y cómo pensar la imagen para este medio.",
    incluye: ["Introducción técnica", "Preparación de archivos", "Impresión guiada", "Material de apoyo"],
    imagenes: ["/src/app/assets/placeholder-project-1.jpg", "/src/app/assets/placeholder-project-2.jpg", "/src/app/assets/placeholder-project-3.jpg"],
  },
  {
    id: "02",
    titulo: "Diseño Editorial Experimental",
    fecha: "Próximamente",
    duracion: "3 días / 12 horas",
    cupos: "8 personas",
    descripcion:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Un taller enfocado en la construcción de publicaciones independientes desde el concepto hasta el objeto impreso. Exploraremos formatos, encuadernación básica y la relación entre diseño y producción.",
    detalle:
      "El taller combina diseño, edición y producción para pensar publicaciones como objetos que pueden circular y transformarse. Trabajaremos sobre formatos, ritmo visual y decisiones de impresión.",
    incluye: ["Maquetación", "Formato y encuadernación", "Revisión de archivos", "Producción de muestra"],
    imagenes: ["/src/app/assets/placeholder-project-1.jpg", "/src/app/assets/placeholder-project-2.jpg", "/src/app/assets/placeholder-project-3.jpg"],
  },
  {
    id: "03",
    titulo: "Fanzine & Autoedición",
    fecha: "Próximamente",
    duracion: "1 día / 6 horas",
    cupos: "12 personas",
    descripcion:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Aprende a hacer tu propio fanzine desde cero. Técnicas de maquetación, impresión en risógrafo y encuadernación artesanal. Cada participante se lleva su propia publicación.",
    detalle:
      "Una propuesta práctica para construir un fanzine propio desde la idea hasta la edición final. Veremos cómo pensar el contenido, preparar la maquetación y convertirlo en un objeto impreso.",
    incluye: ["Maquetación básica", "Impresión", "Encuadernación", "Copia para llevar"],
    imagenes: ["/src/app/assets/placeholder-project-1.jpg", "/src/app/assets/placeholder-project-2.jpg", "/src/app/assets/placeholder-project-3.jpg"],
  },
  {
    id: "04",
    titulo: "Risografía & Procesos Alternativos",
    fecha: "Próximamente",
    duracion: "2 días / 10 horas",
    cupos: "8 personas",
    descripcion:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Un espacio para experimentar con tintas, texturas y soportes no convencionales. Combinamos técnicas de impresión analógica con propuestas conceptuales propias.",
    detalle:
      "A través de pruebas en papel, tinta y soportes alternativos, el taller propone abrir preguntas sobre materialidad y proceso. Es ideal para quienes quieren expandir la práctica de la impresión.",
    incluye: ["Pruebas de tinta", "Texturas y soporte", "Experimentación", "Discusión de proceso"],
    imagenes: ["/src/app/assets/placeholder-project-1.jpg", "/src/app/assets/placeholder-project-2.jpg", "/src/app/assets/placeholder-project-3.jpg"],
  },
];

export function TallerDetalle() {
  const { id } = useParams<{ id: string }>();
  const taller = talleres.find((item) => item.id === id);

  if (!taller) {
    return (
      <section className="min-h-[70vh] px-8 lg:px-16 py-16" style={{ fontFamily: NR }}>
        <p className="text-black" style={{ fontSize: "clamp(20px, 2.5vw, 36px)", fontWeight: 300 }}>
          Taller no encontrado.
        </p>
      </section>
    );
  }

  return (
    <section className="bg-white min-h-screen" style={{ fontFamily: NR }}>
      <div className="border-b border-black px-8 lg:px-16 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <Link to="/talleres" className="text-black/60 hover:text-black transition-colors" style={{ fontSize: "clamp(12px, 1vw, 15px)", fontWeight: 600 }}>
          ← Volver a todos los talleres
        </Link>
        <Link to="/contacto" className="border border-black rounded-[6px] px-6 py-2 text-black hover:bg-black hover:text-white transition-all duration-200" style={{ fontSize: "clamp(14px, 1.3vw, 18px)", fontWeight: 600 }}>
          INSCRIBIRSE ☆
        </Link>
      </div>

      <div className="border-b border-black px-8 lg:px-16 py-10 lg:py-14">
        <p className="text-black/40 uppercase tracking-widest mb-3" style={{ fontSize: 12, fontWeight: 700 }}>
          {taller.id}
        </p>
        <h1 className="text-black" style={{ fontSize: "clamp(32px, 4vw, 64px)", fontWeight: 700 }}>
          {taller.titulo}
        </h1>
        <p className="text-black/70 max-w-[800px] mt-5" style={{ fontSize: "clamp(16px, 1.7vw, 24px)", fontWeight: 300, lineHeight: 1.6 }}>
          {taller.descripcion}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] border-b border-black">
        <div className="p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-black bg-[#d9d9d9]">
          <h2 className="text-black mb-5" style={{ fontSize: "clamp(20px, 2vw, 28px)", fontWeight: 700 }}>
            Sobre el taller
          </h2>
          <p className="text-black" style={{ fontSize: "clamp(16px, 1.5vw, 22px)", fontWeight: 300, lineHeight: 1.7 }}>
            {taller.detalle}
          </p>
        </div>

        <div className="p-8 lg:p-16">
          <h2 className="text-black mb-6" style={{ fontSize: "clamp(20px, 2vw, 28px)", fontWeight: 700 }}>
            Información práctica
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-black/40 uppercase tracking-widest mb-1" style={{ fontSize: 11, fontWeight: 700 }}>Fecha</p>
              <p className="text-black" style={{ fontSize: 16, fontWeight: 400 }}>{taller.fecha}</p>
            </div>
            <div>
              <p className="text-black/40 uppercase tracking-widest mb-1" style={{ fontSize: 11, fontWeight: 700 }}>Duración</p>
              <p className="text-black" style={{ fontSize: 16, fontWeight: 400 }}>{taller.duracion}</p>
            </div>
            <div>
              <p className="text-black/40 uppercase tracking-widest mb-1" style={{ fontSize: 11, fontWeight: 700 }}>Cupos</p>
              <p className="text-black" style={{ fontSize: 16, fontWeight: 400 }}>{taller.cupos}</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-black mb-3" style={{ fontSize: 18, fontWeight: 700 }}>Incluye</h3>
            <ul className="space-y-2">
              {taller.incluye.map((item) => (
                <li key={item} className="text-black/70" style={{ fontSize: 15, fontWeight: 300 }}>
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="px-8 lg:px-16 py-10">
        <h2 className="text-black mb-6" style={{ fontSize: "clamp(20px, 2vw, 28px)", fontWeight: 700 }}>
          Imágenes del taller
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {taller.imagenes.map((src, index) => (
            <div key={src + index} className="border border-black bg-[#efefef] p-2">
              <img src={src} alt={`${taller.titulo} ${index + 1}`} className="w-full h-56 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
