"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRightIcon, TrophyIcon, UsersIcon, ArrowRightIcon, CalendarIcon, AlertCircleIcon } from "lucide-react";
import AppLayout from "../AppLayout";
import { userTeams, contests, players, teams, matches } from "@/constants";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('teams');
  
  const userContestIds = userTeams.flatMap(team => team.contestIds);
  const userContests = contests.filter(contest => userContestIds.includes(contest.id));
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">My Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-4xl">
            Manage your fantasy teams, track contests, and view your performance all in one place.
          </p>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              title: "My Teams",
              value: userTeams.length,
              icon: <UsersIcon className="text-blue-500" size={24} />,
              color: "blue",
              link: "#teams"
            },
            {
              title: "Active Contests",
              value: userContests.length,
              icon: <TrophyIcon className="text-amber-500" size={24} />,
              color: "amber",
              link: "#contests"
            },
            {
              title: "Upcoming Matches",
              value: "2",
              icon: <CalendarIcon className="text-green-500" size={24} />,
              color: "green",
              link: "/matches"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={`mr-5 p-3 rounded-full bg-${stat.color}-100 dark:bg-${stat.color}-900/20`}>
                {stat.icon}
              </div>
              
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.title}</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
              </div>
              
              <div className="ml-auto">
                <Link href={stat.link} className="text-blue-600 dark:text-blue-400">
                  <ChevronRightIcon size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-800 mb-6">
          <div className="flex space-x-8">
            {['teams', 'contests', 'history'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-1 relative text-sm font-medium transition-colors ${
                  activeTab === tab 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                    initial={false}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="mt-4">
          {/* Teams Tab */}
          {activeTab === 'teams' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {userTeams.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {userTeams.map((team) => {
                    const teamMatch = matches.find(match => match.id === team.matchId);
                    const teamA = teams.find(t => t.id === teamMatch?.teamA);
                    const teamB = teams.find(t => t.id === teamMatch?.teamB);
                    const captain = players.find(player => player.id === team.captain);
                    const viceCaptain = players.find(player => player.id === team.viceCaptain);
                    
                    return (
                      <motion.div
                        key={team.id}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-4 px-6">
                          <div className="flex justify-between items-center">
                            <h3 className="text-white font-bold">{team.name}</h3>
                            <span className="bg-white/20 text-white text-xs py-1 px-2 rounded-full">
                              {teamMatch?.matchType === "qualifier" ? "Qualifier" : teamMatch?.matchType === "eliminator" ? "Eliminator" : "League"}
                            </span>
                          </div>
                          
                          <div className="flex items-center mt-2 text-blue-100 text-sm">
                            <span>{teamA?.shortName}</span>
                            <span className="mx-2">vs</span>
                            <span>{teamB?.shortName}</span>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex mb-4">
                            <div className="flex-1 border-r border-gray-200 dark:border-gray-700 pr-4">
                              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Captain</p>
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs mr-2">
                                  C
                                </div>
                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                  {captain?.name || "Unknown"}
                                </span>
                              </div>
                            </div>
                            
                            <div className="flex-1 pl-4">
                              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Vice Captain</p>
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs mr-2">
                                  VC
                                </div>
                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                  {viceCaptain?.name || "Unknown"}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center text-sm">
                            <div>
                              <span className="text-gray-500 dark:text-gray-400">Contests: </span>
                              <span className="font-medium text-gray-900 dark:text-white">{team.contestIds.length}</span>
                            </div>
                            
                            <div>
                              <span className="text-gray-500 dark:text-gray-400">Points: </span>
                              <span className="font-medium text-gray-900 dark:text-white">{team.totalPoints}</span>
                            </div>
                            
                            <div>
                              <span className="text-gray-500 dark:text-gray-400">Rank: </span>
                              <span className="font-medium text-gray-900 dark:text-white">{team.rank > 0 ? `#${team.rank}` : "N/A"}</span>
                            </div>
                          </div>
                          
                          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between">
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              Created: {new Date(team.createdAt).toLocaleDateString()}
                            </span>
                            
                            <Link
                              href={`/teams/${team.id}`}
                              className="text-blue-600 dark:text-blue-400 text-sm font-medium inline-flex items-center hover:underline"
                            >
                              View Details
                              <ArrowRightIcon size={14} className="ml-1" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-10 text-center">
                  <div className="flex justify-center mb-4">
                    <AlertCircleIcon size={48} className="text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No Teams Created Yet</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                    You haven&apos;t created any fantasy teams. Start by picking players for an upcoming match.
                  </p>
                  <Link
                    href="/matches"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors inline-flex items-center"
                  >
                    Browse Matches
                    <ArrowRightIcon size={16} className="ml-2" />
                  </Link>
                </div>
              )}
            </motion.div>
          )}
          
          {/* Contests Tab */}
          {activeTab === 'contests' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {userContests.length > 0 ? (
                <div className="space-y-4">
                  {userContests.map((contest) => {
                    const contestMatch = matches.find(match => match.id === contest.matchId);
                    const teamA = teams.find(t => t.id === contestMatch?.teamA);
                    const teamB = teams.find(t => t.id === contestMatch?.teamB);
                    
                    return (
                      <motion.div
                        key={contest.id}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      >
                        <div className="p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center mb-2">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mr-3">{contest.name}</h3>
                                {contest.featured && (
                                  <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-500 text-xs py-1 px-2 rounded-full">
                                    Featured
                                  </span>
                                )}
                              </div>
                              
                              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                                <span>{teamA?.shortName}</span>
                                <span className="mx-2">vs</span>
                                <span>{teamB?.shortName}</span>
                                <span className="mx-2">•</span>
                                <span>{contestMatch?.matchType === "qualifier" ? "Qualifier" : contestMatch?.matchType === "eliminator" ? "Eliminator" : "League"}</span>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className="font-bold text-gray-900 dark:text-white">₹{contest.prizePool.toLocaleString()}</div>
                              <div className="text-xs text-green-600 dark:text-green-400">Prize Pool</div>
                            </div>
                          </div>
                          
                          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Entry Fee</div>
                              <div className="font-semibold text-gray-900 dark:text-white">₹{contest.entryFee}</div>
                            </div>
                            
                            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Winners</div>
                              <div className="font-semibold text-gray-900 dark:text-white">{contest.winnerCount.toLocaleString()}</div>
                            </div>
                            
                            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">1st Prize</div>
                              <div className="font-semibold text-gray-900 dark:text-white">₹{contest.firstPrize.toLocaleString()}</div>
                            </div>
                            
                            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Filled</div>
                              <div className="font-semibold text-gray-900 dark:text-white">
                                {contest.filledSpots} / {contest.totalSpots}
                                <span className="ml-2 text-xs font-normal text-gray-500 dark:text-gray-400">
                                  ({Math.round((contest.filledSpots / contest.totalSpots) * 100)}%)
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 flex justify-between items-center">
                            <div className="flex flex-wrap gap-2">
                              {contest.tags.map((tag, idx) => (
                                <span 
                                  key={idx} 
                                  className="text-xs py-1 px-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <Link
                              href={`/contests/${contest.id}`}
                              className="text-blue-600 dark:text-blue-400 text-sm font-medium inline-flex items-center hover:underline"
                            >
                              View Contest
                              <ArrowRightIcon size={14} className="ml-1" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-10 text-center">
                  <div className="flex justify-center mb-4">
                    <AlertCircleIcon size={48} className="text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No Contests Joined</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                    You haven&apos;t  joined any contests yet. Create a team and join a contest to win prizes.
                  </p>
                  <Link
                    href="/contests"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors inline-flex items-center"
                  >
                    Browse Contests
                    <ArrowRightIcon size={16} className="ml-2" />
                  </Link>
                </div>
              )}
            </motion.div>
          )}
          
          {/* History Tab */}
          {activeTab === 'history' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
            >
              <div className="text-center py-10">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <CalendarIcon size={32} className="text-gray-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Match History Coming Soon</h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                  We are working on bringing you a comprehensive history of your matches and performance. Stay tuned!
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </AppLayout>
  );
} 