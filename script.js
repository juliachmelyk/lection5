

function randomNumber(from, to) {
    return((Math.random()*(to - from + 1) + from).toFixed()); // +1, щоб було включно з 1
}
 
console.log(randomNumber(10, 20));

//максимальне відняти від мінімального 
//Math.random()* якшо помножити на min, буде генеруватись число від 0 до мін

// пробігтись циклом від 0 до 100 і кожен раз додавати рандомне значення


const emptyArr =[]
for (let i =0; i < 100; i++){
    emptyArr[i] = +randomNumber(0, 100); // + шоб строку перетворити на числа
}

const notEmpty = emptyArr.filter(function(item){
return item % 2 ===0;
});
console.log(emptyArr);
console.log(notEmpty);

const notEmptyMap = emptyArr.map(function(item){
    return item * item;
    });
    console.log(notEmptyMap); // кожен елемент помножився сам на себе








