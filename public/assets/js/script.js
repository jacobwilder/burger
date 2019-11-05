// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var updatedState = $(this).data("newdevoured");
  
      var newDevouredState = {
        devoured: updatedState
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured state to", newDevouredState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".newBurger").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Cooked a new burger");
          console.log(newBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  