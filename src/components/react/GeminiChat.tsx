
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: '¡Hola! Soy tu asistente VIP. ¿En qué puedo ayudarte con tu viaje entre Villavicencio y Bogotá?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `Eres el Asistente VIP de Xpress VIP, una empresa de transporte premium entre Bogotá y Villavicencio.
          Tus características principales son:
          - Eres extremadamente cortés, profesional y servicial.
          - Ofreces servicios puerta a puerta en SUVs de placa blanca (legales).
          - La flota principal es Renault Duster SUV.
          - Los viajes son privados o compartidos (pero siempre de alta gama).
          - Destaca la seguridad (pólizas contractuales y extracontractuales).
          - Responde en español de forma concisa pero elegante.
          - Si el usuario quiere reservar, invítalo a usar el botón de WhatsApp o llamar.`,
        },
      });

      const aiText = response.text || "Lo siento, tuve un problema procesando tu solicitud. Por favor intenta de nuevo.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "Lo siento, mis sistemas están en mantenimiento. Por favor contacta a un asesor humano vía WhatsApp." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="relative">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-accent-dark border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-primary p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl">smart_toy</span>
              </div>
              <div>
                <h4 className="text-black font-bold text-sm">Asistente Xpress VIP</h4>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-black/70 font-bold uppercase tracking-widest">En línea</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-black/50 hover:text-black">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/20">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-primary text-black font-medium' 
                    : 'bg-white/5 border border-white/10 text-slate-300'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex gap-1">
                  <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-accent-dark">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pregunta sobre rutas, precios o seguridad..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-primary text-slate-200 placeholder:text-slate-600"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="w-12 h-12 bg-primary text-black rounded-full flex items-center justify-center disabled:opacity-50 hover:scale-105 transition-transform"
              >
                <span className="material-symbols-outlined font-bold">send</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-black w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 group relative"
      >
        <span className="material-symbols-outlined text-3xl font-bold">
          {isOpen ? 'close' : 'smart_toy'}
        </span>
        <span className="absolute right-full mr-6 bg-white text-black text-sm font-bold px-5 py-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-2xl border-l-4 border-primary">
          Asistente Inteligente
        </span>
      </button>
    </div>
  );
};

export default GeminiChat;
