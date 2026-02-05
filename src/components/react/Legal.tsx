
import React from 'react';

const Legal: React.FC = () => {
  return (
    <section id="legalidad" className="py-48 bg-accent-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="flex-1">
            <div className="inline-flex items-center gap-4 mb-8 bg-primary/10 px-6 py-2 rounded-full border border-primary/20">
              <span className="material-symbols-outlined text-primary font-bold">verified</span>
              <span className="text-primary font-bold text-xs tracking-widest uppercase">Garantía de Confianza</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white leading-tight">
              Servicio <span className="gold-gradient-text">100% Legal</span>
            </h2>

            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
              Su tranquilidad es nuestro pilar fundamental. Operamos bajo el marco legal colombiano, garantizando un viaje seguro, respaldado y profesional en cada kilómetro.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: 'gavel',
                  title: 'Permisos Nacionales',
                  desc: 'Contamos con todos los permisos de operación expedidos por el Ministerio de Transporte para el servicio público terrestre.'
                },
                {
                  icon: 'policy',
                  title: 'Pólizas de Seguro Integrales',
                  desc: 'Cobertura total con SOAT vigente y pólizas de Responsabilidad Civil Contractual y Extracontractual para su total protección.'
                },
                {
                  icon: 'directions_car',
                  title: 'Vehículos de Placa Blanca',
                  desc: 'Nuestra flota está compuesta exclusivamente por camionetas de servicio público reglamentario, cumpliendo con la normativa vigente.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-300 group">
                  <div className="bg-primary/20 p-4 rounded-2xl group-hover:bg-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary group-hover:text-black text-3xl">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-2xl mb-2">{item.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-transparent blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-background-dark p-12 md:p-20 rounded-[3rem] border border-white/10 text-center">
                <span className="material-symbols-outlined text-8xl md:text-[120px] text-primary mb-12 block font-thin">shield</span>
                <img
                  alt="Xpress Logo Decorative"
                  className="h-14 mx-auto mb-10 opacity-50 grayscale brightness-200"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_zejKsZNXfxaVZZQGuakxVrULR8_Az7VzdWo-CU_P5VO0WzGfA5icE_hvqtxMP2t67sYwl9CCxDG8I9y4GHmNLZS8ezaTsvX66C5RfFRRtjg_uTSdN1_PC5DzwrNtKyVyrIJd9BFDjHfGViNqlpHLBKuYPrH4s6Vd8VOLbQX5QCapyrgTk2wMkYLTu7jBvNHymE1S9FZ0Ck21JFMt1odUU-HhvLNg-EbQqRVANgQw9Ik9KzkpT01-7mYl2DYGnmuWFAh0GxG_cWIk"
                />
                <h3 className="text-4xl font-display font-bold text-white mb-8">Compromiso Xpress</h3>
                <p className="text-slate-400 text-lg mb-10 italic leading-relaxed">
                  "Operamos bajo los más altos estándares éticos y legales, asegurando que su única preocupación sea disfrutar del paisaje entre Villavicencio y Bogotá."
                </p>
                <div className="flex justify-center gap-4">
                  <div className="w-16 h-1.5 bg-primary/20 rounded-full"></div>
                  <div className="w-16 h-1.5 bg-primary rounded-full"></div>
                  <div className="w-16 h-1.5 bg-primary/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;
