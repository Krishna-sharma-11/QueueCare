// Custom hook for staff queue management with 5-second live polling
import { useState, useEffect, useCallback } from 'react';
import { queueApi } from '../api/queueApi';
import { appointmentApi } from '../api/appointmentApi';
import { usePolling } from './usePolling';
import toast from 'react-hot-toast';

export const useQueue = (selectedDoctorId = 'all') => {
  const [queue, setQueue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQueue = useCallback(async () => {
    try {
      setError(null);
      const data = await queueApi.getTodayQueue(selectedDoctorId);
      setQueue(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [selectedDoctorId]);

  useEffect(() => {
    fetchQueue();
  }, [fetchQueue]);

  // Poll every 5 seconds for live status changes
  usePolling(fetchQueue, 5000, true);

  const updateStatus = async (appointmentId, status) => {
    try {
      await appointmentApi.updateStatus(appointmentId, status);
      toast.success(`Status updated to ${status}`);
      await fetchQueue();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const reschedule = async (appointmentId, date, slot) => {
    try {
      await appointmentApi.reschedule(appointmentId, date, slot);
      toast.success('Appointment rescheduled successfully');
      await fetchQueue();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const cancel = async (appointmentId) => {
    try {
      await appointmentApi.cancel(appointmentId);
      toast.success('Appointment cancelled');
      await fetchQueue();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const saveNotes = async (appointmentId, notes) => {
    try {
      await appointmentApi.updateNotes(appointmentId, notes);
      toast.success('Prescription / Notes saved');
      await fetchQueue();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return {
    queue,
    loading,
    error,
    refetch: fetchQueue,
    updateStatus,
    reschedule,
    cancel,
    saveNotes,
  };
};
