// HowItWorks section explaining patient & staff steps
import React from 'react';
import { UserCheck, Clock, FileText } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    icon: UserCheck,
    title: 'Select Doctor & Time Slot',
    description: 'Browse specialist doctors, select your preferred date, and choose an available, non-conflicting time slot.',
  },
  {
    number: '02',
    icon: Clock,
    title: 'Track Live Status & Wait Time',
    description: 'Check in on arrival. Watch your queue number advance live with estimated consultation countdown.',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Consultation & Digital Notes',
    description: 'Doctor calls you in chronologically. Access your digital prescription/notes immediately upon completion.',
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">How QueueCare Works</h2>
          <p className="text-slate-600 mt-2">A predictable, stress-free process for both patients and healthcare staff.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
              <div className="absolute top-4 right-4 text-3xl font-black text-slate-100">{step.number}</div>
              <div className="w-14 h-14 mx-auto rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                <step.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
