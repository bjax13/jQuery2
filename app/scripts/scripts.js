var listo = [];

window.onload = function () {
  if (localStorage['localListo'] !== null) {
    listo = JSON.parse(localStorage['localListo']);
  }else {
    localStorage['localListo'] = JSON.stringify([]);
  }
  for (var i = 0; i < listo.length; i++) {
    if (listo[i].id === "new") {

        // add function
    } else if (listo[i].id === "inProgress") {

      // add function
    }else if ((listo[i].id === "archived") ) {

      // add function
    }

  }


}



$(document).ready(function () {

  $('#newTaskForm').hide();


function addItem(element, task , itemID) {
  $(element).append(
                    '<a href="#finish" class="" id="'+ itemID +'">' +
                    '<li class="list-group-item">' +
                    '<h3>' + task.task + '</h3>' +
                    '<span class="arrow pull-right">' +
                    '<i class="glyphicon glyphicon-arrow-right">' +
                    '</span>' +
                    '</li>' +
                    '</a>'
              );
}

  var Task = function (task) {
    this.task = task;
    this.id = 'new';
  };
  var addTask = function (task) {
    if(task) {
      task = new Task(task);
      listo.push(task);

      $('#newItemInput').val('');
          // place append into a function accessable by the global veriable.
          addItem('#newList',task, "item" );

    }
    $('#newTaskForm').slideToggle('fast', 'linear');

  };

  var advanceTask = function (task) {
    var modified = task.innerText.trim()
    for (var i = 0; i < listo.length; i++) {
      if (listo[i].task === modified) {
        if (listo[i].id === 'new'){
          listo[i].id = 'inProgress';
        }else if (listo[i].id = 'inProgress') {
          listo[i].id = 'archived'
        }else {
          listo.splice(i,1);
        }
        break;
      }
    }
    task.remove();
  };

  $(document).on('click', '#item', function (e) {
    e.preventDefault();
    var task = this;
    advanceTask(task);
    this.id = 'inProgress';
    $('#currentList').append(this.outerHTML);
  });

  $(document).on('click', '#inProgress', function (e) {
    e.preventDefault();
    var task = this;
    task.id = "archived";
    var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
    advanceTask(task);
    $('#archivedList').append(changeIcon);
  })

  $(document).on('click', '#archived', function (e) {
    e.preventDefault();
    var task = this;
    advanceTask(task);
  })



  $('#saveNewItem').on('click', function (e) {
    e.preventDefault();
    var task = $('#newItemInput').val().trim();
    addTask(task);
  });
  // open form
  $('#add-todo').on('click', function (e) {
    e.preventDefault();
    $('#newTaskForm').fadeToggle('fast','linear');
  });
  // close form
  $('#cancel').on('click', function (e) {
    e.preventDefault();
    $('#newTaskForm').fadeToggle('fast', 'linear');
  });



});
