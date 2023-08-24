function rotateRightmostDigits(num, n) {
  let str_num = String(num);
  let left = str_num.slice(0, str_num.length - n);
  let right = str_num.slice(str_num.length - n + 1);
  return Number(left + right + str_num[str_num.length - n]);
}

console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(735291, 2)); // 735219
console.log(rotateRightmostDigits(735291, 3)); // 735912
console.log(rotateRightmostDigits(735291, 4)); // 732915
console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917
