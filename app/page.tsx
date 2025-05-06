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

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  
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