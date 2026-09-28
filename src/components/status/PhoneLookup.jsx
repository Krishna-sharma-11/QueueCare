// PhoneLookup component for searching appointments by mobile number
import React, { useState } from 'react';
import { Phone, Search } from 'lucide-react';
import { Button } from '../common/Button';

export const PhoneLookup = ({ onSearch, loading }) => {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.trim()) {
      onSearch(phone.trim());
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
      <div className="text-center space-y-1">
        <h3 className="text-xl font-bold text-slate-900">Check Your Live Appointment</h3>
        <p className="text-slate-500 text-sm">Enter your 10-digit mobile number to view live queue updates.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1">
          <Phone className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="tel"
            required
            placeholder="Enter mobile phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 text-sm outline-none"
          />
        </div>
        <Button type="submit" variant="primary" loading={loading} icon={Search}>
          Lookup
        </Button>
      </form>
    </div>
  );
};
