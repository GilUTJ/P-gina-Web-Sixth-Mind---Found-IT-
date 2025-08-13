import { Navigation } from './components/Navigation';
import { EquipoSection } from './components/EquipoSection';
import { NosotrosSection } from './components/NosotrosSection';
import { ClienteSection } from './components/ClienteSection';
import { SolucionSection } from './components/SolucionSection';
import { CompetenciaSection } from './components/CompetenciaSection';
import { CostosSection } from './components/CostosSection';
import { ContactoSection } from './components/ContactoSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        id="hero" 
        className="min-h-screen bg-gradient-to-br from-slate-800 via-gray-800 to-teal-700 text-white flex items-center justify-center pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logos */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <img 
              src="/images/Logotipos/sixthMind.png" 
              alt="Sixth Mind Logo" 
              className="h-20 w-20 md:h-24 md:w-24 object-contain rounded-full bg-white/10 p-2"
            />
            <div className="w-px h-16 bg-white/30"></div>
            <img 
              src="/images/Logotipos/found-it.png" 
              alt="Found IT! Logo" 
              className="h-16 md:h-20 object-contain bg-white/10 rounded-lg px-4 py-2"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Sixth Mind
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-teal-200 animate-fade-in">
            Found IT!
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-200 animate-fade-in">
            Transformamos almacenes tradicionales en espacios inteligentes con tecnología IoT 
            y software responsivo para la gestión de inventarios en tiempo real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <a 
              href="#equipo"
              className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105"
            >
              Conoce más
            </a>
            <a 
              href="#contacto"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>

      {/* Section Separator - Hero to Equipo */}
      <div className="py-8 bg-gray-100">
        <div className="flex items-center justify-center">
          <div className="h-1 bg-gradient-to-r from-transparent via-teal-500 to-slate-600 w-full max-w-4xl"></div>
          <div className="mx-6 px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-full shadow-md">
            EQUIPO
          </div>
          <div className="h-1 bg-gradient-to-r from-slate-600 via-teal-500 to-transparent w-full max-w-4xl"></div>
        </div>
      </div>

      <EquipoSection />
      
      {/* Section Separator - Equipo to Nosotros */}
      <div className="py-8 bg-gray-50">
        <div className="flex items-center justify-center">
          <div className="h-1 bg-gradient-to-r from-transparent via-slate-600 to-gray-500 w-full max-w-4xl"></div>
          <div className="mx-6 px-4 py-2 bg-slate-600 text-white text-sm font-semibold rounded-full shadow-md">
            NOSOTROS
          </div>
          <div className="h-1 bg-gradient-to-r from-gray-500 via-slate-600 to-transparent w-full max-w-4xl"></div>
        </div>
      </div>

      <NosotrosSection />
      
      {/* Section Separator - Nosotros to Cliente */}
      <div className="py-8 bg-gray-100">
        <div className="flex items-center justify-center">
          <div className="h-1 bg-gradient-to-r from-transparent via-gray-500 to-teal-500 w-full max-w-4xl"></div>
          <div className="mx-6 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-md">
            CLIENTE
          </div>
          <div className="h-1 bg-gradient-to-r from-teal-500 via-gray-500 to-transparent w-full max-w-4xl"></div>
        </div>
      </div>
      
      <ClienteSection />
      
      {/* Section Separator - Cliente to Solución */}
      <div className="py-8 bg-gray-50">
        <div className="flex items-center justify-center">
          <div className="h-1 bg-gradient-to-r from-transparent via-teal-500 to-green-500 w-full max-w-4xl"></div>
          <div className="mx-6 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-full shadow-md">
            SOLUCIÓN
          </div>
          <div className="h-1 bg-gradient-to-r from-green-500 via-teal-500 to-transparent w-full max-w-4xl"></div>
        </div>
      </div>
      
      <SolucionSection />
      
      
      
      {/* Section Separator - Competencia to Costos */}
      <div className="py-8 bg-gray-50">
        <div className="flex items-center justify-center">
          <div className="h-1 bg-gradient-to-r from-transparent via-slate-600 to-gray-700 w-full max-w-4xl"></div>
          <div className="mx-6 px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-full shadow-md">
            COSTOS
          </div>
          <div className="h-1 bg-gradient-to-r from-gray-700 via-slate-600 to-transparent w-full max-w-4xl"></div>
        </div>
      </div>
      
      <CostosSection />

      {/* Section Separator - Solución to Competencia */}
      <div className="py-8 bg-gray-100">
        <div className="flex items-center justify-center">
          <div className="h-1 bg-gradient-to-r from-transparent via-green-500 to-slate-600 w-full max-w-4xl"></div>
          <div className="mx-6 px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full shadow-md">
            COMPETENCIA
          </div>
          <div className="h-1 bg-gradient-to-r from-slate-600 via-green-500 to-transparent w-full max-w-4xl"></div>
        </div>
      </div>
      
      <CompetenciaSection />
      
      {/* Section Separator - Costos to Contacto */}
      <div className="py-8 bg-gray-100">
        <div className="flex items-center justify-center">
          <div className="h-1 bg-gradient-to-r from-transparent via-gray-700 to-teal-500 w-full max-w-4xl"></div>
          <div className="mx-6 px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-full shadow-md">
            CONTACTO
          </div>
          <div className="h-1 bg-gradient-to-r from-teal-500 via-gray-700 to-transparent w-full max-w-4xl"></div>
        </div>
      </div>
      
      <ContactoSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <img 
              src="/images/Logotipos/sixthMind.png" 
              alt="Sixth Mind" 
              className="h-8 w-8 object-contain bg-white/10 rounded-full p-1"
            />
            <div className="text-xl font-bold text-gray-200">Sixth Mind</div>
          </div>
          <p className="text-gray-400 mb-4">
            Desarrollo de software innovador para la transformación digital de almacenes
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="mailto:contacto@sixthmind.mx" className="hover:text-teal-400 transition-colors">
              contacto@sixthmind.mx
            </a>
            <span>|</span>
            <a href="https://www.sixthmind.mx" className="hover:text-teal-400 transition-colors">
              www.sixthmind.mx
            </a>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            © 2025 Sixth Mind. Guadalajara, Jalisco, México.
          </div>
        </div>
      </footer>
    </div>
  );
}