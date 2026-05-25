import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Si prega di completare i campi obbligatori (Nome, Email, Telefono)");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate real database or API post cleanly
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      message: ""
    });
    setIsSuccess(false);
  };

  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch font-sans text-slate-900">
      
      {/* Information Column (5 cols) */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
        <div className="space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">
            Fissiamo una sessione operativa
          </span>
          <h3 className="text-3xl font-light tracking-tight text-slate-900 leading-tight">
            Parliamo del tuo processo operativo
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed font-light">
            Insieme possiamo esaminare il flusso di contatti che ricevi attualmente dai social (Instagram e WhatsApp) e verificare se possiamo configurarvi un'automazione d'ingresso e CRM in pochi giorni lavorativi.
          </p>
        </div>

        {/* Core contact metadata with thin responsive lines */}
        <div className="space-y-6 py-6 border-y border-slate-100">
          <a 
            href="mailto:clientiq.co@gmail.com"
            className="flex items-center gap-4 text-slate-600 hover:text-slate-900 transition-colors group"
          >
            <div className="h-10 w-10 bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-slate-900 transition-colors">
              <Mail className="h-4 w-4 stroke-[1.25]" />
            </div>
            <div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Scrivici una email</div>
              <div className="text-sm font-medium">clientiq.co@gmail.com</div>
            </div>
          </a>

          <a 
            href="tel:+393317377528"
            className="flex items-center gap-4 text-slate-600 hover:text-slate-900 transition-colors group"
          >
            <div className="h-10 w-10 bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-slate-900 transition-colors">
              <Phone className="h-4 w-4 stroke-[1.25]" />
            </div>
            <div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Chiamaci direttamente</div>
              <div className="text-sm font-medium">+39 331 737 7528</div>
            </div>
          </a>

          <div className="flex items-center gap-4 text-slate-600">
            <div className="h-10 w-10 bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
              <MapPin className="h-4 w-4 stroke-[1.25]" />
            </div>
            <div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Sede Operativa</div>
              <div className="text-sm font-medium">Via dei Pioppi 3, Oderzo, Treviso (31046)</div>
            </div>
          </div>
        </div>

        <div className="text-[11px] text-slate-400 font-mono tracking-wide leading-relaxed uppercase">
          Nessuna iscrizione a newsletter. Riceverai esclusivamente una risposta tecnica di cortesia entro 24 ore lavorative.
        </div>
      </div>

      {/* Form Card (7 cols) */}
      <div className="lg:col-span-7 bg-white border border-slate-100 p-8 lg:p-10 relative overflow-hidden">
        
        {isSuccess ? (
          <div className="h-full flex flex-col justify-center items-center text-center py-10 space-y-6 animate-fade-in">
            <div className="h-14 w-14 bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900">
              <CheckCircle2 className="h-6 w-6 stroke-[1.25]" />
            </div>
            
            <div className="space-y-2">
              <h4 className="text-xl font-light text-slate-900">
                Richiesta inviata con successo
              </h4>
              <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed font-light">
                Grazie per aver contattato Clientiq. Abbiamo preso in carico la tua richiesta per <span className="font-semibold text-slate-800">{formData.company || "la tua attività"}</span>. Riceverai un'e-mail o una telefonata da noi a breve.
              </p>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 underline underline-offset-4 cursor-pointer"
              >
                Invia una nuova richiesta
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Nome */}
              <div className="space-y-2">
                <label htmlFor="name-input" className="block text-[10px] uppercase tracking-widest font-bold text-slate-400">
                  Nome e Cognome *
                </label>
                <input
                  id="name-input"
                  type="text"
                  required
                  placeholder="Es. Marco Rossi"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-sm px-4 py-3 border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors"
                />
              </div>

              {/* Azienda */}
              <div className="space-y-2">
                <label htmlFor="company-input" className="block text-[10px] uppercase tracking-widest font-bold text-slate-400">
                  Azienda / Attività Locale
                </label>
                <input
                  id="company-input"
                  type="text"
                  placeholder="Es. Ristorante del Corso"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full text-sm px-4 py-3 border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Telefono */}
              <div className="space-y-2">
                <label htmlFor="phone-input" className="block text-[10px] uppercase tracking-widest font-bold text-slate-400">
                  Numero di Telefono *
                </label>
                <input
                  id="phone-input"
                  type="tel"
                  required
                  placeholder="Es. 331 737 7528"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-sm px-4 py-3 border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors"
                />
              </div>

              {/* E-mail */}
              <div className="space-y-2">
                <label htmlFor="email-input" className="block text-[10px] uppercase tracking-widest font-bold text-slate-400">
                  Indirizzo E-mail *
                </label>
                <input
                  id="email-input"
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-sm px-4 py-3 border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors"
                />
              </div>
            </div>

            {/* Messaggio */}
            <div className="space-y-2">
              <label htmlFor="message-input" className="block text-[10px] uppercase tracking-widest font-bold text-slate-400">
                Messaggio / Richiesta
              </label>
              <textarea
                id="message-input"
                rows={4}
                placeholder="Spiegaci brevemente che canali utilizzi oggi o qual è la tua esigenza principale..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full text-sm px-4 py-3 border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors resize-none"
              />
            </div>

            {/* Submit button */}
            <button
              id="submit-form-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 px-6 text-[11px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="h-4 w-4 border-2 border-slate-400 border-t-transparent rounded-none animate-spin"></div>
                  Inviando...
                </>
              ) : (
                <>
                  <Send className="h-3.5 w-3.5" />
                  Invia richiesta
                </>
              )}
            </button>
          </form>
        )}
        
      </div>

    </div>
  );
}
