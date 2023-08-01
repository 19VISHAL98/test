// 2. task  

// sum of all the numbers

// input  [1, 2, 3, 4, 5, 6, 7, 8, 9]
// output  45

function addNumber(a) {
    let sum = 0;
    for (let x of a) {
      sum += x;
    }
    return sum;
  }
  console.log( "add  array of integers as input  =>" ,addNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  console.log('-------------------------------------------------------------------------------------------')