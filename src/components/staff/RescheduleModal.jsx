// RescheduleModal component for staff rescheduling workflow
import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { DatePicker } from '../booking/DatePicker';
import { SlotGrid } from '../booking/SlotGrid';
import { Button } from '../common/Button';
import { useSlots } from '../../hooks/useSlots';
import { getTodayDateString } from '../../utils/dateUtils';

export const RescheduleModal = ({ isOpen, onClose, appointment, onConfirmReschedule }) => {
  const [targetDate, setTargetDate] = useState(appointment?.date || getTodayDateString());
  const [targetSlot, setTargetSlot] = useState('');
  const { slots, loading } = useSlots(appointment?.doctor?._id || appointment?.doctor, targetDate);

  if (!appointment) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (targetSlot) {
      onConfirmReschedule(appointment._id, targetDate, targetSlot);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Reschedule ${appointment.patientName}`} maxWidth="max-w-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <DatePicker selectedDate={targetDate} onDateChange={setTargetDate} />
        <SlotGrid slots={slots} selectedSlot={targetSlot} onSelectSlot={setTargetSlot} loading={loading} />

        <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" disabled={!targetSlot}>
            Save New Slot
          </Button>
        </div>
      </form>
    </Modal>
  );
};
