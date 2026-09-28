// QueueTable component rendering desktop table and mobile card queue list
import React from 'react';
import { QueueRow } from './QueueRow';
import { EmptyState } from '../common/EmptyState';
import { Calendar } from 'lucide-react';

export const QueueTable = ({ queue, onUpdateStatus, onOpenReschedule, onOpenNotes }) => {
  if (!queue || queue.length === 0) {
    return <EmptyState title="Queue Empty" message="No appointments booked for today matching the current filter." icon={Calendar} />;
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <th className="px-4 py-3">Queue # / Slot</th>
              <th className="px-4 py-3">Patient</th>
              <th className="px-4 py-3">Doctor</th>
              <th className="px-4 py-3">Status / Wait</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {queue.map((item) => (
              <QueueRow
                key={item._id}
                item={item}
                onUpdateStatus={onUpdateStatus}
                onOpenReschedule={onOpenReschedule}
                onOpenNotes={onOpenNotes}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
