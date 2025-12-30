
import React from 'react';
import { ExperimentResult } from '../types';

interface Props {
  data: ExperimentResult;
}

export const MethodologyCard: React.FC<Props> = ({ data }) => {
  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-emerald-600';
    if (score >= 70) return 'text-indigo-600';
    if (score >= 50) return 'text-amber-600';
    return 'text-rose-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 85) return 'bg-emerald-500';
    if (score >= 70) return 'bg-indigo-500';
    if (score >= 50) return 'bg-amber-500';
    return 'bg-rose-500';
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all group flex flex-col h-full">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-10 h-10 rounded-xl ${getScoreBg(data.accuracy)} flex items-center justify-center text-white font-black text-lg shadow-lg`}>
            {data.id.toUpperCase()}
          </div>
          <div className="px-2 py-1 bg-gray-50 rounded text-[9px] font-black text-gray-400 uppercase tracking-widest">מתודולוגיה</div>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{data.title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{data.description}</p>
      </div>
      
      <div className="space-y-3 mb-6 flex-grow">
        <MetricBar label="מהירות" score={data.speed} />
        <MetricBar label="דיוק" score={data.accuracy} />
        <MetricBar label="חוויה (UX)" score={data.ux} />
        <MetricBar label="אבטחה" score={data.security} />
      </div>

      <div className="pt-4 border-t border-gray-50 mt-auto">
        <div className="flex flex-col gap-1.5">
          {data.pros.slice(0, 1).map((pro, i) => (
            <span key={i} className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">✓ {pro}</span>
          ))}
          {data.cons.slice(0, 1).map((con, i) => (
            <span key={i} className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-1 rounded-md">✗ {con}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const MetricBar = ({ label, score }: { label: string, score: number }) => {
  const getBg = (s: number) => {
    if (s >= 85) return 'bg-emerald-500';
    if (s >= 70) return 'bg-indigo-500';
    if (s >= 50) return 'bg-amber-500';
    return 'bg-rose-500';
  };
  return (
    <div className="bg-gray-50 p-2 rounded-xl border border-gray-100">
      <div className="flex justify-between items-center mb-1">
        <span className="text-[8px] font-bold text-gray-400 uppercase">{label}</span>
        <span className="text-[9px] font-black text-gray-700">{score}%</span>
      </div>
      <div className="h-1 w-full bg-white rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${getBg(score)} transition-all duration-1000`} style={{ width: `${score}%` }}></div>
      </div>
    </div>
  );
}
