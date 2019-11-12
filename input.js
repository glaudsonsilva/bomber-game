
document.addEventListener('keydown', handleKeydown);

function handleKeydown(event) {
    const keyPressed = event.key;

    if (keyPressed == 'ArrowUp') {
        game.players.player1.y--;
        return;
    }
    if (keyPressed == 'ArrowDown') {
        game.players.player1.y++;
        return;
    }
    if (keyPressed == 'ArrowLeft') {
        game.players.player1.x--;
        return;
    }

    if (keyPressed == 'ArrowRight') {
        game.players.player1.x++;
        return;
    }

    if (keyPressed == ' ') {
        var d = new Date(); 
        d.setSeconds(d.getSeconds() + 2)
        game.bombs['bomb1'] = { x: currentPlayer.x, y: currentPlayer.y, time: d };
        return;
    }
}