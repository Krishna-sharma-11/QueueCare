// Spinner loading component
import React from 'react';
import { Loader2 } from 'lucide-react';

export const Loader = ({ label = 'Loading...', size = 'md' }) => {
  const iconSize = size === 'sm' ? 'w-5 h-5' : size === 'lg' ? 'w-10 h-10' : 'w-8 h-8';

  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-3">
      <Loader2 className={`${iconSize} animate-spin text-teal-600`} />
      {label && <p className="text-sm font-medium text-slate-500 animate-pulse">{label}</p>}
    </div>
  );
};
