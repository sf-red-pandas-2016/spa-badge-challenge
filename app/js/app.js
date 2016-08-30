$(document).ready(function(){
	console.log('document ready');
	getTeachers();

});

var getTeachers = function() {

	var urlVariable = 'http://sample-badges-api.herokuapp.com/teachers';
    var method = 'GET';

    var request = $.ajax({
      url: urlVariable,
      method: method
    });

    // Get the data from 'http://sample-badges-api.herokuapp.com/teachers' url
    request.done(function(responseData, status) {
      console.log("request =  " + status);

      // Loop through response data and get teacher names
      for (var i = 0; i < responseData.length; i++) {
        $('ul').append("<li><a href=#>" + responseData[i].name + "</a></li>");
      }
    });

    request.fail(function(responseData) {
      console.log("getFields AJAX call failed");
    });
}

