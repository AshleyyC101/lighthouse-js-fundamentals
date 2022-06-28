function range(start, end, step) {
  let index = start
  let result = [] 

  if (((start || end || step) && (step >= 0 && end >= 0)) && (start < end) && (step > 0)) {
    for (index; index <= end; index += step) {
      result.push(index)
    }
  }

  return result
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

console.log(range(3, 10));
console.log(range(10, 5, 3));
console.log(range(0, 10, 0));
