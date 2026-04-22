import { useState } from "react";

export function TrackOrder() {
  const [orderNumber, setOrderNumber] = useState("");
  const [orderStatus, setOrderStatus] = useState<string | null>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderNumber) {
      setOrderStatus("en-camino");
    }
  };

  const getOrderSteps = () => {
    if (!orderStatus) return null;

    return (
      <div className="mt-8 border-2 border-black p-6 bg-white">
        <h3 className="font-semibold mb-6 text-gray-800">Estado del Pedido #{orderNumber}</h3>
        
        <div className="space-y-4">
          <div className="border-2 border-black p-3 bg-gray-50">
            <h4 className="font-semibold text-sm text-gray-800">✓ Pedido Confirmado</h4>
            <p className="text-sm text-gray-700">Tu pedido ha sido recibido y confirmado</p>
            <p className="text-xs text-gray-500 mt-1">Hace 15 minutos</p>
          </div>

          <div className="border-2 border-black p-3 bg-gray-50">
            <h4 className="font-semibold text-sm text-gray-800">✓ En Preparación</h4>
            <p className="text-sm text-gray-700">Estamos preparando tu pedido con cuidado</p>
            <p className="text-xs text-gray-500 mt-1">Hace 10 minutos</p>
          </div>

          <div className="border-2 border-black p-3 bg-white">
            <h4 className="font-semibold text-sm text-gray-800">→ En Camino</h4>
            <p className="text-sm text-gray-700">Tu pedido está en camino. Llegará en aproximadamente 15 minutos</p>
            <p className="text-xs text-gray-500 mt-1">Conductor: Juan Pérez</p>
          </div>

          <div className="border-2 border-black p-3 bg-gray-100">
            <h4 className="font-semibold text-sm text-gray-500">○ Entregado</h4>
            <p className="text-sm text-gray-500">Tu pedido ha sido entregado</p>
          </div>
        </div>

        <div className="mt-6 border-2 border-black p-3 bg-gray-50">
          <p className="text-sm text-center text-gray-700">
            ¿Necesitas ayuda? Llámanos al <span className="font-bold">800-888-8888</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="border-t-2 border-black bg-white py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="border-2 border-black bg-gray-100 px-4 py-3 mb-6">
          <h2 className="font-semibold text-gray-800">Seguir tu Pedido</h2>
        </div>

        <div className="border-2 border-black p-6 bg-white">
          <form onSubmit={handleTrack} className="flex gap-4">
            <input
              type="text"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="Ingresa tu número de pedido (ej: 12345)"
              className="flex-1 border-2 border-black px-4 py-2 bg-white text-sm"
              required
            />
            <button
              type="submit"
              className="border-2 border-black rounded-full px-8 py-2 bg-white hover:bg-gray-50 font-semibold text-sm"
            >
              Rastrear
            </button>
          </form>

          {!orderStatus && (
            <div className="mt-6 text-center text-gray-600 text-sm">
              <p>Ingresa tu número de pedido para ver el seguimiento</p>
              <p className="mt-2 text-xs">
                Puedes encontrar tu número de pedido en el correo de confirmación
              </p>
            </div>
          )}
        </div>

        {getOrderSteps()}
      </div>
    </section>
  );
}
