// Banner notifying users when free backend tier is waking up
import React from 'react';
import { Loader2 } from 'lucide-react';
import { useServerWake } from '../../hooks/useServerWake';

export const ServerWakingBanner = () => {
  const { isWaking } = useServerWake();

  if (!isWaking) return null;

  return (
    <div className="bg-amber-500 text-white px-4 py-2.5 text-center text-sm font-medium flex items-center justify-center gap-2 shadow-md animate-bounce">
      <Loader2 className="w-4 h-4 animate-spin" />
      <span>Server waking up, please wait... (Free cloud tier spins up after inactivity)</span>
    </div>
  );
};
