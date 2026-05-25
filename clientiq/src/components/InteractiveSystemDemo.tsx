import { useState, useEffect } from "react";
import { 
  Instagram, 
  MessageSquare, 
  Database, 
  Mail, 
  Bell, 
  ArrowRight, 
  Play, 
  RefreshCw, 
  User, 
  Smartphone, 
  FileSpreadsheet, 
  CheckCircle,
  Inbox
} from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "customer" | "bot";
  text: string;
  time: string;
}

interface SimulatedLead {
  id: string;
  name: string;
  phone: string;
  origin: "Instagram DM" | "WhatsApp";
  service: string;
  status: "Nuovo" | "In contatto" | "Gestito";
  time: string;
}

export default function InteractiveSystemDemo() {
  const [activeTab, setActiveTab] = useState<"instagram" | "whatsapp">("instagram");
  const [simulationStep, setSimulationStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [crmLeads, setCrmLeads] = useState<SimulatedLead[]>([
    {
      id: "1",
      name: "Studio Dentistico Rossi",
      phone: "338 123 4567",
      origin: "WhatsApp",
      service: "Automazioni digitali",
      status: "Gestito",
      time: "10:30"
    },
    {
      id: "2",
      name: "Elena Bianchi (Estetica)",
      phone: "347 987 6543",
      origin: "Instagram DM",
      service: "CRM personalizzato",
      status: "In contatto",
      time: "09:12"
    }
  ]);
  const [latestNotification, setLatestNotification] = useState<string | null>(null);
  const [notificationFlash, setNotificationFlash] = useState<boolean>(false);

  // Default messages to show before starting simulation
  useEffect(() => {
    resetDemo();
  }, [activeTab]);

  const resetDemo = () => {
    setSimulationStep(0);
    setIsSimulating(false);
    setLatestNotification(null);
    setNotificationFlash(false);
    
    if (activeTab === "instagram") {
      setChatMessages([
        { id: "1", sender: "customer", text: "Ciao! Vorrei avere maggiori informazioni sui vostri servizi di estetica", time: "Ora" }
      ]);
    } else {
      setChatMessages([
        { id: "1", sender: "customer", text: "Salve, vorrei prenotare una consulenza per l'integrazione del catalogo", time: "Ora" }
      ]);
    }
  };

  const startSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationStep(1);

    // Timeline of automated response
    setTimeout(() => {
      // Step 2: Bot responds instantly to gather data
      setChatMessages(prev => [
        ...prev,
        { 
          id: "2", 
          sender: "bot", 
          text: activeTab === "instagram" 
            ? "Ciao! Grazie del messaggio. Ti diamo il benvenuto. Per farti contattare dal nostro staff, potresti indicare il tuo Nome Completo e Numero di Telefono?" 
            : "Certamente! Ti aiutiamo volentieri. Lasciaci pure il tuo Nome, Cognome e un recapito Telefonico per fissare la consulenza.", 
          time: "Ora" 
        }
      ]);
      setSimulationStep(2);

      // Step 3: Customer replies and provides details
      setTimeout(() => {
        const customerName = activeTab === "instagram" ? "Marco Galli (Ristorante)" : "Studio Immobiliare Treviso";
        const customerPhone = activeTab === "instagram" ? "331 450 8821" : "0422 152431";

        setChatMessages(prev => [
          ...prev,
          { 
            id: "3", 
            sender: "customer", 
            text: activeTab === "instagram"
              ? `${customerName} - Tel: ${customerPhone}` 
              : `Mi chiamo ${customerName}, cellulare ${customerPhone}`, 
            time: "Ora" 
          }
        ]);
        setSimulationStep(3);

        // Step 4: System registers on CRM and dispatches notifications
        setTimeout(() => {
          // Bot acknowledges
          setChatMessages(prev => [
            ...prev,
            { 
              id: "4", 
              sender: "bot", 
              text: "Grazie! Abbiamo registrato i tuoi dati correttamente. Un nostro incaricato ti contatterà al più presto.", 
              time: "Ora" 
            }
          ]);

          // Insert into simulated CRM
          const newLead: SimulatedLead = {
            id: Date.now().toString(),
            name: customerName,
            phone: customerPhone,
            origin: activeTab === "instagram" ? "Instagram DM" : "WhatsApp",
            service: activeTab === "instagram" ? "Menu & Prenotazioni" : "Integrazione CRM",
            status: "Nuovo",
            time: new Date().toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })
          };
          
          setCrmLeads(prev => [newLead, ...prev]);
          setSimulationStep(4);
          
          // Trigger notification
          setLatestNotification(`Nuovo Lead acquisito da ${newLead.origin}! Data salvata sul CRM.`);
          setNotificationFlash(true);
          
          setTimeout(() => {
            setNotificationFlash(false);
          }, 1500);

          setIsSimulating(false);
        }, 2000);

      }, 2500);

    }, 1500);
  };

  return (
    <div className="w-full bg-[#111213] border border-slate-800/80 overflow-hidden text-slate-300">
      
      {/* Header bar of the simulation sandbox */}
      <div className="bg-[#151618] px-6 py-5 border-b border-slate-850 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-none bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#a3a3a3] uppercase">Simulatore di Automazione Clientiq</span>
          </div>
          <h4 className="text-lg font-light text-white mt-1">Vedi come funziona in tempo reale</h4>
        </div>
        
        {/* Toggle Channel selector */}
        <div className="flex bg-[#0c0d0e] p-1 border border-slate-800">
          <button 
            onClick={() => setActiveTab("instagram")}
            disabled={isSimulating}
            className={`flex items-center gap-2 px-3 py-2 text-[10px] uppercase font-bold tracking-widest transition-all cursor-pointer ${
              activeTab === "instagram" 
                ? "bg-slate-800 text-white" 
                : "text-slate-400 hover:text-white disabled:opacity-50"
            }`}
          >
            <Instagram className="h-3.5 w-3.5 text-slate-400" />
            Instagram Direct
          </button>
          <button 
            onClick={() => setActiveTab("whatsapp")}
            disabled={isSimulating}
            className={`flex items-center gap-2 px-3 py-2 text-[10px] uppercase font-bold tracking-widest transition-all cursor-pointer ${
              activeTab === "whatsapp" 
                ? "bg-slate-800 text-white" 
                : "text-slate-400 hover:text-white disabled:opacity-50"
            }`}
          >
            <MessageSquare className="h-3.5 w-3.5 text-slate-400" />
            WhatsApp Business
          </button>
        </div>
      </div>

      {/* Main Demo Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800/80">
        
        {/* Module 1: Smartphone Chat simulation (4 cols) */}
        <div className="lg:col-span-4 p-6 flex flex-col justify-between bg-[#131416]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                <Smartphone className="h-3.5 w-3.5" />
                Sorgente Messaggi
              </span>
              <span className="text-[9px] font-bold tracking-wider uppercase text-slate-400 bg-slate-800 px-2 py-0.5 border border-slate-750">
                {activeTab === "instagram" ? "Chat Instagram" : "Chat WhatsApp"}
              </span>
            </div>

            {/* Immersive minimalist smartphone frame */}
            <div className="border border-slate-800 p-3 bg-[#0c0d0e] max-w-[280px] mx-auto shadow-2xl">
              <div className="bg-[#151618] h-[330px] flex flex-col justify-between overflow-hidden relative">
                
                {/* Simulated App Header */}
                <div className="px-3 py-2 bg-[#18191c] border-b border-slate-850 flex items-center gap-2">
                  <div className="h-6 w-6 bg-slate-700 flex items-center justify-center text-[10px] font-bold text-white">
                    U
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-white leading-tight">Utente Interessato</div>
                    <div className="text-[8px] text-emerald-500 uppercase font-bold tracking-wider flex items-center gap-1">
                      <span className="h-1 w-1 bg-emerald-500 inline-block"></span> Online
                    </div>
                  </div>
                </div>

                {/* Simulated Bubble Container */}
                <div className="flex-1 p-3 overflow-y-auto space-y-2.5 text-[11px] flex flex-col justify-end">
                  {chatMessages.map((msg) => (
                    <div 
                      key={msg.id} 
                      className={`max-w-[85%] p-2.5 leading-relaxed animate-fade-in ${
                        msg.sender === "customer" 
                          ? "bg-slate-800 text-slate-200 self-start border border-slate-700/40" 
                          : "bg-blue-950/20 text-blue-200 self-end border border-blue-900/40"
                      }`}
                    >
                      <div>{msg.text}</div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isSimulating && simulationStep === 1 && (
                    <div className="bg-blue-950/20 text-slate-400 self-end px-3 py-2 border border-blue-900/30 max-w-[85%] flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                      <span className="h-1.5 w-1.5 bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                      <span className="h-1.5 w-1.5 bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <button
              onClick={startSimulation}
              disabled={isSimulating || simulationStep > 0}
              className="w-full bg-white hover:bg-slate-100 text-[#0c0d0e] disabled:bg-slate-800 disabled:text-slate-500 py-3 px-4 text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="h-3 w-3 fill-current" />
              {isSimulating ? "Automazione in corso..." : "Simula flusso automatico"}
            </button>
            
            {simulationStep > 0 && (
              <button
                onClick={resetDemo}
                className="w-full bg-transparent hover:bg-slate-900 text-slate-400 hover:text-white py-2 px-4 text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="h-3 w-3" />
                Reimposta Demo
              </button>
            )}
          </div>
        </div>

        {/* Module 2: The Automations in-between steps (3 cols) */}
        <div className="lg:col-span-3 p-6 flex flex-col justify-between bg-[#0e0f10]">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5 mb-4">
              <ArrowRight className="h-3.5 w-3.5 text-slate-500" />
              Integrazione e Logica
            </span>

            <div className="space-y-4">
              
              {/* Box 1 */}
              <div className={`p-4 border text-xs transition-all ${
                simulationStep >= 1 ? "bg-slate-900/50 border-slate-700 text-white" : "bg-slate-900/10 border-slate-800/40 text-slate-600"
              }`}>
                <div className="flex items-center gap-1.5 font-medium tracking-wide text-slate-350">
                  <span className={`h-1.5 w-1.5 ${simulationStep >= 1 ? "bg-emerald-500" : "bg-slate-600"}`}></span>
                  1. Intercettazione Chat
                </div>
                <p className="mt-1 text-[11px] text-slate-400 font-light">
                  Manychat o webhook riconoscono la prima parola chiave e attivano lo script preimpostato.
                </p>
              </div>

              {/* Box 2 */}
              <div className={`p-4 border text-xs transition-all ${
                simulationStep >= 2 ? "bg-slate-900/50 border-slate-700 text-white" : "bg-slate-900/10 border-slate-800/40 text-slate-600"
              }`}>
                <div className="flex items-center gap-1.5 font-medium tracking-wide text-slate-350">
                  <span className={`h-1.5 w-1.5 ${simulationStep >= 2 ? "bg-emerald-500" : "bg-slate-600"}`}></span>
                  2. Estrazione dati via IA
                </div>
                <p className="mt-1 text-[11px] text-slate-400 font-light">
                  Il bot chiede e valida e-mail, telefono o nome salvandoli temporaneamente con sicurezza.
                </p>
              </div>

              {/* Box 3 */}
              <div className={`p-4 border text-xs transition-all ${
                simulationStep >= 3 ? "bg-slate-900/50 border-slate-700 text-white" : "bg-slate-900/10 border-slate-800/40 text-slate-600"
              }`}>
                <div className="flex items-center gap-1.5 font-medium tracking-wide text-slate-350">
                  <span className={`h-1.5 w-1.5 ${simulationStep >= 3 ? "bg-emerald-500" : "bg-slate-600"}`}></span>
                  3. Collegamento webhook Make
                </div>
                <p className="mt-1 text-[11px] text-slate-400 font-light">
                  I dati strutturati volano dal backend verso database esterni, fogli Sheets o CRM.
                </p>
              </div>

              {/* Box 4 */}
              <div className={`p-4 border text-xs transition-all ${
                simulationStep >= 4 ? "bg-slate-900/50 border-slate-755 border-slate-700 text-white" : "bg-slate-900/10 border-slate-800/40 text-slate-600"
              }`}>
                <div className="flex items-center gap-1.5 font-medium tracking-wide text-emerald-400">
                  {simulationStep >= 4 ? (
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                  ) : (
                    <span className="h-1.5 w-1.5 bg-slate-600"></span>
                  )}
                  4. Destinazione finale
                </div>
                <p className="mt-1 text-[11px] text-slate-400 font-light">
                  Viene inviata una notifica rapida allo staff via mail e i dati sono registrati a vita.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Module 3: CRM Dashboard showing incoming leads (5 cols) */}
        <div className="lg:col-span-12 lg:col-span-5 p-6 flex flex-col justify-between bg-[#111214]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                <Database className="h-3.5 w-3.5" />
                CRM Integrato (Archivio Contatti)
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 bg-slate-800 px-2 py-0.5 flex items-center gap-1">
                <FileSpreadsheet className="h-3 w-3 text-emerald-500" />
                Google Sheets / CRM
              </span>
            </div>

            {/* Simulated Table */}
            <div className="bg-[#0c0d0e] border border-slate-800 overflow-hidden">
              <div className="grid grid-cols-12 bg-[#151618] px-3 py-2 text-[10px] uppercase font-bold tracking-widest text-slate-400 border-b border-slate-850">
                <div className="col-span-5">Cliente</div>
                <div className="col-span-4">Telefono</div>
                <div className="col-span-3 text-right">Canale/Stato</div>
              </div>

              <div className="divide-y divide-slate-900/30 font-sans">
                {crmLeads.map((lead) => (
                  <div 
                    key={lead.id} 
                    className={`grid grid-cols-12 px-3 py-3 text-xs transition-colors items-center ${
                      lead.status === "Nuovo" ? "bg-emerald-950/10 text-slate-100 font-medium" : "hover:bg-[#131416]/40 text-slate-300"
                    }`}
                  >
                    <div className="col-span-5 flex flex-col">
                      <span>{lead.name}</span>
                      <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono mt-0.5">{lead.service}</span>
                    </div>
                    <div className="col-span-4 font-mono text-[11.5px] text-slate-400">{lead.phone}</div>
                    <div className="col-span-3 text-right flex flex-col items-end gap-1">
                      <span className="text-[9px] text-slate-500 uppercase tracking-widest font-mono font-bold">{lead.origin}</span>
                      <span className={`inline-block text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 ${
                        lead.status === "Nuovo" 
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30" 
                          : lead.status === "In contatto" 
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                          : "bg-slate-800 text-slate-400"
                      }`}>
                        {lead.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Notification Card on top right */}
            {latestNotification && (
              <div className={`mt-4 p-4 border flex items-start gap-3 transition-all outline-none ${
                notificationFlash 
                  ? "bg-emerald-950/20 border-emerald-500/40 text-white shadow-[0_0_15px_rgba(16,185,129,0.15)] animate-pulse" 
                  : "bg-slate-900 border-slate-800 text-slate-350"
              }`}>
                <div className="p-1 rounded bg-slate-805 bg-slate-850 text-slate-300 mt-0.5">
                  <Bell className="h-3.5 w-3.5" />
                </div>
                <div className="text-xs flex-1">
                  <div className="font-semibold text-white flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider">Notifica Email Ricevuta</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">In tempo reale</span>
                  </div>
                  <p className="mt-1 text-slate-400 text-[11px] leading-relaxed">
                    A: <span className="text-slate-300">clientiq.co@gmail.com</span><br/>
                    {latestNotification}
                  </p>
                </div>
              </div>
            )}
            
            {!latestNotification && (
              <div className="mt-4 p-4 border border-dashed border-slate-800 text-center text-slate-500 text-xs flex flex-col items-center justify-center py-8">
                <Inbox className="h-5 w-5 text-slate-700 mb-2" />
                <span>Nessuna notifica email in sospeso.</span>
                <span className="text-[10px] text-slate-600 mt-0.5">Avvia la simulazione a sinistra per attivare l'invio mail</span>
              </div>
            )}
          </div>

          <div className="mt-6 border-t border-slate-800 pt-4">
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#a3a3a3]">
              Dettagli dell'infrastruttura Clientiq
            </p>
            <p className="text-xs text-slate-400 mt-1 font-light leading-relaxed">
              Zero complicazioni tecniche per il tuo team. Installiamo strumenti sicuri già predisposti che collegano Manychat, Make, Google Sheets e le tue caselle email di lavoro.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
