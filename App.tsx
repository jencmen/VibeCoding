
import React from 'react';
import { Layout } from './components/Layout';
import { MethodologyCard } from './components/MethodologyCard';
import { AIAdvisor } from './components/AIAdvisor';
import { EXPERIMENT_DATA } from './constants';

const App: React.FC = () => {
  return (
    <Layout>
      {/* 1. Opening: The Question */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center mb-24">
        <div className="inline-block px-4 py-1.5 mb-8 text-sm font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full border border-indigo-100">
          פרק 1: השאלה הגדולה
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
          מנהל מוצר בעידן Vibe Coding:<br />
          <span className="bg-clip-text text-transparent vibe-gradient">צוות או One-Man Show?</span>
        </h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-xl text-gray-600 leading-relaxed">
            המהפכה כאן: המרחק בין רעיון למערכת עובדת הצטמצם לדקות. במשרד ממשלתי, שבו עומס ותלות בצוותים הם המציאות, האם הגיע הזמן לקחת את המושכות לידיים?
          </p>
        </div>
      </section>

      {/* 2. Definition: What is Vibe Coding? */}
      <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm">
        <div>
          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-purple-600 uppercase bg-purple-50 rounded-lg border border-purple-100">
            פרק 2: מה זה אומר בכלל?
          </div>
          <h2 className="text-3xl font-bold mb-6">הגדרת Vibe Coding בפועל</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            זה לא רק לכתוב קוד. זה לתאר <strong>כוונות</strong> בשפה טבעית ולהסתמך על מודלי שפה גדולים (LLMs) לבנייה. המוקד עובר מכתיבה להכוונה, בדיקה ותיקוף.
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border-r-4 border-slate-900 italic text-slate-700">
            "The hottest new programming language is English" - Andrej Karpathy
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full flex items-center justify-center p-12">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-50 space-y-4 w-full">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse"></div>
              <div className="h-4 w-1/2 bg-gray-100 rounded animate-pulse"></div>
              <div className="pt-4 flex justify-between items-center">
                <span className="text-[10px] font-bold text-indigo-600 uppercase">Intent Transformation</span>
                <span className="text-[10px] font-bold text-gray-400">0.4s</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Stack: Tools */}
      <section className="mb-24">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-lg border border-indigo-100">
            פרק 3: ארגז הכלים
          </div>
          <h2 className="text-3xl font-bold">הסטאק שניסיתי</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl mb-6 flex items-center justify-center text-white font-black text-2xl shadow-lg">44</div>
            <h3 className="text-xl font-bold mb-3">Base 44</h3>
            <p className="text-gray-500 leading-relaxed">הסטודיו לביצוע. הופך "מילים" לאפליקציה חיה (AI App Builder). כאן מתרחש הקסם של המעבר מרעיון למסך.</p>
          </div>
          <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-xl hover:translate-y-[-4px] transition-all">
            <div className="w-16 h-16 bg-white/10 rounded-2xl mb-6 flex items-center justify-center text-white font-bold text-xs border border-white/20">GOOGLE</div>
            <h3 className="text-xl font-bold mb-3">Google AI Studio</h3>
            <p className="text-indigo-100/70 leading-relaxed">סביבת הניסוי. המוח שמאחורי הפרומפטים. שם זיקקתי את הלוגיקה והבנתי מה Gemini מסוגל לעשות.</p>
          </div>
        </div>
      </section>

      {/* 4. The Experiment: 4 Ways */}
      <section id="experiment" className="mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 rounded-lg border border-emerald-100">
              פרק 4: הניסוי
            </div>
            <h2 className="text-3xl font-bold mb-4">אותה מערכת, 4 דרכים</h2>
            <p className="text-gray-500">בדקתי מה באמת נותן תוצאות במשרד ממשלתי: דרישות בלבד? פתרון? מסכים? או פשוט 'לזרוק פרומפט'?</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIMENT_DATA.map((data) => (
            <MethodologyCard key={data.id} data={data} />
          ))}
        </div>
      </section>

      {/* 5. Metrics & Results */}
      <section className="mb-24 bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-slate-600 uppercase bg-slate-50 rounded-lg border border-slate-100">
            פרק 5: המדדים
          </div>
          <h2 className="text-3xl font-bold">איך מדדנו הצלחה?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <div className="text-4xl">⏱️</div>
            <h4 className="font-bold">זמן ל-MVP</h4>
            <p className="text-sm text-gray-500">מתי מגיעים למשהו שעובד וניתן להציג לבעלי עניין?</p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl">🛡️</div>
            <h4 className="font-bold">אבטחה ומדיניות</h4>
            <p className="text-sm text-gray-500">עמידה בבקרות, ניטור, הרשאות ופרטיות מידע.</p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl">📐</div>
            <h4 className="font-bold">דיוק פונקציונלי</h4>
            <p className="text-sm text-gray-500">עד כמה המערכת באמת פותרת את הבעיה בלי חורים לוגיים.</p>
          </div>
        </div>
        
        {/* The Comparison Summary */}
        <div className="mt-16 pt-16 border-t border-gray-50 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">המסקנה מהתוצאות:</h3>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            "B נתן את התוצאה הכי עקבית, C נתן וואו רגעי אבל חורג מהרגולציה, ו-D הוכח כאיזון המושלם למנהל מוצר שרוצה לבנות מהר ובטוח."
          </p>
        </div>
      </section>

      {/* 8. Matrix: One-man show? */}
      <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest text-rose-600 uppercase bg-rose-50 rounded-lg border border-rose-100">
            פרק 8: הגבולות
          </div>
          <h2 className="text-4xl font-black text-gray-900">אז... One-Man Show?</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            לא תמיד. מתי PM יכול לבנות לבד ומתי חייבים צוות מלא? המפתח הוא <strong>רגישות הנתונים</strong> וקריטיות המערכת.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
              <h4 className="font-bold text-emerald-800 mb-2">לבד (MVP/Internal)</h4>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>• כלי עבודה פנימיים</li>
                <li>• הוכחת רעיון (PoC)</li>
                <li>• מערכות ללא מידע רגיש</li>
              </ul>
            </div>
            <div className="p-6 bg-rose-50 rounded-2xl border border-rose-100">
              <h4 className="font-bold text-rose-800 mb-2">עם צוות (Production)</h4>
              <ul className="text-sm text-rose-700 space-y-1">
                <li>• מערכות ליבה לאזרח</li>
                <li>• ניהול מידע רגיש (PII)</li>
                <li>• סקייל גבוה וזמינות</li>
              </ul>
            </div>
          </div>
        </div>

        {/* The 2x2 Matrix Visual */}
        <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-xl" dir="ltr">
          <div className="relative h-[400px] w-full border-l-2 border-b-2 border-slate-900 ml-8 mb-8">
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-black uppercase tracking-widest text-slate-400">Criticality / Impact</div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs font-black uppercase tracking-widest text-slate-400">Data Sensitivity</div>
            
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200"></div>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-slate-200"></div>

            {/* Matrix Content */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white p-4 rounded-2xl font-bold shadow-lg">PM STUDIO</div>
            <div className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white p-4 rounded-2xl font-bold">HYBRID TEAM</div>
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 bg-slate-900 text-white p-4 rounded-2xl font-bold">FULL TEAM</div>
            <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2 bg-emerald-500 text-white p-4 rounded-2xl font-bold">SOLO BUILD</div>
          </div>
        </div>
      </section>

      {/* 9. Gov Operating Model */}
      <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-widest text-indigo-300 uppercase bg-white/10 rounded-lg border border-white/20">
              פרק 9: המודל הממשלתי
            </div>
            <h2 className="text-4xl font-black mb-8">שומרי סף בלי לעצור חדשנות</h2>
            <p className="text-xl text-indigo-100 leading-relaxed opacity-80 mb-8">
              בממשלה, אי אפשר פשוט "לרוץ". בנינו מודל שמאפשר ל-PM לבנות מהר, אבל עם בקרות מובנות.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex gap-4 items-center">
              <div className="w-6 h-6 rounded-full border-2 border-indigo-400 flex items-center justify-center text-indigo-400 text-xs">1</div>
              <div>
                <h4 className="font-bold">Sandbox & Synthetic Data</h4>
                <p className="text-xs opacity-60">פיתוח בסביבה מבודדת ללא נתונים אמיתיים בשלב ה-Vibe.</p>
              </div>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex gap-4 items-center">
              <div className="w-6 h-6 rounded-full border-2 border-indigo-400 flex items-center justify-center text-indigo-400 text-xs">2</div>
              <div>
                <h4 className="font-bold">Security Checklist</h4>
                <p className="text-xs opacity-60">תיקוף אוטומטי של הרשאות ופרטיות לפני חיבור לקוד.</p>
              </div>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex gap-4 items-center">
              <div className="w-6 h-6 rounded-full border-2 border-indigo-400 flex items-center justify-center text-indigo-400 text-xs">3</div>
              <div>
                <h4 className="font-bold">Handoff Review</h4>
                <p className="text-xs opacity-60">מעבר מסודר לצוות פיתוח עבור סקייל ותחזוקה ארוכה.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. New PM Skills */}
      <section className="mb-24">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-pink-600 uppercase bg-pink-50 rounded-lg border border-pink-100">
            פרק 10: התפתחות מקצועית
          </div>
          <h2 className="text-3xl font-bold">הכישורים החדשים שלכם</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center space-y-4">
            <div className="text-3xl">💬</div>
            <h4 className="font-black">Prompting as Code</h4>
            <p className="text-xs text-gray-500">דיוק, קונטקסט וגבולות ככלי עבודה מרכזי.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center space-y-4">
            <div className="text-3xl">🧐</div>
            <h4 className="font-black">Product QA</h4>
            <p className="text-xs text-gray-500">בדיקת תרחישי קצה ודיוק לוגי במקום רק לכתוב מסמך.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center space-y-4">
            <div className="text-3xl">🤖</div>
            <h4 className="font-black">AI-Ready PRD</h4>
            <p className="text-xs text-gray-500">כתיבת דרישות שמובנות למודל (מסכים, חוקים, דוגמאות).</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center space-y-4">
            <div className="text-3xl">🛡️</div>
            <h4 className="font-black">Risk Orchestration</h4>
            <p className="text-xs text-gray-500">ניהול פרטיות ואבטחה כחלק בלתי נפרד מהבנייה.</p>
          </div>
        </div>
      </section>

      {/* 11. Tomorrow Morning */}
      <section className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-lg border border-indigo-100">
            פרק 11: איך מתחילים?
          </div>
          <h2 className="text-4xl font-black mb-8">מחר בבוקר בגילדה</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2">תבנית PRD-ל-AI</h4>
                <p className="text-gray-600 leading-relaxed">תיצרו לעצמכם תבנית שכוללת מסכים, חוקים והרשאות – כזו שהמודל יכול "לאכול" בקלות.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h4 className="text-xl font-bold mb-2">ספריית Prompts משותפת</h4>
                <p className="text-gray-600 leading-relaxed">מה עבד במשרד הפנים? מה נכשל במשרד הבריאות? הידע חייב להיות משותף.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h4 className="text-xl font-bold mb-2">פיילוט Low-Risk</h4>
                <p className="text-gray-600 leading-relaxed">תבחרו כלי פנימי אחד, ללא נתונים רגישים, ותבנו אותו מקצה לקצה לבד.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
           <AIAdvisor />
        </div>
      </section>

      {/* 12. Final Message */}
      <footer className="py-24 border-t border-gray-100 text-center bg-white rounded-[4rem] mb-12 shadow-inner">
        <h2 className="text-5xl font-black mb-8">לא One-Man Show.<br /><span className="text-indigo-600">כן One-PM Studio.</span></h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
          מנהל המוצר לא מחליף את הצוות – הוא הופך ל"מכפיל איכות". הצוות הופך להיות שומר הסף של הפרודקשן, וה-PM הופך להיות המנוע של החדשנות.
        </p>
        <div className="flex justify-center gap-4 mt-4 opacity-50">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
        </div>
        <p className="mt-8 text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">Created with Vibe Coding for Government PM Guild</p>
      </footer>
    </Layout>
  );
};

export default App;
