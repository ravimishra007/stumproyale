"use client";

import { motion } from "framer-motion";
import AppLayout from "../AppLayout";

export default function AboutPage() {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-blue-600 dark:text-blue-400">StumpRoyale</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Building the future of fantasy cricket with innovation, transparency, and community.
          </p>
        </motion.div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="w-full h-[300px] md:h-[400px] relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Simple animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-purple-600/50" />
                
                {/* Animated circles */}
                <div className="absolute w-64 h-64 rounded-full border-4 border-white/20 animate-spin-slow" />
                <div className="absolute w-48 h-48 rounded-full border-4 border-white/10 animate-spin-reverse" />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <h2 className="text-5xl font-bold mb-4 text-white animate-fade-in">StumpRoyale</h2>
                  <p className="text-2xl font-light text-white/90 animate-fade-in-delayed">Our Journey</p>
                  <div className="w-32 h-1 bg-white/80 mx-auto mt-6 rounded-full animate-expand" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Founded in 2022, StumpRoyale was born from a passion for cricket and a vision to revolutionize how fans engage with the sport they love. What began as a small team of cricket enthusiasts has grown into India&apos;s premier fantasy cricket platform.
              </p>
              <p>
                Our journey started when our founders, all avid cricket fans, recognized the need for a more immersive, transparent, and technologically advanced fantasy cricket experience. They combined their expertise in technology, gaming, and sports analytics to create a platform that would set new standards in the fantasy sports industry.
              </p>
              <p>
                Today, StumpRoyale serves millions of users across India, offering an unparalleled gaming experience with cutting-edge features, real-time analytics, and the most rewarding contests in the market.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 dark:text-blue-400">
                    <path d="M12 16L7 11M12 16L17 11M12 16V4M6 20H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 ml-14">
                To transform how cricket fans experience their favorite sport by providing an innovative, fair, and rewarding fantasy cricket platform that enhances their connection to the game, while fostering a vibrant community of cricket enthusiasts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-600 dark:text-purple-400">
                    <path d="M12 6V12L16 14M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 ml-14">
                To become the world&apos;s leading fantasy cricket platform, recognized for our innovation, integrity, and commitment to delivering an exceptional user experience that continuously raises the bar for the entire industry.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Innovation",
                description: "We constantly push boundaries to create new and exciting ways for users to engage with cricket.",
                color: "blue"
              },
              {
                title: "Integrity",
                description: "We operate with transparency and fairness in all aspects of our platform and business.",
                color: "green"
              },
              {
                title: "User-Centric",
                description: "We put our users at the center of every decision we make and feature we develop.",
                color: "purple"
              },
              {
                title: "Community",
                description: "We foster a vibrant, respectful community of cricket fans from all backgrounds.",
                color: "amber"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className={`bg-white dark:bg-gray-800 border-t-4 border-${value.color}-500 rounded-lg p-6 shadow-sm`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Vikram Patel",
                role: "CEO & Co-Founder",
                bio: "With over 15 years in gaming and sports tech, Vikram leads StumpRoyale's vision and strategy."
              },
              {
                name: "Anjali Sharma",
                role: "CTO & Co-Founder",
                bio: "A former software architect at a major tech company, Anjali oversees all technology and innovation at StumpRoyale."
              },
              {
                name: "Rahul Kapoor",
                role: "Chief Product Officer",
                bio: "Rahul brings his expertise in UX design and product development to create StumpRoyale's intuitive user experience."
              },
              {
                name: "Meera Singh",
                role: "Chief Marketing Officer",
                bio: "With a background in sports marketing, Meera drives StumpRoyale's brand strategy and user acquisition."
              },
              {
                name: "Arjun Reddy",
                role: "Head of Analytics",
                bio: "A data scientist with a passion for cricket, Arjun leads the team developing our predictive algorithms."
              },
              {
                name: "Priya Desai",
                role: "Chief Legal Officer",
                bio: "Priya ensures StumpRoyale maintains the highest standards of compliance and responsible gaming."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <div className="text-5xl font-bold text-gray-400 dark:text-gray-500">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Join Us CTA */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Join the StumpRoyale Team</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We are always looking for talented individuals who are passionate about cricket, technology, and creating exceptional user experiences.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
            View Open Positions
          </button>
        </motion.div>
      </div>
    </AppLayout>
  );
} 