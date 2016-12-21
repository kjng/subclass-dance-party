$(document).ready(function() {
  window.dancers = [];

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
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log(dancerMakerFunction);

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      ($('body').height() - 600) * Math.random() + 400,
      ($('body').width() - 200) * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });

  $('.lineup').on('click', function(event) {
    var newRow = false;
    var topPosition = 400;
    var leftPosition = 0;
    for (var i = 0; i < window.dancers.length; i++) {
      if (leftPosition >= 950) {
        topPosition += 100;
        if (newRow) {
          leftPosition = 0;
          newRow = false;
        } else {
          leftPosition = 40;
          newRow = true;
        }
      }
      window.dancers[i].css({top: topPosition, left: leftPosition});
      leftPosition += 80;
    }
  });
});

