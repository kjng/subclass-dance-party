var ColorChangingDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = new MakeDancer(top, left, timeBetweenSteps);
  this.oldStep = MakeDancer.prototype.step;
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('masterchief');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

//set the MakeBlinkyDancer prototype lookup on the dancer prototype
//reset the constructor of MakeBlinkyDancer.prototype

ColorChangingDancer.prototype = Object.create(MakeDancer.prototype);
ColorChangingDancer.prototype.constructor = ColorChangingDancer;

ColorChangingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggleClass('change-color');
};
