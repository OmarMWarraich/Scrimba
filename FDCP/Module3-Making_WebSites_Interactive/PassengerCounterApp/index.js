

function main() {
    let input = document.getElementsByClassName('insert');

    document.addEventListener('keydown', function (e) {
        if (window.event == 13 || e.which == 13) {
            let num = input[0].value;
            console.log(num);
            document.getElementById("feet").textContent = (num + " meters = " + (num * 3.280).toFixed(2) + "feet" + " |" + num + " feet" + " =" + (num / 3.280).toFixed(2) + "meters");
            document.getElementById("volume").textContent = (num + " litres = " + (num * 0.264).toFixed(2) + "gallons" + " |" + num + " gallons" + " =" + (num / 0.264).toFixed(2) + "litres");
            document.getElementById("mass").textContent = (num + " kilos = " + (num*2.204).toFixed(2) + "pounds" +" |"+ num + " pounds" + " =" + (num/2.204).toFixed(2) + "kilos" );
            
        }
    })
    
}

main();
