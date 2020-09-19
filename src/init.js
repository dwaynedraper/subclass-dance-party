$(document).ready(function() {
  window.dancers = [];
  let arr = window.dancers;

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    console.log('this: ', this);
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
  $('.lineUp').on('click', function(event) {
    lineUp();
  });
  $('body').on('mouseover', 'span', function(event) {
    console.log('working');
    $('span.wildDancer').css('border', '20px solid yellow');
  });
  $('body').on('mouseover', 'span', function(event) {
    console.log('working');
    $('span.dancer').css('border', '20px solid cornflowerblue');
  });
  $('body').on('mouseover', 'span', function(event) {
    console.log('working');
    $('span.popDancer').css('border', '20px solid magenta');
  });
  // $.each(arr, function() {
  //   this.mouseover(function() {
  //     this.css('color', 'pink');
  //   });
  // });
  // $(".popDancer").on('mouseover', function() {
  //   $(".popDancer").css("border", "pink");
  // });
  // $(".popDancer").mouseover(function(event) {
  //   console.log('working');
  //   // this.css("border", "pink");
  //   var $something = $(event.target);
  //   $something.css("border", "20 px solid pink");
  // });
  // $('span').mouseover(function(event) {
  //   $(this).find('.wildDancer').css('border', '20px solid yellow');
  // });
});

