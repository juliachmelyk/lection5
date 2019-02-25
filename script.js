
function randomNumber(from, to) {
    return((Math.random()*(to - from + 1) + from).toFixed()); // +1, щоб було включно з 1
}
 
console.log(randomNumber(10, 20));


//максимальне відняти від мінімального 
//Math.random()* якшо помножити на min, буде генеруватись число від 0 до мін