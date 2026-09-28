// Features section highlighting core capabilities
import React from 'react';
import { CalendarCheck, Activity, Cpu, ShieldAlert } from 'lucide-react';

const FEATURE_ITEMS = [
  {
    icon: CalendarCheck,
    title: 'Zero Double-Booking',
    description: 'Unique database compound index guarantees two patients can never book the exact same doctor and slot.',
  },
  {
    icon: Activity,
    title: 'Live Queue & Wait Times',
    description: 'Patients receive real-time 5-second auto-refresh status with precise queue position and wait estimates.',
  },
  {
    icon: ShieldAlert,
    title: 'Strict Status Workflow',
    description: 'Enforces linear progress: Scheduled → Waiting → In Consult → Completed, avoiding chaotic skipping.',
  },
  {
    icon: Cpu,
    title: 'Queue Agent AI',
    description: 'Autonomous background agent detects no-show risks, calculates delays, and generates Gemini shift summaries.',
  },
];

export const Features = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Designed for Efficient Walk-in Clinics</h2>
          <p className="text-slate-600 mt-2">Everything required for seamless patient scheduling and staff operations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-900 text-lg mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
