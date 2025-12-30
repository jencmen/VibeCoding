
import { MethodologyType, ExperimentResult } from './types';

export const EXPERIMENT_DATA: ExperimentResult[] = [
  {
    id: MethodologyType.REQ_ONLY,
    title: 'דרישות בלבד (A)',
    description: 'הגדרת ה"מה" ללא ה"איך". המודל ממלא את הפערים בעצמו.',
    speed: 85,
    accuracy: 60,
    ux: 70,
    maintenance: 40,
    security: 30,
    pros: ['חופש יצירתי רב', 'מינימום עבודה מוקדמת'],
    cons: ['סטיות לוגיות', 'חורי אבטחה', 'דורש המון תיקונים']
  },
  {
    id: MethodologyType.DETAILED_PRD,
    title: 'PRD מלא + מסכים (B)',
    description: 'הגדרה מדויקת הכוללת פתרון טכני ועיצוב מסכים.',
    speed: 40,
    accuracy: 95,
    ux: 85,
    maintenance: 90,
    security: 80,
    pros: ['תוצאה צפויה ומדויקת', 'מוכן לפרודקשן'],
    cons: ['זמן הכנה ארוך', 'פחות "קסם" מה-AI']
  },
  {
    id: MethodologyType.GENERAL_PROMPT,
    title: 'פרומפט כללי (C)',
    description: 'תיאור חופשי של הרעיון (Vibe Only) ללא מסמכים.',
    speed: 100,
    accuracy: 20,
    ux: 90,
    maintenance: 10,
    security: 5,
    pros: ['מהירות שיא', 'אפקט "וואו" מיידי'],
    cons: ['חוסר עקביות מוחלט', 'קוד לא תחזוקתי']
  },
  {
    id: MethodologyType.INCREMENTAL_PRD,
    title: 'טעינה הדרגתית (D)',
    description: 'בניית הליבה תחילה ושיפור איטרטיבי (Winner).',
    speed: 75,
    accuracy: 92,
    ux: 88,
    maintenance: 80,
    security: 75,
    pros: ['איזון מושלם', 'Context נקי למודל'],
    cons: ['דורש ניהול איטרטיבי']
  }
];
