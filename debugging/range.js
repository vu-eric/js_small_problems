function range(start, end) {
  if (end === undefined) {
    [start, end] = [0, start];
  }

  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}
// Examples

console.log(range(10, 20));
console.log(range(5));
