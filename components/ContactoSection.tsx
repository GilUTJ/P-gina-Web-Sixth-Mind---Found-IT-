import { Mail, Globe, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function ContactoSection() {
  return (
    <section id="contacto" className="bg-white py-16 px-4 md:px-12 lg:px-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contáctanos</h2>
        <p className="text-gray-600 mb-8">
          ¿Te interesa llevar tu almacén al siguiente nivel? En Sixth Mind te ayudamos a digitalizar tus 
          procesos con tecnología IoT y software a la medida. Escríbenos y responderemos en menos de 
          24 horas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-blue-600 mr-3" />
              <div>
                <strong>Correo:</strong>{' '}
                <a href="mailto:contacto@sixthmind.mx" className="text-blue-600 hover:underline">
                  contacto@sixthmind.mx
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <Globe className="h-5 w-5 text-blue-600 mr-3" />
              <div>
                <strong>Sitio web:</strong>{' '}
                <a href="https://www.sixthmind.mx" target="_blank" className="text-blue-600 hover:underline">
                  www.sixthmind.mx
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-blue-600 mr-3" />
              <div>
                <strong>Teléfono / WhatsApp:</strong> (33) 1234 5678
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-blue-600 mr-3" />
              <div>
                <strong>Ubicación:</strong> Guadalajara, Jalisco, México
              </div>
            </div>
            
            <div className="flex items-start mt-6">
              <MessageCircle className="h-5 w-5 text-blue-600 mr-3 mt-1" />
              <div>
                <strong>¿Necesitas una demo o cotización personalizada?</strong> Completa el 
                formulario y nos pondremos en contacto contigo.
              </div>
            </div>
          </div>
          
          {/* Formulario */}
          <form action="#" method="POST" className="space-y-6 bg-gray-50 p-6 rounded-xl shadow-md">
            <div>
              <Label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                Nombre completo
              </Label>
              <Input 
                type="text" 
                id="nombre" 
                name="nombre" 
                required 
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
              />
            </div>
            
            <div>
              <Label htmlFor="correo" className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </Label>
              <Input 
                type="email" 
                id="correo" 
                name="correo" 
                required 
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
              />
            </div>
            
            <div>
              <Label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                Teléfono (opcional)
              </Label>
              <Input 
                type="tel" 
                id="telefono" 
                name="telefono" 
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
              />
            </div>
            
            <div>
              <Label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                Mensaje
              </Label>
              <Textarea 
                id="mensaje" 
                name="mensaje" 
                rows={4} 
                required 
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                placeholder="Cuéntanos qué necesitas..."
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Enviar mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}