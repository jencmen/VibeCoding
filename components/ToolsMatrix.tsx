
import React from 'react';

export const ToolsMatrix: React.FC = () => {
  return (
    <div className="bg-white p-16 rounded-[3rem] border border-gray-100 shadow-2xl overflow-hidden" dir="ltr">
      <div className="relative h-[600px] w-full max-w-5xl mx-auto font-sans">
        
        {/* Axis Labels */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 text-lg font-bold text-gray-900">High Ability/Power</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-10 text-lg font-bold text-gray-900">Lower Ability/Power</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-lg font-bold text-gray-900">Less technical</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-lg font-bold text-gray-900">More technical</div>

        {/* The Cross Axes */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gray-900"></div>
        <div className="absolute left-0 right-0 top-1/2 h-[3px] bg-gray-900"></div>

        {/* --- Top Left Quadrant --- */}
        
        {/* Base 44 */}
        <div className="absolute top-[18%] left-[25%] flex items-center gap-2 bg-white px-2 py-1 rounded shadow-sm">
          <div className="w-5 h-5 bg-[#FF5C00] rounded-full flex items-center justify-center">
             <div className="w-3 h-[1px] bg-white opacity-40"></div>
          </div>
          <span className="text-sm font-bold text-gray-900">Base 44</span>
        </div>

        {/* Mocha */}
        <div className="absolute top-[25%] left-[32%] flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M4 20V4l8 8 8-8v16" />
          </svg>
          <span className="text-xs font-black text-gray-800">Mocha</span>
        </div>

        {/* Google AI Studio */}
        <div className="absolute top-[30%] left-[18%] bg-black text-white px-4 py-2 rounded shadow-md font-bold text-sm tracking-tight">
          Google AI Studio
        </div>

        {/* Dyad */}
        <div className="absolute top-[30%] left-[37%] flex items-center gap-1">
          <span className="text-purple-600 font-bold text-sm">d</span>
          <span className="text-[11px] font-bold text-gray-900">Dyad</span>
        </div>

        {/* emergent */}
        <div className="absolute top-[15%] left-[41%] bg-[#1A1A1A] text-white px-3 py-1.5 rounded font-bold text-sm uppercase tracking-widest">
          emergent
        </div>

        {/* --- Top Right Quadrant --- */}

        {/* replit */}
        <div className="absolute top-[15%] left-[53%] flex items-center gap-2 bg-white px-2 py-1 rounded shadow-sm border border-gray-50">
          <div className="w-4 h-4 text-[#F26230] font-black text-xs">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 3h14v4H6v4h10v4H6v4h14v4H2V3z"/></svg>
          </div>
          <span className="text-xs font-bold text-gray-800">replit</span>
        </div>

        {/* Lovable */}
        <div className="absolute top-[25%] left-[43%] flex items-center gap-2">
          <div className="w-5 h-5 bg-gradient-to-br from-[#FF4D4D] via-[#F9CB28] to-[#7000FF] rounded-md flex items-center justify-center text-[10px] text-white shadow-sm">
            ♥
          </div>
          <span className="text-lg font-black text-gray-900">Lovable</span>
        </div>

        {/* bolt.new */}
        <div className="absolute top-[30%] left-[49%] bg-[#1A1A1A] text-white px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-1 shadow-lg">
          <span className="text-yellow-400 font-bold text-sm">⚡</span>
          <span>bolt.new</span>
        </div>

        {/* Rork */}
        <div className="absolute top-[24%] left-[56%] bg-[#1A1A1A] text-white px-4 py-2 rounded-md flex items-center gap-2 shadow-md">
           <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
           <span className="text-sm font-bold tracking-tight">Rork</span>
        </div>

        {/* CURSOR */}
        <div className="absolute top-[10%] left-[65%] bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex flex-col items-start min-w-[140px]">
          <div className="flex items-center gap-2 mb-1">
             <div className="w-5 h-5 bg-gray-900 rounded-md flex items-center justify-center">
               <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="currentColor"><path d="M12 2L2 22h20L12 2z"/></svg>
             </div>
             <span className="text-sm font-black tracking-tighter text-gray-900">CURSOR</span>
          </div>
          <span className="text-[9px] font-bold text-blue-500 uppercase tracking-tight">A Google Antigravity</span>
        </div>

        {/* Claude */}
        <div className="absolute top-[12%] left-[81%] flex items-center gap-2">
           <div className="text-[#D97757]">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 0L14.5 9.5H24L16.5 15L19 24L12 18.5L5 24L7.5 15L0 9.5H9.5L12 0Z"/>
             </svg>
           </div>
           <span className="text-sm font-bold text-gray-800">Claude</span>
        </div>
        
        {/* Codex */}
        <div className="absolute top-[16%] left-[81%] text-sm font-bold text-gray-900">Codex</div>

        {/* --- Bottom Left Quadrant --- */}
        
        {/* new.website */}
        <div className="absolute bottom-[28%] left-[12%] bg-white px-4 py-2 rounded-md shadow-sm border border-gray-100 font-bold text-xs text-gray-900">
          new.website
        </div>

        {/* Figma Make */}
        <div className="absolute bottom-[18%] left-[21%] bg-white px-4 py-2 rounded-lg shadow-md border border-gray-100 flex items-center gap-2">
           <div className="flex flex-col gap-[1px]">
             <div className="flex gap-[1px]"><div className="w-1.5 h-1.5 bg-[#F24E1E] rounded-full"></div><div className="w-1.5 h-1.5 bg-[#FF7262] rounded-full"></div></div>
             <div className="flex gap-[1px]"><div className="w-1.5 h-1.5 bg-[#A259FF] rounded-full"></div><div className="w-1.5 h-1.5 bg-[#1ABCFE] rounded-full"></div></div>
             <div className="w-1.5 h-1.5 bg-[#0ACF83] rounded-full"></div>
           </div>
           <span className="text-sm font-black text-gray-900">Figma Make</span>
        </div>

        {/* UX PILOT */}
        <div className="absolute bottom-[7%] left-[21%] bg-white px-5 py-2.5 rounded-lg shadow-sm border border-gray-100">
          <span className="text-indigo-700 font-black text-xs uppercase tracking-[0.2em]">UX PILOT</span>
        </div>

        {/* 'A' Icon Box */}
        <div className="absolute bottom-[23%] left-[34%] bg-[#F0F0F0] p-2 rounded-xl border border-gray-200 shadow-inner flex items-center justify-center w-12 h-12">
           <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center font-black text-gray-300 text-xl">A</div>
        </div>

        {/* Pointer Cursor */}
        <div className="absolute top-[42%] right-[22%] pointer-events-none z-50">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
            <path d="M8 4L24 15.3333L18.6667 17.3333L22 24L19.3333 26L16 19.3333L11.3333 24.6667V4Z" fill="black" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
          </svg>
        </div>

      </div>
    </div>
  );
};
