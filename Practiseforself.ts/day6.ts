// function isPrime(n: number): boolean {
//   if (n <= 1) return false;

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }

//   return true;
// }

// let num = 10;
// let next = num + 1;

// while (!isPrime(next)) {
//   next++;
// }

// console.log("Next prime:", next);

function isPrime(n: number): boolean {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrime(7));