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
      $('#teachers').append(`<li><a class='teachername' href="http://sample-badges-api.herokuapp.com/teachers/${teacher.id}">${teacher.name}</a></li>`)
    });
  });
};

var getTeacherBadges = function() {
  $('.container').on('click', 'a', 'href', function(e) {
    e.preventDefault();

    var that = this;
    var address = $(that).attr('href')

    var request = $.ajax({
      dataType: 'json',
      url: address,
      method: 'get'
    });

    request.done(function(res){
      console.log(res)
    })

  });



};
