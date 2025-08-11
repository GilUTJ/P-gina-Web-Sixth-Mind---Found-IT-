import { useState } from 'react';
import { ChevronLeft, ChevronRight, Target, Eye, Heart, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';

const carouselData = [
  {
    id: 'mision',
    title: 'Nuestra Misión',
    icon: Target,
    content: {
      type: 'text',
      data: {
        subtitle: 'Transformar la gestión de almacenes',
        description: 'Desarrollamos soluciones tecnológicas innovadoras que integran hardware IoT y software inteligente para optimizar la gestión de inventarios y mejorar la eficiencia operacional en almacenes y centros de distribución.',
        points: [
          'Reducir tiempos de búsqueda de productos hasta en un 80%',
          'Minimizar errores humanos en la gestión de inventarios',
          'Facilitar la integración con sistemas existentes',
          'Proporcionar datos en tiempo real para toma de decisiones'
        ]
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
        subtitle: 'Líderes en automatización inteligente',
        description: 'Ser la empresa líder en México y América Latina en soluciones de automatización inteligente para almacenes, estableciendo el estándar de la industria en tecnología Pick to Light e IoT aplicado a la logística.',
        points: [
          'Expandir nuestra presencia a nivel internacional',
          'Innovar constantemente en tecnología de localización',
          'Establecer alianzas estratégicas con líderes del sector',
          'Contribuir a la transformación digital del sector logístico'
        ]
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
          name: 'Innovación',
          description: 'Buscamos constantemente nuevas formas de resolver problemas complejos con soluciones tecnológicas avanzadas.',
          color: 'bg-teal-100 text-teal-800'
        },
        {
          name: 'Calidad',
          description: 'Nos comprometemos a entregar productos y servicios que excedan las expectativas de nuestros clientes.',
          color: 'bg-blue-100 text-blue-800'
        },
        {
          name: 'Colaboración',
          description: 'Trabajamos en equipo y fomentamos relaciones sólidas con nuestros clientes y socios comerciales.',
          color: 'bg-green-100 text-green-800'
        },
        {
          name: 'Integridad',
          description: 'Actuamos con transparencia, honestidad y ética en todas nuestras operaciones y relaciones.',
          color: 'bg-purple-100 text-purple-800'
        },
        {
          name: 'Excelencia',
          description: 'Nos esforzamos por alcanzar los más altos estándares en todo lo que hacemos.',
          color: 'bg-orange-100 text-orange-800'
        },
        {
          name: 'Responsabilidad',
          description: 'Asumimos la responsabilidad de nuestras acciones y su impacto en clientes, empleados y sociedad.',
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
            {data.points.map((point: string, index: number) => (
              <div key={index} className="flex items-start space-x-2 text-left">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700">{point}</p>
              </div>
            ))}
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
              <Phone className="w-6 h-6 text-teal-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-1 text-sm">Contacto</h4>
            <p className="text-gray-600 text-xs">contacto@sixthmind.mx</p>
          </div>
        </div>
      </div>
    </div>
  );
}