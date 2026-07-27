export const siteContent = {
  brand: {
    name: "Laboratorio Satelital",
    email: "lab.satelital@gmail.com",
    instagram: {
      handle: "@lab.satelital",
      url: "https://instagram.com/lab.satelital",
    },
    facebook: {
      handle: "Laboratorio Satelital",
      url: "https://www.facebook.com/labsatelital",
    },
    tiktok: {
      handle: "@lab.satelital",
      url: "https://tiktok.com/@lab.satelital",
    },
    horario: "Lunes a Viernes, 10:00 – 18:00",
    direccion: "Puebla, Mx.",
    copyright: "© 2026 Laboratorio Satelital — Todos los derechos reservados",
  },
  navigation: [
    { to: "/", label: "Inicio" },
    { to: "/talleres", label: "Talleres" },
    { to: "/proyectos", label: "Proyectos" },
    { to: "/tienda", label: "Tienda" },
    { to: "/imprenta", label: "Imprenta" },
    { to: "/nosotrxs", label: "Nosotrxs" },
    { to: "/contacto", label: "Contacto" },
  ],
  contacto: {
    serviciosOpciones: [
      "Impresión Risográfica",
      "Diseño + Impresión",
      "Publicaciones & Fanzines",
      "Impresión Libre / Auto-operada",
      "Talleres",
      "Otro",
    ],
    mensajeAyuda:
      "☆ Para consultas de talleres incluye la fecha de interés. Para imprenta, el formato y tiraje aproximado. Así podemos darte un presupuesto más preciso.",
    responseTime: "menos de 48 horas hábiles",
  },
  talleres: [
    {
      id: "01",
      titulo: "Introducción a la Risografía",
      fecha: "Próximamente",
      duracion: "2 días / 8 horas",
      cupos: "10 personas",
      descripcion:
        "Aprende los fundamentos de la impresión risográfica, desde la preparación de archivos hasta la operación de la máquina. Exploraremos separación de colores, registro y las posibilidades expresivas únicas de este medio.",
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
        "Un taller enfocado en la construcción de publicaciones independientes desde el concepto hasta el objeto impreso. Exploraremos formatos, encuadernación básica y la relación entre diseño y producción.",
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
        "Aprende a hacer tu propio fanzine desde cero. Técnicas de maquetación, impresión en risógrafo y encuadernación artesanal. Cada participante se lleva su propia publicación.",
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
        "Un espacio para experimentar con tintas, texturas y soportes no convencionales. Combinamos técnicas de impresión analógica con propuestas conceptuales propias.",
      detalle:
        "A través de pruebas en papel, tinta y soportes alternativos, el taller propone abrir preguntas sobre materialidad y proceso. Es ideal para quienes quieren expandir la práctica de la impresión.",
      incluye: ["Pruebas de tinta", "Texturas y soporte", "Experimentación", "Discusión de proceso"],
      imagenes: ["/src/app/assets/placeholder-project-1.jpg", "/src/app/assets/placeholder-project-2.jpg", "/src/app/assets/placeholder-project-3.jpg"],
    },
  ],
  imprenta: {
    papelesDisponibles: [
      "Papel Bond 75g (blanco y colores)",
      "Papel Bond 90g (blanco y ahuesado)",
      "Cartulina Bristol 200g (blanco)",
      "Papel Colorplus 80g (varios colores)",
      "Cartulina Colorplus 160g (varios colores)",
      "Cartoncillo Minagris 200g (Gris)",
      "Albanene 145g y 185g (blanco)",
      "Cartulina Murillo 180g (blanco)",
      "Cartulina Tintoretto 200g (blanco, gris, crema)",
      "Papel Fabriano 90g (blanco)",
      "Cartulina Fabriano 160g (blanco)",
      "Cartulina Opalina 225g (blanco, crema)",
      "Cartulina Rives 250g (blanco)",
    ],
    coloresDisponibles: [
      { nombre: "Negro", hex: "#1a1a1a" },
      { nombre: "Azul Medio", hex: "#3255a4" },
      { nombre: "Amarillo", hex: "#ffe800" },
      { nombre: "Naranja", hex: "#ff6c2f" },
      { nombre: "Rosa Flourescente", hex: "#ff48b0" },
    ],
  },
};
