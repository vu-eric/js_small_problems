function crunch(str) {
  if (str.length === 0) {
    return str;
  }

  new_string = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== new_string[new_string.length - 1]) {
      new_string += str[i];
    }
  }

  return new_string;
}

console.log(crunch("ddaaiillyy ddoouubbllee")); // "daily double"
console.log(crunch("4444abcabccba")); // "4abcabcba"
console.log(crunch("ggggggggggggggg")); // "g"
console.log(crunch("a")); // "a"
console.log(crunch("")); // ""
