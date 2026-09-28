// DoctorCard component for selecting a doctor during booking
import React from 'react';
import { Clock, Check } from 'lucide-react';
import { SafeImage } from '../common/SafeImage';

export const DoctorCard = ({ doctor, selected, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(doctor)}
      className={`relative cursor-pointer bg-white rounded-2xl p-5 border transition-all duration-200 ${
        selected
          ? 'border-teal-600 ring-2 ring-teal-500/20 shadow-md bg-teal-50/20'
          : 'border-slate-200 hover:border-slate-300 shadow-sm hover:shadow'
      }`}
    >
      {selected && (
        <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center">
          <Check className="w-4 h-4" />
        </div>
      )}

      <div className="flex items-center space-x-4">
        <SafeImage
          src={doctor.photoUrl}
          alt={doctor.name}
          name={doctor.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-teal-500/30"
        />
        <div>
          <h4 className="font-bold text-slate-900 text-base">{doctor.name}</h4>
          <p className="text-teal-700 text-xs font-medium">{doctor.specialization}</p>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Avg {doctor.avgConsultMinutes} min consult</span>
          </div>
        </div>
      </div>
    </div>
  );
};
