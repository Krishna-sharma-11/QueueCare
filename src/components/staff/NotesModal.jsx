// NotesModal component for attaching prescription / notes to completed or in-consult appointments
import React, { useState, useEffect } from 'react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';

export const NotesModal = ({ isOpen, onClose, appointment, onSaveNotes }) => {
  const [notesText, setNotesText] = useState('');

  useEffect(() => {
    if (appointment) {
      setNotesText(appointment.notes || '');
    }
  }, [appointment]);

  if (!appointment) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveNotes(appointment._id, notesText);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Prescription & Notes – ${appointment.patientName}`} maxWidth="max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Prescription / Consultation Notes</label>
          <textarea
            rows={5}
            placeholder="Enter clinical observations, medications, dosage, and follow-up instructions..."
            value={notesText}
            onChange={(e) => setNotesText(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 text-sm outline-none resize-none font-mono"
          />
        </div>

        <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Save Prescription Notes
          </Button>
        </div>
      </form>
    </Modal>
  );
};
