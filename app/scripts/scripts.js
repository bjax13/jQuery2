$(document).ready(function () {

  $('#newTaskForm').hide();


  var listo = [];
  var Task = function (task) {
    this.task = task;
    this.id = 'new';
  };
  var addTask = function (task) {
    if(task) {
      task = new Task(task);
      listo.push(task);

      $('#newItemInput').val('');
        $('#newList').append(
                          '<a href="#finish" class="" id="item">' +
                          '<li class="list-group-item">' +
                          '<h3>' + task.task + '</h3>' +
                          '<span class="arrow pull-right">' +
                          '<i class="glyphicon glyphicon-arrow-right">' +
                          '</span>' +
                          '</li>' +
                          '</a>'
                    );
    }
    $('#newTaskForm').slideToggle('fast', 'linear');

  };


  $('#saveNewItem').on('click', function (e) {
    e.preventDefault();
    var task = $('#newItemInput').val().trim();
    addTask(task);
  });
  // open form
  $('#add-todo').on('click', function () {
    $('#newTaskForm').fadeToggle('fast','linear');
  });
  // close form
  $('#cancel').on('click', function (e) {
    e.preventDefault();
    $('#newTaskForm').fadeToggle('fast', 'linear');
  });



});
