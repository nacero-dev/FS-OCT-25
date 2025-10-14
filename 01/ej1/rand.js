const randomDecimal = Math.random();
const scaledNumber = randomDecimal * 451;
const randomNumber = Math.floor(scaledNumber) + 50;
console.log(randomNumber);


function rand(min, max){
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

console.log(rand(50,500));