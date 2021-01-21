'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function projectClick(e) {
    console.log("Project clicked");
    e.preventDefault();
    $(this).css("background-color", "green");
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    	if (description.length == 0) {
       		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    			} else {
       				$("a.thumbnail").fadeOut();
				}

}



function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("The best way is just to observe the noise of the world.");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").addClass("active");
	});


	$("a.thumbnail").click(projectClick);


	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}