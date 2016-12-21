var WarthogDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('warthog');
};

WarthogDancer.prototype = Object.create(Dancer.prototype);
WarthogDancer.prototype.constructor = WarthogDancer;

WarthogDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({'left': '100px'});
};