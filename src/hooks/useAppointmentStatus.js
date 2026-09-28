// Custom hook for patient live appointment status tracking with 5-second polling
import { useState, useEffect, useCallback } from 'react';
import { appointmentApi } from '../api/appointmentApi';
import { usePolling } from './usePolling';

export const useAppointmentStatus = (appointmentId) => {
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStatus = useCallback(async () => {
    if (!appointmentId) return;
    try {
      setError(null);
      const data = await appointmentApi.getById(appointmentId);
      setAppointment(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [appointmentId]);

  useEffect(() => {
    fetchStatus();
  }, [fetchStatus]);

  // Poll every 5 seconds for live status updates
  usePolling(fetchStatus, 5000, !!appointmentId);

  return { appointment, loading, error, refetch: fetchStatus };
};
