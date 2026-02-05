
import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-32 bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <img 
            alt="Xpress Gold Icon" 
            className="h-32 mx-auto mb-12 transition-transform hover:scale-110" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_zejKsZNXfxaVZZQGuakxVrULR8_Az7VzdWo-CU_P5VO0WzGfA5icE_hvqtxMP2t67sYwl9CCxDG8I9y4GHmNLZS8ezaTsvX66C5RfFRRtjg_uTSdN1_PC5DzwrNtKyVyrIJd9BFDjHfGViNqlpHLBKuYPrH4s6Vd8VOLbQX5QCapyrgTk2wMkYLTu7jBvNHymE1S9FZ0Ck21JFMt1odUU-HhvLNg-EbQqRVANgQw9Ik9KzkpT01-7mYl2DYGnmuWFAh0GxG_cWIk" 
          />
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white">Estándares de Oro</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-10 rounded-full"></div>
          <p className="text-slate-400 max-w-3xl mx-auto text-xl font-light leading-relaxed">
            Redefinimos el transporte intermunicipal con un enfoque obsesivo en la puntualidad, la seguridad y el confort de nuestros pasajeros más exigentes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {[
            {
              icon: 'distance',
              title: 'Cobertura Total',
              desc: 'Sin trasbordos ni esperas. Lo recogemos en la comodidad de su hogar u oficina y lo llevamos a su destino exacto.'
            },
            {
              icon: 'verified_user',
              title: 'Seguridad Certificada',
              desc: 'Vehículos con mantenimientos preventivos rigurosos y conductores con amplia trayectoria en la vía al Llano.'
            },
            {
              icon: 'workspace_premium',
              title: 'Experiencia Premium',
              desc: 'Atención personalizada, vehículos impecables y un ambiente ejecutivo diseñado para el descanso o el trabajo.'
            }
          ].map((service, idx) => (
            <div key={idx} className="group relative p-12 rounded-[2.5rem] border border-white/5 hover:border-primary/20 bg-accent-dark transition-all duration-500 hover:-translate-y-2">
              <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-500">
                <span className="material-symbols-outlined text-primary group-hover:text-black text-5xl">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-6 text-white">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
