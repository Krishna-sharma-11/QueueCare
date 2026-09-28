// Authentication API services
import { axiosClient } from './axiosClient';

export const authApi = {
  staffLogin: async (pin) => {
    const res = await axiosClient.post('/auth/staff-login', { pin });
    return res.data;
  },
};
