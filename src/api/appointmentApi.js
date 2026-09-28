// Appointment API services
import { axiosClient } from './axiosClient';

export const appointmentApi = {
  book: async (bookingData) => {
    const res = await axiosClient.post('/appointments', bookingData);
    return res.data.data;
  },
  getById: async (id) => {
    const res = await axiosClient.get(`/appointments/${id}`);
    return res.data.data;
  },
  getByPhone: async (phone) => {
    const res = await axiosClient.get(`/appointments/by-phone/${phone}`);
    return res.data.data;
  },
  updateStatus: async (id, status) => {
    const res = await axiosClient.patch(`/appointments/${id}/status`, { status });
    return res.data.data;
  },
  reschedule: async (id, date, slot) => {
    const res = await axiosClient.patch(`/appointments/${id}/reschedule`, { date, slot });
    return res.data.data;
  },
  cancel: async (id) => {
    const res = await axiosClient.patch(`/appointments/${id}/cancel`);
    return res.data.data;
  },
  updateNotes: async (id, notes) => {
    const res = await axiosClient.patch(`/appointments/${id}/notes`, { notes });
    return res.data.data;
  },
};
