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

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let left_half = mergeSort(arr.slice(0, arr.length / 2));
  let right_half = mergeSort(arr.slice(arr.length / 2));

  return merge(left_half, right_half);
}

console.log(mergeSort([9, 5, 7, 1])); // [1, 5, 7, 9]
console.log(mergeSort([5, 3])); // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4])); // [1, 2, 4, 6, 7]

console.log(
  mergeSort(["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"])
);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(
  mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46])
);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
