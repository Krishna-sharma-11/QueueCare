// ErrorState UI component for API or rendering failures
import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from './Button';

export const ErrorState = ({ title = 'Something went wrong', message = 'Failed to load requested data.', onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 text-center bg-rose-50/50 rounded-2xl border border-rose-100">
      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mb-3">
        <AlertCircle className="w-6 h-6" />
      </div>
      <h4 className="font-semibold text-rose-900 text-base mb-1">{title}</h4>
      <p className="text-rose-700 text-sm max-w-sm mb-4">{message}</p>
      {onRetry && (
        <Button variant="outline" size="sm" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
};
