// Cricket Players Data
export const players = [
  // CSK Players (1-11)
  {
    id: 1,
    name: "MS Dhoni",
    image: "/images/players/dhoni.png",
    teamId: 1,
    country: "India",
    role: "Wicketkeeper-Batsman",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm medium",
    stats: {
      matches: 250,
      runs: 5082,
      highestScore: 84,
      fifties: 24,
      hundreds: 0,
      wickets: 0,
      bestBowling: "0/0",
      catches: 132,
      stumpings: 42
    },
    fantasy: {
      price: 11.0,
      points: 2850,
      popularity: 98.5
    }
  },
  {
    id: 2,
    name: "Ravindra Jadeja",
    image: "/images/players/jadeja.png",
    teamId: 1,
    country: "India",
    role: "All-rounder",
    battingStyle: "Left-handed",
    bowlingStyle: "Left-arm orthodox",
    stats: {
      matches: 225,
      runs: 2692,
      highestScore: 62,
      fifties: 3,
      hundreds: 0,
      wickets: 152,
      bestBowling: "5/16",
      catches: 95,
      stumpings: 0
    },
    fantasy: {
      price: 10.5,
      points: 3200,
      popularity: 92.7
    }
  },
  // Mumbai Indians Players (12-22)
  {
    id: 12,
    name: "Rohit Sharma",
    image: "/images/players/rohit.png",
    teamId: 2,
    country: "India",
    role: "Batsman",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm off break",
    stats: {
      matches: 243,
      runs: 6211,
      highestScore: 109,
      fifties: 42,
      hundreds: 1,
      wickets: 15,
      bestBowling: "2/6",
      catches: 98,
      stumpings: 0
    },
    fantasy: {
      price: 11.0,
      points: 3050,
      popularity: 95.3
    }
  },
  {
    id: 13,
    name: "Jasprit Bumrah",
    image: "/images/players/bumrah.png",
    teamId: 2,
    country: "India",
    role: "Bowler",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm fast",
    stats: {
      matches: 120,
      runs: 56,
      highestScore: 10,
      fifties: 0,
      hundreds: 0,
      wickets: 145,
      bestBowling: "5/10",
      catches: 22,
      stumpings: 0
    },
    fantasy: {
      price: 10.5,
      points: 2980,
      popularity: 93.1
    }
  },
  // RCB Players (23-33)
  {
    id: 23,
    name: "Virat Kohli",
    image: "/images/players/kohli.png",
    teamId: 3,
    country: "India",
    role: "Batsman",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm medium",
    stats: {
      matches: 237,
      runs: 7263,
      highestScore: 113,
      fifties: 50,
      hundreds: 7,
      wickets: 4,
      bestBowling: "2/25",
      catches: 82,
      stumpings: 0
    },
    fantasy: {
      price: 12.0,
      points: 3450,
      popularity: 97.8
    }
  },
  // KKR Players (34-44)
  {
    id: 34,
    name: "Andre Russell",
    image: "/images/players/russell.png",
    teamId: 4,
    country: "West Indies",
    role: "All-rounder",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm fast-medium",
    stats: {
      matches: 113,
      runs: 2262,
      highestScore: 88,
      fifties: 9,
      hundreds: 0,
      wickets: 96,
      bestBowling: "5/15",
      catches: 40,
      stumpings: 0
    },
    fantasy: {
      price: 11.5,
      points: 3150,
      popularity: 91.4
    }
  },
  // Delhi Capitals Players (45-55)
  {
    id: 45,
    name: "Rishabh Pant",
    image: "/images/players/pant.png",
    teamId: 5,
    country: "India",
    role: "Wicketkeeper-Batsman",
    battingStyle: "Left-handed",
    bowlingStyle: "None",
    stats: {
      matches: 98,
      runs: 2838,
      highestScore: 128,
      fifties: 15,
      hundreds: 1,
      wickets: 0,
      bestBowling: "0/0",
      catches: 65,
      stumpings: 17
    },
    fantasy: {
      price: 10.0,
      points: 2750,
      popularity: 88.9
    }
  },
  // Top Players from other teams
  {
    id: 56,
    name: "KL Rahul",
    image: "/images/players/rahul.png",
    teamId: 6,
    country: "India",
    role: "Wicketkeeper-Batsman",
    battingStyle: "Right-handed",
    bowlingStyle: "None",
    stats: {
      matches: 109,
      runs: 4121,
      highestScore: 132,
      fifties: 33,
      hundreds: 4,
      wickets: 0,
      bestBowling: "0/0",
      catches: 52,
      stumpings: 10
    },
    fantasy: {
      price: 11.0,
      points: 2950,
      popularity: 90.2
    }
  },
  {
    id: 67,
    name: "Jos Buttler",
    image: "/images/players/buttler.png",
    teamId: 7,
    country: "England",
    role: "Wicketkeeper-Batsman",
    battingStyle: "Right-handed",
    bowlingStyle: "None",
    stats: {
      matches: 91,
      runs: 3223,
      highestScore: 124,
      fifties: 17,
      hundreds: 5,
      wickets: 0,
      bestBowling: "0/0",
      catches: 45,
      stumpings: 12
    },
    fantasy: {
      price: 11.0,
      points: 2980,
      popularity: 91.3
    }
  },
  {
    id: 78,
    name: "Bhuvneshwar Kumar",
    image: "/images/players/bhuvneshwar.png",
    teamId: 8,
    country: "India",
    role: "Bowler",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm medium-fast",
    stats: {
      matches: 154,
      runs: 223,
      highestScore: 24,
      fifties: 0,
      hundreds: 0,
      wickets: 170,
      bestBowling: "5/19",
      catches: 24,
      stumpings: 0
    },
    fantasy: {
      price: 9.5,
      points: 2850,
      popularity: 87.4
    }
  },
  {
    id: 89,
    name: "Hardik Pandya",
    image: "/images/players/hardik.png",
    teamId: 9,
    country: "India",
    role: "All-rounder",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm medium-fast",
    stats: {
      matches: 123,
      runs: 2139,
      highestScore: 91,
      fifties: 9,
      hundreds: 0,
      wickets: 53,
      bestBowling: "3/17",
      catches: 45,
      stumpings: 0
    },
    fantasy: {
      price: 11.0,
      points: 3100,
      popularity: 92.8
    }
  },
  {
    id: 100,
    name: "Marcus Stoinis",
    image: "/images/players/stoinis.png",
    teamId: 10,
    country: "Australia",
    role: "All-rounder",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm medium",
    stats: {
      matches: 82,
      runs: 1370,
      highestScore: 72,
      fifties: 7,
      hundreds: 0,
      wickets: 34,
      bestBowling: "4/15",
      catches: 32,
      stumpings: 0
    },
    fantasy: {
      price: 9.5,
      points: 2700,
      popularity: 85.9
    }
  }
]; 