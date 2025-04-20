"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown, Search, TrophyIcon, DollarSignIcon, ZapIcon, PercentIcon } from "lucide-react";
import AppLayout from "../AppLayout";
import { leaderboard } from "@/constants";

type SortField = 'rank' | 'earnings' | 'contestsWon' | 'winPercentage';

export default function Leaderboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortField>('rank');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  
  // Handle sorting
  const handleSort = (field: SortField) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortDirection('asc');
    }
  };
  
  // Filter and sort leaderboard
  const filteredAndSortedLeaderboard = [...leaderboard]
    .filter(user => 
      user.username.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      
      const compareResult = aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
      return sortDirection === 'asc' ? compareResult : -compareResult;
    });
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Global Leaderboard</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-4xl">
            See where you stand among the best fantasy cricket players. Compete and climb the ranks.
          </p>
        </div>
        
        {/* Top Players Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {leaderboard.slice(0, 3).map((user, index) => (
            <motion.div
              key={user.userId}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={`h-2 ${
                index === 0 
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-300' 
                  : index === 1 
                    ? 'bg-gradient-to-r from-gray-400 to-gray-300' 
                    : 'bg-gradient-to-r from-amber-700 to-amber-600'
              }`} />
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`relative w-12 h-12 rounded-full flex items-center justify-center mr-3 ${
                    index === 0 
                      ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' 
                      : index === 1 
                        ? 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400' 
                        : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                  }`}>
                    <span className="font-bold">#{user.rank}</span>
                    
                    {user.previousRank > user.rank && (
                      <span className="absolute -top-2 -right-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full p-0.5">
                        <ChevronUp size={14} />
                      </span>
                    )}
                    
                    {user.previousRank < user.rank && (
                      <span className="absolute -top-2 -right-2 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full p-0.5">
                        <ChevronDown size={14} />
                      </span>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{user.username}</h3>
                    <div className="flex items-center mt-1">
                      {user.badges.map((badge, badgeIndex) => (
                        <span 
                          key={badgeIndex} 
                          className="inline-block text-xs py-0.5 px-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 mr-1"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-gray-50 dark:bg-gray-700/30 p-2 rounded-lg text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Earnings</p>
                    <p className="font-bold text-gray-900 dark:text-white">₹{user.earnings.toLocaleString()}</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700/30 p-2 rounded-lg text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Win Rate</p>
                    <p className="font-bold text-gray-900 dark:text-white">{user.winPercentage.toFixed(1)}%</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700/30 p-2 rounded-lg text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Contests Won</p>
                    <p className="font-bold text-gray-900 dark:text-white">{user.contestsWon}</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700/30 p-2 rounded-lg text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Total Points</p>
                    <p className="font-bold text-gray-900 dark:text-white">{user.totalPoints.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Search and Filter */}
        <div className="mb-6">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search players..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
            />
          </div>
        </div>
        
        {/* Leaderboard Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    <button 
                      onClick={() => handleSort('rank')}
                      className="flex items-center"
                    >
                      <span className="mr-2">Rank</span>
                      {sortBy === 'rank' && (
                        sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                      )}
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Player
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">
                    Points
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    <button 
                      onClick={() => handleSort('contestsWon')}
                      className="flex items-center"
                    >
                      <span className="mr-2">Contests Won</span>
                      {sortBy === 'contestsWon' && (
                        sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                      )}
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    <button 
                      onClick={() => handleSort('earnings')}
                      className="flex items-center"
                    >
                      <span className="mr-2">Earnings</span>
                      {sortBy === 'earnings' && (
                        sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                      )}
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden lg:table-cell">
                    <button 
                      onClick={() => handleSort('winPercentage')}
                      className="flex items-center"
                    >
                      <span className="mr-2">Win %</span>
                      {sortBy === 'winPercentage' && (
                        sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                      )}
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredAndSortedLeaderboard.map((user) => (
                  <motion.tr 
                    key={user.userId}
                    className={`
                      hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors
                      ${user.username === 'currentUser' ? 'bg-blue-50 dark:bg-blue-900/10' : ''}
                    `}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`
                          inline-flex items-center justify-center w-8 h-8 rounded-full mr-2 font-medium
                          ${user.rank <= 3 
                            ? user.rank === 1 
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                              : user.rank === 2 
                                ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                                : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                            : 'bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                          }
                        `}>
                          {user.rank}
                        </span>
                        
                        {user.previousRank > user.rank ? (
                          <span className="text-green-600 dark:text-green-400 flex items-center">
                            <ChevronUp size={14} />
                            <span className="text-xs">{user.previousRank - user.rank}</span>
                          </span>
                        ) : user.previousRank < user.rank ? (
                          <span className="text-red-600 dark:text-red-400 flex items-center">
                            <ChevronDown size={14} />
                            <span className="text-xs">{user.rank - user.previousRank}</span>
                          </span>
                        ) : (
                          <span className="text-gray-400 dark:text-gray-500 text-xs">-</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 relative">
                          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            <span className="font-bold text-gray-600 dark:text-gray-300">
                              {user.username.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          {user.username === 'currentUser' && (
                            <span className="absolute -right-1 -bottom-1 bg-blue-500 text-white rounded-full p-0.5">
                              <span className="sr-only">You</span>
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                              </svg>
                            </span>
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {user.username}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 flex flex-wrap gap-1 mt-0.5">
                            {user.badges.map((badge, index) => (
                              <span key={index}>{badge}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                      <div className="flex items-center text-gray-900 dark:text-white">
                        <ZapIcon size={16} className="text-blue-500 mr-1" />
                        {user.totalPoints.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-gray-900 dark:text-white">
                        <TrophyIcon size={16} className="text-yellow-500 mr-1" />
                        {user.contestsWon}
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                          ({user.contestsPlayed})
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-gray-900 dark:text-white">
                        <DollarSignIcon size={16} className="text-green-500 mr-1" />
                        ₹{user.earnings.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                      <div className="flex items-center text-gray-900 dark:text-white">
                        <PercentIcon size={16} className="text-purple-500 mr-1" />
                        {user.winPercentage.toFixed(1)}%
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredAndSortedLeaderboard.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-gray-500 dark:text-gray-400">No players found matching your search.</p>
            </div>
          )}
        </div>
        
        {/* Legend */}
        <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Leaderboard Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <TrophyIcon size={14} className="text-yellow-500 mr-2" />
              <span>Contests Won (Total Played)</span>
            </div>
            <div className="flex items-center">
              <ZapIcon size={14} className="text-blue-500 mr-2" />
              <span>Total Fantasy Points</span>
            </div>
            <div className="flex items-center">
              <PercentIcon size={14} className="text-purple-500 mr-2" />
              <span>Win Percentage</span>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
} 