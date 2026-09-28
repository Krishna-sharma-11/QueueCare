// ClinicBanner callout section with image banner
import React from 'react';
import { Link } from 'react-router-dom';
import { SafeImage } from '../common/SafeImage';

export const ClinicBanner = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <SafeImage
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
            alt="Modern Waiting Room"
            name="Clinic Banner"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-transparent flex items-center p-8 sm:p-12">
            <div className="max-w-lg text-white space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold">Experience Next-Generation Healthcare Scheduling</h3>
              <p className="text-slate-200 text-sm sm:text-base">
                No long wait line frustration. Book from your phone and arrive exactly when your slot is called.
              </p>
              <Link
                to="/book"
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md"
              >
                Schedule Your Visit Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
