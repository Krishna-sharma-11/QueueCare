// QueueInfo component for appointment details card in patient portal
import React from 'react';
import { Calendar, Clock, User, Phone, Tag } from 'lucide-react';
import { SafeImage } from '../common/SafeImage';
import { formatDateDisplay } from '../../utils/dateUtils';
import { formatPhone } from '../../utils/formatters';

export const QueueInfo = ({ appointment }) => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center space-x-3">
          <SafeImage
            src={appointment.doctor?.photoUrl}
            alt={appointment.doctor?.name}
            name={appointment.doctor?.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-teal-500/30"
          />
          <div>
            <h3 className="font-bold text-slate-900 text-lg">{appointment.doctor?.name}</h3>
            <p className="text-teal-700 text-xs font-semibold">{appointment.doctor?.specialization}</p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Queue Slot</span>
          <span className="text-2xl font-black text-teal-700">#{appointment.queueNumber}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
          <span className="text-slate-400 text-xs block flex items-center gap-1">
            <User className="w-3 h-3 text-teal-600" /> Patient
          </span>
          <span className="font-semibold text-slate-800 truncate block mt-0.5">{appointment.patientName}</span>
        </div>

        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
          <span className="text-slate-400 text-xs block flex items-center gap-1">
            <Phone className="w-3 h-3 text-teal-600" /> Mobile
          </span>
          <span className="font-semibold text-slate-800 truncate block mt-0.5">{formatPhone(appointment.patientPhone)}</span>
        </div>

        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
          <span className="text-slate-400 text-xs block flex items-center gap-1">
            <Calendar className="w-3 h-3 text-teal-600" /> Date
          </span>
          <span className="font-semibold text-slate-800 truncate block mt-0.5">{formatDateDisplay(appointment.date)}</span>
        </div>

        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
          <span className="text-slate-400 text-xs block flex items-center gap-1">
            <Clock className="w-3 h-3 text-teal-600" /> Time Slot
          </span>
          <span className="font-semibold text-teal-700 truncate block mt-0.5">{appointment.slot}</span>
        </div>
      </div>

      {appointment.reason && (
        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs text-slate-600 flex items-start gap-2">
          <Tag className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-700">Visit Reason: </span>
            {appointment.reason}
          </div>
        </div>
      )}
    </div>
  );
};
