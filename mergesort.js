function split(arr) {
  // if (arr.length === 1) return arr;
  let length = arr.length;
  let returnArr = [];
  if (length % 2 === 0) {
    returnArr.push(arr.slice(0, length / 2));
    returnArr.push(arr.slice(length / 2, length));
  } else {
    returnArr.push(arr.slice(0, Math.ceil(length / 2)));
    returnArr.push(arr.slice(Math.ceil(length / 2), length));
  }
  return returnArr;
}

function merge(arr1, arr2) {
  return arr1.concat(arr2);
} // this should take two arrays!!

function mergeSort(arr) {
  let splitArr = split(arr);
  if (splitArr[0].length === 1) {
    // start merging

  } else {
   // mergeSort(splitArr[0]);
   merge(mergeSort(splitArr));
  }
}
