let currentPlayer = 'X';
const TEN = 10;

function changeTurn() {
    if (currentPlayer === 'X') {
        document.getElementById('turn').innerHTML = 'Now is player 0 turn.';
        currentPlayer = '0';
    } else {
        document.getElementById('turn').innerHTML = 'Now is player X turn.';
        currentPlayer = 'X';
    }
}

let fullBoard = 0;
function draw(id) {
    document.getElementById(id).innerHTML = currentPlayer;
    ++fullBoard;
    if (gameCheck(currentPlayer) == 0) {
        changeTurn();
    } else if (gameCheck(currentPlayer) == 1) {
        document.getElementById('turn').innerHTML = 'Player ' + currentPlayer + ' won!';
        document.getElementById('turn').style = 'font-size: 30px; color: green;';
        document.getElementById('restart').style.visibility = 'visible';
    } else {
        document.getElementById('turn').innerHTML = 'The game ended, is a draw.';
        document.getElementById('turn').style = 'font-size: 30px';
        document.getElementById('restart').style.visibility = 'visible';
    }
}

function gameCheck(player) {
    let diagonal1 = 0;
    let diagonal2 = 0;
    for (let i = 1; i <= 3; ++i) {
        let line = 0;
        let column = 0;
        for (let j = 1; j <= 3; ++j) {
            if (document.getElementById(i * TEN + j).innerHTML == player) {
                ++line;
            }
            if (document.getElementById(j * TEN + i).innerHTML == player) {
                ++column;
            }
            if (i == j && document.getElementById(i * TEN + j).innerHTML == player) {
                ++diagonal1;
            }
            if (i + j == 4 && document.getElementById(i * TEN + j).innerHTML == player) {
                ++diagonal2;
            }
        }
        if (line == 3 || column == 3 || diagonal1 == 3 || diagonal2 == 3) {
            return 1;
        }
    }
    if (fullBoard == TEN - 1) {
        return -1;
    } else {
        return 0;
    }
}
