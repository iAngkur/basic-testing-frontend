export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    let num = parseInt(number);

    if (isNaN(num)) return NaN;

    sum += num;
  }
  return sum;
}
