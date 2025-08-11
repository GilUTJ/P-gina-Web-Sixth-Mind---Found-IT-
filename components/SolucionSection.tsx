import { Cpu, Globe, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useState } from 'react';

export function SolucionSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carrusel automático para mockups
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => prev === 0 ? 1 : 0);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="solucion" className="min-h-screen bg-gradient-to-br from-teal-50 to-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Solución</h1>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        {/* ¿Qué hacemos? */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/images/Logotipos/found-it.png" 
              alt="Found IT!" 
              className="h-10 mr-4 object-contain"
            />
            <h2 className="text-3xl font-bold text-gray-800">¿Qué hacemos?</h2>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <p className="text-lg text-gray-700 mb-8">
              Found-IT! ofrece una solución Pick-to-Light modular y escalable compuesta por:
            </p>
          </div>

          {/* Dispositivo IoT */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Cpu className="h-8 w-8 text-teal-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">1. Dispositivo IoT (Hardware)</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  ESP32 with WiFi connectivity
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  12 LEDs rojos (Pick to Light)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  Sensor DHT11 para temperatura/humedad
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  Servomotor SG90 para control de acceso
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  Fuente de alimentación 5V
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  Cables Dupont
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  Cable USB para conexión
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1518335935020-cfd9c2a4e8ad?w=400&h=300&fit=crop" 
                alt="Dispositivo IoT Hardware" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Software Integrado */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Carrusel automático de mockups */}
            <div className="bg-gray-100 rounded-xl p-8 overflow-hidden">
              <div className="text-center mb-6">
              </div>
              
              <div className="relative">
                <div 
                  className="flex transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {/* Slide 1 - Mockup Web */}
                  <div className="min-w-full flex flex-col items-center justify-center">
                    <h5 className="font-semibold text-gray-700 mb-4">Aplicación Web</h5>
                    <img 
                      src="/images/Muck ups/Muck up web.jpeg" 
                      alt="Mockup Aplicación Web Found IT!" 
                      className="rounded-lg shadow-lg max-w-full max-h-80 object-contain"
                    />
                  </div>
                  
                  {/* Slide 2 - Mockup Móvil */}
                  <div className="min-w-full flex flex-col items-center justify-center">
                    <h5 className="font-semibold text-gray-700 mb-4">Aplicación Móvil</h5>
                    <img 
                      src="/images/Muck ups/Muck up movil.jpeg" 
                      alt="Mockup Aplicación Móvil Found IT!" 
                      className="rounded-lg shadow-lg max-w-full max-h-80 object-contain"
                    />
                  </div>
                </div>
                
                {/* Indicadores de carrusel */}
                <div className="flex justify-center mt-6 space-x-2">
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === 0 ? 'bg-teal-500' : 'bg-gray-400'}`}></div>
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === 1 ? 'bg-teal-500' : 'bg-gray-400'}`}></div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-slate-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">2. Software Integrado</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-bold text-teal-600">App Web (Laravel + Tailwind CSS)</h4>
                  <p className="text-gray-600 text-sm">Gestión de usuarios, almacenes, estantes y materiales. Exportación de reportes, configuración de sensores, umbrales de stock.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-green-600">API REST (Node.js + Express)</h4>
                  <p className="text-gray-600 text-sm">Comunicación entre frontend, dispositivos IoT y base de datos.</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-bold text-yellow-600">Base de Datos (MongoDB Atlas)</h4>
                  <p className="text-gray-600 text-sm">Registro de movimientos, accesos, datos ambientales y logs.</p>
                </div>
                <div className="border-l-4 border-slate-500 pl-4">
                  <h4 className="font-bold text-slate-600">App Móvil (Angular + Tailwind CSS)</h4>
                  <p className="text-gray-600 text-sm">Registro de entradas y salidas, activación remota del sistema Pick to Light, control de acceso físico.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}