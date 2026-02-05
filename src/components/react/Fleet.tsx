
import React from 'react';

const Fleet: React.FC = () => {
  return (
    <section id="flota" className="py-48 bg-accent-dark overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-24">
          <div className="flex-1 relative">
            <div className="absolute -inset-20 bg-primary/10 blur-[120px] rounded-full opacity-30"></div>
            <div className="relative overflow-hidden rounded-[3rem] group">
              <img
                alt="Renault Logan"
                className="relative w-full h-auto object-cover shadow-[0_48px_100px_-12px_rgba(0,0,0,0.8)] border border-white/10 z-10 transition-transform duration-1000 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVhxrLw1NSU0wiljYfU8FpoCgGxKD5Bs2-xpan9w9qkPypLIhud89YV8H-zza7K2G3QH1p8XFcn3tgCum5gCZCy6TeE3suoSwAcHHKEukzdc2CvqLf91dM8bv__JG8Sjxs8v4L3Nwbj-UOQWQFo_UpPRQitwp23g8Ha9wqJQKr4N65wrOOgzVXS2MonuohFIjsR7JeN8LKyAyKDEJApx9yLaVr58ra922mPSm02IyKNWX3yiNhJM5CxuueOV0CwV3Tl1HLrAdnQ91D"
              />
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                <p className="text-white font-display text-2xl font-bold">Renault Logan VIP Edition</p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <span className="text-primary font-bold tracking-[0.5em] uppercase mb-6 block text-sm">Nuestra Flota</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 text-white leading-tight">
              Potencia y Confort: <br />
              <span className="text-primary italic">Renault Logan VIP</span>
            </h2>

            <p className="text-xl text-slate-400 mb-12 leading-relaxed font-light">
              Elevamos el estándar de su viaje. Nuestros vehículos de servicio público ofrecen la suavidad necesaria para la vía al Llano sin comprometer la elegancia y el espacio interior que usted merece.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
              {[
                { icon: 'airline_seat_recline_extra', title: 'Espacio Superior', desc: 'Asientos ergonómicos' },
                { icon: 'luggage', title: 'Baúl de Gran Capacidad', desc: 'Para equipaje voluminoso' },
                { icon: 'ac_unit', title: 'Climatización Dual', desc: 'Control de temperatura' },
                { icon: 'gpp_good', title: 'Seguridad Integral', desc: 'Estabilidad avanzada' }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-5 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                  <div className="text-primary p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-black transition-all">
                    <span className="material-symbols-outlined text-3xl">
                      {feature.icon}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">{feature.title}</p>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#reservar"
              className="inline-flex items-center gap-4 text-primary font-bold text-xl hover:gap-6 transition-all group"
            >
              SOLICITAR COTIZACIÓN
              <span className="material-symbols-outlined font-bold group-hover:translate-x-1 transition-transform">east</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
