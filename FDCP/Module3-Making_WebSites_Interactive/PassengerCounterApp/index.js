/**
 * Challenge: Define our anonymous callback function as a separate function, then
 * pass it as the 2nd parameter to our `addEventListener`
 */


function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => console.log(data))
}

document.getElementById("new-deck").addEventListener("click", handleClick)
 
/**
 * Challenge: 
 * 
 * Part 1: write a `setTimeout` command. Have it wait for 2000 ms before logging "I finally ran!" to the console
 * 
 * Part 2: Move the anonymous in-line function to its own, named function
 */

function callback() {
     console.log("I finally ran!")
 }   

setTimeout(callback, 2000)
 
/**
 * Challenge: 
 * 
 * Part 1: Given the array of objects below, create a new array with the `.filter()` array method that contains only the objects where "hasPet" is true
 * 
 * 
 * Part 2: Move the anonymous in-line function to its own, named function
 */

 const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
 ]

 

const peopleWithPets = people.filter(person => person.hasPet) 

console.log(peopleWithPets)

// https://www.javascripttutorial.net/javascript-array-filter

/**
 * Extra challenge to practice array.filter:
 * 
 * Using .filter, create a new array of people who are 18 and older
 * (should be Jill, Alice, and Bob)
 */