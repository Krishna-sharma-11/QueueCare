// Constants for appointment status values, routes, and styling tokens

export const APPOINTMENT_STATUS = {
  SCHEDULED: 'Scheduled',
  WAITING: 'Waiting',
  IN_CONSULT: 'In Consult',
  COMPLETED: 'Completed',
  CANCELLED: 'Cancelled',
};

export const STATUS_COLORS = {
  Scheduled: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-300' },
  Waiting: { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-300' },
  'In Consult': { bg: 'bg-emerald-100', text: 'text-emerald-800', border: 'border-emerald-300' },
  Completed: { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-300' },
  Cancelled: { bg: 'bg-rose-100', text: 'text-rose-800', border: 'border-rose-300' },
};

export const ROUTES = {
  HOME: '/',
  BOOK: '/book',
  STATUS: '/status',
  STATUS_ID: '/status/:id',
  STAFF_LOGIN: '/staff/login',
  STAFF_DASHBOARD: '/staff',
};
