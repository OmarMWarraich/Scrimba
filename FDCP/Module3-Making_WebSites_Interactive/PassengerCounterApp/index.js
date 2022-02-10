let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard 
let hasBlackJack = false
let isALive = true

let message = ''
if (sum < 21) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isALive = false
}

console.log(message)