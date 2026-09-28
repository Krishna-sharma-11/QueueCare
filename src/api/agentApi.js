// Agentic AI API services
import { axiosClient } from './axiosClient';

export const agentApi = {
  getInsights: async () => {
    const res = await axiosClient.get('/agent/insights');
    return res.data;
  },
  approveSuggestion: async (id) => {
    const res = await axiosClient.post(`/agent/suggestions/${id}/approve`);
    return res.data;
  },
  dismissSuggestion: async (id) => {
    const res = await axiosClient.post(`/agent/suggestions/${id}/dismiss`);
    return res.data;
  },
};
