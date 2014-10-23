$(document).ready(function() {



    alert('hello! document is ready!');

    $("#yeah").on("click", function() {

	alert("clicked!");
    });

    $("#signin_form").on("submit",function(e) {
	e.preventDefault();

	$(document.body).html('<div class="form-group"> <label for="usr">Search for a drink:<br></label> <input type="text" class="form-control" id="usr"> </div> <div class="form-group">  <label for="pwd">Search for a store:<br></label> <input type="password" class="form-control" id="pwd"> </div>');

	alert("form was submitted");
	//window.location.href = 'index2.html';
    });



});
