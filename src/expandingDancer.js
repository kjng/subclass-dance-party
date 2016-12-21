var ExpandingDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = new Dancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('expand');
  this.$node.css('animation-duration', Math.ceil(this.timeBetweenSteps) + 200 + 'ms');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

//set the BlinkyDancer prototype lookup on the dancer prototype
//reset the constructor of BlinkyDancer.prototype

ExpandingDancer.prototype = Object.create(Dancer.prototype);
ExpandingDancer.prototype.constructor = ExpandingDancer;

ExpandingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};
