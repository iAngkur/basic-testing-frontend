export function add(numbers) {
  let sum = 0;

  if (Array.isArray(numbers) && numbers?.length > 0) {
    for (const number of numbers) {
      sum += number;
    }
  }
  return sum;
}
