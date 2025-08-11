import { NosotrosCarousel } from './NosotrosCarousel';

export function NosotrosSection() {
  return (
    <section 
      id="nosotros" 
      className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section de Nosotros */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Conoce a
            <br />
            <span className="text-teal-600">
              Sixth Mind
            </span>
          </h1>
          <div className="w-40 h-3 bg-teal-600 mx-auto mb-12"></div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
            Somos un equipo de <span className="font-bold text-teal-700">innovadores apasionados</span> por la tecnología IoT 
            y el desarrollo de soluciones inteligentes que transforman la manera en que las empresas 
            gestionan sus recursos y optimizan sus procesos.
          </p>
        </div>
        
        {/* Carrusel mejorado */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <NosotrosCarousel />
        </div>
      </div>
    </section>
  );
}