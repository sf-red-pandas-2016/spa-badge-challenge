$(document).ready(function() {

  printTeachers();
  printSlogans();
  // upVoteListener();
  // downVoteListener();
  // addItemListener();

});

function printTeachers() {
  $.get({
    url: 'http://sample-badges-api.herokuapp.com/teachers',
    dataType: 'json'
  })
  .done(function(response) {
    response.forEach(function(teacher_data) {
      $('.container').find('ul').append("<li><a href="+teacher_data["id"]+">" + teacher_data['name'] + "</a></li>");
    });
  })
  .fail();
}

function printSlogans() {
  $(".container").find('#teacher-page').on('click', 'a' ,function(event) {
    event.preventDefault();
    console.log(this);

    var this_teacher_id = $(this).attr('href')
    var address = 'http://sample-badges-api.herokuapp.com/teachers/'+this_teacher_id

    $.get({
      url: address,
      dataType: 'json'
    })
    .done(function(response) {
      $('.container').find('#teacher-page').hide();
      $('.container').find('#slogan-page').show();

      var source = $('#badge-template').html();
      var template = Handlebars.compile(source);

      response.forEach(function(slogan_data) {
        newHtml = template(slogan_data);
        $('.container').find('#slogan-container').append(newHtml);
      });
    })
    .fail();
  })
}

function upVoteListener() {
  $('.container').on('click', 'our thing', function(event) {
    event.preventDefault();

    address = // add address here

    $.ajax({
      url: address,
      method: "POST",
      dataType: 'json'
    })
    .done()
    .fail();
  });
}
//
// function downVoteListener() {
//   $('.container').on('click', 'our thing', function(event) {
//     event.preventDefault();
//
//     //address = // add address here
//
//     $.ajax({
//       url: address,
//       method: "POST",
//       dataType: 'json'
//     })
//     .done()
//     .fail();
//   });
// }
//
// function addItemListener() {
//   $(highlevelobject).on('click', 'our thing', function(event) {
//     event.preventDefault();
//
//     address = // add address here
//
//     $.ajax({
//       url: address,
//       method: "POST",
//       dataType: 'json'
//     })
//     .done(function(response) {
//
//     })
//     .fail();
//   });
// }
