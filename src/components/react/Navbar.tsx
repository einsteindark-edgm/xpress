import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-background-dark/90 backdrop-blur-2xl border-b border-white/5 py-3' : 'bg-transparent py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="group">
            <img
              alt="Xpress Gold Logo"
              className="h-14 md:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              src="/logo.png"
            />
          </a>
        </div>

        <div className="flex items-center">
          <a
            href="https://wa.me/573227070505?text=Hola%2C%20deseo%20realizar%20una%20reserva%20inmediata%20para%20un%20servicio%20de%20transporte%20VIP."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => (window as any).trackMetaEvent?.('Contact', { location: 'navbar' })}
            className="bg-primary hover:bg-white text-black px-8 py-3 rounded-full font-bold text-sm transition-all shadow-lg shadow-primary/20 transform hover:-translate-y-1 block text-center"
          >
            RESERVAR AHORA
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
