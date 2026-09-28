// StaffDashboardPage composing queue table, doctor filters, stats cards, and Agent AI feed
import React, { useState } from 'react';
import { useQueue } from '../hooks/useQueue';
import { useDoctors } from '../hooks/useDoctors';
import { StatsCards } from '../components/staff/StatsCards';
import { DoctorFilter } from '../components/staff/DoctorFilter';
import { QueueTable } from '../components/staff/QueueTable';
import { RescheduleModal } from '../components/staff/RescheduleModal';
import { NotesModal } from '../components/staff/NotesModal';
import { AgentFeed } from '../components/staff/AgentFeed';
import { LiveDot } from '../components/common/LiveDot';
import { Loader } from '../components/common/Loader';
import { ErrorState } from '../components/common/ErrorState';

export const StaffDashboardPage = () => {
  const [selectedDoctorId, setSelectedDoctorId] = useState('all');
  const { doctors } = useDoctors();
  const { queue, loading, error, refetch, updateStatus, reschedule, saveNotes } = useQueue(selectedDoctorId);

  const [rescheduleTarget, setRescheduleTarget] = useState(null);
  const [notesTarget, setNotesTarget] = useState(null);

  if (loading && queue.length === 0) {
    return <Loader label="Loading today's queue dashboard..." />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={refetch} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Staff Queue Dashboard</h2>
          <p className="text-xs text-slate-500">Real-time patient chronological queue management</p>
        </div>
        <div className="flex items-center gap-3">
          <DoctorFilter doctors={doctors} selectedDoctorId={selectedDoctorId} onSelectDoctor={setSelectedDoctorId} />
          <LiveDot label="Auto-Sync" />
        </div>
      </div>

      <StatsCards queue={queue} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-bold text-slate-800 text-base">Today's Patient Appointments</h3>
          <QueueTable
            queue={queue}
            onUpdateStatus={updateStatus}
            onOpenReschedule={(item) => setRescheduleTarget(item)}
            onOpenNotes={(item) => setNotesTarget(item)}
          />
        </div>

        <div className="space-y-4">
          {/* <h3 className="font-bold text-slate-800 text-base">Agentic AI Activity</h3> */}
          <AgentFeed />
        </div>
      </div>

      <RescheduleModal
        isOpen={!!rescheduleTarget}
        onClose={() => setRescheduleTarget(null)}
        appointment={rescheduleTarget}
        onConfirmReschedule={reschedule}
      />

      <NotesModal
        isOpen={!!notesTarget}
        onClose={() => setNotesTarget(null)}
        appointment={notesTarget}
        onSaveNotes={saveNotes}
      />
    </div>
  );
};
