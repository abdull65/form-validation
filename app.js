function second(arr = [12, 33, 2, 87, 44, 9]) {
  console.log(arr.splice(arr.indexOf(Math.max(...arr)), 1));
  return Math.max(...arr);
}
console.log(second([2000, 34, 33, 55, 22, 33, 11, 0, 12, 345]));

function removeDuplicate(arr = [2000, 34, 33, 55, 22, 33, 11, 0, 12, 345]) {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) arr.splice(j, 1);
    }
  }
  return arr;
}
console.log(removeDuplicate());
