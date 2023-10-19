

function game (player1, player2) {
    let p1Wins;
    let p2Wins;
    for (let i =0; i<player1.length; i++) {
       if (player1[i] > player[i]) {
            p1Wins++
        } else if (player1[i] > player[i]) {
            p2Wins++
        }

    }
    
    return [p1Wins, p2Wins]
}

game([1,3,5,7,8], [2,5,7,5,5])