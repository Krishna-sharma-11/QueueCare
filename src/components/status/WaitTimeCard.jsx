// WaitTimeCard component showing position in queue and estimated wait time countdown
import React from 'react';
import { Hourglass, Users } from 'lucide-react';
import { formatWaitTime } from '../../utils/formatters';

export const WaitTimeCard = ({ queuePosition, estimatedWaitMinutes, status }) => {
  if (status === 'Completed' || status === 'Cancelled') return null;

  return (
    <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-3xl p-6 text-white shadow-xl grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
      <div className="space-y-1">
        <span className="text-teal-200 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
          <Hourglass className="w-4 h-4 text-teal-300 animate-spin" /> Estimated Wait Time
        </span>
        <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          {formatWaitTime(estimatedWaitMinutes)}
        </div>
        <p className="text-teal-100 text-xs pt-1">Calculated from current live doctor consultation pace.</p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center space-y-1">
        <span className="text-teal-200 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5">
          <Users className="w-4 h-4 text-teal-300" /> Queue Position
        </span>
        <div className="text-3xl font-extrabold text-white">
          {status === 'In Consult' ? 'NOW IN CONSULT' : `#${queuePosition || 1}`}
        </div>
        <p className="text-teal-100 text-[11px]">
          {status === 'In Consult' ? 'Doctor is currently attending to you' : 'Patients ahead of you'}
        </p>
      </div>
    </div>
  );
};
