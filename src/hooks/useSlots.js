// Custom hook for fetching time slots for a specific doctor and date
import { useState, useEffect, useCallback } from 'react';
import { doctorApi } from '../api/doctorApi';

export const useSlots = (doctorId, date) => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSlots = useCallback(async () => {
    if (!doctorId || !date) return;
    try {
      setLoading(true);
      setError(null);
      const data = await doctorApi.getDoctorSlots(doctorId, date);
      setSlots(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [doctorId, date]);

  useEffect(() => {
    fetchSlots();
  }, [fetchSlots]);

  return { slots, loading, error, refetch: fetchSlots };
};
