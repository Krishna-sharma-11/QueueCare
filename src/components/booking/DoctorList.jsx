// DoctorList component rendering available doctors grid
import React from 'react';
import { DoctorCard } from './DoctorCard';
import { CardSkeleton } from '../common/Skeleton';
import { ErrorState } from '../common/ErrorState';

export const DoctorList = ({ doctors, selectedDoctor, onSelectDoctor, loading, error, onRetry }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5].map((n) => (
          <CardSkeleton key={n} />
        ))}
      </div>
    );
  }

  if (error) {
    return <ErrorState message={error} onRetry={onRetry} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {doctors.map((doc) => (
        <DoctorCard
          key={doc._id}
          doctor={doc}
          selected={selectedDoctor?._id === doc._id}
          onSelect={onSelectDoctor}
        />
      ))}
    </div>
  );
};
