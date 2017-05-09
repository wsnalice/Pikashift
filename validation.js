
function dateValidation(date) {
	if (date == null) {
		return false;
	}
	
	var dateObj = new Date()
	dateObj.setFullYear(parseInt(date.slice(0,4)));
	dateObj.setMonth(parseInt(date.slice(5,7)));
	dateObj.setDate(parseInt(date.slice(8,10)));

    var workDays = [1,3,5]
	if (workDays.indexOf(dateObj.getDay()) == -1) {
		return false;
	}

	return true;
}


function inputValidation(date, startTime, endTime, reason) {
	if (date == null) {
		alert("Please enter date.");
		return false;
	}
	else if (startTime == null) {
		alert('Please enter a start time.');
		return false;
	}
	else if (endTime == null) {
		alert('Please enter an end time.');
		return false;
	}
	else if (reason == null) {
		alert("Please provide a reason.");
		return false;
	}

	var dateObj = new Date()
	dateObj.setFullYear(parseInt(date.slice(0,4)));
	dateObj.setMonth(parseInt(date.slice(5,7)));
	dateObj.setDate(parseInt(date.slice(8,10)));

	var startModified;
    if (startTime.indexOf('am') != -1) {
      startModified = parseInt(startTime.slice(0,-2));
    } else {
      startModified = parseInt(startTime.slice(0,-2)) + 12;
    }
    var endModified;
    if (endTime.indexOf('am') != -1) {
      endModified = parseInt(endTime.slice(0,-2));
    } else {
      endModified = parseInt(endTime.slice(0,-2)) + 12;
    }

    var workDays = [1,3,5]
	if (workDays.indexOf(dateObj.getDay()) == -1) {
		alert("Input date is not on a day that you work.");
		return false;
	}
	else if (startModified < 13) {
		alert("The start time you inputted is before your work shift");
		return false;
	}
	else if (endModified > 21) {
		alert("The end time you inputted is after your work shift");
		return false;
	}
	else if (endModified <= startModified) {
		alert("End time should be after start time.");
		return false;
	}
	return true;
}