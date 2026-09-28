// Custom hook detecting slow initial server wake-up responses (> 5 seconds)
import { useState, useEffect } from 'react';
import { doctorApi } from '../api/doctorApi';

export const useServerWake = () => {
  const [isWaking, setIsWaking] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsWaking(true);
    }, 5000);

    doctorApi
      .getDoctors()
      .then(() => {
        clearTimeout(timer);
        setIsWaking(false);
      })
      .catch(() => {
        clearTimeout(timer);
        setIsWaking(false);
      });

    return () => clearTimeout(timer);
  }, []);

  return { isWaking };
};
