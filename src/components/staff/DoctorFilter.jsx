// DoctorFilter selector component for filtering queue by specialist
import React from 'react';
import { Filter } from 'lucide-react';

export const DoctorFilter = ({ doctors = [], selectedDoctorId, onSelectDoctor }) => {
  return (
    <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm">
      <Filter className="w-4 h-4 text-slate-400 shrink-0" />
      <select
        value={selectedDoctorId}
        onChange={(e) => onSelectDoctor(e.target.value)}
        className="bg-transparent text-sm font-medium text-slate-800 outline-none cursor-pointer pr-2"
      >
        <option value="all">All Doctors</option>
        {doctors.map((doc) => (
          <option key={doc._id} value={doc._id}>
            {doc.name} ({doc.specialization})
          </option>
        ))}
      </select>
    </div>
  );
};
