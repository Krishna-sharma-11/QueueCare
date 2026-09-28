// Footer component with image attribution and quick links
import React from 'react';
import { Heart, Stethoscope } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-white">
              <Stethoscope className="w-5 h-5" />
            </div>
            <span className="font-semibold text-white text-lg">QueueCare</span>
          </div>

          <p className="text-sm text-center text-slate-400">
            Queue Care 2026 • Clinic Appointment & Queue Manager
          </p>

          {/* <p className="text-xs text-slate-500 text-center">
            Images sourced from free licenses on{' '}
            <a href="https://unsplash.com" target="_blank" rel="noreferrer" className="underline hover:text-slate-300">
              Unsplash
            </a>{' '}
            &{' '}
            <a href="https://pexels.com" target="_blank" rel="noreferrer" className="underline hover:text-slate-300">
              Pexels
            </a>.
          </p> */}
        </div>
      </div>
    </footer>
  );
};
