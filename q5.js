$(document).ready(function() {
    var count = 0;
    $('#add-task').click(function() {
      var inputVal = $('#task-input').val();
      if (inputVal !== '') {
        var inputArr = inputVal.split(' ');
        var liHtml = '';
        inputArr.forEach(function(word) {
          liHtml += '<li>' + word + '</li>';
        });
        $('#task-list').append(liHtml);
        $('#task-input').val('');
        count++;
        if (count % 2 == 0) {
          $('li:odd').css('background-color', 'white');
          $('li:even').css('background-color', 'yellow');
        } else {
          $('li:odd').css('background-color', 'yellow');
          $('li:even').css('background-color', 'white');
        }
      }
    });
  
    $('#remove-task').click(function() {
      var inputVal = $('#task-input').val().toLowerCase();
      var listItems = $('#task-list li');
      for (var i = 0; i < listItems.length; i++) {
        var itemText = $(listItems[i]).text().toLowerCase();
        if (itemText === inputVal) {
          $(listItems[i]).remove();
          break;
        }
      }
      $('#task-input').val('');
      count++;
      if (count % 2 == 0) {
        $('li:odd').css('background-color', 'white');
        $('li:even').css('background-color', 'yellow');
      } else {
        $('li:odd').css('background-color', 'yellow');
        $('li:even').css('background-color', 'white');
      }
    });
  });
  