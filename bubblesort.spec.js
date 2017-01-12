describe('Bubble Sort', function() {
  before(function () {
  spyOn('swap').and.callThrough();
});

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('counts the number of swaps in the bubbleSort', function() {
  bubbleSort([2,1,3]);
  expect(bubbleSort.calls.count()).toEqual(1);
  });
});
