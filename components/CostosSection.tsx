import { DollarSign, Cpu, Code, Headphones, Users, Calendar, Clock } from 'lucide-react';


export function CostosSection() {
  return (
    <section id="costos" className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Costo de venta</h1>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Dispositivo IoT */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Cpu className="h-8 w-8 text-teal-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-800">1. Dispositivo IoT</h2>
            </div>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Costo de mano de obra:</span>
                  <span className="font-bold text-teal-600">$2000 MXN</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">(ESP32, LED, sensores, cableado)</p>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Costo por materia prima:</span>
                  <span className="font-bold text-teal-600">$939 MXN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desarrollo de Software */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Code className="h-8 w-8 text-green-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-800">2. Desarrollo de Software</h2>
            </div>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Inversión estimada:</span>
                  <span className="font-bold text-green-600">$240.000 MXN</span>
                </div>
              </div>
              <div className="border-b pb-3">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-700">Tiempo de desarrollo: 3 meses</span>
                </div>
              </div>
              <div className="border-b pb-3">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-700"> 496 h totales</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Integrantes involucrados:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 3 desarrolladores backend/frontend</li>
                  <li>• 1 desarrollador en IoT</li>
                  <li>• 1 desarrollador SQL</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Servicio postventa */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Headphones className="h-8 w-8 text-slate-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-800">3. Servicio postventa</h2>
            </div>
            <div className="text-center">
              <div className="bg-slate-50 rounded-lg p-6">
                <h4 className="font-bold text-slate-600 mb-2">Paquete básico mensual</h4>
                <div className="text-3xl font-bold text-slate-600 mb-2">$3818.10 MXN</div>
                <p className="text-sm text-gray-600">Actualizaciones + soporte</p>
                <span className="inline-block mt-2 text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                  (opcional)
                </span>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}