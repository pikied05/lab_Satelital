export interface Proyecto {
  id: string;
  año: string;
  titulo: string;
  categoria: string;
  descripcion: string;
  tags: string[];
}

export const proyectos: Proyecto[] = [
  {
    id: "001",
    año: "2025",
    titulo: "Cuidar la llama",
    categoria: "Publicación colectiva",
    descripcion:
      "Cuidar la llama feminista: lo que nos gusta hacer entre todas. Cuidar la llama feminista también es decir lo que sentimos. Este fanzine es resultado de la suma de voces que formaron parte de Cuidar la llama. Curaduría feminista en práctica. Impartido por Kekena Corvalán y Alma Cardoso en 2025. Las imágenes y textos son de cada una de las personas que formaron parte del curso.",
    tags: ["Risografía", "Publicación", "Colectivo"],
  },
  {
    id: "002",
    año: "2025",
    titulo: "Orbita entre conceptos e ideas",
    categoria: "Diseño + impresión",
    descripcion:
      "Poster experimental, para el lanzamiento de Laboratorio Satelital. Fotografía de Camila López (@thescienceoffeelings) y dibujos hechos por Mafer Céspedes (@volcan0_jpg) Impresión en risografía, dos colores. Tiraje de 35 ejemplares en Cartulina Bristol 200 gsm.",
    tags: ["Risografía", "Colectivo", "Poster"],
  },
  {
    id: "003",
    año: "2024",
    titulo: "Archivo Desbordado",
    categoria: "Fanzine serie",
    descripcion:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Serie de cinco fanzines que exploran el archivo personal como material político. Cada número es una colaboración con un artista diferente. Impresión en risógrafo dos colores.",
    tags: ["Fanzine", "Archivo", "Serie"],
  },
  {
    id: "004",
    año: "2023",
    titulo: "Tinta & Territorio",
    categoria: "Residencia + publicación",
    descripcion:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Residencia de producción editorial que reunió a ocho artistas durante dos semanas para crear una publicación colectiva sobre territorio y paisaje. Resultado: libro de 64 páginas, cuatro colores.",
    tags: ["Residencia", "Territorio", "Colaboración"],
  },
];

export const proyectosDestacados = proyectos.slice(0, 3);
