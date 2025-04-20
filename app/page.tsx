"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AppLayout from "./AppLayout";
import { sendVerificationEmail } from "@/utils/sendVerificationEmail";
import Snackbar from "@/components/Snackbar";
import VerificationModal from "@/components/VerificationModal";

interface ModalState {
  isOpen: boolean;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
}

export default function Home() {
  const [phone, setPhone] = useState("");
  const [formattedPhone, setFormattedPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);

  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    type: "info",
    title: "",
    message: "",
  });

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const resetPageState = () => {
    setPhone("");
    setFormattedPhone("");
    setOtp("");
    setLoading(false);
    setShowOtpInput(false);
  };

  const handleRedirect = () => {
    // Only reset if it was a successful verification
    if (
      modal.type === "success" &&
      modal.message.includes("Verification successful")
    ) {
      resetPageState();
    }
    window.location.href = "/";
  };

  const closeSnackbar = () => {
    setModal(prev => ({ ...prev, isOpen: false }));
  };

  const showSnackbar = (type: ModalState['type'], title: string, message: string, shouldRedirect = false) => {
    setModal({
      isOpen: true,
      type,
      title,
      message
    });

    if (shouldRedirect) {
      setTimeout(handleRedirect, 2000);
    }
  };

  interface ErrorResponse {
    errorType: string;
    message?: string;
  }

  const handleErrorResponse = (data: ErrorResponse) => {
    switch (data.errorType) {
      case "ALREADY_VERIFIED":
        // Send verification email for already verified numbers too
        try {
          sendVerificationEmail(formattedPhone);
        } catch (emailError) {
          console.error("Failed to send verification email:", emailError);
        }
        showSnackbar(
          "success",
          "Already Verified",
          "Verification successful. Redirecting...",
          true
        );
        break;
      case "INVALID_OTP":
        showSnackbar(
          "error",
          "Invalid OTP",
          "Please check the OTP and try again."
        );
        setOtp(""); // Clear the OTP input
        break;
      case "VERIFICATION_FAILED":
        showSnackbar(
          "error",
          "Verification Failed",
          "Could not verify the OTP. Please try again or request a new one."
        );
        setOtp(""); // Clear the OTP input
        break;
      case "RESEND_FAILED":
        showSnackbar(
          "error",
          "Resend Failed",
          "Could not resend OTP. Please try again in a few minutes."
        );
        break;
      default:
        showSnackbar(
          "error",
          "Error",
          data.message || "Something went wrong. Please try again."
        );
    }
  };

  const handleSendOtp = async () => {
    if (!phone) {
      showSnackbar('error', 'Invalid Phone Number', 'Please enter a valid 10-digit phone number');
      return;
    }

    const formattedNumber = `+91${phone}`;
    setFormattedPhone(formattedNumber);
    setLoading(true);

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: formattedNumber,
          action: "send",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setShowOtpInput(true);
        showSnackbar(
          "success",
          "OTP Sent!",
          "Please check your phone for the OTP code"
        );
      } else {
        handleErrorResponse(data);
      }
    } catch {
      showSnackbar("error", "Error", "Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 4) {
      showSnackbar('error', 'Invalid OTP', 'Please enter a valid 4-digit OTP');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: formattedPhone,
          otp: otp,
          action: 'verify',
        }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('token', data.token);

        try {
          await sendVerificationEmail(formattedPhone);
        } catch (emailError) {
          console.error('Failed to send verification email:', emailError);
        }

        setShowVerificationModal(true);
        // Reset form after a short delay
        setTimeout(() => {
          resetPageState();
        }, 1000);
      } else {
        handleErrorResponse(data);
      }
    } catch {
      showSnackbar('error', 'Error', 'Failed to verify OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: formattedPhone,
          action: "resend",
        }),
      });

      const data = await response.json();

      if (data.success) {
        showSnackbar(
          "success",
          "OTP Resent!",
          "Please check your phone for the new OTP code"
        );
      } else {
        handleErrorResponse(data);
      }
    } catch {
      showSnackbar("error", "Error", "Failed to resend OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        {/* Floating particles background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
              animate={{
                y: [0, 20, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1
                }
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section 
          id="hero" 
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Animated background with layered gradients */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20 z-0"></div>
            <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/80"></div>
            {/* Animated grid pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a5568_1px,transparent_1px),linear-gradient(to_bottom,#4a5568_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
            
            {/* Decorative lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left column - Main content */}
                <motion.div 
                  className="space-y-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="space-y-4">
                    <motion.div 
                      className="inline-block"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium backdrop-blur-sm">
                        Welcome to the Future of Fantasy Cricket
                      </span>
                    </motion.div>
                    
                    <motion.h1 
                      className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 leading-tight"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      Cricket Fantasy League
                    </motion.h1>
                    
                    <motion.p 
                      className="text-xl md:text-2xl text-gray-300 max-w-xl"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      Experience the future of cricket fantasy gaming with real-time scoring, 
                      advanced analytics, and exciting rewards
                    </motion.p>
                  </div>

                  <motion.div 
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <Link 
                      href="/matches" 
                      className="px-8 py-4 rounded-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Start Playing Now
                    </Link>
                    <Link 
                      href="/learn-more" 
                      className="px-8 py-4 rounded-lg font-medium bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Right column - OTP Verification Form */}
                <motion.div 
                  className="relative w-full max-w-md mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Main card */}
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-gray-900/90 to-gray-950/90 backdrop-blur-xl border border-gray-800/50 shadow-2xl">
                    {/* Ambient light effect */}
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-50"></div>
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="relative p-8 space-y-6">
                      {!showOtpInput ? (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          className="space-y-6"
                        >
                          <div className="text-center space-y-2">
                            <h3 className="text-2xl font-medium text-gray-200">Verify OTP to Get Game Link</h3>
                          </div>

                          {/* Phone input */}
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur"></div>
                            <div className="relative">
                              <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                placeholder="Enter your phone number"
                                className="relative w-full px-4 py-4 bg-gray-900/50 border border-gray-700/50 rounded-xl focus:outline-none focus:border-blue-500/50 text-gray-200 placeholder-gray-400 text-lg transition-all duration-300 z-10"
                              />
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <span className="text-sm">+91</span>
                              </div>
                            </div>
                          </div>

                          {/* Get OTP Button */}
                          <button
                            onClick={handleSendOtp}
                            disabled={loading || phone.length !== 10}
                            className="group relative w-full"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 rounded-xl blur-sm transition-all duration-300 group-hover:blur-md"></div>
                            <div className={`relative w-full px-6 py-4 rounded-xl flex items-center justify-center space-x-2 text-lg font-medium transition-all duration-300 ${
                              loading || phone.length !== 10
                                ? "bg-gray-800/90 text-gray-400"
                                : "bg-gradient-to-r from-blue-500 to-purple-500 text-white group-hover:from-blue-600 group-hover:to-purple-600"
                            }`}>
                              {loading ? (
                                <span className="flex items-center justify-center">
                                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                  Sending...
                                </span>
                              ) : (
                                <>
                                  <span>Get OTP</span>
                                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                  </svg>
                                </>
                              )}
                            </div>
                          </button>

                          {/* Security message */}
                          <div className="flex items-start space-x-3 p-4 rounded-xl bg-gray-900/50 border border-gray-800/50">
                            <svg className="w-6 h-6 text-red-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <div className="flex-1">
                              <p className="text-sm text-gray-400">
                                Data Security: We implement appropriate security measures to protect your personal information.
                                <span className="inline-block mx-1"></span>
                                <Link href="/privacy-policy" className="text-red-400 hover:text-red-300 transition-colors duration-300">
                                  Privacy Policy
                                </Link>
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          className="space-y-6"
                        >
                          <div className="text-center space-y-2">
                            <h3 className="text-2xl font-medium text-gray-200">Enter Verification Code</h3>
                            <p className="text-gray-400">We have sent a code to your phone</p>
                          </div>

                          {/* OTP Input */}
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur"></div>
                            <div className="relative">
                              <input
                                type="text"
                                inputMode="numeric"
                                pattern="\d*"
                                maxLength={4}
                                value={otp}
                                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                                placeholder="Enter 4-digit OTP"
                                className="relative w-full px-4 py-4 bg-gray-900/50 border border-gray-700/50 rounded-xl focus:outline-none focus:border-blue-500/50 text-gray-200 placeholder-gray-400 text-sm text-center tracking-[0.2em] transition-all duration-300 z-10"
                              />
                              {/* <div className="absolute inset-0 pointer-events-none">
                                <div className="flex justify-center items-center h-full">
                                  <div className="flex gap-3">
                                    {[0,1,2,3].map((i) => (
                                      <div 
                                        key={i} 
                                        className={`w-3 h-3 rounded-full ${
                                          otp[i] ? 'bg-blue-500' : 'bg-gray-600'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>

                          <div className="flex gap-3">
                            {/* Verify Button */}
                            <button
                              onClick={handleVerifyOtp}
                              disabled={loading || otp.length !== 4}
                              className="group relative flex-1"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 rounded-xl blur-sm transition-all duration-300 group-hover:blur-md"></div>
                              <div className={`relative w-full px-6 py-4 rounded-xl flex items-center justify-center text-lg font-medium transition-all duration-300 ${
                                loading || otp.length !== 4
                                  ? "bg-gray-800/90 text-gray-400"
                                  : "bg-gradient-to-r from-blue-500 to-purple-500 text-white group-hover:from-blue-600 group-hover:to-purple-600"
                              }`}>
                                {loading ? (
                                  <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Verifying...
                                  </span>
                                ) : (
                                  "Verify OTP"
                                )}
                              </div>
                            </button>

                            {/* Resend Button */}
                            <button
                              onClick={handleResendOtp}
                              disabled={loading}
                              className="group relative"
                            >
                              <div className="absolute inset-0 bg-gray-600/30 rounded-xl blur-sm transition-all duration-300 group-hover:blur-md"></div>
                              <div className="relative px-6 py-4 bg-gray-800/90 rounded-xl font-medium text-gray-400 group-hover:text-gray-200 transition-all duration-300">
                                Resend
                              </div>
                            </button>
                          </div>

                          <button
                            onClick={() => setShowOtpInput(false)}
                            className="w-full text-sm text-gray-400 hover:text-gray-300 transition-colors duration-200"
                          >
                            Change phone number
                          </button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section with 3D Cards */}
        <motion.section 
          id="features" 
          className="py-32 relative overflow-hidden"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Gradient Orbs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full filter blur-[128px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full filter blur-[128px] translate-x-1/2 translate-y-1/2"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-20"
              variants={fadeInUp}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Premium Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience cricket fantasy gaming like never before with our cutting-edge features
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-[1000px]">
              {[
                {
                  title: "Real-Time Analytics",
                  description: "Get instant insights and live performance metrics for all your players",
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  gradient: "from-blue-500 to-blue-700"
                },
                {
                  title: "AI-Powered Predictions",
                  description: "Make informed decisions with our advanced machine learning algorithms",
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  gradient: "from-purple-500 to-purple-700"
                },
                {
                  title: "Premium Rewards",
                  description: "Win exclusive prizes and compete in VIP tournaments",
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  gradient: "from-pink-500 to-pink-700"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative bg-gray-900 p-8 rounded-2xl border border-gray-800 h-full transform transition-transform duration-300 group-hover:translate-y-[-4px] group-hover:translate-x-[-4px]">
                    <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5`}>
                      <div className="w-full h-full bg-gray-900 rounded-[10px] flex items-center justify-center">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Statistics Section */}
        <section className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
            >
              {[
                { number: "1M+", label: "Active Players" },
                { number: "₹10Cr+", label: "Prize Pool" },
                { number: "500+", label: "Daily Contests" },
                { number: "99.9%", label: "Payout Rate" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl  group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border-l-4 border-blue-500">
                    <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                      {stat.number}
                    </h3>
                    <p className="text-gray-300 text-lg">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                How It Works
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start your fantasy cricket journey in four simple steps
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

              {[
                { title: "Sign Up", description: "Create your account securely with phone verification" },
                { title: "Join Contest", description: "Choose from a wide range of premium contests" },
                { title: "Create Team", description: "Pick your dream team within the budget" },
                { title: "Win Big", description: "Compete and win exciting cash prizes" }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative z-10"
                >
                  <div className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 relative group hover:border-blue-500/50 transition-colors duration-300">
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold relative">
                        <div className="absolute inset-1 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    <div className="mt-12 text-center">
                      <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-purple-500/20 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center bg-gray-800/50 backdrop-blur-xl p-12 rounded-2xl border border-gray-700/50"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Ready to Start Winning?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of players already winning big on our platform. Start your journey today!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/matches" 
                  className="px-8 py-4 rounded-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Playing Now
                </Link>
                <Link 
                  href="#" 
                  className="px-8 py-4 rounded-lg font-medium bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Verification Modal */}
        {showVerificationModal && (
          <VerificationModal
            isOpen={showVerificationModal}
            onClose={() => setShowVerificationModal(false)}
          />
        )}

        {/* Snackbar for notifications */}
        <Snackbar
          isOpen={modal.isOpen}
          onClose={closeSnackbar}
          type={modal.type}
          title={modal.title}
          message={modal.message}
        />
      </div>
    </AppLayout>
  );
} 