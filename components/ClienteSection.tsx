import { AlertTriangle, CheckCircle, Building, School, Zap } from 'lucide-react';

export function ClienteSection() {
  const problemas = [
    'Pérdidas de tiempo en la búsqueda de materiales.',
    'Disminución de errores humanos en conteo y localización.',
    'Falta de trazabilidad en tiempo real.',
    'Sistemas fragmentados y obsoletos.',
    'Necesidad de licencias costosas en soluciones comerciales.',
  ];

  const requerimientos = [
    'Trazabilidad',
    'Reducción de errores',
    'Facilidad de uso',
    'Escalabilidad',
    'Bajo costo',
  ];

  const clientes = [
    { icon: Building, name: 'PyMEs industriales o logísticas', description: 'Empresas pequeñas y medianas del sector industrial' },
    { icon: Building, name: 'Centros de distribución', description: 'Almacenes y centros logísticos' },
    { icon: School, name: 'Escuelas o laboratorios', description: 'Instituciones educativas con zonas restringidas' },
    { icon: Zap, name: 'Empresas modernizadoras', description: 'Empresas que buscan modernizar su almacén sin inversiones elevadas' },
  ];

  return (
    <section id="cliente" className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Descubre el nuevo
            <br />
            <span className="text-gray-700">
              modelo de gestión
            </span>
            <br />
            <img 
              src="/images/Logotipos/found-it.png" 
              alt="Found IT!" 
              className="h-24 md:h-32 mx-auto mt-4 object-contain"
            />
          </h1>
          <div className="w-32 h-2 bg-gray-400 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            El sistema de gestión Found-IT! es un sistema innovador 100% basado en tecnología IoT: 
            <span className="font-bold text-gray-800"> Modular, Escalable y Personalizable</span>, 
            que a través de hardware embebido cocreado con empresas y expertos de la industria, 
            transforma almacenes tradicionales en espacios inteligentes con las competencias 
            técnicas y humanas más demandadas por el mercado laboral.
          </p>
        </div>

        {/* Separador visual */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-full max-w-md"></div>
          <div className="mx-4 w-3 h-3 bg-teal-500 rounded-full"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-full max-w-md"></div>
        </div>

        {/* ¿Qué es Found IT? */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">¿Qué es?</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-5xl mx-auto">
              Es un sistema de localización inteligente tipo Pick to Light que combina hardware embebido 
              (ESP32, sensores, LEDs, servomotores) con aplicaciones web y móviles para brindar una 
              experiencia completa de gestión de almacenes. Con Found-IT!, cada acción del almacén se 
              digitaliza, permitiendo trazabilidad, visualización en tiempo real y control físico de acceso.
            </p>
          </div>
        </div>

        {/* Separador visual */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-full max-w-md"></div>
          <div className="mx-4 w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-full max-w-md"></div>
        </div>

        {/* Problema que resolvemos */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-12">
            <div className="bg-orange-500 rounded-full p-3 mr-4">
              <AlertTriangle className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Problema que resolvemos</h2>
          </div>
          <div className="bg-white rounded-2xl p-10 shadow-xl">
            <ul className="space-y-6">
              {problemas.map((problema, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-3 mr-6 mt-1 flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg md:text-xl text-gray-700 leading-relaxed">{problema}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

              {/* Separador visual */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-full max-w-md"></div>
          <div className="mx-4 w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-full max-w-md"></div>
        </div>

        {/* Potencial cliente */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 text-center">Potencial Cliente</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {clientes.map((cliente) => (
              <div key={cliente.name} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="bg-teal-500 rounded-full p-3 mr-4">
                    <cliente.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">{cliente.name}</h3>
                </div>
                <p className="text-lg md:text-xl text-gray-600">{cliente.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Separador visual */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-full max-w-md"></div>
          <div className="mx-4 w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-full max-w-md"></div>
        </div>

        

        {/* Requerimientos clave */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-12">
            <div className="bg-green-500 rounded-full p-3 mr-4">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Requerimientos clave</h2>
          </div>
          <div className="bg-white rounded-2xl p-10 shadow-xl">
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {requerimientos.map((req, index) => (
                <div key={index} className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-all duration-300 hover:scale-105">
                  <div className="bg-green-500 rounded-full p-3 mx-auto mb-4 w-fit">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <span className="font-bold text-gray-800 text-lg md:text-xl">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}