function merge(arr1, arr2) {
  let sorted_arr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sorted_arr.push(arr1[i]);
      i += 1;
    } else {
      sorted_arr.push(arr2[j]);
      j += 1;
    }
  }

  if (i != arr1.length) {
    sorted_arr.push(...arr1.slice(i));
  } else {
    sorted_arr.push(...arr2.slice(j));
  }

  return sorted_arr;
}

console.log(merge([1, 5, 9], [2, 6, 8])); // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2])); // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5])); // [1, 4, 5]
console.log(merge([1, 4, 5], [])); // [1, 4, 5]
