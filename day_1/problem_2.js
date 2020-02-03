// Even Fibonacci Numbers

const evenFibNums = () => {
  let previous = 0;
  let current = 1;
  let evenTotal = 0;

  while (current < 4000000) {
    let next = previous + current;
    if (next % 2 === 0) {
      evenTotal += next;
    }

    previous = current;
    current = next;
  }
  return evenTotal;
};

console.log(evenFibNums());
