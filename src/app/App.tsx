import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FlavorCard } from "./components/FlavorCard";
import { DeliverySection } from "./components/DeliverySection";
import { TrackOrder } from "./components/TrackOrder";

const flavors = [
  {
    id: 1,
    name: "Fresa Suprema",
    description: "Cremoso helado de fresa natural con trozos de fruta fresca",
    price: "$4.50"
  },
  {
    id: 2,
    name: "Chocolate Intenso",
    description: "Chocolate belga premium con un sabor rico y profundo",
    price: "$4.50"
  },
  {
    id: 3,
    name: "Vainilla Clásica",
    description: "Hecho con vainas de vainilla auténtica de Madagascar",
    price: "$4.00"
  },
  {
    id: 4,
    name: "Menta Fresca",
    description: "Refrescante menta con chips de chocolate oscuro",
    price: "$4.50"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="p-4">
        <Hero />
        
        <div className="mt-4">
          <div className="border-2 border-black px-4 py-3 bg-gray-100">
            <h2 className="font-semibold text-gray-800">Nuestros Sabores</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            {flavors.map((flavor) => (
              <FlavorCard
                key={flavor.id}
                name={flavor.name}
                description={flavor.description}
                price={flavor.price}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <DeliverySection />
        </div>
        
        <div className="mt-8">
          <TrackOrder />
        </div>
        
        <div className="mt-8 border-t-2 border-black pt-8">
          <div className="border-2 border-black px-4 py-3 bg-gray-100 mb-4">
            <h2 className="font-semibold text-gray-800">¿Por qué elegirnos?</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="border-2 border-black p-4 bg-white">
              <h3 className="font-semibold mb-2 text-gray-800">Ingredientes Naturales</h3>
              <p className="text-sm text-gray-700">Solo utilizamos ingredientes frescos y de la más alta calidad</p>
            </div>
            <div className="border-2 border-black p-4 bg-white">
              <h3 className="font-semibold mb-2 text-gray-800">Recetas Artesanales</h3>
              <p className="text-sm text-gray-700">Cada lote se prepara a mano siguiendo recetas tradicionales</p>
            </div>
            <div className="border-2 border-black p-4 bg-white">
              <h3 className="font-semibold mb-2 text-gray-800">Sabores Únicos</h3>
              <p className="text-sm text-gray-700">Creamos combinaciones innovadoras que no encontrarás en otro lugar</p>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-black h-16 mt-8"></footer>
    </div>
  );
}
