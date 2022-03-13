let deckId
let computerScore = 0
let myScore = 0
const cardsContainer = document.getElementById("cards");
const newDeckBtn = document.getElementById("new-deck");
const drawCardBtn = document.getElementById("draw-cards");
const header = document.getElementById("header");
const remainingText = document.getElementById("remaining");
const computerScoreEl = document.getElementById("computer-score");
const myScoreEl = document.getElementById("my-score");

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            remainingText.textContent = `Remaining cards: ${data.remaining}`
            deckId = data.deck_id
            console.log(deckId)
    })
}

newDeckBtn.addEventListener("click", handleClick)

/**
 * Challenge:
 * 
 * Keep score! Every time the computer wins a hand, add a point to
 * the computer's score. Do the same for every time you win a hand.
 * If it's a war, no points are awarded to either player. If it's 
 * a war (same card values), no one is awarded points.
 * 
 * Display the computer's score above the top card, display your
 * own score BELOW the bottom card.
 * 
 * Track the scores in a global variable defined at the top of this file
 * 
 * Add to the global scores inside the `determinCardWinner` function below.
 */

drawCardBtn.addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            remainingText.textContent = `Remaining cards: ${data.remaining}`
            cardsContainer.children[0].innerHTML = `
                <img src=${data.cards[0].image} class="card" />
            `
            cardsContainer.children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `
            const winnerText = determineCardWinner(data.cards[0], data.cards[1])
            header.textContent = winnerText

            if (data.remaining === 0) {
                drawCardBtn.disabled = true
            }
        })
})

function determineCardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9",
    "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)

    if (card1ValueIndex > card2ValueIndex) {
        computerScore++
        computerScoreEl.textContent= `Computer score: ${computerScore}`
        return "Computer wins!"
    } else if (card1ValueIndex < card2ValueIndex) {
        myScore++
        myScoreEl.textContent = `My score: ${myScore}`
        return "You win!"
    } else {
        return "War!"
    }
}

// const card1Obj = {
//     value: "7"
// }
// const card2Obj = {
//     value: "KING"
// }

// determineCardWinner(card1Obj, card2Obj)