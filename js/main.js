$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    if ($("input:checkbox:checked").length < 1) {
      alert("Please select at least one option from above!");
      return false;
    }
  });
});

// function onSubmit() {

// }
