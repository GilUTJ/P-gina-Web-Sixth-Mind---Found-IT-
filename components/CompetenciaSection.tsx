import { CheckCircle, X, Award, TrendingUp, Shield, Clock, Target, Zap } from 'lucide-react';

export function CompetenciaSection() {
  const comparacion = [
    { caracteristica: 'Costo', foundIt: 'Bajo', competencia: 'Alto (licencias)', foundItStatus: 'good', competenciaStatus: 'bad' },
    { caracteristica: 'Modularidad', foundIt: 'Alta', competencia: 'Limitada', foundItStatus: 'good', competenciaStatus: 'bad' },
    { caracteristica: 'Personalización', foundIt: 'Libre', competencia: 'Restringida', foundItStatus: 'good', competenciaStatus: 'bad' },
    { caracteristica: 'Control de acceso físico', foundIt: 'Sí', competencia: 'No siempre', foundItStatus: 'good', competenciaStatus: 'warning' },
    { caracteristica: 'Pick to Light', foundIt: 'Incluido', competencia: 'Incluido', foundItStatus: 'good', competenciaStatus: 'good' },
    { caracteristica: 'Datos en tiempo real', foundIt: 'Sí', competencia: 'Variable', foundItStatus: 'good', competenciaStatus: 'warning' },
    { caracteristica: 'Escalabilidad', foundIt: 'Sí', competencia: 'Limitada', foundItStatus: 'good', competenciaStatus: 'bad' },
  ];

  const ventajas = [
    'Sin licencias propietarias.',
    'Escalable y modular: adapta el número de estantes, sensores y funciones según necesidades.',
    'Datos en tiempo real: mayor trazabilidad.',
    'Control ambiental integrado.',
    'Ahorro en tiempo operativo y disminución de errores.',
    'Control de acceso seguro.',
  ];

  const beneficios = [
    { icon: Clock, title: 'Reducción de tiempos', description: 'Reducción de tiempos en logística interna.' },
    { icon: Target, title: 'Menor margen de error', description: 'Menor margen de error humano.' },
    { icon: TrendingUp, title: 'Mejora en trazabilidad', description: 'Mejora en la trazabilidad y auditorías.' },
    { icon: Shield, title: 'Condiciones ambientales', description: 'Medición de condiciones ambientales.' },
    { icon: Zap, title: 'Incremento en productividad', description: 'Incremento en productividad sin aumentar plantilla.' },
    { icon: Award, title: 'Mayor control', description: 'Mayor control sobre materiales sensibles.' },
  ];

  return (
    <section id="competencia" className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Nosotros vs. Competencia</h1>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 italic">"Escalable, sin licencias, listo para crecer contigo."</p>
        </div>

        {/* Tabla comparativa */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-teal-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Característica</th>
                    <th className="px-6 py-4 text-center">Found-IT!</th>
                    <th className="px-6 py-4 text-center">Soluciones comerciales</th>
                  </tr>
                </thead>
                <tbody>
                  {comparacion.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{item.caracteristica}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center">
                          {item.foundItStatus === 'good' && <CheckCircle className="h-5 w-5 text-green-600 mr-2" />}
                          {item.foundItStatus === 'warning' && <div className="w-5 h-5 bg-yellow-500 rounded-full mr-2"></div>}
                          {item.foundItStatus === 'bad' && <X className="h-5 w-5 text-orange-600 mr-2" />}
                          <span className={`font-medium ${item.foundItStatus === 'good' ? 'text-green-600' : item.foundItStatus === 'warning' ? 'text-yellow-600' : 'text-orange-600'}`}>
                            {item.foundIt}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center">
                          {item.competenciaStatus === 'good' && <CheckCircle className="h-5 w-5 text-green-600 mr-2" />}
                          {item.competenciaStatus === 'warning' && <div className="w-5 h-5 bg-yellow-500 rounded-full mr-2"></div>}
                          {item.competenciaStatus === 'bad' && <X className="h-5 w-5 text-orange-600 mr-2" />}
                          <span className={`font-medium ${item.competenciaStatus === 'good' ? 'text-green-600' : item.competenciaStatus === 'warning' ? 'text-yellow-600' : 'text-orange-600'}`}>
                            {item.competencia}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ¿Por qué elegirnos? */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">¿Por qué elegirnos?</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <ul className="space-y-4">
              {ventajas.map((ventaja, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{ventaja}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Beneficios para nuestros clientes */}
        <div id="beneficios">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Beneficios para nuestros clientes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((beneficio) => (
              <div key={beneficio.title} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 rounded-full p-3 mr-4">
                    <beneficio.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{beneficio.title}</h3>
                </div>
                <p className="text-gray-600">{beneficio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}