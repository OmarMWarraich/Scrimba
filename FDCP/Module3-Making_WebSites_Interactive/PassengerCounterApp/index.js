const grid = document.querySelector('.grid')
const startButton = document.getElementById('start')
const score = document.getElementById('score')
let squares = []
let currentSnake = [2,1,0]

function createGrid() {
    //create 100 of these elements with a for loop
    for (let i=0; i < 100; i++) {
     //create element
    const square = document.createElement('div')
    //add styling to the element
    square.classList.add('square')
    //put the element into our grid
    grid.appendChild(square)
    //push it into a new squares array    
    squares.push(square)
    }
}
createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake'))

function move() {
    //remove last element from our currentSnake array
    const tail = currentSnake.pop()
    console.log(tail)
    console.log(currentSnake)
    //remove styling from last element
    squares[tail].classList.remove('snake')
    //add sqaure in direction we are heading
    
    //add styling so we can see it
    
}
move()

