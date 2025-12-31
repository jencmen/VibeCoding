
import React from 'react';
import { Layout } from './components/Layout';
import { MethodologyCard } from './components/MethodologyCard';
import { ToolsMatrix } from './components/ToolsMatrix';
import { EXPERIMENT_DATA } from './constants';

const App: React.FC = () => {
  return (
    <Layout>
      {/* Chapter 1: The Question */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center mb-24">
        <div className="inline-block px-4 py-1.5 mb-8 text-sm font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full border border-indigo-100">
          פרק 1: השאלה הגדולה
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
          PM Role in vibe coding era:<br />
          <span className="bg-clip-text text-transparent vibe-gradient">צוות או One-Man Show?</span>
        </h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-xl text-gray-600 leading-relaxed">
            המהפכה כאן: המרחק בין רעיון למערכת עובדת הצטמצם לדקות. האם בעידן שבו מהירות ותעוזה הם המציאות החדשה, הגיע הזמן שכל מנהל מוצר יהפוך גם לבונה?
          </p>
        </div>
      </section>

      {/* Chapter 2: The Lab */}
      <section id="experiment" className="mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-purple-600 uppercase bg-purple-50 rounded-lg border border-purple-100">
              פרק 2: המעבדה
            </div>
            <h2 className="text-3xl font-bold mb-4">הניסוי: 4 דרכים לבניית אותה מערכת</h2>
            <p className="text-gray-500">בדקתי מה באמת נותן תוצאות: דרישות בלבד? פתרון טכני? עיצובים מוכנים? או פשוט 'וייב' בלבד?</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {EXPERIMENT_DATA.map((data) => (
            <MethodologyCard key={data.id} data={data} />
          ))}
        </div>
      </section>

      {/* Chapter 3: vibe coding tool quadro & Selected Tools */}
      <section className="mb-24 space-y-16">
        <div className="text-center">
          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-lg border border-indigo-100">
            פרק 3: vibe coding tool quadro
          </div>
          <h2 className="text-4xl font-black mb-4">מפת הדרכים לעולם הבנייה</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">מיפוי נוף הכלים המאפשרים ל-PM להפוך ל-Builder עצמאי ולייצר ערך מיידי.</p>
          <ToolsMatrix />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900">הסטאק שבחרתי לניסוי</h3>
            <p className="text-gray-500 mt-2 text-sm">הכלים המדויקים ששימשו אותי למעבר מרעיון למציאות עובדת</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group">
              <div className="w-16 h-16 bg-[#FF5C00] rounded-2xl mb-6 flex items-center justify-center text-white font-black text-2xl shadow-lg transform group-hover:scale-110 transition-transform">44</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Base 44</h3>
              <p className="text-gray-500 leading-relaxed text-sm">הסטודיו לביצוע. הופך "מילים" לאפליקציה חיה (AI App Builder). הכלי שמאפשר איטרציות מהירות וחיות על גבי המוצר.</p>
            </div>
            <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-xl hover:translate-y-[-4px] transition-all group">
              <div className="w-16 h-16 bg-white/10 rounded-2xl mb-6 flex items-center justify-center text-white font-bold text-xs border border-white/20 group-hover:bg-white/20 transition-colors">GOOGLE</div>
              <h3 className="text-xl font-bold mb-3">Google AI Studio</h3>
              <p className="text-indigo-100/70 leading-relaxed text-sm">סביבת העבודה המחקרית. המוח שמאחורי הפרומפטים ומודלי Gemini. כאן נבנה ההיגיון העסקי המורכב.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: Results Analysis with Screenshots */}
      <section className="mb-24 bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 text-[10px] font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 rounded-lg border border-emerald-100">
            פרק 4: ניתוח תוצאות וצילומי מסך
          </div>
          <h2 className="text-3xl font-bold">איך זה נראה בפועל?</h2>
          <p className="text-gray-500 mt-4">צילומי מסך של התוצאות מכל אחת מארבע המתודולוגיות</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Screenshot A */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-gray-100 rounded text-xs font-bold flex items-center justify-center text-gray-400">A</span>
              <h4 className="font-bold text-gray-700">דרישות בלבד</h4>
            </div>
            <div className="aspect-video bg-gray-50 rounded-2xl border border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden">
              <div className="w-full h-full p-4 space-y-2 opacity-40">
                <div className="h-4 bg-gray-300 w-1/3 rounded"></div>
                <div className="h-20 bg-gray-200 w-full rounded"></div>
                <div className="h-4 bg-gray-300 w-1/2 rounded"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-[1px]">
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 text-center">
                  <p className="text-xs font-bold text-gray-500">לוגיקה בסיסית אך לא יציבה</p>
                  <p className="text-[10px] text-gray-400 mt-1">המודל מנחש פערים ולא תמיד מדייק</p>
                </div>
              </div>
            </div>
          </div>
          {/* Screenshot B */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-emerald-100 rounded text-xs font-bold flex items-center justify-center text-emerald-600">B</span>
              <h4 className="font-bold text-gray-700">PRD מלא + מסכים</h4>
            </div>
            <div className="aspect-video bg-white rounded-2xl border border-emerald-100 shadow-inner flex items-center justify-center relative overflow-hidden">
              <div className="w-full h-full p-4 space-y-3">
                <div className="flex justify-between">
                  <div className="h-4 bg-emerald-100 w-1/4 rounded"></div>
                  <div className="h-4 bg-emerald-200 w-4 rounded-full"></div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-12 bg-emerald-50 rounded"></div>
                  <div className="h-12 bg-emerald-50 rounded"></div>
                  <div className="h-12 bg-emerald-50 rounded"></div>
                </div>
                <div className="h-24 bg-emerald-50 w-full rounded"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-xs font-bold text-emerald-800 bg-white/80 px-4 py-2 rounded-full shadow-md border border-emerald-200">מוצר מוגמר, מדויק ועקבי</p>
              </div>
            </div>
          </div>
          {/* Screenshot C */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-pink-100 rounded text-xs font-bold flex items-center justify-center text-pink-600">C</span>
              <h4 className="font-bold text-gray-700">פרומפט כללי</h4>
            </div>
            <div className="aspect-video bg-gradient-to-br from-indigo-500/5 to-pink-500/5 rounded-2xl border border-gray-100 flex items-center justify-center relative overflow-hidden">
              <div className="w-full h-full p-6 flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-3xl vibe-gradient opacity-30 shadow-2xl"></div>
                <div className="h-4 bg-indigo-100 w-1/2 rounded"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/95 p-4 rounded-xl shadow-lg border border-pink-100 text-center">
                   <p className="text-xs font-bold text-rose-600">עיצוב "וואו", פונקציונליות "אוי"</p>
                   <p className="text-[10px] text-gray-400 mt-1">יפה למצגת, לא לעבודה</p>
                </div>
              </div>
            </div>
          </div>
          {/* Screenshot D */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-indigo-100 rounded text-xs font-bold flex items-center justify-center text-indigo-600">D</span>
              <h4 className="font-bold text-gray-700">טעינה הדרגתית</h4>
            </div>
            <div className="aspect-video bg-white rounded-2xl border-2 border-indigo-200 shadow-xl flex items-center justify-center relative overflow-hidden">
              <div className="w-full h-full p-4 space-y-4">
                <div className="h-6 bg-indigo-50 w-1/3 rounded"></div>
                <div className="flex gap-2">
                  <div className="w-full h-32 bg-indigo-50/20 rounded-xl border border-indigo-100"></div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-indigo-600 text-white text-[8px] px-2 py-0.5 rounded-full font-bold uppercase animate-pulse">The Winner</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-xs font-bold text-indigo-900 bg-white/90 px-4 py-2 rounded-full shadow-md border border-indigo-100">איזון מושלם בין מהירות לדיוק לוגי</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 5: The Verdict (Re-numbered) */}
      <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-block px-4 py-1 mb-8 text-[10px] font-bold tracking-widest text-indigo-300 uppercase bg-white/10 rounded-lg border border-white/20">
            פרק 5: פסק הדין
          </div>
          <h2 className="text-4xl font-black mb-8 text-center md:text-right">התשובה היא: כן.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-xl text-indigo-100 leading-relaxed font-light">
                מנהל המוצר של 2025 כבר לא זקוק לצוות פיתוח כדי לבנות MVP, להוכיח רעיון או לפתור בעיה דחופה. 
              </p>
              <div className="p-6 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-md">
                <h4 className="text-lg font-bold mb-2 text-indigo-300">התפקיד החדש: Product Architect</h4>
                <p className="text-sm opacity-80 leading-relaxed">
                  במקום לכתוב מה לעשות, אתה בונה את הלוגיקה, מעצב את החוויה ומוודא שה-AI מבצע את זה נכון.
                </p>
              </div>
            </div>
            <div className="bg-indigo-600/30 p-8 rounded-[2rem] border border-indigo-400/30 flex flex-col justify-center text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter">The Final Verdict</h3>
              <p className="text-indigo-200 text-sm italic">
                "השינוי הוא לא טכנולוגי, הוא מנטלי. מנהל מוצר שיידע לעבוד ב-Vibe Coding יהיה שווה לצוות פיתוח שלם."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 6: The Limits (Re-numbered) */}
      <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest text-rose-600 uppercase bg-rose-50 rounded-lg border border-rose-100">
            פרק 6: הגבולות
          </div>
          <h2 className="text-4xl font-black text-gray-900">אז... One-Man Show?</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            לא תמיד. מתי PM יכול לבנות לבד ומתי חייבים צוות מלא? המפתח הוא <strong>מורכבות המערכת</strong> ורגישות הנתונים.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
              <h4 className="font-bold text-emerald-800 mb-2">לבד (MVP/Internal)</h4>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>• כלי עבודה פנימיים</li>
                <li>• הוכחת רעיון מהירה (PoC)</li>
                <li>• מערכות ללא מידע רגיש</li>
              </ul>
            </div>
            <div className="p-6 bg-rose-50 rounded-2xl border border-rose-100">
              <h4 className="font-bold text-rose-800 mb-2">עם צוות (Production)</h4>
              <ul className="text-sm text-rose-700 space-y-1">
                <li>• מערכות ליבה קריטיות</li>
                <li>• ניהול מידע רגיש ומאובטח</li>
                <li>• סקייל גבוה וביצועים</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-xl" dir="ltr">
           <div className="relative h-[300px] w-full border-l-2 border-b-2 border-slate-900 ml-8 mb-8">
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-black uppercase tracking-widest text-slate-400">Criticality</div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest text-slate-400">Sensitivity</div>
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200"></div>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-slate-200"></div>
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white p-3 rounded-xl font-bold text-xs shadow-lg">PM STUDIO</div>
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 bg-slate-900 text-white p-3 rounded-xl font-bold text-xs">FULL TEAM</div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-gray-100 text-center">
        <p className="text-sm text-gray-400 font-medium">נבנה ב-Vibe Coding כדי לספר את סיפור המהפכה של מנהלי המוצר</p>
        <div className="flex justify-center gap-4 mt-4 opacity-50">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
        </div>
      </footer>
    </Layout>
  );
};

export default App;
