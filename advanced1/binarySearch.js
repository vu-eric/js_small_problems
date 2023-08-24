function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

const yellowPages = [
  "Apple Store",
  "Bags Galore",
  "Bike Store",
  "Donuts R Us",
  "Eat a Lot",
  "Good Food",
  "Pasta Place",
  "Pizzeria",
  "Tiki Lounge",
  "Zooper",
];
console.log(binarySearch(yellowPages, "Pizzeria")); // 7
console.log(binarySearch(yellowPages, "Apple Store")); // 0
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77)); // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89)); // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5)); // 1
console.log(
  binarySearch(
    ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"],
    "Peter"
  )
); // -1
console.log(
  binarySearch(
    ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"],
    "Tyler"
  )
); // 6
