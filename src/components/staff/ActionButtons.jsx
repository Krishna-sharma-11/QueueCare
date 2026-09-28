// ActionButtons component rendering valid next transition buttons per strict workflow
import React from 'react';
import { getAvailableActions, canReschedule, canAddNotes } from '../../utils/statusFlow';
import { Button } from '../common/Button';
import { Calendar, FileText } from 'lucide-react';

export const ActionButtons = ({ appointment, onUpdateStatus, onOpenReschedule, onOpenNotes }) => {
  const actions = getAvailableActions(appointment.status);
  const allowReschedule = canReschedule(appointment.status);
  const allowNotes = canAddNotes(appointment.status);

  return (
    <div className="flex flex-wrap items-center gap-1.5 justify-end">
      {actions.map((act) => (
        <Button
          key={act.targetStatus}
          size="sm"
          variant={act.variant}
          onClick={() => onUpdateStatus(appointment._id, act.targetStatus)}
        >
          {act.label}
        </Button>
      ))}

      {allowReschedule && (
        <Button size="sm" variant="outline" icon={Calendar} onClick={() => onOpenReschedule(appointment)}>
          Reschedule
        </Button>
      )}

      {allowNotes && (
        <Button size="sm" variant="outline" icon={FileText} onClick={() => onOpenNotes(appointment)}>
          {appointment.notes ? 'Edit Notes' : 'Rx / Notes'}
        </Button>
      )}
    </div>
  );
};
