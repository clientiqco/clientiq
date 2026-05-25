export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  badge: string;
}

export interface MethodStep {
  step: number;
  title: string;
  description: string;
}

export interface ContactData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

export interface SimulationLead {
  id: string;
  source: "instagram" | "whatsapp";
  timestamp: string;
  name: string;
  phone: string;
  requestedService: string;
  status: "Nuovo" | "In Lavorazione" | "Completato";
  notes: string;
}
