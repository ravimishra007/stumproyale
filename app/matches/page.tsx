"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Filter, Calendar, MapPin, CheckCircle, Clock, ChevronRight } from "lucide-react";
import AppLayout from "../AppLayout";
import { matches, teams } from "@/constants";

export default function Matches() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'upcoming' | 'completed'>('all');
  
  const filteredMatches = matches.filter(match => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'upcoming') return match.status === 'upcoming';
    if (activeFilter === 'completed') return match.status === 'completed';
    return true;
  });
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Cricket Matches</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-4xl">
            Browse upcoming and completed cricket matches. Create fantasy teams and join contests.
          </p>
        </div>
        
        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center text-gray-600 dark:text-gray-400 mr-4">
            <Filter size={18} className="mr-2" />
            <span className="text-sm font-medium">Filter:</span>
          </div>
          
          {[
            { id: 'all', label: 'All Matches' },
            { id: 'upcoming', label: 'Upcoming' },
            { id: 'completed', label: 'Completed' }
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as 'all' | 'upcoming' | 'completed')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Match List */}
        <div className="space-y-6">
          {filteredMatches.length > 0 ? (
            filteredMatches.map((match) => {
              const teamA = teams.find(team => team.id === match.teamA);
              const teamB = teams.find(team => team.id === match.teamB);
              const matchDate = new Date(match.date);
              
              if (!teamA || !teamB) return null;
              
              return (
                <motion.div
                  key={match.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Match Details */}
                    <div className="flex-1 p-6">
                      {/* Match Type Badge */}
                      <div className="mb-4">
                        <span className={`
                          text-xs font-medium px-2.5 py-1 rounded-full
                          ${match.matchType === 'league' 
                            ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300' 
                            : match.matchType === 'qualifier'
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400'
                              : 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400'
                          }
                        `}>
                          {match.matchType.charAt(0).toUpperCase() + match.matchType.slice(1)}
                        </span>
                      </div>
                      
                      {/* Teams */}
                      <div className="flex flex-col md:flex-row items-center md:space-x-10 mb-6">
                        <div className="flex flex-col items-center mb-4 md:mb-0">
                          <div 
                            className="w-20 h-20 rounded-full flex items-center justify-center mb-2"
                            style={{ backgroundColor: teamA.primaryColor }}
                          >
                            <span className="text-xl font-bold text-white">{teamA.shortName}</span>
                          </div>
                          <h3 className="text-base font-medium text-gray-900 dark:text-white">{teamA.name}</h3>
                        </div>
                        
                        <div className="flex flex-col items-center mb-4 md:mb-0">
                          <div className="text-lg font-bold text-gray-400 dark:text-gray-500 mb-2">VS</div>
                          {match.status === 'completed' && (
                            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">{match.result}</div>
                          )}
                        </div>
                        
                        <div className="flex flex-col items-center">
                          <div 
                            className="w-20 h-20 rounded-full flex items-center justify-center mb-2"
                            style={{ backgroundColor: teamB.primaryColor }}
                          >
                            <span className="text-xl font-bold text-white">{teamB.shortName}</span>
                          </div>
                          <h3 className="text-base font-medium text-gray-900 dark:text-white">{teamB.name}</h3>
                        </div>
                      </div>
                      
                      {/* Match Info */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-start">
                          <Calendar size={18} className="text-gray-500 mr-2 mt-0.5" />
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Date & Time</p>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {matchDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                              <span className="block text-xs mt-1">
                                {matchDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <MapPin size={18} className="text-gray-500 mr-2 mt-0.5" />
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Venue</p>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{match.venue}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          {match.status === 'completed' ? (
                            <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5" />
                          ) : (
                            <Clock size={18} className="text-orange-500 mr-2 mt-0.5" />
                          )}
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Status</p>
                            <p className={`text-sm font-medium ${
                              match.status === 'completed' 
                                ? 'text-green-600 dark:text-green-400' 
                                : 'text-orange-600 dark:text-orange-400'
                            }`}>
                              {match.status === 'completed' ? 'Completed' : 'Upcoming'}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Score */}
                      {match.status === 'completed' && (
                        <div className="mb-6 bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <span className="block text-sm text-gray-500 dark:text-gray-400 mb-1">{teamA.shortName}</span>
                              <span className="text-xl font-bold text-gray-900 dark:text-white">{match.scoreTeamA}</span>
                            </div>
                            <div className="text-center">
                              <span className="block text-sm text-gray-500 dark:text-gray-400 mb-1">{teamB.shortName}</span>
                              <span className="text-xl font-bold text-gray-900 dark:text-white">{match.scoreTeamB}</span>
                            </div>
                          </div>
                          
                          {match.winningTeam && (
                            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600/50 text-center">
                              <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {teams.find(team => team.id === match.winningTeam)?.name} won the match
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    
                    {/* Action Panel */}
                    <div className="bg-gray-50 dark:bg-gray-700/30 p-6 flex flex-col justify-center items-center md:w-64">
                      {match.status === 'upcoming' ? (
                        <>
                          <div className="text-center mb-4">
                            <span className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Contest Closes In</span>
                            <span className="text-lg font-bold text-gray-900 dark:text-white">
                              {Math.floor((new Date(match.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days
                            </span>
                          </div>
                          
                          <Link
                            href={`/matches/${match.id}/create-team`}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors mb-3"
                          >
                            Create Team
                          </Link>
                          
                          <Link
                            href={`/matches/${match.id}/contests`}
                            className="w-full bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-center py-3 px-4 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                          >
                            View Contests
                          </Link>
                        </>
                      ) : (
                        <>
                          <div className="text-center mb-6">
                            <span className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Match Completed</span>
                            {match.manOfTheMatch && (
                              <span className="block mt-2 text-xs text-gray-600 dark:text-gray-400">
                                Man of the Match: Player #{match.manOfTheMatch}
                              </span>
                            )}
                          </div>
                          
                          <Link
                            href={`/matches/${match.id}`}
                            className="flex items-center justify-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                          >
                            View Match Details
                            <ChevronRight size={16} className="ml-1" />
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-10 text-center">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No Matches Found</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                There are no matches available with the selected filter. Try changing your filter options.
              </p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
} 