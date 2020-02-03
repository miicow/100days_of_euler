// Multiples of 3 and 5

const multiplesOf3and5 = num => {
  let total = 0;
  for (let i = 1; i < num; i += 1) {
    if (i % 3 === 0) {
      total += i;
    } else if (i % 5 === 0) {
      total += i;
    }
  }
  return total;
};

console.log(multiplesOf3and5(1000));
