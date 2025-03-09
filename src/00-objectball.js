function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
                "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
                "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
                "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
                "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
                "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
                "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
                "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
                "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
            }
        }
    };
}


function homeTeamName() {
    return gameObject().home.teamName;
}

function getHomeTeamColors() {
    return gameObject().home.colors;
}

function getPlayerStats(playerName) {
    const game = gameObject();
    return game.home.players[playerName] || game.away.players[playerName] || "Player not found";
}

function numPointsScored(playerName) {
    const player = getPlayerStats(playerName);
    return player.points || "Player not found";
}

function shoeSize(playerName) {
    const player = getPlayerStats(playerName);
    return player.shoe || "Player not found";
}

function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
    return "Team not found";
}

function teamNames() {
    const game = gameObject();
    return Object.values(game).map(team => team.teamName);
}

function playerNumbers(teamName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return Object.values(game[team].players).map(player => player.number);
        }
    }
    return "Team not found";
}

function listAllPlayers() {
    const game = gameObject();
    let players = [];
    
    for (let team in game) {
        for (let player in game[team]["players"]) {
            players.push(player);
        }
    }
    return players;
}

function getTeamKeys() {
    return Object.keys(gameObject());
}

function getTeamValues() {
    return Object.values(gameObject());
}

function getTeamEntries() {
    return Object.entries(gameObject());
}

function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;
    
    for (let team in game) {
        for (let player in game[team].players) {
            if (game[team].players[player].shoe > largestShoeSize) {
                largestShoeSize = game[team].players[player].shoe;
                rebounds = game[team].players[player].rebounds;
            }
        }
    }
    return rebounds;
}

function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let topPlayer = "";
    
    for (let team in game) {
        for (let player in game[team].players) {
            if (game[team].players[player].points > maxPoints) {
                maxPoints = game[team].players[player].points;
                topPlayer = player;
            }
        }
    }
    return topPlayer;
}

function winningTeam() {
    const game = gameObject();
    let teamScores = {};
    
    for (let team in game) {
        teamScores[game[team].teamName] = Object.values(game[team].players).reduce((sum, player) => sum + player.points, 0);
    }
    
    return Object.keys(teamScores).reduce((a, b) => teamScores[a] > teamScores[b] ? a : b);
}

function playerWithLongestName() {
    return listAllPlayers().reduce((longest, player) => player.length > longest.length ? player : longest, "");
}


function doesLongNameStealATon() {
    const game = gameObject();
    const longestNamePlayer = playerWithLongestName();
    let maxSteals = 0;
    
    for (let team in game) {
        for (let player in game[team].players) {
            if (game[team].players[player].steals > maxSteals) {
                maxSteals = game[team].players[player].steals;
            }
        }
    }
    
    return game.home.players[longestNamePlayer]?.steals === maxSteals || game.away.players[longestNamePlayer]?.steals === maxSteals;
}

console.log(doesLongNameStealATon());


console.log(homeTeamName());
console.log(getHomeTeamColors());
console.log(getPlayerStats("Brook Lopez"));
console.log(numPointsScored("Brook Lopez"));
console.log(shoeSize("Brook Lopez"));
console.log(teamColors("Brooklyn Nets"));
console.log(teamNames());
console.log(playerNumbers("Brooklyn Nets"));
console.log(listAllPlayers());
console.log(getTeamKeys());
console.log(getTeamValues());
console.log(getTeamEntries());
console.log(bigShoeRebounds());
console.log(mostPointsScored());
console.log(winningTeam());
console.log(playerWithLongestName());
