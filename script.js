const list = [10, 40, 50, 70, 90, 30];
function randomNumber(array) {
    const arraysLength = array.length - 1; // -1, бо перший індекс 0 
    return(Math.random() * arraysLength).toFixed();
}
console.log(list[randomNumber(list)], 'index -' + randomNumber(list)); // передали масив ліст в функцію

