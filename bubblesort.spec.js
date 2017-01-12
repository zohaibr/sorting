describe('Bubble Sort', function() {

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('counts the number of swaps in the bubbleSort', function() {
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([5,2,1,3,5]);
    expect(swap.calls.count()).toEqual(3);
  });

});
