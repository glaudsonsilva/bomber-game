
document.addEventListener('keydown', handleKeydown);

function handleKeydown(event) {
    const keyPressed = event.key;

    if (keyPressed == 'ArrowUp') {
        changePlayerPosition('up');
        return;
    }
    if (keyPressed == 'ArrowDown') {
        changePlayerPosition('down');
        return;
    }
    if (keyPressed == 'ArrowLeft') {
        changePlayerPosition('left');
        return;
    }
    if (keyPressed == 'ArrowRight') {
        changePlayerPosition('right');
        return;
    }
    if (keyPressed == ' ') {
        addBomb();
        return;
    }
}