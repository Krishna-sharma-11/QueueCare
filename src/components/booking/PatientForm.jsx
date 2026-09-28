// PatientForm component with inline validation, summary card, and phone format check
import React from 'react';
import { User, Phone, FileText, Calendar, Clock, Stethoscope } from 'lucide-react';
import { Button } from '../common/Button';
import { formatDateDisplay } from '../../utils/dateUtils';

export const PatientForm = ({ formData, onChange, onSubmit, submitting, selectedDoctor, selectedDate, selectedSlot }) => {
  const isPhoneValid = /^\d{10}$/.test(formData.patientPhone.trim());
  const isValid = formData.patientName.trim() !== '' && isPhoneValid && formData.reason.trim() !== '' && selectedSlot;

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
      <div className="bg-teal-50/70 p-4 rounded-xl border border-teal-100 text-xs space-y-1">
        <h5 className="font-bold text-teal-900 uppercase tracking-wider text-[10px]">Booking Summary</h5>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-teal-800 font-medium">
          <span className="flex items-center gap-1">
            <Stethoscope className="w-3.5 h-3.5 text-teal-600" /> {selectedDoctor?.name}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-teal-600" /> {formatDateDisplay(selectedDate)}
          </span>
          <span className="flex items-center gap-1 font-bold text-teal-900">
            <Clock className="w-3.5 h-3.5 text-teal-600" /> {selectedSlot}
          </span>
        </div>
      </div>

      <h4 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-2">Patient Details</h4>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-slate-400" /> Full Name *
        </label>
        <input
          type="text"
          required
          placeholder="e.g. Aarav Sharma"
          value={formData.patientName}
          onChange={(e) => onChange('patientName', e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 text-sm outline-none"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
          <Phone className="w-3.5 h-3.5 text-slate-400" /> Mobile Phone Number (10 digits) *
        </label>
        <input
          type="tel"
          required
          maxLength={10}
          placeholder="e.g. 9876543210"
          value={formData.patientPhone}
          onChange={(e) => onChange('patientPhone', e.target.value)}
          className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none focus:ring-2 ${
            formData.patientPhone && !isPhoneValid
              ? 'border-rose-400 focus:ring-rose-500'
              : 'border-slate-300 focus:ring-teal-500'
          }`}
        />
        {formData.patientPhone && !isPhoneValid && (
          <p className="text-[11px] text-rose-600 mt-1 font-medium">Please enter a valid 10-digit phone number.</p>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-slate-400" /> Reason for Visit *
        </label>
        <textarea
          rows={2}
          required
          placeholder="e.g. Routine consultation or fever checkup"
          value={formData.reason}
          onChange={(e) => onChange('reason', e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 text-sm outline-none resize-none"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" loading={submitting} disabled={!isValid} className="w-full mt-4">
        Confirm & Book Appointment
      </Button>
    </form>
  );
};
