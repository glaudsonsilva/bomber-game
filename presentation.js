

const screen = document.getElementById('screen');
const context = screen.getContext('2d');

renderScreen();

function renderScreen() { 
    context.clearRect(0, 0, screen.width, screen.height);

    for (bombId in game.bombs) {
        const bomb = game.bombs[bombId];
        context.fillStyle = 'gray';
        context.fillRect(bomb.x, bomb.y, 1, 1);
    };

    for (playerId in game.players) {
        const player = game.players[playerId];
        context.fillStyle = 'red';
        context.fillRect(player.x, player.y, 1, 1);
    };

    gameRules();

    requestAnimationFrame(renderScreen);
}


