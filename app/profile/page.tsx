"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Settings,
  CreditCard,
  Bell,
  HelpCircle,
  Award,
  TrendingUp,
  DollarSign,
  Check,
  ChevronRight
} from "lucide-react";
import AppLayout from "../AppLayout";
import { leaderboard, userTeams } from "@/constants";

// Find the current user from leaderboard
const currentUser = leaderboard.find(user => user.username === "currentUser");

export default function Profile() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Calculate some stats
  const totalTeams = userTeams.length;
  const contestsJoined = userTeams.reduce((acc, team) => acc + team.contestIds.length, 0);
  
  const tabContent = {
    overview: (
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Account Summary</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Teams Created",
                value: totalTeams,
                icon: <User className="text-blue-500" />,
                bgColor: "bg-blue-50 dark:bg-blue-900/20"
              },
              {
                label: "Contests Joined",
                value: contestsJoined,
                icon: <TrendingUp className="text-green-500" />,
                bgColor: "bg-green-50 dark:bg-green-900/20"
              },
              {
                label: "Contests Won",
                value: currentUser?.contestsWon || 0,
                icon: <Award className="text-yellow-500" />,
                bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
              },
              {
                label: "Total Earnings",
                value: `₹${currentUser?.earnings.toLocaleString() || 0}`,
                icon: <DollarSign className="text-purple-500" />,
                bgColor: "bg-purple-50 dark:bg-purple-900/20"
              }
            ].map((stat, index) => (
              <div key={index} className="flex items-start">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${stat.bgColor}`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Leaderboard Position */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Your Rank</h2>
            
            <div className="flex items-center mb-4">
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                {currentUser?.rank || "-"}
              </div>
              
              <div className="ml-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Global Ranking</p>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  {currentUser?.previousRank && currentUser.previousRank > currentUser.rank ? (
                    <span className="text-green-600 dark:text-green-400 text-sm">
                      ↑ Moved up {currentUser.previousRank - currentUser.rank} spots
                    </span>
                  ) : currentUser?.previousRank && currentUser.previousRank < currentUser.rank ? (
                    <span className="text-red-600 dark:text-red-400 text-sm">
                      ↓ Moved down {currentUser.rank - currentUser.previousRank} spots
                    </span>
                  ) : (
                    <span className="text-yellow-600 dark:text-yellow-400 text-sm">
                      = No change in ranking
                    </span>
                  )}
                </p>
              </div>
            </div>
            
            <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 dark:text-gray-400">Win Rate</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {currentUser?.winPercentage.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 lg:col-span-2">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
            
            <div className="space-y-4">
              {[
                {
                  action: "Joined a contest",
                  detail: "Grand League for CSK vs KKR",
                  time: "2 days ago",
                  icon: <DollarSign size={14} className="text-green-500" />
                },
                {
                  action: "Created a team",
                  detail: "Thunder Warriors",
                  time: "2 days ago",
                  icon: <User size={14} className="text-blue-500" />
                },
                {
                  action: "Won a prize",
                  detail: "₹500 in Small League",
                  time: "1 week ago",
                  icon: <Award size={14} className="text-yellow-500" />
                },
                {
                  action: "Added funds",
                  detail: "₹1,000 to wallet",
                  time: "2 weeks ago",
                  icon: <CreditCard size={14} className="text-purple-500" />
                }
              ].map((activity, index) => (
                <div key={index} className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
                    {activity.icon}
                  </div>
                  
                  <div className="flex-grow">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.action}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{activity.detail}</p>
                  </div>
                  
                  <div className="text-xs text-gray-400 dark:text-gray-500">{activity.time}</div>
                </div>
              ))}
            </div>
            
            <button className="mt-4 w-full text-sm text-blue-600 dark:text-blue-400 font-medium py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
              View All Activity
            </button>
          </div>
        </div>
        
        {/* Current Season Stats */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Season Performance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 text-white">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium text-blue-100">Performance Points</h3>
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">This Season</span>
                </div>
                
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-3xl font-bold">{currentUser?.totalPoints.toLocaleString() || 0}</span>
                    <span className="text-blue-200 text-sm ml-2">points</span>
                  </div>
                  
                  <div className="flex items-center text-green-300 text-sm">
                    <span>↑ 12%</span>
                    <span className="text-xs ml-1">vs last season</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  label: "Best Captain Pick",
                  value: "MS Dhoni",
                  subtext: "245 points in single match",
                  icon: <Award size={16} className="text-yellow-500" />
                },
                {
                  label: "Most Selected Player",
                  value: "Virat Kohli",
                  subtext: "Selected in 5 teams",
                  icon: <User size={16} className="text-blue-500" />
                },
                {
                  label: "Biggest Win",
                  value: "₹2,000",
                  subtext: "Mega Contest (MI vs RCB)",
                  icon: <TrendingUp size={16} className="text-green-500" />
                }
              ].map((stat, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
                    {stat.icon}
                  </div>
                  
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{stat.value}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{stat.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    account: (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Account Information</h2>
        
        <div className="space-y-6">
          {/* Personal Details */}
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Personal Details</h3>
              <button className="text-sm text-blue-600 dark:text-blue-400">
                Edit
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Full Name</p>
                <p className="text-base font-medium text-gray-900 dark:text-white">John Doe</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Username</p>
                <p className="text-base font-medium text-gray-900 dark:text-white">currentUser</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <p className="text-base font-medium text-gray-900 dark:text-white">johndoe@example.com</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                <p className="text-base font-medium text-gray-900 dark:text-white">+91 98765 43210</p>
              </div>
            </div>
          </div>
          
          {/* Account Security */}
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Security</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-base font-medium text-gray-900 dark:text-white">Password</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Last changed 3 months ago</p>
                </div>
                <button className="text-sm text-blue-600 dark:text-blue-400">
                  Change
                </button>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-base font-medium text-gray-900 dark:text-white">Two-factor Authentication</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Protect your account with 2FA</p>
                </div>
                <button className="px-3 py-1 text-sm bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full flex items-center">
                  <Check size={14} className="mr-1" />
                  Enabled
                </button>
              </div>
            </div>
          </div>
          
          {/* Wallet */}
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Wallet</h3>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white mb-4">
              <p className="text-sm text-blue-100 mb-1">Available Balance</p>
              <p className="text-2xl font-bold">₹2,500</p>
              
              <div className="flex space-x-2 mt-4">
                <button className="flex-1 bg-white text-blue-600 text-sm font-medium py-2 rounded">
                  Add Money
                </button>
                <button className="flex-1 bg-blue-400/20 text-white text-sm font-medium py-2 rounded border border-white/30">
                  Withdraw
                </button>
              </div>
            </div>
            
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Recent Transactions</h4>
            
            <div className="space-y-2">
              {[
                { 
                  type: "deposit", 
                  amount: 1000, 
                  date: "Apr 15, 2023", 
                  status: "completed" 
                },
                { 
                  type: "contest entry", 
                  amount: -499, 
                  date: "Apr 12, 2023", 
                  status: "completed" 
                },
                { 
                  type: "withdrawal", 
                  amount: -1500, 
                  date: "Apr 5, 2023", 
                  status: "completed" 
                }
              ].map((transaction, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                      {transaction.type}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{transaction.date}</p>
                  </div>
                  
                  <div className={`text-sm font-medium ${
                    transaction.amount > 0 
                      ? "text-green-600 dark:text-green-400" 
                      : "text-red-600 dark:text-red-400"
                  }`}>
                    {transaction.amount > 0 ? "+" : ""}{transaction.amount}
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-3 w-full text-center text-sm text-blue-600 dark:text-blue-400 font-medium py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors">
              View All Transactions
            </button>
          </div>
        </div>
      </div>
    ),
    settings: (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Settings</h2>
        
        <div className="space-y-6">
          {/* Notification Settings */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Notification Preferences</h3>
            
            <div className="space-y-3">
              {[
                { name: "Match Reminders", description: "Get notified before matches start" },
                { name: "Contest Updates", description: "Notifications about contest status and results" },
                { name: "Team Selection Deadline", description: "Reminders to complete team selection" },
                { name: "Promotional Offers", description: "Get notified about special offers and promotions" }
              ].map((setting, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="text-base font-medium text-gray-900 dark:text-white">{setting.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{setting.description}</p>
                  </div>
                  
                  <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out">
                    <input 
                      type="checkbox" 
                      id={`toggle-${index}`} 
                      className="opacity-0 w-0 h-0"
                      defaultChecked={index < 3}
                    />
                    <label 
                      htmlFor={`toggle-${index}`}
                      className={`absolute top-0 left-0 right-0 bottom-0 rounded-full ${
                        index < 3 ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-700"
                      } transition-colors cursor-pointer`}
                    >
                      <span 
                        className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
                          index < 3 ? "translate-x-6" : ""
                        }`} 
                      />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Theme Settings */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Appearance</h3>
            
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "Light", id: "light" },
                { name: "Dark", id: "dark" },
                { name: "System", id: "system" }
              ].map((theme) => (
                <div key={theme.id} className="relative">
                  <input
                    type="radio"
                    id={`theme-${theme.id}`}
                    name="theme"
                    className="sr-only"
                    defaultChecked={theme.id === "system"}
                  />
                  <label
                    htmlFor={`theme-${theme.id}`}
                    className={`
                      flex flex-col items-center p-3 rounded-lg border-2 cursor-pointer
                      ${theme.id === "system" 
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" 
                        : "border-gray-200 dark:border-gray-700"
                      }
                    `}
                  >
                    <div 
                      className={`w-12 h-12 rounded-md mb-2 ${
                        theme.id === "light" 
                          ? "bg-white border border-gray-200"
                          : theme.id === "dark"
                            ? "bg-gray-800 border border-gray-700"
                            : "bg-gradient-to-r from-white to-gray-800 border border-gray-200"
                      }`} 
                    />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {theme.name}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Privacy Settings */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Privacy</h3>
            
            <div className="space-y-3">
              {[
                { name: "Show my real name", description: "Display your real name instead of username" },
                { name: "Public profile", description: "Allow other users to view your profile" },
                { name: "Show on leaderboards", description: "Let others see your position on leaderboards" }
              ].map((setting, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="text-base font-medium text-gray-900 dark:text-white">{setting.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{setting.description}</p>
                  </div>
                  
                  <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out">
                    <input 
                      type="checkbox" 
                      id={`privacy-${index}`} 
                      className="opacity-0 w-0 h-0"
                      defaultChecked={index === 2}
                    />
                    <label 
                      htmlFor={`privacy-${index}`}
                      className={`absolute top-0 left-0 right-0 bottom-0 rounded-full ${
                        index === 2 ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-700"
                      } transition-colors cursor-pointer`}
                    >
                      <span 
                        className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
                          index === 2 ? "translate-x-6" : ""
                        }`} 
                      />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  };
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-4xl font-bold text-gray-400 dark:text-gray-500 mb-4 md:mb-0 md:mr-6">
              J
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">John Doe</h1>
              <p className="text-gray-600 dark:text-gray-400">@currentUser</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
                {currentUser?.badges.map((badge, index) => (
                  <span 
                    key={index}
                    className="inline-block text-xs font-medium py-1 px-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                Member since October 2022
              </p>
            </div>
            
            <button className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
              Edit Profile
            </button>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex overflow-x-auto mb-6">
          {[
            { id: 'overview', label: 'Overview', icon: <User size={16} /> },
            { id: 'account', label: 'Account', icon: <Settings size={16} /> },
            { id: 'settings', label: 'Settings', icon: <Settings size={16} /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 border-b-2 mr-4 ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {tabContent[activeTab as keyof typeof tabContent]}
        </motion.div>
        
        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { 
              icon: <CreditCard className="text-blue-500" size={18} />, 
              title: "Payment Methods", 
              description: "Manage your cards and accounts"
            },
            { 
              icon: <Bell className="text-yellow-500" size={18} />, 
              title: "Notifications", 
              description: "Customize your alerts and reminders"
            },
            { 
              icon: <HelpCircle className="text-green-500" size={18} />, 
              title: "Help & Support", 
              description: "Get assistance with your account"
            }
          ].map((link, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
                  {link.icon}
                </div>
                
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{link.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{link.description}</p>
                </div>
              </div>
              
              <ChevronRight size={16} className="text-gray-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
} 