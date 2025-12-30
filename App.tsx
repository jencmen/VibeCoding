
import React from 'react';
import { Layout } from './components/Layout';
import { MethodologyCard } from './components/MethodologyCard';
import { AIAdvisor } from './components/AIAdvisor';
import { EXPERIMENT_DATA } from './constants';

const App: React.FC = () => {
  return (
    <Layout>
      {/* Chapter 1: The Problem & The Vision */}
      <section className="mb-16 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full border border-indigo-100">
          פרק א': המהפכה השקטה
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
          מכתיבת מסמכים <br />
          <span className="bg-clip-text text-transparent vibe-gradient">לבניית עולמות</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed mb-10">
          בעבר, מנהל המוצר הממשלתי היה "מתרגם" דרישות למפתחים. היום, בעזרת Vibe Coding, 
          הוא הופך לאדריכל ומבצע (Orchestrator) שמחזיק את הקוד בידיים שלו.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 transform hover:-translate-y-1 transition-transform">
            <div className="text-4xl font-black text-indigo-600 mb-2">75%</div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">חיסכון בזמן ה-Go-to-Market</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 transform hover:-translate-y-1 transition-transform">
            <div className="text-4xl font-black text-purple-600 mb-2">1:1</div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">דיוק בין חזון לביצוע</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 transform hover:-translate-y-1 transition-transform">
            <div className="text-4xl font-black text-pink-600 mb-2">∞</div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">יכולת איטרציה עצמאית</p>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Lab (The Experiment) */}
      <section id="experiment" className="mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-purple-600 uppercase bg-purple-50 rounded-lg border border-purple-100">
              פרק ב': המעבדה
            </div>
            <h2 className="text-3xl font-bold mb-4">בחינת הגבולות: 4 דרכים לבניית אותה מערכת</h2>
            <p className="text-gray-500">האם באמת צריך PRD של 40 עמודים? בדקתי את זה עבורכם בעזרת Base 44 ו-Gemini.</p>
          </div>
          <div className="flex gap-2">
            <div className="px-4 py-2 bg-gray-100 rounded-lg text-xs font-bold text-gray-500">נתונים בזמן אמת</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIMENT_DATA.map((data, index) => (
            <div key={data.id} className="relative">
              {index < EXPERIMENT_DATA.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -left-3 transform -translate-y-1/2 z-10">
                  <svg className="w-6 h-6 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7" /></svg>
                </div>
              )}
              <MethodologyCard data={data} />
            </div>
          ))}
        </div>
      </section>

      {/* Chapters 3, 4 & 5 Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
        <div className="lg:col-span-8 space-y-16">
          {/* Chapter 3: The Engine & Matrix */}
          <div>
            <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-lg border border-indigo-100">
              פרק ג': המנוע והכלים
            </div>
            <section className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
                  {/* Left side (The Vibe Matrix) */}
                  <div className="xl:col-span-7 bg-slate-50/50 p-8 rounded-[2.5rem] border border-gray-100 shadow-inner relative" dir="ltr">
                    <h4 className="text-[11px] font-black text-gray-400 mb-10 text-center uppercase tracking-[0.3em]">Vibe Coding Capabilities Matrix</h4>
                    
                    <div className="relative h-[400px] w-full border-l-2 border-b-2 border-gray-300 ml-4 mb-10">
                      {/* Axis Labels */}
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[12px] font-black text-gray-800 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full uppercase border border-gray-100">High Ability/Power</div>
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[12px] font-black text-gray-800 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full uppercase border border-gray-100">Lower Ability/Power</div>
                      
                      <div className="absolute -left-24 top-1/2 -translate-y-1/2 -rotate-90 text-[11px] font-bold text-gray-500 uppercase whitespace-nowrap">Less Technical</div>
                      <div className="absolute left-[105%] top-1/2 -translate-y-1/2 -rotate-90 text-[11px] font-bold text-gray-500 uppercase whitespace-nowrap">More Technical</div>

                      {/* Matrix Cross */}
                      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-300/50"></div>
                      <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-gray-300/50"></div>

                      {/* Tool Clusters */}
                      <div className="absolute bottom-[88%] left-[80%] flex items-center gap-1.5 p-1 bg-white rounded shadow-sm border border-gray-50">
                         <span className="text-orange-500 text-sm">✴</span>
                         <span className="text-[10px] font-bold text-gray-700">Claude</span>
                      </div>
                      <div className="absolute bottom-[83%] left-[80%]">
                         <span className="text-[10px] font-bold text-gray-500">Codex</span>
                      </div>
                      
                      <div className="absolute bottom-[82%] left-[62%] flex items-center gap-1.5 p-1.5 bg-white rounded shadow-md border border-gray-100">
                         <div className="w-3.5 h-3.5 bg-gray-900 rounded-sm flex items-center justify-center text-[8px] text-white">◈</div>
                         <div className="flex flex-col leading-none">
                           <span className="text-[10px] font-black">CURSOR</span>
                           <span className="text-[6px] text-gray-400">A Google Antigravity</span>
                         </div>
                      </div>

                      <div className="absolute bottom-[78%] left-[53%] flex items-center gap-1.5 p-1.5 bg-white rounded shadow-sm border border-gray-200">
                         <div className="w-4 h-3 bg-orange-600 rounded-sm flex flex-col gap-[1px] p-[1px]">
                           <div className="flex gap-[1px] h-full"><div className="bg-white w-1/2"></div><div className="bg-white w-1/2"></div></div>
                         </div>
                         <span className="text-[10px] font-bold">replit</span>
                      </div>

                      <div className="absolute bottom-[70%] left-[45%] flex items-center gap-1.5 p-2 bg-white rounded-xl shadow-xl border-2 border-indigo-50 z-30 transform -translate-x-1/2">
                         <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-[10px] text-white shadow-sm">♥</div>
                         <span className="text-[12px] font-black text-slate-800">Lovable</span>
                      </div>

                      <div className="absolute bottom-[60%] left-[48%] flex items-center gap-1 p-1.5 bg-slate-900 text-white rounded-lg shadow-lg z-20">
                         <span className="text-yellow-400 text-xs">⚡</span>
                         <span className="text-[10px] font-bold tracking-tighter">bolt.new</span>
                      </div>

                      <div className="absolute bottom-[68%] left-[55%] flex items-center gap-1.5 p-1.5 bg-gray-900 text-white rounded shadow">
                         <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                         <span className="text-[10px] font-bold">Rork</span>
                      </div>

                      <div className="absolute bottom-[78%] left-[32%] flex items-center gap-1.5 p-2 bg-white rounded-lg shadow-sm border border-gray-100">
                         <div className="w-4 h-4 bg-orange-500 rounded-full border border-white"></div>
                         <span className="text-[11px] font-black">Base 44</span>
                      </div>
                      
                      <div className="absolute bottom-[85%] left-[32%] flex items-center gap-1.5 p-1.5 bg-gray-800 text-white rounded shadow">
                         <span className="text-[9px] font-bold">emergent</span>
                      </div>

                      <div className="absolute bottom-[66%] left-[18%] flex items-center gap-2 p-2.5 bg-slate-900 text-white rounded-xl shadow-2xl border border-slate-700">
                         <span className="text-[10px] font-black tracking-tight uppercase">Google AI Studio</span>
                      </div>

                      <div className="absolute bottom-[22%] left-[18%] flex items-center gap-1 p-2 bg-white rounded-lg shadow-sm border border-gray-100">
                         <span className="text-[10px] font-medium text-gray-800">new.website</span>
                      </div>

                      <div className="absolute bottom-[10%] left-[25%] flex items-center gap-1.5 p-2 bg-white rounded-lg shadow-sm border border-gray-100">
                         <span className="text-[12px] text-gray-500">✥</span>
                         <span className="text-[10px] font-black text-gray-800">Figma Make</span>
                      </div>

                      <div className="absolute bottom-[2%] left-[25%] flex items-center gap-1.5 p-2 bg-indigo-50 rounded-lg shadow-sm border border-indigo-100">
                         <span className="text-[9px] font-black text-indigo-600 uppercase">UX PILOT</span>
                      </div>

                      <div className="absolute bottom-[65%] left-[49%] z-40 pointer-events-none transform translate-y-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                          <path d="M6 3L18 11.5L14 13L16.5 18L14.5 19.5L12 14.5L8.5 18.5V3Z" fill="black" stroke="white" strokeWidth="2"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Right side (Main Tool Highlights) */}
                  <div className="xl:col-span-5 flex flex-col justify-center gap-6">
                    <h3 className="text-2xl font-bold mb-2">המנוע מאחורי הניסוי</h3>
                    <p className="text-gray-500 mb-6 leading-relaxed">שימוש נכון בכלים הללו מאפשר למנהל מוצר בודד להפיק מערכות מורכבות ללא צוות פיתוח מסורתי.</p>
                    
                    <div className="flex items-start gap-5 p-7 bg-indigo-50 rounded-3xl border border-indigo-100 shadow-sm hover:shadow-md transition-all">
                      <div className="w-16 h-16 bg-white rounded-2xl flex-shrink-0 flex items-center justify-center text-gray-900 font-black text-2xl shadow-sm border border-indigo-100">
                        <div className="w-10 h-10 rounded-full bg-orange-500 mr-1 opacity-10 absolute"></div>
                        <span className="relative z-10">44</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1 text-indigo-900">Base 44: הסטודיו לביצוע</h4>
                        <p className="text-indigo-800/70 text-sm leading-relaxed">תרגום ה-"Vibe" לממשק משתמש וקוד תוך דקות. הכלי המרכזי בשלב ה-Iteration.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5 p-7 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl">
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">
                        GOOGLE
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">Google AI Studio</h4>
                        <p className="text-indigo-100/70 text-sm leading-relaxed">המוח שמאחורי פירוק ה-PRD לפרומפטים ברי-ביצוע. כאן נבנה ההיגיון העסקי.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Chapter 4: Results Analysis */}
          <div>
            <div className="inline-block px-4 py-1 mb-4 text-[10px] font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 rounded-lg border border-emerald-100">
              פרק ד': ניתוח תוצאות הניסוי
            </div>
            <section className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-bold mb-8 italic">האמת שמאחורי הקוד</h2>
              <p className="text-gray-600 mb-10">בניית אותה המערכת ב-4 דרכים שונות הניבה תוצאות מפתיעות. הנה הניתוח המדויק של כל גישה:</p>
              
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">A</span>
                    <h4 className="font-bold text-gray-800">דרישות בלבד: "הימור יצירתי"</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    התוצאה נראתה מצוין, אבל הלוגיקה הממשלתית (ניהול הרשאות) הייתה שגויה לחלוטין. ה-AI "המציא" פתרונות שלא עומדים ברגולציה. נדרשו 12 סבבי תיקון כדי להגיע למוצר עובד.
                  </p>
                </div>

                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">B</span>
                    <h4 className="font-bold text-gray-800">PRD מפורט: "המראה השמרנית"</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    הדיוק היה מושלם, אבל המערכת הרגישה מיושנת. זמן הכתיבה של ה-PRD היה ארוך יותר מזמן הפיתוח עצמו. פספסנו את היכולת של ה-AI להציע שיפורי UX מודרניים.
                  </p>
                </div>

                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center text-white font-bold">C</span>
                    <h4 className="font-bold text-gray-800">פרומפט כללי: "אפקט ה-וואו הריק"</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    קיבלנו דף נחיתה מרהיב תוך 20 שניות. אבל כשניסינו ללחוץ על כפתור - שום דבר לא עבד. זו "שיטת הצעצוע" - מצוינת למצגות, גרועה למוצרים אמיתיים.
                  </p>
                </div>

                <div className="p-8 bg-emerald-50 rounded-3xl border-2 border-emerald-200 relative overflow-hidden">
                  <div className="absolute top-4 left-4">
                    <div className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-bounce uppercase">The Winner</div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">D</span>
                    <h4 className="text-xl font-bold text-emerald-900">טעינה הדרגתית: "סוד ההצלחה"</h4>
                  </div>
                  <p className="text-emerald-800 leading-relaxed">
                    הגישה שסיפקה את ה-MVP הטוב ביותר. על ידי הזנת ה-Core תחילה ואז הרחבת יכולות (Iterative Feeding), המודל שמר על הקשר (Context) נקי והצליח ליישם לוגיקה מורכבת ללא טעויות. זהו העתיד של ה-PM האוטונומי.
                  </p>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-gray-100">
                <h3 className="text-2xl font-bold mb-8 text-center md:text-right">המסקנה המוסרית של הסיפור</h3>
                <div className="relative p-8 bg-gray-50 rounded-3xl border-r-4 border-indigo-600 italic">
                  <svg className="absolute top-4 left-4 w-8 h-8 text-gray-200 rotate-180" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.899 14.37 15.862 15.017 15.008C15.664 14.154 16.634 13.52 17.753 13.149L17.753 10.334C15.429 10.669 13.518 11.972 12.35 13.844C11.182 15.716 10.756 18.064 11.074 20.354L11.074 21H14.017ZM17.017 21H20.017L20.017 20.354C20.335 18.064 19.909 15.716 18.741 13.844C17.573 11.972 15.662 10.669 13.338 10.334L13.338 13.149C14.457 13.52 15.427 14.154 16.074 15.008C16.721 15.862 17.074 16.899 17.074 18V21H17.017Z"/></svg>
                  <p className="text-xl text-gray-700 leading-relaxed relative z-10">
                    "מנהל מוצר בעידן ה-Vibe הוא כבר לא רק 'כותב'. הוא 'במאי'. 
                    האיכות של המוצר הסופי כבר לא נקבעת לפי כמה ה-PRD היה מפורט, 
                    אלא לפי כמה ה-PM הבין את ה'נשמה' של המערכת וידע להנחות את ה-AI בתהליך הדרגתי."
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Sidebar: Chapter 5 AI Advisor */}
        <div className="lg:col-span-4 sticky top-8">
          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-pink-600 uppercase bg-pink-50 rounded-lg border border-pink-100">
            פרק ה': ייעוץ בזמן אמת
          </div>
          <AIAdvisor />
          
          <div className="mt-8 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-3">טיפ למנהלי מוצר בממשלה:</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              אל תנסו לבנות הכל בבת אחת. התחילו ב-PRD של הליבה, ודאו שה-Vibe Coding תפס את ההיגיון, ורק אז הוסיפו את המורכבות. זו הדרך היחידה להבטיח אבטחת מידע ודיוק פונקציונלי.
            </p>
          </div>
        </div>
      </div>

      <footer className="py-12 border-t border-gray-100 text-center">
        <p className="text-sm text-gray-400 font-medium">נבנה ב-Vibe Coding כדי לספר את סיפור המהפכה של מנהלי המוצר במגזר הציבורי</p>
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
