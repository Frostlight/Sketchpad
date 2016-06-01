$(document).ready(function() {
		// Create the board, mouseover causes squares to turn black
		for (var i = 0; i < 900; i++) {
    	var $divSquare = $("<div/>")
        .mouseover(function() {
           $(this).css("background-color", "black");
        });

		$(".container").append($divSquare);
    }
    
    // Reset the board if the reset button was clicked on
    $("button").click(function() {
    	$("div").css("background-color", "white");
    });
});