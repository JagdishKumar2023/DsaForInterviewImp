// function isPrime(n) {
//   if (n <= 2) return false;
//   if (n === 2) return true;

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(10));
// console.log(isPrime(17));

// function isPrime(n) {
//   if (n <= 2) return false;
//   if (n === 2) return true;

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//     return true;
//   }
// }

// console.log(isPrime(7));
// console.log(isPrime(15));

// function isPrime(n) {
//   if (n <= 1) return false;
//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) return false;
//   }
//   return false;
// }

// console.log(isPrime(4));
// console.log(isPrime(15));

// function gcd(a, b) {
//   while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }

// console.log(gcd(56, 90));
// console.log(gcd(10, 15));

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];

// let combined = arr1.concat(arr2);
// let combined2 = [...arr1, ...arr2];

// console.log(combined2);

// To adding the previous two value and result it

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

console.log(fibonacci(2));
