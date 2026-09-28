// StaffLoginPage handling PIN authentication with hint line and automatic logged-in redirect
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, KeyRound, AlertCircle } from 'lucide-react';
import { authApi } from '../api/authApi';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/common/Button';
import toast from 'react-hot-toast';

export const StaffLoginPage = () => {
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { isAuthenticated, loginStaff } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/staff', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      setLoading(true);
      const res = await authApi.staffLogin(pin);
      loginStaff(res.token);
      toast.success('Staff authenticated successfully');
      navigate('/staff');
    } catch (err) {
      setErrorMessage(err.message || 'Invalid Staff PIN. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 space-y-6">
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
          <Lock className="w-8 h-8" />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900">Clinic Staff Portal</h3>
          <p className="text-slate-500 text-xs mt-1">Enter Security PIN to access Queue Management Dashboard.</p>
        </div>

        {errorMessage && (
          <div className="bg-rose-50 text-rose-700 p-3 rounded-xl border border-rose-200 text-xs font-medium flex items-center gap-2 text-left">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
              <KeyRound className="w-3.5 h-3.5 text-slate-400" /> Enter Staff PIN *
            </label>
            <input
              type="password"
              required
              maxLength={8}
              placeholder="••••"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 text-center font-mono text-xl tracking-widest outline-none"
            />
          </div>

          <Button type="submit" variant="primary" size="lg" loading={loading} className="w-full">
            Authenticate & Access Dashboard
          </Button>
        </form>

        <div className="pt-2 border-t border-slate-100 space-y-1">
          <p className="text-xs font-semibold text-teal-800 bg-teal-50 py-1.5 px-3 rounded-lg inline-block">
            Demo PIN: <code className="font-bold">1234</code>
          </p>
          <p className="text-[11px] text-slate-400">Authorized staff personnel only.</p>
        </div>
      </div>
    </div>
  );
};
