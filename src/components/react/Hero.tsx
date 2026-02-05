
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Luxury Renault Logan"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJL3Li9Q2GTQ3brwnPc9whRGLDKnP3o4mNpVTd1kcRJCrtFCibjKZtGt7RuCKrrHCJIVS--gRt0RG0h3yAa7H8nkfRxyTjp5x-H4FrFtNf5dmGr2csbYLIgrhfgtbvX-6exQ6c04R_gEBG4bnx6RXAc5f6SXat_mylD0OstnpU7wzVL1lHAMjr0HDbcPl51ONct1FmL4rnFG5Q-cmKPD8sQARhBJnV8FKgcQDL1yxS4FJgEgdGF1nzvbScNM0po1FcrB9U6y5LOZpQ"
        />
        <div className="absolute inset-0 hero-overlay"></div>

        {/* New Decorative Logo Watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full flex items-center justify-center overflow-hidden opacity-10 pointer-events-none">
          <div className="text-[20rem] font-display font-black gold-gradient-text italic opacity-20 transform rotate-12 select-none">X</div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8 animate-in slide-in-from-left duration-700">
            <span className="h-[1px] w-12 bg-primary"></span>
            <span className="text-primary font-bold text-xs md:text-sm tracking-[0.4em] uppercase">Elegancia & Puntualidad</span>
          </div>

          <h1 className="text-6xl md:text-[9rem] font-display font-bold text-white leading-[0.9] mb-10 animate-in slide-in-from-bottom-8 duration-1000">
            Viaje con <br />
            <span className="gold-gradient-text italic">Exclusividad</span>
          </h1>

          <p className="text-xl md:text-3xl text-slate-300 mb-14 leading-relaxed font-light max-w-2xl animate-in fade-in duration-1000 delay-300">
            Servicio VIP puerta a puerta entre <span className="text-white font-medium">Villavicencio y Bogotá</span>.
            Su confort es nuestra prioridad en cada trayecto.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-in slide-in-from-bottom-4 duration-700 delay-500">
            <a
              href="#reservar"
              className="bg-primary text-black font-extrabold px-12 py-6 rounded-full flex items-center justify-center gap-4 hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl shadow-primary/30 group"
            >
              COTIZAR VIAJE
              <span className="material-symbols-outlined font-bold group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
            <a
              href="#flota"
              className="bg-white/5 backdrop-blur-md text-white border border-white/10 font-bold px-12 py-6 rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
            >
              VER FLOTA
            </a>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="absolute bottom-12 left-0 w-full px-6 z-20 hidden md:block">
        <div className="max-w-7xl mx-auto flex gap-12 text-slate-500 font-bold uppercase tracking-widest text-[10px]">
          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Traslados Privados</div>
          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Placa Blanca</div>
          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Seguro de Viaje</div>
          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Puerta a Puerta</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
