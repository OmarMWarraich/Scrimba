let hands = ["rock", "paper", "scissor"]
// Create a function that returns a random item from the array
function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
}
const result = getRandomItem(hands);
console.log(result);