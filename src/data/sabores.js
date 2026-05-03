// src/data/sabores.js

export const SABORES = [
  { 
    id: 1, 
    name: "Fresa Suprema", 
    category: "Frutales",
    description: "Cremoso helado de fresa natural con trozos de fruta fresca.",
    price: 4.50,
    image: "/sabores/fresa.png" 
  },
  { 
    id: 2, 
    name: "Chocolate Intenso", 
    category: "Cremosos",
    description: "Chocolate belga premium con un sabor rico y profundo.",
    price: 4.50,
    image: "/sabores/chocolate.png"
  },
  { 
    id: 3, 
    name: "Vainilla Clásica", 
    category: "Clásicos",
    description: "Hecho con vainas de vainilla auténtica de Madagascar.",
    price: 4.00,
    image: "/sabores/vanilla.png"
  },
  { 
    id: 4, 
    name: "Menta Chips", 
    category: "Clásicos",
    description: "Refrescante menta con chips de chocolate oscuro al 70%.",
    price: 4.50,
    image: "/sabores/menta.png"
  },
  { 
    id: 5, 
    name: "Pistacho Real", 
    category: "Premium",
    description: "Pistachos tostados directamente desde Bronte, Italia.",
    price: 5.00,
    image: "/sabores/pistachio.png"
  },
  { 
    id: 6, 
    name: "Caramelo Salado", 
    category: "Cremosos",
    description: "Dulce de leche artesanal con un toque de sal marina.",
    price: 4.80,
    image: "/sabores/caramelosalado.png"
  },
  { 
    id: 7, 
    name: "Cookies & Cream", 
    category: "Cremosos",
    description: "Crema de leche con trozos generosos de galleta negra.",
    price: 4.50,
    image: "/sabores/cookiescream.png" 
  },
  { 
    id: 8, 
    name: "Frutos del Bosque", 
    category: "Frutales",
    description: "Mix de moras, arándanos y frambuesas silvestres.",
    price: 4.80,
    image: "/sabores/frutosbosque.png"
  }
];

export const PRESENTACIONES = [
  { id: 'cono', name: 'Cono Artesanal', extra: 0 },
  { id: 'sundae', name: 'Sundae Especial', extra: 2.50 },
  { id: 'tarro', name: 'Tarro Familiar (1L)', extra: 10.00 }
];