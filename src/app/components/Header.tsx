export function Header() {
  return (
    <header className="border-b-2 border-black">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="w-60 h-20 border-2 border-black flex items-center justify-center relative bg-white">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="0.5" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="black" strokeWidth="0.5" />
          </svg>
        </div>
        
        <div className="flex items-center gap-8 text-sm">
          <span className="text-gray-700">Ver Carrito</span>
          <span className="text-gray-700">Historial de Pedidos</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between px-4 py-3 bg-gray-100 border-t border-black">
        <nav className="flex gap-4 items-center text-sm">
          <a href="#" className="underline text-blue-600">Inicio</a>
          <span>|</span>
          <a href="#" className="underline text-blue-600">Nosotros</a>
          <span>|</span>
          <a href="#" className="underline text-blue-600">Sabores</a>
          <span>|</span>
          <a href="#" className="underline text-blue-600">Domicilio</a>
          <span>|</span>
          <a href="#" className="underline text-blue-600">Blog</a>
          <span>|</span>
          <a href="#" className="underline text-blue-600">Contacto</a>
        </nav>
        
        <div className="flex items-center gap-3 text-sm">
          <input 
            type="text" 
            placeholder="Buscar sabores, productos..." 
            className="border-2 border-black px-3 py-1 w-64 bg-white"
          />
          <button className="border-2 border-black rounded-full px-6 py-1 bg-white hover:bg-gray-50">
            Buscar
          </button>
        </div>
      </div>
    </header>
  );
}
