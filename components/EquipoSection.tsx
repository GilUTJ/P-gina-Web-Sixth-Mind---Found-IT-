import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function EquipoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const equipo = [
    {
      name: 'Avalos Orozco Josué',
      photo: "./images/team/Josue_Orozco.jpeg",
      role: 'Desarrollador Frontend',
    },
    {
      name: 'López Vázquez Omar',
      photo: "./images/team/Omar_Lopez.jpg",
      role: 'Desarrollador Backend',
    },
    {
      name: 'Murillo Sánchez Roberto',
      photo: "./images/team/Roberto_Murillo.jpg",
      role: 'Lider de proyecto',
    },
    {
      name: 'Pulido Rosas Casandra Paola',
      photo: "./images/team/Cassandra_Pulido.jpeg",
      role: 'Diseñadora IoT',
    },
    {
      name: 'Rodríguez Almaraz Gilberto Alejandro',
      photo: "./images/team/Gilberto_Rodriguez.jpg",
      role: 'Desarrollador NoSQL',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % equipo.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? equipo.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="equipo" className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-teal-600 mr-4" />
            <h1 className="text-5xl font-bold text-gray-900">Nuestro Equipo</h1>
          </div>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a los profesionales apasionados que hacen posible las soluciones innovadoras de Sixth Mind
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="relative">
            <div className="flex justify-center items-center mb-8">
              <div className="text-center max-w-4xl">
                <div className="relative mx-auto mb-6">
                  <ImageWithFallback
                    src={equipo[currentIndex].photo}
                    alt={equipo[currentIndex].name}
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg border-4 border-teal-100"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {equipo[currentIndex].name}
                </h3>
                <p className="text-xl text-teal-600 font-medium mb-4">
                  {equipo[currentIndex].role}
                </p>
                
                
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center space-x-6 mb-6">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="border-teal-300 text-teal-600 hover:bg-teal-50 p-3"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex space-x-2">
                {equipo.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-teal-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ver miembro ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="border-teal-300 text-teal-600 hover:bg-teal-50 p-3"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Team Member Counter */}
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">
                {currentIndex + 1} de {equipo.length} integrantes
              </p>
              <div className="grid grid-cols-5 gap-2 max-w-md mx-auto">
                {equipo.map((member, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`p-2 text-xs rounded-lg transition-all duration-200 ${
                      index === currentIndex
                        ? 'bg-teal-100 text-teal-800 font-medium'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {member.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
