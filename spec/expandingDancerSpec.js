describe('expandingDancer', function() {

  var expandingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    expandingDancer = new makeExpandingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(expandingDancer.$node).to.be.an.instanceof(jQuery);
  });

  xit('should have a step function that makes its node expand and contract', function() {
    sinon.spy(expandingDancer.$node, 'toggle');
    expandingDancer.step();
    expect(expandingDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    xit('should expand and contract', function() {
      // save the current width to a variable
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      // expect current width not to equal old width
      expect(expandingDancer.step.callCount).to.be.equal(1);
    });
  });
});
