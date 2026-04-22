interface FlavorCardProps {
  name: string;
  description: string;
  price: string;
}

export function FlavorCard({ name, description, price }: FlavorCardProps) {
  return (
    <div className="border-2 border-black p-4 bg-white">
      <div className="flex gap-4">
        <div className="w-32 h-32 border-2 border-black flex-shrink-0 relative bg-white">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="1" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="black" strokeWidth="1" />
          </svg>
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold mb-1 text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600 mb-1">{price}</p>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      </div>
      
      <div className="flex justify-center mt-4">
        <button className="border-2 border-black rounded-full px-6 py-1 bg-white hover:bg-gray-50 text-sm">
          Ordenar »
        </button>
      </div>
    </div>
  );
}
