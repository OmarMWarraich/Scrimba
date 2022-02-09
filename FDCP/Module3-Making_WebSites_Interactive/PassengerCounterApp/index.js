/**
 * Writing functions to lessen code
 */

// // Setting up the the race 🏎 🏎 🏎
// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// // GO! 🏁
// // Players are running the race 🏎 💨
// // Race is finished! 🍾

// // Get ready for a new race 🏎 🏎 🏎

// // Create a function (you decide the name) that logs out the number 42 to the console
// // Call/invoke the function
// function no() {
//     console.log(42)
// }

// no()

// /**
//  * Write a funcion that logs out the sum of all the lap times
//  */

// let lap1;
// let lap2;
// let lap3;

// function sum_laps(lap1, lap2, lap3) {
//     console.log(lap1 + lap2 + lap3)
// }

// sum_laps(34, 33, 36)


// /**
//  * Create a function that increments the lapsCompleted variable with one
//  * Run it three times
//  */
// let lapsCompleted = 0
// function incrementlaps() {
//     lapsCompleted = lapsCompleted + 1;
// }

// incrementlaps()
// incrementlaps()
// incrementlaps()

// console.log(lapsCompleted);

/**
 * Increment on clicks
 * initialize the count as 0
 * listen for clicks on the increment button
 * increment the count variable when the button is clicked
 * change the count-el in the HTML to reflect the new count
 */

// document.getElementById("count").innerText = 0

let countEl = document.getElementById("count-el")
console.log(countEl)


let count = 0
function increment() {
    count = count + 1
    countEl.innerText = count
}

