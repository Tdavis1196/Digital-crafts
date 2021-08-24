// Madlib
function madlib(first,second) {
    return ` ${first}'s favorite subject in school is ${second}.`
}
console.log(madlib("Timothy","biology"))

// Tip Calculator
function tipAmount(total,levelofservice) {
    var tip = 0
    if (levelofservice = 'Good'){
        tip = total * .20;
    }
    else if (levelofservice = 'Fair'){
        tip = total * .15;
    }
    else if(levelofservice = 'Bad'){
        tip = total * .10;
    }
    return tip
}
console.log(tipAmount(2500,'Good'))
console.log(tipAmount(250.0,'Fair'))

// // Tip Calculator 2
// function totalAmount(tipAmount)

// print numbers/
// function printNumbers(start, end){
//     for (let i = start; i < end + 1; i++){
//         console.log(i)
//     } 
// }
function printNumbers(start, end){
    i = start
    while (i < end+1){
       console.log(i)
        i++
    }
}
   

console.log(printNumbers(1,12))

// print square
function printSquare(size){
    console.log("---")

}
printSquare()
