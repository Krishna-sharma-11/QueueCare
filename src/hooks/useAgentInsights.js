// Custom hook for fetching Agentic AI insights feed and managing suggestions
import { useState, useEffect, useCallback } from 'react';
import { agentApi } from '../api/agentApi';
import { usePolling } from './usePolling';
import toast from 'react-hot-toast';

export const useAgentInsights = () => {
  const [summary, setSummary] = useState('');
  const [summarySource, setSummarySource] = useState('');
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInsights = useCallback(async () => {
    try {
      const data = await agentApi.getInsights();
      setSummary(data.summary);
      setSummarySource(data.summarySource);
      setLogs(data.logs);
    } catch (err) {
      console.error('[Agent Insights Error]:', err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInsights();
  }, [fetchInsights]);

  // Poll agent feed every 5 seconds
  usePolling(fetchInsights, 5000, true);

  const approve = async (logId) => {
    try {
      await agentApi.approveSuggestion(logId);
      toast.success('Suggestion approved');
      await fetchInsights();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const dismiss = async (logId) => {
    try {
      await agentApi.dismissSuggestion(logId);
      toast.success('Suggestion dismissed');
      await fetchInsights();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return { summary, summarySource, logs, loading, approve, dismiss, refetch: fetchInsights };
};
