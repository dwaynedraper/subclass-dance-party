var makeWildDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node = $('<span class="wildDancer"></span>');
  this.setPosition(this.top, this.left);
};
makeWildDancer.prototype = Object.create(makeDancer.prototype);
makeWildDancer.prototype.constructor = makeWildDancer;
makeWildDancer.prototype.oldStep = makeDancer.prototype.step;
makeWildDancer.prototype.step = function() {
  this.oldStep();
  // this.top this.left
};

//get initial position
//iterate