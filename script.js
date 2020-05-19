$(document).ready(function () {
  console.log( 'ready' );
  
  // May want to hide at load when list gets longer: $('.delineation').hide();

  // Hide delineations that need to be edited
  $('.edit').hide();
  
  var $filterCheckboxes = $('input[type="checkbox"]');

  $filterCheckboxes.on('change', function() {

    var selectedFilters = {};

    $filterCheckboxes.filter(':checked').each(function() {

      if (!selectedFilters.hasOwnProperty(this.name)) {
        selectedFilters[this.name] = [];
      }

      selectedFilters[this.name].push(this.value);

    });

    // create a collection containing all of the filterable elements
    var $filteredResults = $('.delineation');

    // loop over the selected filter name -> (array) values pairs
    $.each(selectedFilters, function(name, filterValues) {

      // filter each .delineation element
      $filteredResults = $filteredResults.filter(function() {

        var matched = false,
          currentFilterValues = $(this).data('category').split(' ');

        // loop over each category value in the current .delineation' data-category
        $.each(currentFilterValues, function(_, currentFilterValue) {

          // If the current category exists in the selected filters array set matched to true, and stop looping
          // We're ORing in each set of filters so only need to match once

          if ($.inArray(currentFilterValue, filterValues) != -1) {
            matched = true;
            return false;
          }
        });

        // if matched is true the current .delineation element is returned
        return matched;

      });
    });

    $('.delineation').hide().filter($filteredResults).show();

  });

});
 