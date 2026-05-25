import { useState } from "react";
import { 
  Instagram, 
  MessageSquare, 
  Database, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Check, 
  Menu, 
  X, 
  Layers, 
  Workflow, 
  SlidersHorizontal,
  BellRing,
  CheckCircle,
  HelpCircle,
  ChevronRight,
  TrendingUp,
  LineChart,
  ShieldCheck,
  ChevronDown
} from "lucide-react";
import InteractiveSystemDemo from "./components/InteractiveSystemDemo";
import ContactForm from "./components/ContactForm";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const navigation = [
    { name: "La Sfida", href: "#problem" },
    { name: "I Nostri Servizi", href: "#services" },
    { name: "Demo Interattiva", href: "#demo" },
    { name: "Il Nostro Metodo", href: "#method" },
    { name: "Pacchetto Start", href: "#pricing" },
    { name: "Contatti", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const services = [
    {
      title: "Automazioni Instagram DM",
      description: "Configurazione di flussi automatici per rispondere alle richieste, raccogliere dati utili e guidare il cliente verso il contatto con l’azienda.",
      badge: "IG Direct",
      icon: Instagram
    },
    {
      title: "CRM personalizzato",
      description: "Creazione di una dashboard semplice dove vengono salvati nome, telefono, servizio richiesto, stato del contatto e prossima azione.",
      badge: "Database",
      icon: Database
    },
    {
      title: "Integrazioni software",
      description: "Collegamento tra strumenti come Instagram, Manychat, Make, Google Sheets, Gmail e altri software utili alla gestione operativa.",
      badge: "API & Webhook",
      icon: Workflow
    },
    {
      title: "Notifiche automatiche",
      description: "Invio automatico di notifiche via email o altri canali quando entra una nuova richiesta, così il titolare o lo staff possono intervenire rapidamente.",
      badge: "Notifica Istantanea",
      icon: BellRing
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Analisi del processo attuale",
      description: "Studiamo come l’azienda riceve e gestisce oggi le richieste dei clienti per individuare colli di bottiglia e dispersioni."
    },
    {
      step: "02",
      title: "Configurazione del sistema",
      description: "Creiamo automazioni personalizzate, CRM su Google Sheets o altre piattaforme e integrazioni in base ai tuoi servizi e alle esigenze operative."
    },
    {
      step: "03",
      title: "Test e consegna guida",
      description: "Testiamo approfonditamente ogni flusso, correggiamo eventuali errori ed elaboriamo una guida semplice e operativa per il tuo staff."
    },
    {
      step: "04",
      title: "Supporto e ottimizzazione",
      description: "Monitoriamo l’efficienza del sistema in tempo reale e lo aggiorniamo nel tempo al variare dei tuoi servizi o delle tue promozioni."
    }
  ];

  const coreValues = [
    {
      title: "Processo più ordinato",
      description: "Ogni richiesta viene raccolta, salvata e resa facilmente consultabile in tempo reale.",
      icon: ShieldCheck
    },
    {
      title: "Meno dispersione",
      description: "I dati dei clienti non restano sparsi tra chat, messaggi disordinati e note cartacee manuali.",
      icon: SlidersHorizontal
    },
    {
      title: "Più controllo operativo",
      description: "Il titolare e lo staff sanno con precisione chi ha scritto, cosa ha richiesto e quale azione fare dopo.",
      icon: LineChart
    }
  ];

  const faqs = [
    {
      q: "L'automazione sostituisce le risposte umane con i clienti?",
      a: "Assolutamente no. L'automazione cura solo lo screening iniziale e la raccolta ordinata dei dati (Nome, Telefono, Esigenza). Il contatto e la trattativa restano 100% in mano al tuo staff, che interviene conoscendo già le informazioni chiave del lead."
    },
    {
      q: "Dovrò acquistare costosi software mensili?",
      a: "Utilizziamo strumenti estremamente accessibili del settore (come Manychat, Make e Google Sheets). I costi infrastrutturali sono ridotti al minimo assoluto, spesso con piani di partenza gratuiti o da pochi euro al mese."
    },
    {
      q: "In quanto tempo viene configurato il sistema Start?",
      a: "Dall'analisi iniziale alla consegna dei test completati e della guida operativa impieghiamo solitamente tra i 5 e i 10 giorni lavorativi."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      
      {/* Elegantly styled minimal navigation header bar */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="h-6 w-6 bg-slate-900 flex items-center justify-center text-white font-mono text-xs font-semibold tracking-tighter">
              C_
            </div>
            <span className="font-display font-bold text-xl tracking-tighter uppercase text-slate-900">
              Clientiq
            </span>
          </div>
 
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-[11px] font-semibold tracking-widest uppercase text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </nav>
 
          {/* CTA Header Actions */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="mailto:clientiq.co@gmail.com"
              className="text-[11px] font-semibold tracking-widest uppercase text-slate-400 hover:text-slate-900 transition-colors"
            >
              clientiq.co@gmail.com
            </a>
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold uppercase tracking-widest px-5 py-2.5 transition-colors cursor-pointer"
            >
              Richiedi Demo
            </button>
          </div>

          {/* Mobile hamburger menu trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Menu di navigazione"
            >
              {mobileMenuOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-6 py-6 space-y-4 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-[11px] font-semibold tracking-widest uppercase text-slate-500 hover:text-slate-900 py-1"
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a 
                href="mailto:clientiq.co@gmail.com"
                className="text-[11px] font-semibold tracking-widest uppercase text-slate-400"
              >
                clientiq.co@gmail.com
              </a>
              <button
                onClick={() => scrollToSection("#contact")}
                className="w-full text-center bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold uppercase tracking-widest py-3 transition-colors"
              >
                Inizia Ora
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Areas */}
      <main>
        
        {/* SECTION 1: HERO SECTION */}
        <section className="relative pt-24 pb-32 md:pt-36 md:pb-44 overflow-hidden bg-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-6 text-center space-y-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-2 block">
              Consulting & Automation
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-slate-900 max-w-4xl mx-auto">
              Automazioni digitali per gestire meglio le richieste dei tuoi clienti
            </h1>
            
            <p className="text-base sm:text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
              Clientiq configura sistemi digitali, CRM e integrazioni software per aiutare aziende e attività locali a raccogliere, organizzare e gestire le richieste provenienti dai canali social.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection("#demo")}
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold uppercase tracking-widest px-8 py-4 transition-colors cursor-pointer"
              >
                Richiedi una demo
              </button>
              
              <button
                onClick={() => scrollToSection("#services")}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-[11px] font-bold uppercase tracking-widest px-8 py-4 transition-colors cursor-pointer"
              >
                Scopri i servizi
              </button>
            </div>
          </div>

          {/* Minimalist abstract representation of software integrations below Hero */}
          <div className="max-w-4xl mx-auto px-6 mt-20 text-center">
            <div className="py-4 px-6 border border-slate-100 bg-slate-50/50 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Integrazioni stabili:</span>
              <div className="flex items-center gap-2 text-xs text-slate-600 font-medium tracking-tight">
                <Instagram className="h-4 w-4 text-slate-400 stroke-[1.25]" />
                Instagram DM
              </div>
              <div className="h-1.5 w-1.5 rounded-full bg-slate-250 bg-slate-200"></div>
              <div className="flex items-center gap-2 text-xs text-slate-600 font-medium tracking-tight">
                <MessageSquare className="h-4 w-4 text-slate-400 stroke-[1.25]" />
                WhatsApp
              </div>
              <div className="h-1.5 w-1.5 rounded-full bg-slate-200"></div>
              <div className="flex items-center gap-2 text-xs text-slate-600 font-medium tracking-tight">
                <Database className="h-4 w-4 text-slate-400 stroke-[1.25]" />
                Google Sheets
              </div>
              <div className="h-1.5 w-1.5 rounded-full bg-slate-200"></div>
              <div className="flex items-center gap-2 text-xs text-slate-600 font-medium tracking-tight">
                <Workflow className="h-4 w-4 text-slate-400 stroke-[1.25]" />
                Email / Make
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 2 & 3: PROBLEMA & SOLUZIONE (SIDE-BY-SIDE HIGHLIGHT) */}
        <section id="problem" className="py-24 sm:py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
            
            {/* The Bug (Problem) */}
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-400 block">
                La Sfida Operativa
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900 leading-[1.25]">
                Molte richieste si perdono perché manca un sistema
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Ogni giorno aziende e attività locali ricevono messaggi, richieste di informazioni e contatti da Instagram, WhatsApp e altri canali digitali. Senza un processo chiaro, molte conversazioni restano disordinate, i dati non vengono salvati correttamente e lo staff non sa sempre chi contattare, cosa è stato richiesto o quale azione fare dopo.
              </p>
              <div className="p-6 bg-red-50/30 rounded-none border border-red-100/40 text-xs text-red-900/80 space-y-2.5 font-sans">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400"></span>
                  <span>Clienti ignorati o risposte tardive</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400"></span>
                  <span>Recapiti telefonici persi a fine turno</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400"></span>
                  <span>Nessuna memoria storica delle richieste</span>
                </div>
              </div>
            </div>

            {/* The Cure (Solution) */}
            <div className="space-y-6 md:mt-0 mt-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">
                La Soluzione Clientiq
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900 leading-[1.25]">
                Clientiq trasforma le richieste in un processo ordinato
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Installiamo automazioni digitali che raccolgono le informazioni principali del cliente, salvano i dati in un CRM e notificano il titolare o lo staff. In questo modo ogni richiesta viene tracciata, organizzata e gestita con più controllo.
              </p>
              <div className="p-6 bg-slate-50/70 rounded-none border border-slate-100 text-xs text-slate-700 space-y-2.5 font-sans">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                  <span className="font-medium text-slate-800">Risposta automatica entro 2 secondi</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                  <span className="font-medium text-slate-800">Salvataggio automatico Nome / Email / Telefono</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                  <span className="font-medium text-slate-800">Notifica immediata tramite mail personale</span>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 4: I NOSTRI SERVIZI */}
        <section id="services" className="py-24 sm:py-32 bg-slate-50/50 border-y border-slate-100">
          <div className="max-w-5xl mx-auto px-6 space-y-16">
            
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">
                La Nostra Competenza
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900">
                I nostri servizi
              </h2>
              <p className="text-sm text-slate-500 font-light max-w-lg mx-auto leading-relaxed">
                Configuriamo flussi digitali leggeri, solidi e fatti per durare. Senza complicazioni inutili per chi lavora.
              </p>
            </div>

            {/* Grid display cards layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((srv, idx) => {
                const IconComp = srv.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-8 sm:p-10 bg-white border border-slate-100 flex flex-col justify-between hover:border-slate-300 transition-all duration-300"
                  >
                    <div className="space-y-6">
                      {/* Icon & Badge line */}
                      <div className="flex items-center justify-between">
                        <div className="h-10 w-10 border border-slate-100 flex items-center justify-center text-slate-800">
                          <IconComp className="h-4 w-4 stroke-[1.25]" />
                        </div>
                        <span className="text-[9px] font-bold tracking-[0.15em] text-slate-400 uppercase bg-slate-50 px-2.5 py-1 border border-slate-100">
                          {srv.badge}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-medium text-slate-900">
                        {srv.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                        {srv.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-8 border-t border-slate-100 flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-slate-300">
                      <span>Integrazione nativa</span>
                      <ChevronRight className="h-3 w-3" />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* DYNAMIC PLAYGROUND SECTION: DEMO D'AUTOMAZIONE */}
        <section id="demo" className="py-24 sm:py-32 bg-[#0c0d0e] text-white">
          <div className="max-w-6xl mx-auto px-6 space-y-16">
            
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">
                Simula un'Automazione d'esempio
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
                Vedi l'ecosistema in azione
              </h2>
              <p className="text-sm text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
                Clicca sul pulsante qui sotto per far partire un flusso fittizio sul cellulare a sinistra e osserva come il sistema ordina i dati istantaneamente nel CRM Google Sheets dello staff.
              </p>
            </div>

            {/* Sandbox applet */}
            <InteractiveSystemDemo />

          </div>
        </section>


        {/* SECTION 5: COME FUNZIONA (METODO) */}
        <section id="method" className="py-24 sm:py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-20">
            
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">
                Un Processo Preciso
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900">
                Come funziona
              </h2>
              <p className="text-sm text-slate-500 font-light max-w-md mx-auto leading-relaxed">
                Applichiamo un metodo in quattro fasi per garantire che l'automazione sia tarata esattamente sulle esigenze del tuo team operativo.
              </p>
            </div>

            {/* Chronological Step list with extreme clean negative space */}
            <div className="relative border-l border-slate-100 pl-8 ml-4 sm:ml-8 space-y-14 max-w-2xl mx-auto">
              {steps.map((st, sIdx) => (
                <div key={sIdx} className="relative group">
                  {/* Vertical marker point - sharp and sophisticated */}
                  <div className="absolute -left-[45px] top-1 h-6.5 w-6.5 bg-white border border-slate-300 flex items-center justify-center font-mono text-[10px] text-slate-900 font-bold group-hover:border-slate-950 transition-colors">
                    {st.step}
                  </div>
                  
                  <div className="space-y-2 pl-2">
                    <h3 className="text-lg font-medium text-slate-900 group-hover:text-slate-900 transition-colors">
                      {st.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">
                      {st.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* SECTION 6: PACCHETTO PRINCIPALE */}
        <section id="pricing" className="py-24 sm:py-32 bg-slate-50/50 border-y border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            
            <div className="bg-white border border-slate-100 p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              
              {/* Info Column (7 cols) */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">
                    Ideale per Attività Locali ed Aziende
                  </span>
                  <h3 className="text-3xl font-light tracking-tight text-slate-900 mt-3">
                    Sistema Clientiq Start
                  </h3>
                </div>
                
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Una soluzione essenziale per iniziare a gestire meglio le richieste digitali senza complicare il lavoro quotidiano del tuo staff. Un setup unico, privo di canoni ricorrenti legati a Clientiq.
                </p>
 
                {/* Checklist list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-2">
                  {[
                    "Automazione Instagram DM",
                    "Raccolta nome, telefono ed esigenza",
                    "CRM Google Sheets",
                    "Notifica automatica via email",
                    "Setup tecnico e test completo",
                    "Guida operativa per lo staff"
                  ].map((elem, eIdx) => (
                    <div key={eIdx} className="flex items-center gap-2 text-xs text-slate-600">
                      <div className="h-4 w-4 bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                        <Check className="h-2.5 w-2.5 stroke-[1.5]" />
                      </div>
                      <span className="truncate">{elem}</span>
                    </div>
                  ))}
                </div>
              </div>
 
              {/* Call to action Column (5 cols) */}
              <div className="md:col-span-5 bg-slate-950 text-white rounded-none p-6 sm:p-8 text-center space-y-6 border border-slate-900">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">Pacchetto Tutto Incluso</span>
                  <div className="text-2xl font-light tracking-tight">Inizia in Sicurezza</div>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    Nessun abbonamento mensile. Paghi l'attivazione una sola volta.
                  </p>
                </div>
 
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full bg-white hover:bg-slate-100 text-slate-950 text-[11px] font-bold uppercase tracking-widest py-3.5 transition-colors cursor-pointer"
                >
                  Richiedi informazioni
                </button>
                
                <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                  Valutazione iniziale gratuita e senza alcun impegno
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* SECTION 7: SEZIONE VALORE */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-16">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left headline (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">
                  La Filosofia Clientiq
                </span>
                <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900 leading-[1.2]">
                  Tecnologia semplice per processi più efficienti
                </h2>
              </div>

              {/* Right text body (7 cols) */}
              <div className="lg:col-span-7 text-sm text-slate-500 space-y-6 leading-relaxed font-light">
                <p>
                  Clientiq progetta sistemi digitali pensati per migliorare il modo in cui aziende e attività locali gestiscono le richieste dei clienti. L’automazione non sostituisce il rapporto umano, ma rende più ordinato tutto ciò che viene prima: raccolta dati, organizzazione dei contatti, notifiche e gestione operativa.
                </p>
                <p>
                  Il risultato è un processo più fluido, dove ogni richiesta viene tracciata correttamente e lo staff può concentrarsi sulla parte più importante: parlare con il cliente e portarlo alla decisione.
                </p>
              </div>

            </div>

            {/* Cards row for values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-slate-100">
              {coreValues.map((val, vIdx) => {
                const IconValComp = val.icon;
                return (
                  <div key={vIdx} className="space-y-4">
                    <div className="h-10 w-10 border border-slate-100 bg-slate-50 flex items-center justify-center text-slate-700">
                      <IconValComp className="h-4 w-4 stroke-[1.25]" />
                    </div>
                    <h3 className="text-base font-medium text-slate-900">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* FAQ - PROACTIVE ACCORDION FOR BETTER USER CONVERSION */}
        <section className="py-24 sm:py-32 bg-slate-50/50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            <div className="text-center space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">Domande Frequenti</span>
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight">Efficienza & Flessibilità</h2>
              <p className="text-xs text-slate-500 font-light max-w-md mx-auto leading-relaxed">Risposte chiare ai tuoi dubbi tecnici e organizzativi sulla nostra piattaforma.</p>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              {faqs.map((faq, fIdx) => (
                <div 
                  key={fIdx} 
                  className="bg-white border border-slate-100 transition-all duration-200"
                >
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === fIdx ? null : fIdx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-medium text-sm text-slate-900"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform shrink-0 ${activeAccordion === fIdx ? "rotate-180" : ""}`} />
                  </button>
                  {activeAccordion === fIdx && (
                    <div className="px-6 pb-5 text-xs text-slate-500 font-light leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* SECTION 8: SEZIONE CONTATTI */}
        <section id="contact" className="py-24 sm:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            
            <div className="max-w-xl mx-auto text-center space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">
                Siamo Qui per Te
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight">
                Contatta Clientiq
              </h2>
              <p className="text-sm text-slate-500 font-light max-w-md mx-auto leading-relaxed">
                Vuoi vedere una demo del sistema o capire se può essere utile alla tua attività? Contattaci per una prima valutazione.
              </p>
            </div>

            <ContactForm />

          </div>
        </section>

      </main>

      {/* SECTION 9: FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900 font-sans">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="h-6 w-6 bg-white text-slate-950 flex items-center justify-center font-mono font-bold text-xs tracking-tighter">
                C_
              </div>
              <span className="font-light text-base tracking-widest uppercase">
                Clientiq
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-sm">
              Automazioni digitali, CRM e integrazioni software per aziende e attività locali. Semplifichiamo i processi d'ingresso contatti riducendo a zero le perdite operative.
            </p>
          </div>

          {/* Quick links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Navigazione</div>
            <ul className="space-y-2 text-xs font-light">
              {navigation.map((n) => (
                <li key={n.name}>
                  <button 
                    onClick={() => scrollToSection(n.href)}
                    className="hover:text-white transition-colors cursor-pointer text-left font-light"
                  >
                    {n.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordinates (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Contatti e recapiti</div>
            <div className="space-y-3 text-xs font-light">
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="h-3.5 w-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>Via dei Pioppi 3, Oderzo, Treviso (31046)</span>
              </div>
              <a href="tel:+393317377528" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <Phone className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                <span>331 737 7528</span>
              </a>
              <a href="mailto:clientiq.co@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <Mail className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                <span>clientiq.co@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Legal notice line bar */}
        <div className="max-w-7xl mx-auto px-6 pt-10 mt-16 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] text-slate-500 font-mono tracking-widest uppercase">
          <div>
            &copy; {new Date().getFullYear()} Clientiq. Tutti i diritti riservati.
          </div>
          <div>
            Disegnato con estrema cura e precisione.
          </div>
        </div>
      </footer>

    </div>
  );
}
