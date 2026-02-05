
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Andrés Rodríguez",
      role: "Ejecutivo Regional",
      content: "La puntualidad de Xpress VIP es impecable. Viajo dos veces por semana a Bogotá y siempre es una experiencia relajante y profesional.",
      rating: 5
    },
    {
      name: "Carolina Méndez",
      role: "Empresaria",
      content: "Excelente servicio puerta a puerta. Las camionetas Duster están siempre en perfecto estado y los conductores conocen la vía al Llano mejor que nadie.",
      rating: 5
    },
    {
      name: "Juan Sebastián López",
      role: "Consultor",
      content: "Seguridad y comodidad total. Poder trabajar en el trayecto con la tranquilidad de un vehículo de placa blanca reglamentario no tiene precio.",
      rating: 5
    }
  ];

  return (
    <section className="py-32 bg-accent-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Experiencias Reales</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white">Lo que dicen nuestros pasajeros</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-background-dark/50 p-10 rounded-[2rem] border border-white/5 relative group hover:border-primary/30 transition-all duration-500">
              <span className="material-symbols-outlined text-6xl text-primary/10 absolute top-8 right-8">format_quote</span>
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-primary text-sm font-fill">star</span>
                ))}
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">"{review.content}"</p>
              <div>
                <p className="text-white font-bold text-xl">{review.name}</p>
                <p className="text-primary text-xs uppercase tracking-widest font-bold">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
