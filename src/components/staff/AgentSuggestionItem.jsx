// AgentSuggestionItem component for displaying AI recommendations with Approve/Dismiss actions
import React from 'react';
import { Cpu, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '../common/Button';

export const AgentSuggestionItem = ({ log, onApprove, onDismiss }) => {
  const isPending = log.status === 'pending';

  return (
    <div className={`p-4 rounded-xl border transition-all ${
      isPending ? 'bg-amber-50/60 border-amber-200' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="flex items-start gap-3">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
          isPending ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-600'
        }`}>
          <Cpu className="w-4 h-4" />
        </div>

        <div className="flex-1 space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
              AI Smart Suggestion
            </span>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
              log.status === 'approved'
                ? 'bg-emerald-100 text-emerald-800'
                : log.status === 'dismissed'
                ? 'bg-slate-200 text-slate-700'
                : 'bg-amber-100 text-amber-800'
            }`}>
              {log.status}
            </span>
          </div>

          <p className="text-xs text-slate-800 leading-relaxed font-medium">{log.message}</p>

          {isPending && (
            <div className="flex gap-2 pt-2">
              <Button size="sm" variant="success" icon={CheckCircle2} onClick={() => onApprove(log._id)}>
                Approve
              </Button>
              <Button size="sm" variant="outline" icon={XCircle} onClick={() => onDismiss(log._id)}>
                Dismiss
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
