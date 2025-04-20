'use client';
import { useEffect } from 'react';

interface SnackbarProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
}

export default function Snackbar({ isOpen, onClose, type, title, message }: SnackbarProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const bgColor = type === 'success' 
    ? 'bg-emerald-500/90' 
    : type === 'error' 
    ? 'bg-red-500/90' 
    : 'bg-indigo-500/90';

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
      <div className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg backdrop-blur-sm border border-white/10`}>
        <div className="flex items-center gap-3">
          {type === 'success' && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          )}
          {type === 'error' && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
          <div>
            <p className="font-semibold">{title}</p>
            <p className="text-sm text-white/80">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 