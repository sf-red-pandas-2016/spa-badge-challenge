$('document').ready(function() {
  getAllTeachers();
  getTeacherBadges();
});

var getAllTeachers = function() {
  var url = 'http://sample-badges-api.herokuapp.com/teachers';
  var method = 'GET';

  var request = $.ajax({
    dataType: 'json',
    url: url,
    method: method
  });

  request.done(function(res) {
    res.forEach(function(teacher) {
      $('#teachers').append(`<li><a href="http://sample-badges-api.herokuapp.com/teachers/${teacher.id}">${teacher.name}</a></li>`)
    });
  });
};
