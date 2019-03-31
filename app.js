const PLAYER1 = 'fa-circle-o';
const PLAYER2 = 'fa-times';
let round = 1;
const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

const combinations = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6']
]

const boxes = [...document.querySelectorAll('.box')];
boxes.forEach(box => box.addEventListener('click', pick));

function pick(event) {
    const {
        row,
        column
    } = event.target.dataset;
    const turn = round % 2 === 0 ? PLAYER2 : PLAYER1;
    if (board[row][column] !== '') return;
    event.target.classList.add(turn);
    round++;

    check();
}

function check() {
    const result = board.reduce((total, row) => total.concat(row));
    console.log(result);
}