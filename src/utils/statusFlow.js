// Helper functions for status flow and transition rules

export const NEXT_TRANSITIONS = {
  Scheduled: [
    { targetStatus: 'Waiting', label: 'Check-In', variant: 'warning' },
    { targetStatus: 'Cancelled', label: 'Cancel', variant: 'danger' },
  ],
  Waiting: [
    { targetStatus: 'In Consult', label: 'Call In', variant: 'success' },
    { targetStatus: 'Cancelled', label: 'Cancel', variant: 'danger' },
  ],
  'In Consult': [
    { targetStatus: 'Completed', label: 'Complete', variant: 'primary' },
  ],
  Completed: [],
  Cancelled: [],
};

export const getAvailableActions = (currentStatus) => {
  return NEXT_TRANSITIONS[currentStatus] || [];
};

export const canReschedule = (status) => {
  return status === 'Scheduled' || status === 'Waiting';
};

export const canAddNotes = (status) => {
  return status === 'In Consult' || status === 'Completed';
};
