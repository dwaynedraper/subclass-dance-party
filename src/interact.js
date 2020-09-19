let interact = function() {
  for (let i = 0; i < window.dancers.length; i++) {
    for (let j = i + 1; j < window.dancers.length; j++) {
      let item = window.dancers;
      let a = Math.abs(item[i].top - item[j].top);
      let b = Math.abs(item[i].left - item[j].left);
      let c = Math.sqrt((a * a) + (b * b));
      if (c < 40) {
      //   item[i].$node.span.dancer.style.border = "20px solid purple";
        item[i].$node.css('border', '20px solid purple');
        item[j].$node.css('border', '20px solid orange');
      }
    }
  }
};
setInterval(interact, 100);