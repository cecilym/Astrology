$( document ).ready(function() {
  console.log( 'ready!' );

});


filterSelection("all")
function filterSelection(c) {
  var x, i;
  //x = document.getElementsByClassName("filterDiv");
  x = $( '.filterDiv' ); // select all elements with a class of 'filterDiv'
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btns = $( '.btn' ); 
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var btnText = $(this).text();
    console.log(btnText);
    $('#showClasses').replaceWith('<p id="showClasses">' + btnText + '</p>');
    var current = $( '.active' );
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


/*
$('button').on( "click", function() {
    var btnText = $(this).text();
    console.log(btnText);
    $('#showClasses').replaceWith(btnText);
  });

  /*

/*
$('.btn' ).click(function() {
  var btnText = $(this).text();
  $('#showClasses').replaceWith(btnText);
});
*/

/*
$('.btn').click(function( event ) {
  var btnText = $(current).text();
  $('#showClasses').replaceWith("new text");
}); 
*/



