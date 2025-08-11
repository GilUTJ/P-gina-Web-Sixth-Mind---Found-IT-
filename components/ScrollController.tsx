import { useEffect, useState, useRef } from 'react';

interface ScrollControllerProps {
  children: React.ReactNode;
  sectionIds: string[];
}

export function ScrollController({ children, sectionIds }: ScrollControllerProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    let lastScrollTime = 0;
    const scrollCooldown = 1000; // 1 segundo de cooldown entre scrolls

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const now = Date.now();
      if (now - lastScrollTime < scrollCooldown || isScrolling) {
        return;
      }

      lastScrollTime = now;
      setIsScrolling(true);

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = Math.max(0, Math.min(sectionIds.length - 1, currentSection + direction));

      if (nextSection !== currentSection) {
        setCurrentSection(nextSection);
        scrollToSection(nextSection);
      } else {
        setIsScrolling(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      let nextSection = currentSection;
      
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          nextSection = Math.min(sectionIds.length - 1, currentSection + 1);
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          nextSection = Math.max(0, currentSection - 1);
          break;
        case 'Home':
          e.preventDefault();
          nextSection = 0;
          break;
        case 'End':
          e.preventDefault();
          nextSection = sectionIds.length - 1;
          break;
      }

      if (nextSection !== currentSection) {
        setIsScrolling(true);
        setCurrentSection(nextSection);
        scrollToSection(nextSection);
      }
    };

    const scrollToSection = (sectionIndex: number) => {
      const sectionId = sectionIds[sectionIndex];
      const element = document.getElementById(sectionId);
      
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });

        // Clear existing timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        // Set timeout to reset scrolling state
        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    };

    // Touch handling for mobile
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      
      if (Math.abs(deltaY) > 50) { // Minimum swipe distance
        e.preventDefault();
        
        const direction = deltaY > 0 ? 1 : -1;
        const nextSection = Math.max(0, Math.min(sectionIds.length - 1, currentSection + direction));

        if (nextSection !== currentSection) {
          setIsScrolling(true);
          setCurrentSection(nextSection);
          scrollToSection(nextSection);
        }
        
        touchStartY = touchEndY;
      }
    };

    // Add event listeners
    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Prevent default scroll behavior
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.body.style.overflow = 'auto';
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [currentSection, isScrolling, sectionIds]);

  // Navigation handler for when user clicks navigation links
  useEffect(() => {
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const sectionId = target.hash.substring(1);
        const sectionIndex = sectionIds.findIndex(id => id === sectionId);
        
        if (sectionIndex !== -1 && sectionIndex !== currentSection) {
          setIsScrolling(true);
          setCurrentSection(sectionIndex);
          
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });

            setTimeout(() => {
              setIsScrolling(false);
            }, 1000);
          }
        }
      }
    };

    // Add click listeners to all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, [currentSection, sectionIds]);

  return (
    <div className="scroll-controlled">
      {children}
      
      {/* Section indicator */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-2">
        {sectionIds.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isScrolling && index !== currentSection) {
                setIsScrolling(true);
                setCurrentSection(index);
                const element = document.getElementById(sectionIds[index]);
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                  setTimeout(() => setIsScrolling(false), 1000);
                }
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSection 
                ? 'bg-teal-600 scale-125' 
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll instruction */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 text-center">
        <div className="bg-black/70 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm">
          {currentSection === 0 && (
            <div className="flex items-center space-x-2">
              <span>Desplázate hacia abajo</span>
              <div className="w-1 h-6 bg-white rounded animate-bounce"></div>
            </div>
          )}
          {currentSection > 0 && currentSection < sectionIds.length - 1 && (
            <span>Usa scroll o ↑↓ para navegar</span>
          )}
          {currentSection === sectionIds.length - 1 && (
            <span>Último slide - Usa ↑ para regresar</span>
          )}
        </div>
      </div>
    </div>
  );
}