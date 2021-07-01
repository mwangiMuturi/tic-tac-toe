let box = document.getElementsByClassName('box');
player = document.getElementsByClassName('player')
let playingBoard = document.getElementById('board')
let mark = '';
let p = 5
box[5].disabled = true
let turn = 0
let board = ['1', '2', '3', '4', '5', '6', '7', '8', '9']


for (i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function move(e) {

        //   player[turn].checked = true
        const squaredArray = Array.from(box)

        const index = squaredArray.indexOf(e.target)

        //  console.log(index)

        if (player[0].checked == true) {
            //   console.log('hello')
            mark = 'X'
        } else if (player[1].checked == true) {
            mark = 'O';
        }


        box[index].style.pointerEvents = ('none')


        box[index].innerHTML = mark
        //the following determines if either player has won the game

        console.log(board.length)
        board[index] = box[index].innerHTML
        // console.log(board)
        if (board[0] == board[2] && board[2] == board[1] || board[3] == board[4] && board[4] == board[5] || board[6] == board[7] && board[8] == board[7] || board[0] == board[4] && board[4] == board[8] || board[2] == board[4] && board[4] == board[6] || board[0] == board[3] && board[3] == board[6] || board[2] == board[5] && board[5] == board[8] || board[1] == board[4] && board[4] == board[7]) {

            playingBoard.style.pointerEvents = ('none');
            box[index].style.pointerEvents = ('all')

            //  alert('game over')
            document.getElementById('acclamation').innerHTML = `WINNER ${mark}!`
            //reset the board stored in memory
            board = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

            document.getElementById('acclamation').style.display = 'block'

        } else {
            console.log('check for draw')
        }

        //end of determining


        //this moves to the next turn. 
        if (turn < 1) {
            turn++
            player[turn].checked = true
            //  document.getElementById('plyOne').style.background = 'red'
        } else if (turn > 0) {
            turn--
            player[turn].checked = true
        }


        //console.log(e.target)
    });

}
//totally resets the user interface. 

document.getElementById('btn').addEventListener("click", clearboard)

function clearboard() {

    let content = document.getElementsByClassName("box")
    //  console.log(content)


    for (i = 0; i <= 8; i++) {
        content[i].innerHTML = ''
        box[i].style.pointerEvents = ('all')
        playingBoard.style.pointerEvents = ('all');
        document.getElementById('acclamation').style.display = 'none'
        board = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

        // console.log(i)

    }

}
