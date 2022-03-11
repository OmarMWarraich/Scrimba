
function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
    })
}

document.getElementById("new-deck").addEventListener("click", handleClick)
 
/**
 * Challenge: 
 * 
 * Background:
 * The Deck of cards API expects us to provide the deck id
 * of the deck we're playing with so it can remember which
 * cards we've already drawn, how many are remaining in the
 * deck, etc.
 * 
 * Task: save the deck_id from the returned data to a local
 * variable so we can use it later
 */

