// Cricket Matches Data
export const matches = [
  {
    id: 1,
    teamA: 1, // CSK
    teamB: 2, // MI
    venue: "M.A. Chidambaram Stadium, Chennai",
    date: "2023-05-01T14:00:00Z",
    result: "CSK won by 7 wickets",
    status: "completed",
    scoreTeamA: "180/3",
    scoreTeamB: "176/6",
    matchType: "league",
    highlightVideos: ["/videos/matches/match1-highlight1.mp4", "/videos/matches/match1-highlight2.mp4"],
    winningTeam: 1,
    manOfTheMatch: 1, // MS Dhoni
    keyStats: {
      highestScorer: { playerId: 2, runs: 87 },
      bestBowler: { playerId: 13, wickets: 3, runs: 24 }
    },
    fantasy: {
      topScorer: { playerId: 2, points: 145 },
      popularCaptain: { playerId: 1, percentage: 68 }
    }
  },
  {
    id: 2,
    teamA: 3, // RCB
    teamB: 4, // KKR
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    date: "2023-05-02T14:00:00Z",
    result: "KKR won by 5 wickets",
    status: "completed",
    scoreTeamA: "192/7",
    scoreTeamB: "194/5",
    matchType: "league",
    highlightVideos: ["/videos/matches/match2-highlight1.mp4", "/videos/matches/match2-highlight2.mp4"],
    winningTeam: 4,
    manOfTheMatch: 34, // Andre Russell
    keyStats: {
      highestScorer: { playerId: 23, runs: 82 },
      bestBowler: { playerId: 34, wickets: 3, runs: 32 }
    },
    fantasy: {
      topScorer: { playerId: 34, points: 156 },
      popularCaptain: { playerId: 23, percentage: 72 }
    }
  },
  {
    id: 3,
    teamA: 5, // DC
    teamB: 6, // PBKS
    venue: "Arun Jaitley Stadium, Delhi",
    date: "2023-05-03T14:00:00Z",
    result: "DC won by 6 wickets",
    status: "completed",
    scoreTeamA: "189/4",
    scoreTeamB: "187/8",
    matchType: "league",
    highlightVideos: ["/videos/matches/match3-highlight1.mp4", "/videos/matches/match3-highlight2.mp4"],
    winningTeam: 5,
    manOfTheMatch: 45, // Rishabh Pant
    keyStats: {
      highestScorer: { playerId: 45, runs: 78 },
      bestBowler: { playerId: 56, wickets: 2, runs: 28 }
    },
    fantasy: {
      topScorer: { playerId: 45, points: 132 },
      popularCaptain: { playerId: 56, percentage: 54 }
    }
  },
  {
    id: 4,
    teamA: 7, // RR
    teamB: 8, // SRH
    venue: "Sawai Mansingh Stadium, Jaipur",
    date: "2023-05-04T14:00:00Z",
    result: "SRH won by 8 wickets",
    status: "completed",
    scoreTeamA: "152/9",
    scoreTeamB: "153/2",
    matchType: "league",
    highlightVideos: ["/videos/matches/match4-highlight1.mp4", "/videos/matches/match4-highlight2.mp4"],
    winningTeam: 8,
    manOfTheMatch: 78, // Bhuvneshwar Kumar
    keyStats: {
      highestScorer: { playerId: 67, runs: 65 },
      bestBowler: { playerId: 78, wickets: 4, runs: 20 }
    },
    fantasy: {
      topScorer: { playerId: 78, points: 148 },
      popularCaptain: { playerId: 67, percentage: 63 }
    }
  },
  {
    id: 5,
    teamA: 9, // GT
    teamB: 10, // LSG
    venue: "Narendra Modi Stadium, Ahmedabad",
    date: "2023-05-05T14:00:00Z",
    result: "Match tied (GT won in Super Over)",
    status: "completed",
    scoreTeamA: "175/7",
    scoreTeamB: "175/8",
    matchType: "league",
    highlightVideos: ["/videos/matches/match5-highlight1.mp4", "/videos/matches/match5-highlight2.mp4"],
    winningTeam: 9,
    manOfTheMatch: 89, // Hardik Pandya
    keyStats: {
      highestScorer: { playerId: 100, runs: 72 },
      bestBowler: { playerId: 89, wickets: 3, runs: 25 }
    },
    fantasy: {
      topScorer: { playerId: 89, points: 152 },
      popularCaptain: { playerId: 100, percentage: 58 }
    }
  },
  {
    id: 6,
    teamA: 1, // CSK
    teamB: 3, // RCB
    venue: "M.A. Chidambaram Stadium, Chennai",
    date: "2023-05-08T14:00:00Z",
    result: "RCB won by 3 wickets",
    status: "completed",
    scoreTeamA: "165/5",
    scoreTeamB: "166/7",
    matchType: "league",
    highlightVideos: ["/videos/matches/match6-highlight1.mp4", "/videos/matches/match6-highlight2.mp4"],
    winningTeam: 3,
    manOfTheMatch: 23, // Virat Kohli
    keyStats: {
      highestScorer: { playerId: 23, runs: 92 },
      bestBowler: { playerId: 2, wickets: 3, runs: 28 }
    },
    fantasy: {
      topScorer: { playerId: 23, points: 165 },
      popularCaptain: { playerId: 1, percentage: 70 }
    }
  },
  {
    id: 7,
    teamA: 2, // MI
    teamB: 4, // KKR
    venue: "Wankhede Stadium, Mumbai",
    date: "2023-05-09T14:00:00Z",
    result: "MI won by 22 runs",
    status: "completed",
    scoreTeamA: "198/5",
    scoreTeamB: "176/8",
    matchType: "league",
    highlightVideos: ["/videos/matches/match7-highlight1.mp4", "/videos/matches/match7-highlight2.mp4"],
    winningTeam: 2,
    manOfTheMatch: 12, // Rohit Sharma
    keyStats: {
      highestScorer: { playerId: 12, runs: 87 },
      bestBowler: { playerId: 13, wickets: 3, runs: 26 }
    },
    fantasy: {
      topScorer: { playerId: 12, points: 158 },
      popularCaptain: { playerId: 12, percentage: 65 }
    }
  },
  {
    id: 8,
    teamA: 5, // DC
    teamB: 7, // RR
    venue: "Arun Jaitley Stadium, Delhi",
    date: "2023-05-10T14:00:00Z",
    result: "RR won by 7 wickets",
    status: "completed",
    scoreTeamA: "158/7",
    scoreTeamB: "159/3",
    matchType: "league",
    highlightVideos: ["/videos/matches/match8-highlight1.mp4", "/videos/matches/match8-highlight2.mp4"],
    winningTeam: 7,
    manOfTheMatch: 67, // Jos Buttler
    keyStats: {
      highestScorer: { playerId: 67, runs: 95 },
      bestBowler: { playerId: 45, wickets: 2, runs: 30 }
    },
    fantasy: {
      topScorer: { playerId: 67, points: 168 },
      popularCaptain: { playerId: 67, percentage: 62 }
    }
  },
  {
    id: 9,
    teamA: 1, // CSK
    teamB: 4, // KKR
    venue: "Eden Gardens, Kolkata",
    date: "2023-05-24T14:00:00Z",
    result: "TBD",
    status: "upcoming",
    scoreTeamA: "",
    scoreTeamB: "",
    matchType: "qualifier",
    highlightVideos: [],
    winningTeam: null,
    manOfTheMatch: null,
    keyStats: {
      highestScorer: null,
      bestBowler: null
    },
    fantasy: {
      topScorer: null,
      popularCaptain: { playerId: 1, percentage: 55 }
    }
  },
  {
    id: 10,
    teamA: 2, // MI
    teamB: 3, // RCB
    venue: "Wankhede Stadium, Mumbai",
    date: "2023-05-25T14:00:00Z",
    result: "TBD",
    status: "upcoming",
    scoreTeamA: "",
    scoreTeamB: "",
    matchType: "eliminator",
    highlightVideos: [],
    winningTeam: null,
    manOfTheMatch: null,
    keyStats: {
      highestScorer: null,
      bestBowler: null
    },
    fantasy: {
      topScorer: null,
      popularCaptain: { playerId: 23, percentage: 58 }
    }
  }
]; 