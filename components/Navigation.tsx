import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const navItems = [
    { href: '#hero', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#cliente', label: 'Producto' },
    { href: '#solucion', label: 'Solución' },
    { href: '#costos', label: 'Costos' },
    { href: '#competencia', label: 'Comparación' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b shadow-sm transition-all duration-500
        ${isAtTop 
          ? 'bg-white/95 backdrop-blur-sm border-gray-200' 
          : 'bg-gradient-to-r from-slate-800 via-cyan-800 to-teal-600 border-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/images/Logotipos/sixthMind.png" 
              alt="Sixth Mind" 
              className="h-12 w-13 object-contain rounded-full p5"
            />
            <div className={`text-xl font-bold ${isAtTop ? 'text-gray-800' : 'text-white'}`}>
              Sixth Mind
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm transition-colors relative group ${
                    isAtTop
                      ? 'text-gray-700 hover:text-teal-600'
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                      isAtTop ? 'bg-teal-600' : 'bg-white'
                    } transition-all duration-300 group-hover:w-full`}
                  ></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`hover:bg-teal-50 ${
                isAtTop
                  ? 'hover:text-teal-600 text-gray-700'
                  : 'hover:text-gray-200 text-white'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div
            className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t shadow-lg ${
              isAtTop ? 'bg-white' : 'bg-gradient-to-r from-slate-800 via-cyan-800 to-teal-600'
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`block px-3 py-2 text-base rounded-md transition-colors ${
                  isAtTop
                    ? 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
                    : 'text-white hover:text-gray-200 hover:bg-teal-700'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
