function bubbleSort(arr) {
  let sortedArr = [];
  let length = arr.length - 1;
  while (length > 1) {
	  for (let i = 0; i < length; i++) {
	  	if (arr[i] > arr[i + 1]) swap(arr, i);
	  }
	  length--;
  }
  return arr;
}

function swap(arr, index) {
  let val1 = arr[index];
  let val2 = arr[index + 1];
  arr[index] = val2;
  arr[index + 1] = val1;
}
