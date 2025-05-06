"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AppLayout from "./AppLayout";
import Snackbar from "@/components/Snackbar";

interface ModalState {
  isOpen: boolean;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
}

export default function Home() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    type: "info",
    title: "",
    message: "",
  });

  const closeSnackbar = () => {
    setModal(prev => ({ ...prev, isOpen: false }));
  };

  const showSnackbar = (type: ModalState['type'], title: string, message: string) => {
    setModal({
      isOpen: true,
      type,
      title,
      message
    });
  };

  const handleSubmit = async () => {
    if (!phone) {
      showSnackbar('error', 'Invalid Phone Number', 'Please enter a valid 10-digit phone number');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: phone,
        }),
      });

      const data = await response.json();

      if (data.success) {
        showSnackbar(
          "success",
          "Success!",
          "Phone number saved successfully"
        );
        setPhone(""); // Clear the input
      } else {
        showSnackbar("error", "Error", data.message || "Something went wrong. Please try again.");
      }
    } catch {
      showSnackbar("error", "Error", "Failed to save phone number. Please try again.");
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
                      className="text-4xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 leading-tight"
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
                    className="hidden md:flex flex-wrap gap-4 "
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
                    {/* Content */}
                    <div className="relative p-8 space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                      >
                        <div className="text-center space-y-2">
                          <h3 className="text-2xl font-medium text-gray-200">Enter Your Phone Number</h3>
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

                        {/* Submit Button */}
                        <button
                          onClick={handleSubmit}
                          disabled={loading || phone.length !== 10}
                          className="group relative w-full cursor-pointer"
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
                                Saving...
                              </span>
                            ) : (
                              <>
                                <span>Submit</span>
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                              </>
                            )}
                          </div>
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

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