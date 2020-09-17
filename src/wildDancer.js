var makeWildDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node = $('<span class="wildDancer"></span>');
  this.setPosition(this.top, this.left);
  this.step();
};
makeWildDancer.prototype = Object.create(makeDancer.prototype);
makeWildDancer.prototype.constructor = makeWildDancer;
makeWildDancer.prototype.oldStep = makeDancer.prototype.step;
makeWildDancer.prototype.step = function() {
  this.oldStep();
  //update timeBetweenSteps to a set value to make a smooth transition
  // this.timeBetweenSteps = 16;

  this.top = this.top + 5;
  if (this.top >= window.screen.height) {
    this.top = 1;
  }
  this.left = this.left + 5;
  if (this.left >= window.screen.width) {
    this.left = 1;
  }
  this.setPosition(this.top, this.left);
};