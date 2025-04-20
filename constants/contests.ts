// Cricket Fantasy Contests Data
export const contests = [
  {
    id: 1,
    name: "Grand League",
    matchId: 9, // CSK vs KKR (Qualifier)
    entryFee: 499,
    totalSpots: 10000,
    filledSpots: 8756,
    prizePool: 5000000,
    winnerCount: 1000,
    firstPrize: 1000000,
    status: "open",
    startTime: "2023-05-24T14:00:00Z",
    endTime: "2023-05-24T18:00:00Z",
    prizeBreakup: [
      { position: "1", prize: 1000000 },
      { position: "2", prize: 500000 },
      { position: "3", prize: 250000 },
      { position: "4-10", prize: 100000 },
      { position: "11-100", prize: 10000 },
      { position: "101-500", prize: 5000 },
      { position: "501-1000", prize: 2000 }
    ],
    guaranteedPrize: true,
    maxTeamsPerUser: 10,
    featured: true,
    tags: ["featured", "high stakes", "mega prize"]
  },
  {
    id: 2,
    name: "Mega Contest",
    matchId: 9, // CSK vs KKR (Qualifier)
    entryFee: 999,
    totalSpots: 5000,
    filledSpots: 3245,
    prizePool: 7500000,
    winnerCount: 500,
    firstPrize: 2000000,
    status: "open",
    startTime: "2023-05-24T14:00:00Z",
    endTime: "2023-05-24T18:00:00Z",
    prizeBreakup: [
      { position: "1", prize: 2000000 },
      { position: "2", prize: 1000000 },
      { position: "3", prize: 500000 },
      { position: "4-10", prize: 200000 },
      { position: "11-50", prize: 50000 },
      { position: "51-200", prize: 20000 },
      { position: "201-500", prize: 5000 }
    ],
    guaranteedPrize: true,
    maxTeamsPerUser: 5,
    featured: true,
    tags: ["premium", "mega prize", "exclusive"]
  },
  {
    id: 3,
    name: "Winner Takes All",
    matchId: 9, // CSK vs KKR (Qualifier)
    entryFee: 1999,
    totalSpots: 100,
    filledSpots: 56,
    prizePool: 200000,
    winnerCount: 1,
    firstPrize: 200000,
    status: "open",
    startTime: "2023-05-24T14:00:00Z",
    endTime: "2023-05-24T18:00:00Z",
    prizeBreakup: [
      { position: "1", prize: 200000 }
    ],
    guaranteedPrize: true,
    maxTeamsPerUser: 1,
    featured: true,
    tags: ["high risk", "high reward", "exclusive"]
  },
  {
    id: 4,
    name: "Beginners Contest",
    matchId: 9, // CSK vs KKR (Qualifier)
    entryFee: 49,
    totalSpots: 50000,
    filledSpots: 32456,
    prizePool: 1000000,
    winnerCount: 5000,
    firstPrize: 50000,
    status: "open",
    startTime: "2023-05-24T14:00:00Z",
    endTime: "2023-05-24T18:00:00Z",
    prizeBreakup: [
      { position: "1", prize: 50000 },
      { position: "2-10", prize: 10000 },
      { position: "11-100", prize: 2000 },
      { position: "101-1000", prize: 500 },
      { position: "1001-5000", prize: 100 }
    ],
    guaranteedPrize: true,
    maxTeamsPerUser: 3,
    featured: false,
    tags: ["beginners", "low entry", "practice"]
  },
  {
    id: 5,
    name: "Head to Head",
    matchId: 9, // CSK vs KKR (Qualifier)
    entryFee: 99,
    totalSpots: 2,
    filledSpots: 1,
    prizePool: 180,
    winnerCount: 1,
    firstPrize: 180,
    status: "open",
    startTime: "2023-05-24T14:00:00Z",
    endTime: "2023-05-24T18:00:00Z",
    prizeBreakup: [
      { position: "1", prize: 180 }
    ],
    guaranteedPrize: false,
    maxTeamsPerUser: 1,
    featured: false,
    tags: ["head to head", "direct competition"]
  },
  {
    id: 6,
    name: "Practice Contest",
    matchId: 9, // CSK vs KKR (Qualifier)
    entryFee: 0,
    totalSpots: 100000,
    filledSpots: 45678,
    prizePool: 0,
    winnerCount: 0,
    firstPrize: 0,
    status: "open",
    startTime: "2023-05-24T14:00:00Z",
    endTime: "2023-05-24T18:00:00Z",
    prizeBreakup: [],
    guaranteedPrize: false,
    maxTeamsPerUser: 5,
    featured: false,
    tags: ["practice", "free", "no prize"]
  },
  {
    id: 7,
    name: "Grand League",
    matchId: 10, // MI vs RCB (Eliminator)
    entryFee: 499,
    totalSpots: 10000,
    filledSpots: 7854,
    prizePool: 5000000,
    winnerCount: 1000,
    firstPrize: 1000000,
    status: "open",
    startTime: "2023-05-25T14:00:00Z",
    endTime: "2023-05-25T18:00:00Z",
    prizeBreakup: [
      { position: "1", prize: 1000000 },
      { position: "2", prize: 500000 },
      { position: "3", prize: 250000 },
      { position: "4-10", prize: 100000 },
      { position: "11-100", prize: 10000 },
      { position: "101-500", prize: 5000 },
      { position: "501-1000", prize: 2000 }
    ],
    guaranteedPrize: true,
    maxTeamsPerUser: 10,
    featured: true,
    tags: ["featured", "high stakes", "mega prize"]
  },
  {
    id: 8,
    name: "Top 100 Contest",
    matchId: 10, // MI vs RCB (Eliminator)
    entryFee: 249,
    totalSpots: 1000,
    filledSpots: 758,
    prizePool: 200000,
    winnerCount: 100,
    firstPrize: 20000,
    status: "open",
    startTime: "2023-05-25T14:00:00Z",
    endTime: "2023-05-25T18:00:00Z",
    prizeBreakup: [
      { position: "1", prize: 20000 },
      { position: "2-10", prize: 5000 },
      { position: "11-50", prize: 1000 },
      { position: "51-100", prize: 500 }
    ],
    guaranteedPrize: true,
    maxTeamsPerUser: 3,
    featured: false,
    tags: ["competitive", "mid stakes"]
  },
  {
    id: 9,
    name: "Small League",
    matchId: 10, // MI vs RCB (Eliminator)
    entryFee: 99,
    totalSpots: 5000,
    filledSpots: 3689,
    prizePool: 400000,
    winnerCount: 500,
    firstPrize: 30000,
    status: "open",
    startTime: "2023-05-25T14:00:00Z",
    endTime: "2023-05-25T18:00:00Z",
    prizeBreakup: [
      { position: "1", prize: 30000 },
      { position: "2-5", prize: 10000 },
      { position: "6-20", prize: 3000 },
      { position: "21-100", prize: 1000 },
      { position: "101-500", prize: 200 }
    ],
    guaranteedPrize: true,
    maxTeamsPerUser: 5,
    featured: false,
    tags: ["small league", "affordable"]
  },
  {
    id: 10,
    name: "VIP Contest",
    matchId: 10, // MI vs RCB (Eliminator)
    entryFee: 9999,
    totalSpots: 50,
    filledSpots: 28,
    prizePool: 500000,
    winnerCount: 10,
    firstPrize: 200000,
    status: "open",
    startTime: "2023-05-25T14:00:00Z",
    endTime: "2023-05-25T18:00:00Z",
    prizeBreakup: [
      { position: "1", prize: 200000 },
      { position: "2", prize: 100000 },
      { position: "3", prize: 50000 },
      { position: "4-5", prize: 25000 },
      { position: "6-10", prize: 20000 }
    ],
    guaranteedPrize: true,
    maxTeamsPerUser: 1,
    featured: true,
    tags: ["vip", "exclusive", "high stakes"]
  }
]; 