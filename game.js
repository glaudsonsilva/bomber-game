const state = {
    players: {
        'player1': { x: 1, y: 3, size: 1 },
        'player2': { x: 19, y: 9, size: 1 }
    },
    bombs: {},
    walls: {
        'wall1': { x: 1, y: 1, xLength: 10, yLength: 1 },
        'wall2': { x: 3, y: 3, xLength: 1, yLength: 10 },
    },
    explosions: {}
}

const game = createGame();
const currentPlayerId = 'player1';
const currentPlayer = state.players[currentPlayerId];

function createGame() {

    function movePlayer(command) {
        if (command.keyPressed == 'ArrowUp' && currentPlayer.y > 0) {
            if (collidedToTheWall(currentPlayer.x, currentPlayer.y - 1)) {
                return;
            }

            currentPlayer.y--;
            return;
        }
        if (command.keyPressed == 'ArrowDown' && currentPlayer.y < screen.height - 1) {
            if (collidedToTheWall(currentPlayer.x, currentPlayer.y + 1)) {
                return;
            }

            currentPlayer.y++;
            return;
        }
        if (command.keyPressed == 'ArrowLeft' && currentPlayer.x > 0) {
            if (collidedToTheWall(currentPlayer.x - 1, currentPlayer.y)) {
                return;
            }
            currentPlayer.x--;
            return;
        }
        if (command.keyPressed == 'ArrowRight' && currentPlayer.x < screen.width - 1) {
            if (collidedToTheWall(currentPlayer.x + 1, currentPlayer.y)) {
                return;
            }
            currentPlayer.x++;
            return;
        }
    }

    function collidedToTheWall(x, y) {
        for (wallId in game.state.walls) {
            const wall = game.state.walls[wallId];

            if ((x >= wall.x && x <= wall.x + wall.xLength - 1) && (y >= wall.y && y <= wall.y + wall.yLength - 1)) {
                return true;
            } 
        };

        return false;
    }

    function plantBomb(command) {

        if (command.keyPressed != ' ' || state.bombs[currentPlayerId] != null) {
            return;
        }

        state.bombs[currentPlayerId] = {
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

    function refreshState() {

        for (explosionId in state.explosions) {
            var explosion = state.explosions[explosionId];

            if (explosion.time <= new Date()) {
                delete state.explosions[explosionId];
            }
        }

        for (bombId in state.bombs) {
            var bomb = state.bombs[bombId];

            if (bomb.time <= new Date()) {
                const size = 3;
                const posDiff = (size - 1) / 2;

                state.explosions['1'] = {
                    time: getDelayedDate(2),
                    horizontal: {
                        x: bomb.x - posDiff, y: bomb.y, xSize: size, ySize: 1
                    },
                    vertical: {
                        x: bomb.x, y: bomb.y - posDiff, xSize: 1, ySize: size
                    }
                };
                delete state.bombs[bombId];
            }
        };
    }

    return {
        refreshState,
        movePlayer,
        plantBomb,
        state
    };
}
