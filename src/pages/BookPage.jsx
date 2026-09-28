// BookPage handles step-by-step patient appointment booking workflow with 409 slot handling
import React, { useState } from 'react';
import { useDoctors } from '../hooks/useDoctors';
import { useSlots } from '../hooks/useSlots';
import { useBooking } from '../hooks/useBooking';
import { BookingSteps } from '../components/booking/BookingSteps';
import { DoctorList } from '../components/booking/DoctorList';
import { DatePicker } from '../components/booking/DatePicker';
import { SlotGrid } from '../components/booking/SlotGrid';
import { PatientForm } from '../components/booking/PatientForm';
import { ConfirmationCard } from '../components/booking/ConfirmationCard';
import { getTodayDateString } from '../utils/dateUtils';
import { Button } from '../components/common/Button';
import { ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';

export const BookPage = () => {
  const { doctors, loading: doctorsLoading, error: doctorsError, refetch: refetchDoctors } = useDoctors();
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(getTodayDateString());
  const [selectedSlot, setSelectedSlot] = useState('');
  const [step, setStep] = useState(1);

  const { slots, loading: slotsLoading, refetch: refetchSlots } = useSlots(selectedDoctor?._id, selectedDate);
  const { submitBooking, submitting, bookedAppointment } = useBooking();

  const [formData, setFormData] = useState({ patientName: '', patientPhone: '', reason: '' });

  const handleSelectDoctor = (doc) => {
    setSelectedDoctor(doc);
    setSelectedSlot('');
    setStep(2);
  };

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        doctorId: selectedDoctor._id,
        date: selectedDate,
        slot: selectedSlot,
        patientName: formData.patientName,
        patientPhone: formData.patientPhone,
        reason: formData.reason,
      };
      await submitBooking(payload);
      setStep(4);
    } catch (err) {
      if (err.message.includes('already booked') || err.message.includes('slot') || err.message.includes('409')) {
        toast.error('This slot was just taken by another patient! Please pick another slot.');
        await refetchSlots();
        setSelectedSlot('');
        setStep(2);
      }
    }
  };

  const resetFlow = () => {
    setSelectedDoctor(null);
    setSelectedSlot('');
    setFormData({ patientName: '', patientPhone: '', reason: '' });
    setStep(1);
  };

  if (step === 4 && bookedAppointment) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
        <BookingSteps currentStep={4} onStepClick={setStep} />
        <ConfirmationCard appointment={bookedAppointment} onBookAnother={resetFlow} />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-extrabold text-slate-900">Book Your Appointment</h2>
        <p className="text-slate-600 text-sm">Select a doctor, pick a date and slot, and secure your place in queue.</p>
      </div>

      <BookingSteps currentStep={step} onStepClick={setStep} />

      {step === 1 && (
        <div className="space-y-4">
          <h3 className="font-bold text-slate-800 text-lg">Step 1: Choose Your Specialist Doctor</h3>
          <DoctorList
            doctors={doctors}
            selectedDoctor={selectedDoctor}
            onSelectDoctor={handleSelectDoctor}
            loading={doctorsLoading}
            error={doctorsError}
            onRetry={refetchDoctors}
          />
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm" icon={ArrowLeft} onClick={() => setStep(1)}>
              Back to Doctors
            </Button>
            <span className="text-sm font-semibold text-teal-700">Selected: {selectedDoctor?.name}</span>
          </div>

          <DatePicker selectedDate={selectedDate} onDateChange={(d) => { setSelectedDate(d); setSelectedSlot(''); }} />
          <SlotGrid slots={slots} selectedSlot={selectedSlot} onSelectSlot={setSelectedSlot} loading={slotsLoading} />

          <div className="flex justify-end pt-4">
            <Button variant="primary" disabled={!selectedSlot} onClick={() => setStep(3)}>
              Continue to Details
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6 max-w-xl mx-auto">
          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm" icon={ArrowLeft} onClick={() => setStep(2)}>
              Back to Slots
            </Button>
            <span className="text-xs text-slate-500 font-medium">
              {selectedDoctor?.name} • {selectedDate} ({selectedSlot})
            </span>
          </div>

          <PatientForm
            formData={formData}
            onChange={handleFormChange}
            onSubmit={handleBookingSubmit}
            submitting={submitting}
            selectedDoctor={selectedDoctor}
            selectedDate={selectedDate}
            selectedSlot={selectedSlot}
          />
        </div>
      )}
    </div>
  );
};
