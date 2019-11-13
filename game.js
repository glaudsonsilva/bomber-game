const game = {
    players: {
        'player1': { x: 5, y: 5, size: 1 },
        'player2': { x: 19, y: 9, size: 1 }
    },
    bombs: {},
    explosions: {}
}

const currentPlayerId = 'player1';
const currentPlayer = game.players[currentPlayerId];

function changePlayerPosition(direction) {
    if (direction == 'up' && currentPlayer.y > 0) {
        currentPlayer.y--;
        return;
    }
    if (direction == 'down' && currentPlayer.y < screen.height - 1) {
        currentPlayer.y++;
        return;
    }
    if (direction == 'left' && currentPlayer.x > 0) {
        currentPlayer.x--;
        return;
    }
    if (direction == 'right' && currentPlayer.x < screen.width - 1) {
        currentPlayer.x++;
        return;
    }
}

function addBomb() {

    if (game.bombs[currentPlayerId] != null)
        return

    game.bombs[currentPlayerId] = {
        x: currentPlayer.x,
        y: currentPlayer.y,
        size: 1,
        time: getDelayedDate(2)
    };
}

function getDelayedDate(seconds) {
    var d = new Date();
    return d.setSeconds(d.getSeconds() + seconds);
}

function gameRefresh() {

    for (explosionId in game.explosions) {
        var explosion = game.explosions[explosionId];

        if (explosion.time <= new Date()) {
            delete game.explosions[explosionId];
        }
    }

    for (bombId in game.bombs) {
        var bomb = game.bombs[bombId];

        if (bomb.time <= new Date()) {
            const size = 3;
            const posDiff = (size - 1) / 2;

            game.explosions['1'] = {
                time: getDelayedDate(2),
                horizontal: {
                    x: bomb.x - posDiff, y: bomb.y, xSize: size, ySize: 1
                },
                vertical: {
                    x: bomb.x, y: bomb.y - posDiff, xSize: 1, ySize: size
                }
            };
            delete game.bombs[bombId];
        }
    };
}