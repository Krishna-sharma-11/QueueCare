// Custom hook for handling appointment booking submission
import { useState } from 'react';
import { appointmentApi } from '../api/appointmentApi';
import toast from 'react-hot-toast';

export const useBooking = () => {
  const [submitting, setSubmitting] = useState(false);
  const [bookedAppointment, setBookedAppointment] = useState(null);

  const submitBooking = async (bookingPayload) => {
    try {
      setSubmitting(true);
      const data = await appointmentApi.book(bookingPayload);
      setBookedAppointment(data);
      toast.success('Appointment booked successfully!');
      return data;
    } catch (err) {
      toast.error(err.message);
      throw err;
    } finally {
      setSubmitting(false);
    }
  };

  return { submitBooking, submitting, bookedAppointment };
};
