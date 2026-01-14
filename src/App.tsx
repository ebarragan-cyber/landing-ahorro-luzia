import { Phone, Mail, Shield, CheckCircle, Clock, Users, Zap, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-black text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-end items-center">
          <div className="flex gap-6 text-sm">
            <a href="tel:900877310" className="flex items-center gap-2 hover:text-amber-400 transition">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">900 877 310</span>
            </a>
            <a href="mailto:atencioncliente@reluzca.es" className="flex items-center gap-2 hover:text-amber-400 transition">
              <Mail className="w-4 h-4" />
              <span className="hidden md:inline">atencioncliente@reluzca.es</span>
            </a>
          </div>
        </div>
      </header>

      <div className="bg-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-start">
          <a href="https://reluzca.es/" target="_blank" rel="noopener noreferrer">
            <img
              src="/logoreluzca.png"
              alt="Reluzca Energía"
              className="h-12 md:h-14 hover:opacity-80 transition"
            />
          </a>
        </div>
      </div>

      <main>
        <section className="bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-bold text-gray-900 mb-6 leading-tight" style={{ fontSize: '36px' }}>
              Teléfono gratuito para gestionar tu factura de luz
            </h1>
            <p className="text-gray-700 mb-10 max-w-2xl mx-auto" style={{ fontSize: '20px' }}>
              Habla directamente con nuestros expertos en energía y descubre cuánto puedes ahorrar en tu factura de luz
            </p>
            <a
              href="tel:900877310"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-400 to-red-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-500 hover:to-red-500 transition-all transform hover:scale-105 shadow-xl"
            >
              <Phone className="w-6 h-6" />
              Llamar al 900 877 310
            </a>
            <p className="text-gray-600 mt-4">Llamada gratuita - Sin compromiso</p>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-r from-orange-400 to-red-400">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-center text-xl text-white mb-16">Simple y rápido</p>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Phone className="w-10 h-10 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Contacta con nosotros</h3>
                <p className="text-white">
                  Llama a nuestro número gratuito y habla directamente con nuestros expertos en energía
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="w-10 h-10 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Nuestros expertos te asesoran</h3>
                <p className="text-white">
                  Analizamos tu consumo y encontramos la mejor tarifa de luz para ti
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="w-10 h-10 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Ahorra en tu factura de luz</h3>
                <p className="text-white">
                  Empieza a ahorrar inmediatamente con nuestras tarifas competitivas y servicio personalizado
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              ¿Por qué elegir Luzía Energía?
            </h2>

            <div className="space-y-12">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-orange-600 mb-3">Energía 100% Renovable</h3>
                <p className="text-gray-600 max-w-xl mx-auto">
                  Energía limpia procedente de fuentes renovables para un futuro sostenible.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-orange-600 mb-3">Nuestros expertos te asesoran</h3>
                <p className="text-gray-600 max-w-xl mx-auto">
                  Analizamos tu consumo y encontramos la mejor tarifa de luz para ti.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-orange-600 mb-3">Ahorra en tu factura de luz</h3>
                <p className="text-gray-600 max-w-xl mx-auto">
                  Empieza a ahorrar inmediatamente con nuestras tarifas competitivas y servicio personalizado
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-r from-orange-400 to-red-400">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para empezar a ahorrar?
            </h2>
            <p className="text-white text-lg mb-10 max-w-2xl mx-auto">
              Llama ahora y habla con uno de nuestros expertos en energía. La consulta es gratuita y sin compromiso.
            </p>
            <a
              href="tel:900877310"
              className="inline-flex items-center gap-3 bg-white text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl"
            >
              <Phone className="w-6 h-6" />
              Llamar al 900 877 310
            </a>
            <p className="text-white mt-4">Llamada gratuita - Sin compromiso</p>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Qué dicen nuestros clientes
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Llamé y en 10 minutos me explicaron todo claramente. ¡Estoy ahorrando 30€ al mes!"
                </p>
                <p className="font-semibold text-gray-900">María González</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Servicio profesional y ahorro real. El cambio fue increíblemente fácil."
                </p>
                <p className="font-semibold text-gray-900">Carlos Ruiz</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Por fin, una compañía eléctrica que cumple sus promesas. Muy recomendable."
                </p>
                <p className="font-semibold text-gray-900">Ana Martín</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Preguntas frecuentes
            </h2>

            <div className="space-y-6">
              <details className="bg-white rounded-xl p-6 shadow-lg group">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  ¿De verdad es gratis llamar?
                  <span className="text-amber-500 text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Sí, nuestro servicio de consulta es completamente gratuito. Solo ganamos cuando tú ahorras.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-lg group">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  ¿Cuánto tiempo tarda el cambio de compañía?
                  <span className="text-amber-500 text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  El cambio es automático y tarda de 3 a 5 días laborables. No experimentarás ninguna interrupción en el servicio.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-lg group">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  ¿Tendré penalizaciones con mi compañía actual?
                  <span className="text-amber-500 text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  La mayoría de contratos no tienen penalizaciones. Nuestros expertos lo comprobarán por ti durante la llamada.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-lg group">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  ¿Qué documentos necesito?
                  <span className="text-amber-500 text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Solo tu última factura de luz. Nuestro equipo te guiará durante todo el proceso.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Aún tienes preguntas?
            </h2>
            <a
              href="tel:900877310"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-400 to-red-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-500 hover:to-red-500 transition-all transform hover:scale-105 shadow-xl"
            >
              <Phone className="w-6 h-6" />
              Llamar al 900 877 310
            </a>
            <p className="text-gray-600 mt-4">Llamada gratuita - Sin compromiso</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
            <a href="tel:900877310" className="flex items-center justify-center gap-2 hover:text-amber-400 transition">
              <Phone className="w-4 h-4" />
              900 877 310
            </a>
            <a href="mailto:atencioncliente@reluzca.es" className="flex items-center justify-center gap-2 hover:text-amber-400 transition">
              <Mail className="w-4 h-4" />
              atencioncliente@reluzca.es
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Reluzca Energía. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      <a
        href="tel:900877310"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-400 to-red-400 text-white p-4 rounded-full shadow-2xl hover:from-orange-500 hover:to-red-500 transition-all transform hover:scale-110 z-50 md:hidden"
        aria-label="Llamar ahora"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}

export default App;
