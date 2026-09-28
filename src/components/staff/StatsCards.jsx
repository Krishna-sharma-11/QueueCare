// StatsCards component summarizing today's appointment queue statistics
import React from 'react';
import { Users, Clock, Stethoscope, CheckCircle2, XCircle } from 'lucide-react';

export const StatsCards = ({ queue = [] }) => {
  const stats = {
    total: queue.length,
    waiting: queue.filter((q) => q.status === 'Waiting').length,
    inConsult: queue.filter((q) => q.status === 'In Consult').length,
    completed: queue.filter((q) => q.status === 'Completed').length,
    cancelled: queue.filter((q) => q.status === 'Cancelled').length,
  };

  const ITEMS = [
    { label: 'Total Today', count: stats.total, icon: Users, color: 'text-slate-700 bg-slate-100' },
    { label: 'Waiting', count: stats.waiting, icon: Clock, color: 'text-amber-700 bg-amber-100' },
    { label: 'In Consult', count: stats.inConsult, icon: Stethoscope, color: 'text-emerald-700 bg-emerald-100' },
    { label: 'Completed', count: stats.completed, icon: CheckCircle2, color: 'text-blue-700 bg-blue-100' },
    { label: 'Cancelled', count: stats.cancelled, icon: XCircle, color: 'text-rose-700 bg-rose-100' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {ITEMS.map((item) => (
        <div key={item.label} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase block">{item.label}</span>
            <span className="text-2xl font-black text-slate-900 mt-1 block">{item.count}</span>
          </div>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}>
            <item.icon className="w-5 h-5" />
          </div>
        </div>
      ))}
    </div>
  );
};
