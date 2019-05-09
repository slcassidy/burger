// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $('.eat-burger').on('click', function(event) {
      const id = $(this).data('id');
    //   const food = $(this).data('food');
  
      const eatten = {
        food: id
      };
  
      // Send the PUT request.
      $.ajax('/api/burger/' + id, {
        type: 'PUT',
        data: eatten
      }).then(
        function() {
          console.log('changed devour', eatten);
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
        // sleepy: $('[name=sleepy]:checked').val().trim()
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
  
    // $('.delete-cat').on('click', function(event) {
    //   const id = $(this).data('id');
  
    //   // Send the DELETE request.
    //   $.ajax('/api/cats/' + id, {
    //     type: 'DELETE'
    //   }).then(
    //     function() {
    //       console.log('deleted cat', id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  });