describe('Bubble Sort', function() {
  it('it swaps two numbers based on the index', function() {
    let arr = [8, 7]
    swap(arr, 0);
    expect(arr).toEqual([7, 8]);
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('counts the number of swaps in the bubbleSort', function() {
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([5, 2, 1, 3, 5]);
    expect(swap.calls.count()).toEqual(4);
  });

  it ('sorts an array in numerical order', function() {
    expect(bubbleSort([4, 2, 1, 3, 5])).toEqual([1, 2, 3, 4, 5])
  });

  it ('sorts an array in numerical order with repeated numbers', function() {
    expect(bubbleSort([5, 2, 1, 3, 5])).toEqual([1, 2, 3, 5, 5])
  });
});
