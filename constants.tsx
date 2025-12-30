
import { MethodologyType, ExperimentResult } from './types';

export const EXPERIMENT_DATA: ExperimentResult[] = [
  {
    id: MethodologyType.REQ_ONLY,
    title: 'מסמך PRD עם דרישות בלבד',
    description: 'הגדרה פונקציונלית של ה"מה" ללא ה"איך".',
    speed: 85,
    accuracy: 60,
    innovation: 90,
    pros: ['חופש יצירתי רב למודל', 'מינימום עבודה מוקדמת'],
    cons: ['סטיות מהלוגיקה העסקית', 'דורש המון סבבי תיקון']
  },
  {
    id: MethodologyType.DETAILED_PRD,
    title: 'PRD מלא + פתרון + מסכים',
    description: 'הגדרה מדויקת של המערכת, כולל UI וזרימת נתונים.',
    speed: 50,
    accuracy: 95,
    innovation: 40,
    pros: ['תוצאה צפויה ומדויקת', 'קרוב מאוד למוצר סופי'],
    cons: ['זמן הכנה ארוך', 'פחות "הפתעות" חיוביות מה-AI']
  },
  {
    id: MethodologyType.GENERAL_PROMPT,
    title: 'פרומפט פשוט (Vibe Only)',
    description: 'תיאור כללי של הרעיון ללא מסמך פורמלי.',
    speed: 98,
    accuracy: 30,
    innovation: 95,
    pros: ['מהירות שיא', 'אבטיפוס מיידי'],
    cons: ['חוסר עקביות', 'לא מתאים למערכות מורכבות']
  },
  {
    id: MethodologyType.INCREMENTAL_PRD,
    title: 'טעינה הדרגתית של PRD',
    description: 'בניית בסיס (Core) ואז הרחבה ליכולות מתקדמות.',
    speed: 75,
    accuracy: 90,
    innovation: 80,
    pros: ['שליטה מלאה בתהליך', 'איזון מושלם בין מהירות לדיוק'],
    cons: ['דורש ניהול "הקשר" (Context) קפדני']
  }
];
