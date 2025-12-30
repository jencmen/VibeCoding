
import React, { useState, useRef, useEffect } from 'react';
import { askVibeAdvisor } from '../geminiService';
import { ChatMessage } from '../types';

interface Props {
  isCompact?: boolean;
}

export const AIAdvisor: React.FC<Props> = ({ isCompact = false }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      const response = await askVibeAdvisor(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "שגיאה בחיבור." }]);
    } finally {
      setLoading(false);
    }
  };

  if (isCompact) {
    return (
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[400px]">
        <div className="p-4 bg-gray-50 border-b border-gray-100">
          <h3 className="font-bold text-sm text-gray-700">AI Advisor (Beta)</h3>
        </div>
        <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <p className="text-xs text-gray-400 text-center mt-10">שאל אותי משהו על העתיד...</p>
          )}
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[90%] p-3 rounded-xl text-xs ${
                msg.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800 shadow-sm'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && <div className="text-xs text-gray-400 animate-pulse">חושב...</div>}
        </div>
        <form onSubmit={handleSubmit} className="p-3 border-t border-gray-100 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="שאלה קצרה..."
            className="flex-grow text-xs p-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none"
          />
          <button type="submit" disabled={loading} className="p-2 bg-gray-900 text-white rounded-lg">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </form>
      </div>
    );
  }

  return (
    <section id="advisor" className="py-16 bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden my-16">
      <div className="px-8 pb-8 border-b border-gray-100">
        <h2 className="text-3xl font-bold mb-2">AI Advisor למנהלי מוצר</h2>
        <p className="text-gray-600">יש לך שאלות על המעבר לעולם הבנייה העצמאית במשרד ממשלתי? שאל את ה-AI המומחה שלנו.</p>
      </div>
      
      <div ref={scrollRef} className="h-[450px] overflow-y-auto p-8 space-y-6 bg-gray-50/50">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 mt-20">
            <div className="w-16 h-16 vibe-gradient rounded-full mx-auto mb-4 opacity-20 flex items-center justify-center text-white text-2xl font-bold italic">V</div>
            <p>התחל שיחה... נסה לשאול "איך מתמודדים עם אבטחת מידע ב-Vibe Coding?"</p>
          </div>
        )}
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`max-w-[80%] p-4 rounded-2xl ${
              msg.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-tr-none' 
                : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'
            }`}>
              <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-end">
            <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-tl-none shadow-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-.5s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-6 bg-white border-t border-gray-100 flex gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="כתוב כאן את השאלה שלך..."
          className="flex-grow p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 disabled:opacity-50 transition-all shadow-md"
        >
          שאל
        </button>
      </form>
    </section>
  );
};
