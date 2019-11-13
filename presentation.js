

const screen = document.getElementById('screen');
const context = screen.getContext('2d');

renderScreen();

function renderScreen() {
    context.clearRect(0, 0, screen.width, screen.height);

    for (explosionId in game.explosions) {
        const explosion = game.explosions[explosionId];
        context.fillStyle = 'orange';
        context.fillRect(explosion.horizontal.x, explosion.horizontal.y, explosion.horizontal.xSize, explosion.horizontal.ySize);
        context.fillRect(explosion.vertical.x, explosion.vertical.y, explosion.vertical.xSize, explosion.vertical.ySize);
    };

    for (bombId in game.bombs) {
        const bomb = game.bombs[bombId];
        context.fillStyle = 'red';
        context.fillRect(bomb.x, bomb.y, bomb.size, bomb.size);
    };

    for (playerId in game.players) {
        const player = game.players[playerId];
        context.fillStyle = playerId == currentPlayerId ? '#2E8B57' : 'gray';
        context.fillRect(player.x, player.y, player.size, player.size);
    };

    gameRefresh();

    requestAnimationFrame(renderScreen);
}


