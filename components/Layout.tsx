
import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F8F9FC] text-gray-900 flex flex-col">
      {/* Top Dashboard Nav */}
      <nav className="bg-white border-b border-gray-200 py-4 px-8 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 vibe-gradient rounded-xl shadow-lg flex items-center justify-center text-white font-bold text-xl">
              V
            </div>
            <div>
              <h1 className="text-lg font-bold leading-none">PM Role in vibe coding era</h1>
              <span className="text-[10px] text-indigo-500 font-bold uppercase tracking-widest">Innovation Analysis</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-bold text-indigo-700 uppercase">Live Builder Mode</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-[1400px] mx-auto w-full px-8 py-8 flex-grow">
        {children}
      </main>
    </div>
  );
};
