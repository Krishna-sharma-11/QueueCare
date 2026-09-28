// StatusPage providing 5-second live status updates and appointment tracking by ID or Phone
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppointmentStatus } from '../hooks/useAppointmentStatus';
import { StatusStepper } from '../components/status/StatusStepper';
import { QueueInfo } from '../components/status/QueueInfo';
import { WaitTimeCard } from '../components/status/WaitTimeCard';
import { NotesCard } from '../components/status/NotesCard';
import { PhoneLookup } from '../components/status/PhoneLookup';
import { LiveDot } from '../components/common/LiveDot';
import { Loader } from '../components/common/Loader';
import { ErrorState } from '../components/common/ErrorState';
import { appointmentApi } from '../api/appointmentApi';
import { Calendar } from 'lucide-react';

export const StatusPage = () => {
  const { id } = useParams();
  const [phoneAppointments, setPhoneAppointments] = useState(null);
  const [lookupLoading, setLookupLoading] = useState(false);
  const [lookupError, setLookupError] = useState(null);

  const { appointment, loading, error, refetch } = useAppointmentStatus(id);

  const handlePhoneSearch = async (phone) => {
    try {
      setLookupLoading(true);
      setLookupError(null);
      const list = await appointmentApi.getByPhone(phone);
      setPhoneAppointments(list);
    } catch (err) {
      setLookupError(err.message);
    } finally {
      setLookupLoading(false);
    }
  };

  // If no ID param is passed, show phone lookup view
  if (!id) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        <PhoneLookup onSearch={handlePhoneSearch} loading={lookupLoading} />

        {lookupError && <ErrorState message={lookupError} />}

        {phoneAppointments && (
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 text-lg text-center">Found Appointments</h3>
            {phoneAppointments.length === 0 ? (
              <p className="text-center text-slate-500 text-sm">No appointments found for this phone number.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {phoneAppointments.map((app) => (
                  <Link
                    key={app._id}
                    to={`/status/${app._id}`}
                    className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-md transition-all space-y-2 block"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">{app.doctor?.name}</span>
                      <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">
                        {app.status}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-teal-600" /> {app.date} at {app.slot}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  if (loading) {
    return <Loader label="Fetching live queue status..." />;
  }

  if (error || !appointment) {
    return <ErrorState message={error || 'Appointment not found'} onRetry={refetch} />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Live Status Tracker</h2>
          <p className="text-slate-500 text-xs">Tracking appointment #{appointment.queueNumber}</p>
        </div>
        <LiveDot />
      </div>

      <WaitTimeCard
        queuePosition={appointment.queuePosition}
        estimatedWaitMinutes={appointment.estimatedWaitMinutes}
        status={appointment.status}
      />

      <StatusStepper currentStatus={appointment.status} />

      <QueueInfo appointment={appointment} />

      <NotesCard notes={appointment.notes} status={appointment.status} />
    </div>
  );
};
