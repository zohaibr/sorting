function bubbleSort(arr) {
  let sortedArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
  	if (arr[i] > arr[i + 1]) swap(arr, i)
  }
  return arr;
}

function swap(arr, index) {
  let val1 = arr[index];
  let val2 = arr[index + 1];
  arr[index] = val2;
  arr[index + 1] = val1;
}
