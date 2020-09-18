// console.log(window);
// console.log(Window.dancers);
// console.log(window.dancers);
let lineUp = function() {
  for (let i = 0; i < window.dancers.length; i++) {
    window.dancers[i].left = 10;
  }
};