// Landing page Hero section with clinic imagery and main action buttons
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Lock, Clock, ShieldCheck } from 'lucide-react';
import { SafeImage } from '../common/SafeImage';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 bg-gradient-to-b from-teal-50/60 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 text-teal-800 text-xs font-semibold tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4" /> Zero Double-Booking Guarantee
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Smart Clinic Appointments & <span className="text-teal-600">Live Queue Tracking</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              QueueCare eliminates chaotic waiting rooms with strict chronological slot booking, real-time patient queue updates, and autonomous AI shift monitoring.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                to="/book"
                className="bg-teal-600 hover:bg-teal-700 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30 transition-all flex items-center justify-center gap-2 text-base"
              >
                <Calendar className="w-5 h-5" /> Book Appointment
              </Link>
              <Link
                to="/staff/login"
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-7 py-3.5 rounded-xl font-semibold shadow-sm transition-all flex items-center justify-center gap-2 text-base"
              >
                <Lock className="w-5 h-5 text-slate-500" /> Staff Login
              </Link>
            </div>

            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-teal-600" /> Live Estimated Wait
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600" /> Agentic AI Supervision
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl blur opacity-25" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/60">
              <SafeImage
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Clinic Reception"
                name="Clinic Reception"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
