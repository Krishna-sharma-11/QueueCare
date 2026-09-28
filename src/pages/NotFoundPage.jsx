// NotFoundPage component for undefined routes
import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="max-w-md mx-auto px-4 py-20 text-center space-y-4">
      <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
        <FileQuestion className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold text-slate-900">Page Not Found</h3>
      <p className="text-slate-500 text-sm">The page you are looking for does not exist or has been moved.</p>
      <Link
        to="/"
        className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-2.5 rounded-xl text-sm transition-all"
      >
        Return to Home Page
      </Link>
    </div>
  );
};
