function multiples() {
  const multiples = [];

  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }

  let sum = 0;

  multiples.forEach(number => sum += number);

  console.log(sum)
  return sum;
}

multiples();