// Skeleton placeholder UI component for smooth loading states
import React from 'react';

export const Skeleton = ({ className = '' }) => {
  return <div className={`animate-pulse bg-slate-200 rounded-xl ${className}`} />;
};

export const CardSkeleton = () => (
  <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
    <div className="flex items-center space-x-4">
      <Skeleton className="w-12 h-12 rounded-full" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
    <Skeleton className="h-10 w-full" />
  </div>
);
