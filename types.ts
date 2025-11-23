export interface Skill {
  name: string;
  level: number; // 0 to 100
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}