
import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    route: 'vvc-bog',
    date: '',
    time: '',
    passengers: '1',
    type: 'privado'
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <section id="reservar" className="py-32 bg-background-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Gestión de Traslados</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Reserve su Experiencia</h2>
          <p className="text-slate-400">Complete los detalles de su viaje para una cotización inmediata.</p>
        </div>

        <div className="bg-accent-dark/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
          {/* Progress Bar */}
          <div className="flex border-b border-white/5 h-1.5">
            <div className={`transition-all duration-500 bg-primary h-full ${step === 1 ? 'w-1/3' : step === 2 ? 'w-2/3' : 'w-full'}`}></div>
          </div>

          <div className="p-8 md:p-12">
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-display font-bold text-white mb-8">1. Detalles del Trayecto</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Ruta</label>
                    <select
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary outline-none transition-all"
                      value={formData.route}
                      onChange={(e) => setFormData({ ...formData, route: e.target.value })}
                    >
                      <option value="vvc-bog" className="bg-accent-dark">Villavicencio → Bogotá</option>
                      <option value="bog-vvc" className="bg-accent-dark">Bogotá → Villavicencio</option>
                      <option value="airport" className="bg-accent-dark">Traslado Aeropuerto El Dorado</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Tipo de Servicio</label>
                    <div className="flex gap-4">
                      <button
                        onClick={() => setFormData({ ...formData, type: 'privado' })}
                        className={`flex-1 py-4 rounded-2xl border transition-all ${formData.type === 'privado' ? 'border-primary bg-primary/10 text-primary' : 'border-white/10 text-slate-400'}`}
                      >
                        Privado
                      </button>
                      <button
                        onClick={() => setFormData({ ...formData, type: 'compartido' })}
                        className={`flex-1 py-4 rounded-2xl border transition-all ${formData.type === 'compartido' ? 'border-primary bg-primary/10 text-primary' : 'border-white/10 text-slate-400'}`}
                      >
                        Compartido
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-display font-bold text-white mb-8">2. Fecha y Horario</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Fecha del Viaje</label>
                    <input
                      type="date"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary outline-none"
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Hora Preferida</label>
                    <input
                      type="time"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary outline-none"
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-display font-bold text-white mb-8">3. Confirmación</h3>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-4 mb-8">
                  <div className="flex justify-between border-b border-white/5 pb-4">
                    <span className="text-slate-400">Ruta:</span>
                    <span className="text-white font-bold">{formData.route === 'vvc-bog' ? 'Villavicencio a Bogotá' : 'Bogotá a Villavicencio'}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-4">
                    <span className="text-slate-400">Servicio:</span>
                    <span className="text-primary font-bold uppercase">{formData.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Fecha:</span>
                    <span className="text-white font-bold">{formData.date || 'Pendiente'} - {formData.time || 'Pendiente'}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 text-center mb-8 italic">
                  *Al finalizar, un asesor VIP confirmará la disponibilidad y el punto exacto de recogida.
                </p>
              </div>
            )}

            <div className="mt-12 flex justify-between gap-6">
              {step > 1 ? (
                <button
                  onClick={prevStep}
                  className="flex-1 py-5 border border-white/10 rounded-full font-bold text-slate-300 hover:bg-white/5 transition-all"
                >
                  Regresar
                </button>
              ) : (
                <div className="flex-1"></div>
              )}

              {step < 3 ? (
                <button
                  onClick={nextStep}
                  className="flex-1 py-5 bg-primary text-black rounded-full font-extrabold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-xl shadow-primary/20"
                >
                  Continuar
                  <span className="material-symbols-outlined font-bold">arrow_forward</span>
                </button>
              ) : (
                <button
                  onClick={() => window.open(`https://wa.me/573112376527?text=Hola,%20quisiera%20reservar%20un%20viaje%20${formData.type}%20en%20la%20ruta%20${formData.route}%20para%20el%20día%20${formData.date}`, '_blank')}
                  className="flex-1 py-5 bg-whatsapp text-white rounded-full font-extrabold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-xl shadow-whatsapp/20"
                >
                  Finalizar en WhatsApp
                  <span className="material-symbols-outlined font-bold">check_circle</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
