// Doctor API services
import { axiosClient } from './axiosClient';

export const doctorApi = {
  getDoctors: async () => {
    const res = await axiosClient.get('/doctors');
    return res.data.data;
  },
  getDoctorSlots: async (doctorId, date) => {
    const res = await axiosClient.get(`/doctors/${doctorId}/slots`, {
      params: { date },
    });
    return res.data.data;
  },
};
