function unique(arr) {
  let result = [];

  nextInput:
    for (let i = 0; i < arr.length; i++) {
      let str = arr[i]; 
      for (let j = 0; j < result.length; j++) { 
        if (result[j] == str) continue nextInput;
      }
      result.push(str);
    }

  return result;
}

let myArray = [2, 4, 5, 4, 4, 2, 5, 3, 5, 4, 3, 3, 2
];

console.log( unique(myArray) );

