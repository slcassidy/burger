// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $('.eat-burger').on('click', function(event) {
      const id = $(this).data('burgerid');
      console.log(id);
      const food = $(this).data('burgereat');
      console.log(food);
  
      const eatten = {
        devoured: food
      };
      console.log(eatten);
  
      // Send the PUT request.
      $.ajax('/api/burger/' + id, {
        type: 'PUT',
        data: eatten
      }).then(
        function() {
          console.log('changed devour', food);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $('.create-form').on('submit', function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBur = {
        name: $('#bu').val().trim(),
      };
  
      // Send the POST request.
      $.ajax('/api/burger', {
        type: 'POST',
        data: newBur
      }).then(
        function() {
          console.log('created new burger');
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  

  });