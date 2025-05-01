import React from 'react';
import { motion } from 'framer-motion';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VerificationModal = ({ isOpen, onClose }: VerificationModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 max-w-md w-full mx-4 relative z-10 border border-gray-800"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <div className="relative inline-block">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center relative z-10 mb-6 mx-auto">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-xl opacity-50 scale-150" />
            </div>
          </div>

          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400 mb-4">
            Verification Successful!
          </h2>
          <p className="text-gray-300 text-lg mb-6">Choose your preferred platform to continue:</p>

          <div className="flex flex-col gap-4 mb-6">
            <a
              href="https://wa.me/13044941901?text=Hi%20there!%20I%20just%20completed%20verification%20and%20would%20like%20to%20join%20the%20community."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl py-4 text-lg transition-colors duration-200 shadow-md"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.69.97.99-3.59-.23-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.28.7.9.86 1.08.16.18.32.2.6.07.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.22.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
              Continue with WhatsApp
            </a>
          </div>

          <p className="text-gray-400 text-sm">Click on your preferred platform to join our community</p>
        </div>
      </motion.div>
    </div>
  );
};

export default VerificationModal; 