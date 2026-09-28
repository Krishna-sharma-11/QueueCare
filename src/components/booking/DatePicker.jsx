// DatePicker component for appointment date selection with min (today) and max (+14 days) constraints
import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { getTodayDateString } from '../../utils/dateUtils';

export const DatePicker = ({ selectedDate, onDateChange }) => {
  const minDate = getTodayDateString();
  const maxDateObj = new Date();
  maxDateObj.setDate(maxDateObj.getDate() + 14);
  const maxDate = maxDateObj.toISOString().split('T')[0];

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2">
      <label className="block text-sm font-medium text-slate-700 flex items-center gap-2">
        <CalendarIcon className="w-4 h-4 text-teal-600" /> Select Appointment Date
      </label>
      <input
        type="date"
        min={minDate}
        max={maxDate}
        value={selectedDate}
        onChange={(e) => onDateChange(e.target.value)}
        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 text-slate-900 text-sm outline-none"
      />
    </div>
  );
};
