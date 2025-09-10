export type Language = 'he' | 'en' | 'ru';

export interface FormData {
  size: number;
  seatingCapacity: number;
  servesAlcohol: boolean;
  kosher: boolean;
  foodType: 'dairy' | 'meat' | 'both';
  deliveryService: 'none' | 'private' | 'partnered';
}

export interface ActionItem {
  text: string;
  citationKey: string;
}

export interface ReportSection {
  title: string;
  priority: 'High' | 'Medium' | 'Low' | string;
  summary: string;
  actionItems: ActionItem[];
}

export interface Report {
  sections: ReportSection[];
  citations: Record<string, string>;
}
