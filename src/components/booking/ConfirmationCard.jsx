// ConfirmationCard component displaying successful appointment details and tracking link
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Calendar, Clock, User, Activity, Copy } from 'lucide-react';
import { formatDateDisplay } from '../../utils/dateUtils';
import toast from 'react-hot-toast';

export const ConfirmationCard = ({ appointment }) => {
  const statusUrl = `${window.location.origin}/status/${appointment._id}`;

  const copyLink = () => {
    navigator.clipboard.writeText(statusUrl);
    toast.success('Live status tracking link copied!');
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 border border-emerald-100 shadow-xl text-center space-y-6 animate-fade-in">
      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-slate-900">Appointment Confirmed!</h3>
        <p className="text-slate-600 text-sm mt-1">Your spot in the clinic queue has been secured.</p>
      </div>

      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-left space-y-3">
        <div className="flex justify-between items-center pb-3 border-b border-slate-200">
          <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Queue Number</span>
          <span className="text-xl font-extrabold text-teal-700">#{appointment.queueNumber}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm pt-1">
          <div>
            <span className="text-slate-400 text-xs block">Doctor</span>
            <span className="font-semibold text-slate-800 flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-teal-600" /> {appointment.doctor?.name}
            </span>
          </div>
          <div>
            <span className="text-slate-400 text-xs block">Patient</span>
            <span className="font-semibold text-slate-800">{appointment.patientName}</span>
          </div>
          <div>
            <span className="text-slate-400 text-xs block">Date</span>
            <span className="font-medium text-slate-700 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-teal-600" /> {formatDateDisplay(appointment.date)}
            </span>
          </div>
          <div>
            <span className="text-slate-400 text-xs block">Time Slot</span>
            <span className="font-semibold text-teal-700 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-teal-600" /> {appointment.slot}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-teal-50/70 p-4 rounded-2xl border border-teal-100 flex items-center justify-between gap-3 text-left">
        <div className="truncate">
          <span className="text-[11px] font-semibold text-teal-800 uppercase block">Tracking Link</span>
          <span className="text-xs text-teal-900 truncate font-mono block">{statusUrl}</span>
        </div>
        <button
          onClick={copyLink}
          className="bg-white hover:bg-teal-100 text-teal-700 p-2 rounded-xl border border-teal-200 shadow-sm transition-colors shrink-0"
          title="Copy Link"
        >
          <Copy className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Link
          to={`/status/${appointment._id}`}
          className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
        >
          <Activity className="w-4 h-4" /> Track Live Queue Status
        </Link>
        <Link
          to="/book"
          className="border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold py-3 px-6 rounded-xl transition-all text-sm"
        >
          Book Another
        </Link>
      </div>
    </div>
  );
};
