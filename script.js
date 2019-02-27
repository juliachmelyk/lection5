// порахувати всі від’ємні та додатні, вивести мінімальний та максимальний елемент
const myArray =[]
for (let i = -100; i <= 100; i++){
    myArray.push(i);
}
console.log(myArray);


let posCount = 0;
let negativeCount = 0;
  myArray.forEach((item) => {
  if (item < 0) {
    negativeCount++
  } else if (item > 0) {
    posCount++
  }
})

console.log("Кількість від\'ємних елементів: " + posCount);
console.log("Кількість додатніх елементів: " + negativeCount);
console.log("Максимальний елемент масиву: " + Math.max(...myArray));
console.log("Мінімальний елемент масиву: " + Math.min(...myArray));

