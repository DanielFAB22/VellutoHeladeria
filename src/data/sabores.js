// src/data/sabores.js

export const SABORES = [
  // 🍦 CLÁSICOS
  {
    id: "vainilla",
    name: "Vainilla Artesanal",
    category: "Clásicos",
    description: "Elaborado con vainas reales de vainilla para un sabor suave y elegante.",
    price: 4.0,
    image: "/sabores/vainilla.png"
  },
  {
    id: "chocolate",
    name: "Chocolate Intenso",
    category: "Clásicos",
    description: "Chocolate oscuro con notas profundas y textura cremosa.",
    price: 4.5,
    image: "/sabores/chocolate.png"
  },
  {
    id: "fresa",
    name: "Fresa Natural",
    category: "Frutales",
    description: "Fresas frescas trituradas para un sabor auténtico y refrescante.",
    price: 4.5,
    image: "/sabores/fresa.png"
  },

  // 🍪 CREMOSOS
  {
    id: "cookies",
    name: "Cookies & Cream",
    category: "Cremosos",
    description: "Base cremosa con trozos generosos de galleta crujiente.",
    price: 4.5,
    image: "/sabores/cookies.png"
  },
  {
    id: "caramelo",
    name: "Caramelo Salado",
    category: "Cremosos",
    description: "Dulce de leche artesanal con un toque de sal marina.",
    price: 4.8,
    image: "/sabores/caramelo.png"
  },
  {
    id: "avellana",
    name: "Chocolate Avellana",
    category: "Cremosos",
    description: "Crema suave con avellanas tostadas y cacao.",
    price: 4.8,
    image: "/sabores/avellana.png"
  },

  // 🌿 PREMIUM
  {
    id: "pistacho",
    name: "Pistacho Tostado",
    category: "Premium",
    description: "Pistachos seleccionados con un sabor intenso y natural.",
    price: 5.0,
    image: "/sabores/pistacho.png"
  },
  {
    id: "cafe",
    name: "Café Espresso",
    category: "Premium",
    description: "Café de origen con notas profundas y ligeramente amargas.",
    price: 4.8,
    image: "/sabores/cafe.png"
  },
  {
    id: "cheesecake",
    name: "Cheesecake de Frutos Rojos",
    category: "Premium",
    description: "Crema tipo cheesecake con swirl de frutos rojos.",
    price: 5.0,
    image: "/sabores/cheesecake.png"
  },

  // 🍍 FRUTALES
  {
    id: "mango",
    name: "Mango Tropical",
    category: "Frutales",
    description: "Mango maduro con textura suave y refrescante.",
    price: 4.5,
    image: "/sabores/mango.png"
  },
  {
    id: "frutos_rojos",
    name: "Frutos del Bosque",
    category: "Frutales",
    description: "Mezcla de mora, arándano y frambuesa.",
    price: 4.8,
    image: "/sabores/frutosrojos.png"
  }
];

export const PRESENTACIONES = [
  { id: 'cono', name: 'Cono Artesanal', extra: 0 },
  { id: 'sundae', name: 'Sundae Especial', extra: 2.50 },
  { id: 'tarro', name: 'Tarro Familiar (1L)', extra: 10.00 }
];

export const BASES = [
  {
    id: 1,
    name: "Cono",
    description: "Cono artesanal crocante"
  },
  {
    id: 2,
    name: "Vaso",
    description: "Vaso minimalista premium"
  },
  {
    id: 3,
    name: "Brownie",
    description: "Base tibia de brownie"
  },
  {
    id: 4,
    name: "Waffle Bowl",
    description: "Canasta dulce de waffle"
  }
];

export const TOPPINGS = [
  {
    id: 1,
    name: "Chispas de chocolate"
  },
  {
    id: 2,
    name: "Oreo triturada"
  },
  {
    id: 3,
    name: "Caramelo"
  },
  {
    id: 4,
    name: "Fudge de chocolate"
  },
  {
    id: 5,
    name: "Fresas"
  },
  {
    id: 6,
    name: "Marshmallows"
  },
  {
    id: 7,
    name: "Maní crocante"
  },
  {
    id: 8,
    name: "Galleta"
  }
];