function maxRotation(num) {
  let str_num = String(num);

  for (let i = str_num.length; i > 1; i -= 1) {
    str_num = rotateRightmostDigits(str_num, i);
  }

  return Number(str_num);
}

function rotateRightmostDigits(num, n) {
  let str_num = String(num);
  let left = str_num.slice(0, str_num.length - n);
  let right = str_num.slice(str_num.length - n + 1);
  return Number(left + right + str_num[str_num.length - n]);
}

console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3)); // 3
console.log(maxRotation(35)); // 53
console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146)); // 7321609845
