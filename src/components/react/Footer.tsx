
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark py-32 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-24">
          <div className="max-w-md">
            <div className="mb-10">
              <span className="text-5xl font-display font-black gold-gradient-text italic tracking-tighter">Xpress</span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Servicio de transporte VIP élite entre Villavicencio y Bogotá. Operamos con los más altos estándares de seguridad y legalidad en el territorio nacional.
            </p>
            <div className="flex gap-6">
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
            <div>
              <h4 className="text-white font-bold mb-10 uppercase tracking-[0.3em] text-xs">Servicios</h4>
              <ul className="space-y-6 text-slate-400 text-lg">
                <li>Traslados Ejecutivos</li>
                <li>Transporte Puerta a Puerta</li>
                <li>Servicios al Aeropuerto</li>
                <li>Viajes Privados</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-10 uppercase tracking-[0.3em] text-xs">Ubicaciones</h4>
              <ul className="space-y-6 text-slate-400 text-lg">
                <li className="flex items-center gap-4"><span className="material-symbols-outlined text-primary text-2xl">location_on</span> Villavicencio, Meta</li>
                <li className="flex items-center gap-4"><span className="material-symbols-outlined text-primary text-2xl">location_on</span> Bogotá, D.C.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-slate-500 text-sm">© 2024 Xpress VIP. Todos los derechos reservados. Vehículos reglamentarios de placa blanca.</p>
          <p className="text-slate-500 text-sm font-bold tracking-[0.5em] uppercase gold-gradient-text">Excelencia & Lujo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
