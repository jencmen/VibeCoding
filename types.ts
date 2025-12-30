
export enum MethodologyType {
  REQ_ONLY = 'a',
  DETAILED_PRD = 'b',
  GENERAL_PROMPT = 'c',
  INCREMENTAL_PRD = 'd'
}

export interface ExperimentResult {
  id: MethodologyType;
  title: string;
  description: string;
  speed: number;
  accuracy: number;
  ux: number;
  maintenance: number;
  security: number;
  pros: string[];
  cons: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
