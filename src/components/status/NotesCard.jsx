// NotesCard component displaying doctor's prescription / consultation notes
import React from 'react';
import { FileText } from 'lucide-react';

export const NotesCard = ({ notes, status }) => {
  if (!notes || (status !== 'In Consult' && status !== 'Completed')) return null;

  return (
    <div className="bg-emerald-50/60 rounded-3xl p-6 border border-emerald-200 shadow-sm space-y-2">
      <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
        <FileText className="w-4 h-4 text-emerald-600" />
        <span>Doctor's Prescription & Consultation Notes</span>
      </div>
      <p className="text-slate-800 text-sm whitespace-pre-line leading-relaxed font-mono bg-white/80 p-4 rounded-xl border border-emerald-100">
        {notes}
      </p>
    </div>
  );
};
