// SlotGrid component for time slot selection grid
import React from 'react';
import { Clock } from 'lucide-react';
import { Loader } from '../common/Loader';

export const SlotGrid = ({ slots, selectedSlot, onSelectSlot, loading }) => {
  if (loading) {
    return <Loader label="Loading available slots..." size="sm" />;
  }

  if (!slots || slots.length === 0) {
    return (
      <div className="text-center py-6 text-slate-500 text-sm bg-slate-50 rounded-xl border border-slate-100">
        No time slots available for the selected date.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-slate-800 text-sm flex items-center gap-1.5">
        <Clock className="w-4 h-4 text-teal-600" /> Select Time Slot
      </h4>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
        {slots.map((item) => {
          const isSelected = selectedSlot === item.slot;
          const isAvailable = item.available;

          return (
            <button
              key={item.slot}
              type="button"
              disabled={!isAvailable}
              onClick={() => isAvailable && onSelectSlot(item.slot)}
              className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                isSelected
                  ? 'bg-teal-600 text-white border-teal-600 shadow-md ring-2 ring-teal-500/30'
                  : isAvailable
                  ? 'bg-white text-slate-700 border-slate-200 hover:border-teal-500 hover:bg-teal-50/50'
                  : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-60'
              }`}
            >
              <div>{item.slot}</div>
              <div className="text-[10px] font-normal opacity-80 mt-0.5">{item.reason}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
