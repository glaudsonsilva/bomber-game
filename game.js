const game = {
    players: {
        'player1': { x: 1, y: 1 },
        'player2': { x: 9, y: 9 }
    },
    bombs: {

    }
}

const currentPlayer = game.players['player1'];

function gameRules() {

    for (bombId in game.bombs) {
        var bomb = game.bombs[bombId];

        if (bomb.time <= new Date())
            delete game.bombs[bombId];
    };
}