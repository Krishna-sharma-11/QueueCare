// Queue API services for staff dashboard
import { axiosClient } from './axiosClient';

export const queueApi = {
  getTodayQueue: async (doctorId = 'all') => {
    const res = await axiosClient.get('/queue/today', {
      params: { doctor: doctorId },
    });
    return res.data.data;
  },
};
