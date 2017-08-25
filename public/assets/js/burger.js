/* global moment */

$(document).on("click", ".burger-button", flipBurger);

//When user clicks add-btn
$("#burger-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newBurger object
  var newBurger = {
    name: $("#burger").val().trim(),
    devoured: false,
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newBurger);

  // Send an AJAX POST-request with jQuery
  $.post("/new", newBurger)
    // On success, run the following code
    .done(function() {

      var row = $("<div>");
      var burgerBtn = $("<button>");

      burgerBtn.addClass("burger-button");

      burgerBtn.attr("burger-devoured", newBurger.devoured);

      burgerBtn.text(newBurger.name);

      console.log(burgerBtn);

      row.append(burgerBtn);

      $("#not-eaten").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#burger").val("");
  $("#devoured").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/burgers", function(data) {

  if (data.length !== 0) {

  	console.log(data);
    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      var burgerBtn = $("<button>");

      burgerBtn.addClass("burger-button");

      burgerBtn.attr("burger-devoured", data[i].devoured);
      burgerBtn.attr("burger-id", data[i].id);

      burgerBtn.text(data[i].burger_name);

      console.log(burgerBtn);

      row.append(burgerBtn);

      if (data[i].devoured === false){
        $("#not-eaten").prepend(row);  
      }
      else{
        $("#eaten").prepend(row);  
      }
    }
  }
});

function flipBurger() {
  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("burger-devoured");
  var id = $(this).attr("burger-id");
  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
  // Then, set the image's data-state to animate
  // Else set src to the data-still value
  if (state === true) {
    state = false;
    $(this).attr("burger-devoured", false);
  } else {
  	$(this).attr("burger-devoured", true);
    state = true;
  }

  var flippedBurger = {
    devoured: state,
    date: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(flippedBurger);

  $.post("/" + id, flippedBurger).done(function(){
    window.location.href = "/";
  });


}