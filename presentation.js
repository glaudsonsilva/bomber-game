

const screen = document.getElementById('screen');
const context = screen.getContext('2d');

renderScreen();

function renderScreen() {
    context.clearRect(0, 0, screen.width, screen.height);

    for (explosionId in game.state.explosions) {
        const explosion = game.state.explosions[explosionId];
        context.fillStyle = 'orange';
        context.fillRect(explosion.horizontal.x, explosion.horizontal.y, explosion.horizontal.xSize, explosion.horizontal.ySize);
        context.fillRect(explosion.vertical.x, explosion.vertical.y, explosion.vertical.xSize, explosion.vertical.ySize);
    };

    for (bombId in game.state.bombs) {
        const bomb = game.state.bombs[bombId];
        context.fillStyle = 'red';
        context.fillRect(bomb.x, bomb.y, bomb.size, bomb.size);
    };

    for (playerId in game.state.players) {
        const player = game.state.players[playerId];
        context.fillStyle = playerId == currentPlayerId ? '#2E8B57' : 'gray';
        context.fillRect(player.x, player.y, player.size, player.size);
    };

    for (wallId in game.state.walls) {
        const wall = game.state.walls[wallId];
        context.fillStyle = 'brown';
        context.fillRect(wall.x, wall.y, wall.xLength, wall.yLength);
    };

    game.refreshState();

    requestAnimationFrame(renderScreen);
}


