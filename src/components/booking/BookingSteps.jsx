// BookingSteps indicator component with interactive completed step navigation
import React from 'react';
import { Check } from 'lucide-react';

const STEPS = ['Choose Doctor', 'Select Slot', 'Patient Details', 'Confirmed'];

export const BookingSteps = ({ currentStep, onStepClick }) => {
  return (
    <div className="flex items-center justify-between max-w-2xl mx-auto mb-8 px-4">
      {STEPS.map((label, idx) => {
        const stepNum = idx + 1;
        const isComplete = currentStep > stepNum;
        const isCurrent = currentStep === stepNum;

        return (
          <React.Fragment key={label}>
            <div
              onClick={() => isComplete && onStepClick && onStepClick(stepNum)}
              className={`flex flex-col items-center ${isComplete ? 'cursor-pointer group' : ''}`}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                  isComplete
                    ? 'bg-teal-600 text-white group-hover:bg-teal-700 shadow-sm'
                    : isCurrent
                    ? 'bg-teal-100 text-teal-800 ring-4 ring-teal-50 border-2 border-teal-600'
                    : 'bg-slate-100 text-slate-400'
                }`}
              >
                {isComplete ? <Check className="w-4 h-4" /> : stepNum}
              </div>
              <span
                className={`text-[11px] font-medium mt-1.5 hidden sm:block ${
                  isCurrent
                    ? 'text-teal-700 font-semibold'
                    : isComplete
                    ? 'text-slate-700 group-hover:text-teal-600'
                    : 'text-slate-400'
                }`}
              >
                {label}
              </span>
            </div>
            {idx < STEPS.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-2 ${
                  currentStep > stepNum + 1 ? 'bg-teal-600' : 'bg-slate-200'
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
