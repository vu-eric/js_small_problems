function sum(num) {
  if (num === 0) return 0;
  return sum(Math.floor(num / 10)) + (num % 10);
}

console.log(sum(23)); // 5
console.log(sum(496)); // 19
console.log(sum(123456789)); // 45
