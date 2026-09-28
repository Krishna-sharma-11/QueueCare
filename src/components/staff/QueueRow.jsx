// QueueRow component for rendering appointment details in staff dashboard table
import React from 'react';
import { StatusBadge } from '../common/StatusBadge';
import { ActionButtons } from './ActionButtons';
import { formatPhone, formatWaitTime } from '../../utils/formatters';

export const QueueRow = ({ item, onUpdateStatus, onOpenReschedule, onOpenNotes }) => {
  return (
    <tr className="hover:bg-slate-50/80 transition-colors border-b border-slate-100 text-sm">
      <td className="px-4 py-3 font-semibold text-slate-800">
        #{item.queueNumber}
        <span className="block text-xs font-mono text-teal-700 font-bold">{item.slot}</span>
      </td>

      <td className="px-4 py-3">
        <div className="font-semibold text-slate-900">{item.patientName}</div>
        <div className="text-xs text-slate-500">{formatPhone(item.patientPhone)}</div>
        {item.reason && <div className="text-[11px] text-slate-400 italic truncate max-w-[180px]">{item.reason}</div>}
      </td>

      <td className="px-4 py-3">
        <div className="font-medium text-slate-800">{item.doctor?.name}</div>
        <div className="text-xs text-teal-700">{item.doctor?.specialization}</div>
      </td>

      <td className="px-4 py-3 whitespace-nowrap">
        <StatusBadge status={item.status} />
        {['Waiting', 'Scheduled'].includes(item.status) && (
          <div className="text-[11px] text-slate-500 mt-1">Wait: {formatWaitTime(item.estimatedWaitMinutes)}</div>
        )}
      </td>

      <td className="px-4 py-3 text-right">
        <ActionButtons
          appointment={item}
          onUpdateStatus={onUpdateStatus}
          onOpenReschedule={onOpenReschedule}
          onOpenNotes={onOpenNotes}
        />
      </td>
    </tr>
  );
};
