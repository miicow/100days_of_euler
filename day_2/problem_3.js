// Largest prime factor

const primeFactor = num => {
  let prime = 2; //set to smallest prime number, prime number is a natural number greater than 1;
  let largest;

  while (prime <= num) {
    if (num % prime === 0) {
      largest = prime;
      num /= prime;
    } else prime++;
  }
  return largest;
};

console.log(primeFactor(600851475143));
