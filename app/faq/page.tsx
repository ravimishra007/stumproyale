"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, SearchIcon } from "lucide-react";
import AppLayout from "../AppLayout";

// FAQ categories and questions
const faqData = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I create an account on StumpRoyale?",
        answer: "Creating an account is simple! Click on the 'Sign Up' button on the homepage, enter your details, verify your email or mobile number, and you're ready to go. You can also sign up using your Google or Facebook account for a quicker registration process."
      },
      {
        question: "Is StumpRoyale free to use?",
        answer: "Yes, StumpRoyale is free to download and register. We offer both free contests and paid contests. Free contests allow you to practice and enjoy the game without any investment, while paid contests require an entry fee and offer real cash prizes."
      },
      {
        question: "What is the minimum age requirement to play on StumpRoyale?",
        answer: "You must be at least 18 years old to play fantasy cricket on StumpRoyale. We are committed to responsible gaming and comply with all legal requirements regarding age verification."
      },
      {
        question: "Can I play StumpRoyale from outside India?",
        answer: "Currently, StumpRoyale services are available only to users residing in India, except in states where fantasy sports are prohibited by law. We're working on expanding to more regions in the future."
      }
    ]
  },
  {
    category: "Creating Teams",
    questions: [
      {
        question: "How do I create my fantasy cricket team?",
        answer: "To create a team, select an upcoming match, choose players within the 100 credit cap, select a captain and vice-captain, and save your team. Your captain earns 2x points, while your vice-captain earns 1.5x points. You can create up to 5 teams per match."
      },
      {
        question: "What is the credit system for team selection?",
        answer: "Each player is assigned a credit value based on their past performance and current form. You have 100 total credits to build your team of 11 players, including at least 1 wicketkeeper, 3-5 batsmen, 3-5 bowlers, and 1-3 all-rounders."
      },
      {
        question: "Can I edit my team after creating it?",
        answer: "Yes, you can edit your team as many times as you want until the deadline (usually the match start time). After the deadline, teams are locked and cannot be modified for that match."
      },
      {
        question: "What should I consider when selecting a captain and vice-captain?",
        answer: "Choose players who are likely to have the most impact on the match. Consider factors like recent form, pitch conditions, player matchups, and historical performance against the opponent. Your captain gets 2x points and vice-captain gets 1.5x points, so these choices significantly impact your total score."
      }
    ]
  },
  {
    category: "Contests & Prizes",
    questions: [
      {
        question: "How do contests work on StumpRoyale?",
        answer: "Contests are competitions where your fantasy team competes against other users' teams. There are various types including head-to-head, small leagues, mega contests, and guaranteed prize pools. Each contest has an entry fee, total prize pool, and a specified number of winners."
      },
      {
        question: "How are winners determined in contests?",
        answer: "Winners are determined based on the total points scored by their fantasy teams. The higher your rank in the leaderboard, the bigger your prize. The exact prize distribution varies by contest and is always specified in the contest details before you join."
      },
      {
        question: "When are prizes distributed after a match?",
        answer: "Prizes are distributed shortly after the match results are officially declared and all player statistics are verified. This typically happens within 2-3 hours after the match ends, but may take up to 24 hours in case additional verification is needed."
      },
      {
        question: "What happens if a match is abandoned or postponed?",
        answer: "If a match is abandoned, canceled, or postponed, all related contests are canceled and entry fees are refunded to your StumpRoyale wallet. If a match is shortened (like in rain-affected games) but an official result is declared, contests remain valid and winners are decided based on the shortened match."
      }
    ]
  },
  {
    category: "Points System",
    questions: [
      {
        question: "How are points calculated for players?",
        answer: "Points are awarded for various actions performed by players during a match, such as scoring runs, taking wickets, catching, stumping, etc. Bonus points are awarded for exceptional performances like centuries, five-wicket hauls, etc. The complete points system is available in the 'How to Play' section."
      },
      {
        question: "Do points differ between different formats of cricket?",
        answer: "Yes, there are slight variations in the points system for different formats (T20, ODI, Test). For example, economy rate points are more significant in T20s compared to Tests, while batting points are weighted differently across formats to reflect their relative difficulty."
      },
      {
        question: "How do captain and vice-captain points work?",
        answer: "Your selected captain earns 2x (double) the points they score in the actual match. The vice-captain earns 1.5x (one and a half times) their actual points. This makes these selections crucial to your team's success."
      },
      {
        question: "When are player points updated during a match?",
        answer: "Player points are updated in near real-time during live matches. You can track your team's performance and standings in contests as the match progresses. Occasional delays may occur due to data verification."
      }
    ]
  },
  {
    category: "Account & Payments",
    questions: [
      {
        question: "How do I deposit money into my StumpRoyale account?",
        answer: "You can deposit funds using various methods including UPI, credit/debit cards, net banking, and popular wallets. Go to 'My Account' > 'Deposit' and follow the instructions. All transactions are secure and encrypted."
      },
      {
        question: "How do I withdraw my winnings?",
        answer: "To withdraw winnings, go to 'My Account' > 'Withdraw', enter the amount, and select your preferred withdrawal method. Withdrawals are processed within 24-48 hours and transferred directly to your linked bank account."
      },
      {
        question: "Is there a verification process for withdrawals?",
        answer: "Yes, for your security and to comply with regulations, we require KYC verification before processing withdrawals. This includes verifying your PAN card, address proof, and bank account details. This is a one-time process."
      },
      {
        question: "What is the StumpRoyale wallet?",
        answer: "The StumpRoyale wallet holds your deposits, winnings, bonuses, and cashbacks. It's divided into two parts: Deposited Amount (which you can withdraw anytime) and Winnings (which can be withdrawn after KYC verification). Bonuses have specific usage conditions and cannot be withdrawn directly."
      }
    ]
  },
  {
    category: "Technical Issues",
    questions: [
      {
        question: "What should I do if the app crashes or freezes?",
        answer: "First, try closing and reopening the app. If that doesn't work, restart your device. Make sure you're using the latest version of the app and have a stable internet connection. If problems persist, contact our support team with details about your device and the issue."
      },
      {
        question: "I'm experiencing slow loading times. What can I do?",
        answer: "Slow loading can be due to network issues, device memory constraints, or app cache. Try switching to a more stable network, clearing the app cache (in your device settings), or reinstalling the app. During peak times (like just before major matches), our servers may experience high traffic, so slight delays are normal."
      },
      {
        question: "How do I update the app to the latest version?",
        answer: "For Android, visit the Google Play Store, and for iOS, visit the App Store. Search for StumpRoyale and if an update is available, you'll see an 'Update' button. We recommend enabling auto-updates to always have the latest features and security improvements."
      },
      {
        question: "I've forgotten my password. How do I reset it?",
        answer: "On the login screen, click on 'Forgot Password'. Enter your registered email or phone number, and we'll send you a password reset link. Follow the instructions in the email/SMS to create a new password. For security reasons, the reset link expires after 24 hours."
      }
    ]
  }
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState("Getting Started");

  // Toggle question open/closed state
  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Filter questions based on search query
  const filteredFAQs = searchQuery
    ? faqData.map(category => ({
        ...category,
        questions: category.questions.filter(
          q => q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
               q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    : faqData;

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about StumpRoyale fantasy cricket.
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              placeholder="Search for questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {searchQuery ? (
          // Search Results
          <div className="max-w-3xl mx-auto">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{category.category}</h2>
                  <div className="space-y-4">
                    {category.questions.map((item, questionIndex) => {
                      const key = `${categoryIndex}-${questionIndex}`;
                      const isOpen = openQuestions[key] || false;
                      
                      return (
                        <motion.div 
                          key={questionIndex}
                          className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: questionIndex * 0.05 }}
                        >
                          <button
                            className="flex justify-between items-center w-full px-6 py-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                            onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                          >
                            <span className="font-medium text-gray-900 dark:text-white">{item.question}</span>
                            <ChevronDownIcon 
                              className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
                            />
                          </button>
                          
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-750 border-t border-gray-200 dark:border-gray-700">
                                  <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No results found</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We couldn&apos;t find any questions matching &quot;{searchQuery}&quot;
                </p>
              </div>
            )}
          </div>
        ) : (
          // Regular FAQ View
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm sticky top-24">
                <h3 className="font-medium text-gray-900 dark:text-white mb-4">Categories</h3>
                <nav className="space-y-1">
                  {faqData.map((category, index) => (
                    <button
                      key={index}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        activeCategory === category.category
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-750'
                      }`}
                      onClick={() => setActiveCategory(category.category)}
                    >
                      {category.category}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
            
            {/* Questions */}
            <div className="lg:col-span-3">
              {faqData.map((category, categoryIndex) => {
                // Only show active category
                if (activeCategory !== category.category) return null;
                
                return (
                  <div key={categoryIndex} className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{category.category}</h2>
                    <div className="space-y-4">
                      {category.questions.map((item, questionIndex) => {
                        const key = `${categoryIndex}-${questionIndex}`;
                        const isOpen = openQuestions[key] || false;
                        
                        return (
                          <motion.div 
                            key={questionIndex}
                            className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: questionIndex * 0.05 }}
                          >
                            <button
                              className="flex justify-between items-center w-full px-6 py-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                              onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                            >
                              <span className="font-medium text-gray-900 dark:text-white">{item.question}</span>
                              <ChevronDownIcon 
                                className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
                              />
                            </button>
                            
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-750 border-t border-gray-200 dark:border-gray-700">
                                    <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Still have questions */}
        <motion.div 
          className="max-w-3xl mx-auto mt-16 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Still have questions?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </AppLayout>
  );
} 