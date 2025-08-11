import { useEffect, useState } from 'react';

export function SectionIndicator() {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'cliente', label: 'Cliente' },
    { id: 'solucion', label: 'Solución' },
    { id: 'competencia', label: 'Comparación' },
    { id: 'costos', label: 'Costos' },
    { id: 'contacto', label: 'Contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
      {sections.map((section) => (
        <div key={section.id} className="group relative">
          <button
            onClick={() => scrollToSection(section.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-teal-600 scale-125 shadow-lg'
                : 'bg-gray-400 hover:bg-teal-400 hover:scale-110'
            }`}
            aria-label={`Go to ${section.label}`}
          />
          
          {/* Tooltip */}
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            {section.label}
          </div>
        </div>
      ))}
    </div>
  );
}