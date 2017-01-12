// describe('Bubble Sort', function() {
//   it('it swaps two numbers based on the index', function() {
//     let arr = [8, 7]
//     swap(arr, 0);
//     expect(arr).toEqual([7, 8]);
//   });

//   it('handles an empty array', function(){
//     expect( bubbleSort([]) ).toEqual( [] );
//   });

//   it('counts the number of swaps in the bubbleSort', function() {
//     spyOn(window, 'swap').and.callThrough();
//     bubbleSort([5, 2, 1, 3, 5]);
//     expect(swap.calls.count()).toEqual(4);
//   });

//   it ('sorts an array in numerical order', function() {
//     expect(bubbleSort([4, 2, 1, 3, 5])).toEqual([1, 2, 3, 4, 5])
//   });

//   it ('sorts an array in numerical order with repeated numbers', function() {
//     expect(bubbleSort([5, 2, 1, 3, 5])).toEqual([1, 2, 3, 5, 5])
//   });
// });

describe('Split Array Function', function() {
  it('is able to split an even length array into two array halves', function() {
  let arr = [1,2,3,4,5,6];
  let splitArr = split(arr);
  expect(splitArr).toEqual([[1,2,3],[4,5,6]]);
  expect(splitArr.length).toEqual(2);
  expect(Array.isArray(splitArr[0]) && Array.isArray(splitArr[1])).toEqual(true);
  });

  it('is able to split an odd length array into two array halves', function() {
  let arr = [1,2,3,4,5,6,7];
  let splitArr = split(arr);
  expect(splitArr).toEqual([[1,2,3,4],[5,6,7]]);
  expect(splitArr.length).toEqual(2);
  expect(Array.isArray(splitArr[0]) && Array.isArray(splitArr[1])).toEqual(true);
  });

  // it('returns a nested array with a single element if the array passed in has a length of one', function() {
  // let arr = [1];
  // let splitArr = split(arr);
  // expect(splitArr).toEqual([[1]]);
  // expect(splitArr.length).toEqual(1);
  // expect(Array.isArray(splitArr[0])).toEqual(true);
  // });

});

describe('Merge', function() {
  it('merges two arrays into one array with the same numbers in the same order', function() {
    let arr = [[1,2,3,4],[5,6,7]];
    let mergedArr = merge(arr);
    expect(Array.isArray(mergedArr)).toEqual(true);
    expect(mergedArr).toEqual([1,2,3,4,5,6,7]);
  });
});

describe('Merge Sort Function', function() {
  it('sorts the input array in numberical order using split and merge functions for both even and odd length arrays', function() {
    expect(mergeSort([4, 2, 1, 3, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSort([8, 4, 2, 1, 3, 5])).toEqual([1, 2, 3, 4, 5, 8]);
  });
});
