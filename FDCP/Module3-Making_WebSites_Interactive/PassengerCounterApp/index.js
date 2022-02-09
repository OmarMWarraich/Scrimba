// let inputNum = document.getElementById('unitNum')

// console.log(inputNum)

// let val = document.getElementById('unitNum')
// function inputNum() {
//     let num = val.oninput
//     console.log(num)
// }

// document.addEventListener('keydown', inputNum)



// function submit() {
//     btn.addEventListener('submit', (e) => {
//         e.preventDefault();
//         let val = num.value;
//         console.log(val);
//     })
// }
// submit();

function main() {
    var input = document.getElementsByClassName('insert');

    document.addEventListener('keydown', function (e) {
        if (window.event == 13 || e.which == 13) {
            var num = input[0].value;
            console.log(num);        
        }
    })
    
}
window.onload = main;