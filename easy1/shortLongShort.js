function shortLongShort(string1, string2) {
  let shortString;
  let longString;
  if (string1.length < string2.length) {
    shortString = string1;
    longString = string2;
  } else {
    shortString = string2;
    longString = string1;
  }

  return shortString + longString + shortString;
}

console.log(shortLongShort("abc", "defgh")); // "abcdefghabc"
console.log(shortLongShort("abcde", "fgh")); // "fghabcdefgh"
console.log(shortLongShort("", "xyz")); // "xyz"
