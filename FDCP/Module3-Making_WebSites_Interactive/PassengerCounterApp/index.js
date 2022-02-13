const grid = document.querySelector('.grid')
const startButton = document.getElementById('start')
const score = document.getElementById('score')
let squares = []
let currentSnake = [2, 1, 0]
let direction = 1
const width = 10
let appleIndex = 0

function createGrid() {
    //create 100 of these elements with a for loop
    for (let i=0; i < width*width; i++) {
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

let timerId = setInterval(move, 1000)

function move() {
    if (
        
        (currentSnake[0] + width >= width*width && direction === 10) || // snake has hit bottom
        (currentSnake[0] % width === width-1 && direction === 1) || // snake has hit right
        (currentSnake[0] % width === 0 && direction === -1) || // snake has hit left
        (currentSnake[0] - width < 0 && direction === -10) || // snake has hit top
        squares[currentSnake[0] + direction].classList.contains('snake')
    )
    return clearInterval(timerId)
    //remove last element from our currentSnake array
    const tail = currentSnake.pop()
    //remove styling from last element
    squares[tail].classList.remove('snake')
    //add sqaure in direction we are heading
    currentSnake.unshift(currentSnake[0] + direction)
    //add styling so we can see it
    squares[currentSnake[0]].classList.add('snake')
}
move()

function generateApples() {
    do {
        // generate a random no.
        appleIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
}
generateApples()
// 39 is right arrow
// 38 is for the up arrow
// 37 is for the left arrow
// 40 is for the down arrow

function control(e) {
    if (e.keyCode === 39) {
        console.log('right pressed')
        direction = 1
    } else if (e.keyCode === 38) {
        console.log('up pressed')
        direction = -10
    } else if (e.keyCode === 37) {
        console.log('left pressed')
        direction = -1
    } else if (e.keyCode === 40) {
        console.log('down pressed')
        direction = +width
    }
}
document.addEventListener('keyup', control)