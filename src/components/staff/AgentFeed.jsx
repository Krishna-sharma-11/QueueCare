// AgentFeed component displaying Gemini AI summary and autonomous agent activity logs
import React from 'react';
import { Cpu, Sparkles, Activity } from 'lucide-react';
import { AgentSuggestionItem } from './AgentSuggestionItem';
import { useAgentInsights } from '../../hooks/useAgentInsights';

export const AgentFeed = () => {
  const { summary, summarySource, logs, approve, dismiss } = useAgentInsights();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Queue Agent Feed</h4>
            <span className="text-[11px] text-slate-400">Autonomous OBSERVE → REASON → ACT Loop</span>
          </div>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">30s Loop</span>
      </div>

      {summary && (
        <div className="bg-gradient-to-r from-teal-500/10 to-emerald-500/10 p-4 rounded-xl border border-teal-200/60 space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-teal-800">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>AI Shift Summary ({summarySource === 'gemini_ai' ? 'Gemini 1.5 Flash' : 'Rule-Based Engine'})</span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed italic">{summary}</p>
        </div>
      )}

      <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
        {logs.length === 0 ? (
          <p className="text-xs text-slate-400 text-center py-4">No agent logs recorded yet.</p>
        ) : (
          logs.map((log) => {
            if (log.suggestion || log.status === 'pending') {
              return <AgentSuggestionItem key={log._id} log={log} onApprove={approve} onDismiss={dismiss} />;
            }
            return (
              <div key={log._id} className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-1">
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1 text-slate-600 font-semibold">
                    <Activity className="w-3 h-3 text-teal-600" /> {log.type}
                  </span>
                  <span>{new Date(log.createdAt).toLocaleTimeString()}</span>
                </div>
                <p className="text-slate-700">{log.message}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
