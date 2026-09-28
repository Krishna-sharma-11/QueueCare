// Miscellaneous formatting utilities (phone numbers, time slots, wait text)

export const formatPhone = (phone) => {
  if (!phone) return '';
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
};

export const formatWaitTime = (minutes) => {
  if (!minutes || minutes <= 0) return 'Immediate / Next in line';
  if (minutes < 60) return `~${minutes} mins`;
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `~${hrs}h ${mins}m`;
};
