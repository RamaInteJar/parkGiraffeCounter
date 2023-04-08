
const saveEl = document.getElementById("save-el")

const countEl = document.getElementById('count-el')

let count = 0


const increment = () => {
    count += 1
    countEl.textContent = count 
}



// Create a function save(), which logs out the count when it's called

function save() {

    let countStr = count + " - "

    saveEl.textContent += countStr

    countEl.textContent = 0
    count = 0
}



























// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function totalLaps() {
//     let lapSum = lap1 + lap2 + lap3;
//     console.log(lapSum)
// }
// totalLaps()

// let lapsCompleted = 0;

// function laps() {
//     lapsCompleted = lapsCompleted + 1;
    
// }
// laps()
// laps()
// laps()
// laps();
// laps();
// laps();
// console.log(lapsCompleted);










// let myAge = 35;
// let humanDogRation = 7;
// let myDogAge = myAge * humanDogRation;

// console.log(myDogAge)