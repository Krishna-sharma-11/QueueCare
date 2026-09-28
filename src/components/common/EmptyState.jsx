// EmptyState illustration component for zero-data views
import React from 'react';
import { FolderOpen } from 'lucide-react';

export const EmptyState = ({ title = 'No Data Found', message = 'There are no items to display at this time.', icon: Icon = FolderOpen, action }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center bg-white rounded-2xl border border-slate-100 shadow-sm">
      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="font-semibold text-slate-800 text-base mb-1">{title}</h4>
      <p className="text-slate-500 text-sm max-w-sm mb-4">{message}</p>
      {action && <div>{action}</div>}
    </div>
  );
};
