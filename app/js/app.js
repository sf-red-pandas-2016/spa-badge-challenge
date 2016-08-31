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
    	var script = $('#teacher').html();
    	var template = Handlebars.compile(script);
    	var context = { "teachers" : res };
    	var compiled = template(context);
      $('#teachers-list').append(compiled)
  });
};

// function getPosts() {
// 	$.ajax({
// 		url: 'http://localhost:9393/',
// 		dataType: 'json',
// 		crossDomain: false
// 	}).done(function(res){
//     var script = $('#post').html();
//     var template = Handlebars.compile(script);
//     var context = { "posts" : res };
//     var compiled = template(context);
//     $('.posts').append(compiled);
//   });
// }

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
