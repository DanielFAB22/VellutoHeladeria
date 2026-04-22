import { useState } from "react";

export function DeliverySection() {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Pedido de domicilio registrado!");
  };

  return (
    <section className="border-t-2 border-black bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="border-2 border-black bg-gray-100 px-4 py-3 mb-6">
          <h2 className="font-semibold text-gray-800">Servicio a Domicilio</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="border-2 border-black p-4 bg-white">
              <h3 className="font-semibold mb-2 text-gray-800">Entrega Rápida</h3>
              <p className="text-sm text-gray-700">Deliveries en menos de 30 minutos dentro de nuestra zona de cobertura</p>
            </div>

            <div className="border-2 border-black p-4 bg-white">
              <h3 className="font-semibold mb-2 text-gray-800">Horario Extendido</h3>
              <p className="text-sm text-gray-700">Lunes a Domingo de 10:00 AM a 10:00 PM</p>
            </div>

            <div className="border-2 border-black p-4 bg-white">
              <h3 className="font-semibold mb-2 text-gray-800">Cobertura Amplia</h3>
              <p className="text-sm text-gray-700">Cubrimos toda la ciudad y alrededores</p>
            </div>
          </div>

          <div className="border-2 border-black p-6 bg-gray-50">
            <h3 className="font-semibold mb-4 text-gray-800">Solicita tu Domicilio</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Dirección de Entrega
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Calle, número, ciudad"
                  className="w-full border-2 border-black px-3 py-2 bg-white text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Teléfono de Contacto
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(123) 456-7890"
                  className="w-full border-2 border-black px-3 py-2 bg-white text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Notas Especiales (Opcional)
                </label>
                <textarea
                  placeholder="Instrucciones de entrega, preferencias, etc."
                  className="w-full border-2 border-black px-3 py-2 bg-white resize-none text-sm"
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="w-full border-2 border-black rounded-full px-6 py-2 bg-white hover:bg-gray-100 font-semibold text-sm"
              >
                Solicitar Domicilio
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
