describe('expandingDancer', function() {

  var expandingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    expandingDancer = new MakeExpandingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(expandingDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should expand and contract', function() {
      expect(expandingDancer.$node.hasClass('expand')).to.be.true;
    });
  });
});
