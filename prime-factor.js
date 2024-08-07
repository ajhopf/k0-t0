/*The prime factors of 13195 are 5, 7, 13 and 29
* What is the largest prime factor of the number 600851475143
* */

const isPrimeNumber = (number) => {
  const divisors = [];

  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
    if (divisors.length > 1) {
      break;
    }
  }

  return divisors.length === 1;
}

const findNextPrimeFactor = (number, currentPrimeFactor) => {
  let nextPrimeFactor = 0;
  for (let i = currentPrimeFactor; i <= number; i++) {
    if (isPrimeNumber(i) && (number % i === 0)) {
      nextPrimeFactor = i;
      break
    }
  }
  return nextPrimeFactor;
}


const findGreatestPrimeFactor = (number) => {
  let currentValue = number;
  let currentPrimeFactor = 2;
  let primeFactors = [];

  while (currentValue > 1) {
    if (currentValue % currentPrimeFactor === 0 && !primeFactors.includes(currentPrimeFactor)) {
      primeFactors.push(currentPrimeFactor);
      currentValue = currentValue / currentPrimeFactor;
    } else {
      currentPrimeFactor = findNextPrimeFactor(currentValue, currentPrimeFactor);
      primeFactors.push(currentPrimeFactor);
      currentValue = currentValue / currentPrimeFactor;
    }
  }

  console.log(primeFactors[primeFactors.length - 1]);
  return primeFactors[primeFactors.length - 1];
}

findGreatestPrimeFactor(600851475143);
