var makePopDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node = $('<span class="popDancer"></span>');
  this.setPosition(this.top, this.left);
  this.step();
};
makePopDancer.prototype = Object.create(makeDancer.prototype);
makePopDancer.prototype.constructor = makePopDancer;
makePopDancer.prototype.oldStep = makeDancer.prototype.step;
makePopDancer.prototype.step = function() {
  this.oldStep();
  //update timeBetweenSteps to a set value to make a smooth transition
  // this.timeBetweenSteps = 16;


};