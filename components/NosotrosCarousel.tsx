import { useState } from 'react';
import { ChevronLeft, ChevronRight, Target, Eye, Heart, MapPin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const carouselData = [
  {
    id: 'mision',
    title: 'Nuestra Misión',
    icon: Target,
    content: {
      type: 'text',
      data: {
        subtitle: 'Democratizar la tecnología IoT',
        description: 'Desarrollar software que transforme la productividad de nuestros clientes mediante soluciones tecnológicas innovadoras. Actuamos con integridad y compromiso, ofreciendo resultados medibles que fortalecen relaciones de confianza.',
        // points: [
        //   'Acceso a tecnología IoT para empresas de todos los tamaños',
        //   'Soluciones inteligentes y modulares',
        //   'Escalabilidad según las necesidades del negocio',
        //   'Impulso al crecimiento y competitividad empresarial'
        // ]
      }
    }
  },
  {
    id: 'vision',
    title: 'Nuestra Visión',
    icon: Eye,
    content: {
      type: 'text',
      data: {
        subtitle: 'Desarrolladores en soluciones IoT',
        description: 'Ser reconocidos por la excelencia y calidad de nuestras soluciones. Aspiramos a consolidarnos como una empresa líder, respaldada por la trazabilidad de nuestros proyectos, resultados comprobables y una cultura de mejora continua.',
        // points: [
        //   'Liderazgo en soluciones IoT para gestión de almacenes',
        //   'Reconocimiento por innovación y calidad',
        //   'Compromiso con la transformación digital',
        //   'Enfoque en empresas mexicanas'
        // ]
      }
    }
  },
  {
    id: 'valores',
    title: 'Nuestros Valores',
    icon: Heart,
    content: {
      type: 'values',
      data: [
        {
          name: 'Cabalidad ',
          description: 'Actuar con rectitud y responsabilidad.',
          color: 'bg-teal-100 text-teal-800'
        },
        {
          name: 'Calidad',
          description: 'Entregar soluciones que superen expectativas.',
          color: 'bg-blue-100 text-blue-800'
        },
        {
          name: 'Compromiso ',
          description: 'Cumplir con lo prometido, siempre.',
          color: 'bg-green-100 text-green-800'
        },
        {
          name: 'Constancia ',
          description: 'Mantener el esfuerzo y la mejora día a día.',
          color: 'bg-purple-100 text-purple-800'
        },
        {
          name: 'Excelencia',
          description: 'Buscar lo mejor en cada proyecto',
          color: 'bg-orange-100 text-orange-800'
        },
        {
          name: 'Transparencia ',
          description: 'Comunicar con claridad y honestidad.',
          color: 'bg-red-100 text-red-800'
        }
      ]
    }
  }
];

export function NosotrosCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentData = carouselData[currentSlide];
  const IconComponent = currentData.icon;

  const renderContent = () => {
    if (currentData.content.type === 'text') {
      const data = currentData.content.data as any;
      return (
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">{data.subtitle}</h3>
          <p className="text-base text-gray-600 mb-6 leading-relaxed">{data.description}</p>
          <div className="grid md:grid-cols-2 gap-3">
            
          </div>
        </div>
      );
    }

    if (currentData.content.type === 'values') {
      const data = currentData.content.data as any[];
      return (
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((value, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 ${value.color}`}>
                  {value.name}
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="relative">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-3">
          <IconComponent className="w-6 h-6 text-teal-600 mr-2" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{currentData.title}</h2>
        </div>
      </div>

      {/* Content */}
      <div className="min-h-[300px] flex items-center justify-center mb-6">
        {renderContent()}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center space-x-4 mb-6">
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          className="p-2 hover:bg-teal-50 hover:border-teal-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        {/* Dots */}
        <div className="flex space-x-2">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-teal-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          className="p-2 hover:bg-teal-50 hover:border-teal-300"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Company Info */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center mb-2">
              <MapPin className="w-6 h-6 text-teal-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-1 text-sm">Ubicación</h4>
            <p className="text-gray-600 text-xs">Guadalajara, Jalisco</p>
            <p className="text-gray-600 text-xs">México</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center mb-2">
              <Mail className="w-6 h-6 text-teal-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-1 text-sm">Contacto</h4>
            <p className="text-gray-600 text-xs">contacto@sixthmind.mx</p>
          </div>
        </div>
      </div>
    </div>
  );
}