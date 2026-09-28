// StatusStepper component showing progression through Scheduled -> Waiting -> In Consult -> Completed
import React from 'react';
import { Check, Clock, UserCheck, Stethoscope, CheckCircle } from 'lucide-react';

const STEPS = [
  { status: 'Scheduled', icon: Clock, label: 'Scheduled' },
  { status: 'Waiting', icon: UserCheck, label: 'Checked In & Waiting' },
  { status: 'In Consult', icon: Stethoscope, label: 'In Consultation' },
  { status: 'Completed', icon: CheckCircle, label: 'Completed' },
];

export const StatusStepper = ({ currentStatus }) => {
  const isCancelled = currentStatus === 'Cancelled';
  const getStepState = (stepStatus) => {
    if (isCancelled) return 'cancelled';
    const order = ['Scheduled', 'Waiting', 'In Consult', 'Completed'];
    const currentIndex = order.indexOf(currentStatus);
    const stepIndex = order.indexOf(stepStatus);

    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'active';
    return 'pending';
  };

  if (isCancelled) {
    return (
      <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 text-center text-rose-800 font-semibold">
        This appointment has been cancelled.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider text-center">Live Appointment Progress</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
        {STEPS.map((step) => {
          const state = getStepState(step.status);
          const Icon = step.icon;

          return (
            <div
              key={step.status}
              className={`flex flex-col items-center text-center p-4 rounded-2xl border transition-all ${
                state === 'active'
                  ? 'bg-teal-50/80 border-teal-500 ring-2 ring-teal-500/20 shadow-sm'
                  : state === 'completed'
                  ? 'bg-emerald-50/50 border-emerald-200 text-emerald-900'
                  : 'bg-slate-50 border-slate-100 text-slate-400'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 font-bold ${
                  state === 'active'
                    ? 'bg-teal-600 text-white animate-pulse'
                    : state === 'completed'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                {state === 'completed' ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
              </div>
              <span className={`text-xs font-semibold ${state === 'active' ? 'text-teal-900' : 'text-slate-700'}`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
