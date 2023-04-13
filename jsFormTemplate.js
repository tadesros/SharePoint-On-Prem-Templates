"use strict";

//* Check fo the DOM has loaded,then start custom code
document.onreadystatechange = function () {
	//*If the state is Interactive then the DOM has loaded */
	if (document.readyState === "interactive") {
		//Run code specific code for a form
		formSpecificRoutines();
	}
}; //onreadystatechange <end>

/**
 * FUNCTION: run code based on form mode: New or Edit
 */
function formSpecificRoutines() {
	//* GET DATA VARIABLES *//
	//Check to see what mode the page is in and runs the appropriate javascript
	//i.e: Display Mode, Edit Mode, View Mode
	var isNewMode = document.location.pathname.indexOf("/NewForm.aspx") > -1;
	var isDisplayMode = document.location.pathname.indexOf("/DispForm.aspx") > -1;
	var isEditMode = document.location.pathname.indexOf("/EditForm.aspx") > -1;
	//RUN Code based on current form mode
	if (isNewMode) {
		//Hide the container for the Report Number
	   	  hideFieldsNewForm();
	}
	//THIS CODE RUNS IF EDIT MODE
	if (isEditMode) {
		
	}
}
/**
 * Function: Hide Fields on New Form
 */
function hideFieldsNewForm() {
	var selElement = document.querySelector('[title="Status"]').closest("tr");
	selElement.style.display = "none";
}
