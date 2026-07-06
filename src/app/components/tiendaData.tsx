export type Producto = {
  id: string;
  nombre: string;
  tipo: string;
  paginas: string;
  colores: string;
  tiraje: string;
  precio: string;
  disponible: boolean;
  imagen: string;
  descripcion: string;
  papel: string;
  dimensiones: string;
  año: string;
  extras: string[];
};

export const productos: Producto[] = [
  {
    id: "01",
    nombre: "Órbita Común #1",
    tipo: "Fanzine",
    paginas: "32 págs.",
    colores: "2 colores — Azul + Negro",
    tiraje: "Tirada de 150 ejemplares",
    precio: "$4.500",
    disponible: true,
    imagen:
      "https://images.unsplash.com/photo-1586188726762-b64569ad86a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    descripcion:
      "Publicación colectiva producida durante una residencia de dos semanas en el laboratorio. Reúne obras de doce artistas de distintas disciplinas alrededor del concepto de órbita: trayectorias, repetición, desvío. Cada página es una impresión independiente que dialoga con las demás.",
    papel: "Munken Lynx 100g (interior) / Colorplan 270g (tapa)",
    dimensiones: "14 × 20 cm",
    año: "2025",
    extras: ["Costura japonesa", "Numerado a mano", "Con insert suelto"],
  },
  {
    id: "02",
    nombre: "Mapa de lo Invisible",
    tipo: "Afiche",
    paginas: "A2",
    colores: "3 colores — Rojo + Amarillo + Negro",
    tiraje: "Tirada de 80 ejemplares",
    precio: "$3.200",
    disponible: true,
    imagen:
      "https://images.unsplash.com/photo-1568756600820-ab7372450cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    descripcion:
      "Afiche de gran formato producto del proyecto de cartografía afectiva desarrollado junto a la comunidad. El mapa registra lugares invisibles de la ciudad: espacios de encuentro, afecto y memoria colectiva. Impresión en tres pasadas con registro levemente corrido, propio de la riso.",
    papel: "Biotop 80g natural",
    dimensiones: "42 × 59,4 cm",
    año: "2024",
    extras: ["Doblado en cuatro", "Firmado por el colectivo"],
  },
  {
    id: "03",
    nombre: "Archivo Desbordado #3",
    tipo: "Fanzine",
    paginas: "24 págs.",
    colores: "2 colores — Rosa + Negro",
    tiraje: "Tirada de 100 ejemplares",
    precio: "$3.800",
    disponible: true,
    imagen:
      "https://images.unsplash.com/photo-1643485839726-c9d4fac1c9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    descripcion:
      "Tercer número de la serie Archivo Desbordado, en colaboración con la artista visual C. Rojas. Este número explora el archivo doméstico: fotografías familiares, listas de compras, recibos y anotaciones al margen como materia prima política y afectiva.",
    papel: "Papel de diario 52g (interior) / Kraft 90g (tapa)",
    dimensiones: "15 × 21 cm",
    año: "2024",
    extras: ["Grapa central", "Encarte con texto curatorial"],
  },
  {
    id: "04",
    nombre: "Tinta & Territorio",
    tipo: "Libro",
    paginas: "64 págs.",
    colores: "4 colores",
    tiraje: "Tirada de 120 ejemplares",
    precio: "$8.900",
    disponible: false,
    imagen:
      "https://images.unsplash.com/photo-1567262439913-3c8f66cfe6e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    descripcion:
      "Publicación resultado de la residencia Tinta & Territorio, que reunió a ocho artistas durante dos semanas para crear en torno al paisaje y sus tensiones. El libro cruza fotografía, ilustración, texto poético y cartografía experimental en 64 páginas de cuatro colores.",
    papel: "Munken Lynx 100g (interior) / Colorplan 270g (tapa)",
    dimensiones: "17 × 24 cm",
    año: "2023",
    extras: ["Encuadernación rústica", "Tapa blanda con solapas", "Agotado — consultar reimpresión"],
  },
  {
    id: "05",
    nombre: "Archivo Desbordado #1",
    tipo: "Fanzine",
    paginas: "16 págs.",
    colores: "1 color — Verde",
    tiraje: "Tirada de 100 ejemplares",
    precio: "$2.800",
    disponible: false,
    imagen:
      "https://images.unsplash.com/photo-1684131144440-5be53eb889ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    descripcion:
      "El primer número de la serie Archivo Desbordado, punto de partida de un proyecto editorial que explora el archivo personal. Monocromático en tinta verde sobre papel de diario, con textura y densidad variables según la zona de impresión.",
    papel: "Papel de diario 52g",
    dimensiones: "15 × 21 cm",
    año: "2023",
    extras: ["Grapa central", "Agotado — sin reimpresión prevista"],
  },
  {
    id: "06",
    nombre: "Satélite Póster",
    tipo: "Afiche",
    paginas: "A3",
    colores: "2 colores — Violeta + Amarillo",
    tiraje: "Tirada de 60 ejemplares",
    precio: "$2.500",
    disponible: true,
    imagen:
      "https://images.unsplash.com/photo-1586188717643-ce2ae3b74c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    descripcion:
      "Afiche de diseño propio del laboratorio para marcar el primer año de Laboratorio Satelital. Composición tipográfica experimental en dos colores con registro desplazado. Edición especial, sin reimpresión.",
    papel: "Munken Lynx 120g",
    dimensiones: "29,7 × 42 cm",
    año: "2024",
    extras: ["Sin doblar", "Firmado y numerado"],
  },
];
