
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="intro" className="py-16 md:py-24 text-center">
      <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
        המהפכה כבר כאן
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
        האם מנהל מוצר יכול להיות <br />
        <span className="bg-clip-text text-transparent vibe-gradient">צוות של בן אדם אחד?</span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
        מנהלי מוצר במשרדי ממשלה רגילים לכתיבת תיקי מוצר (PRD) והעברתם לצוותי פיתוח. 
        בעידן ה-Vibe Coding, הכלים מאפשרים לנו לדלג על התווך ולבנות את המערכת בעצמנו.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#experiment" className="px-8 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg">
          לצפייה בתוצאות הניסוי
        </a>
        <a href="#advisor" className="px-8 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all">
          שאל את ה-AI Advisor
        </a>
      </div>
    </section>
  );
};
