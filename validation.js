
function dateValidation(date) {
	if (date == null) {
		return false;
	}
	var dateObj = new Date()
	dateObj.setFullYear(parseInt(date.slice(0,4)));
	dateObj.setMonth(parseInt(date.slice(5,7)) - 1);
	dateObj.setDate(parseInt(date.slice(8,10)));

    var workDays = [1,3,5]
	if (workDays.indexOf(dateObj.getDay()) == -1) {
		return false;
	}

	return true;
}

function startValidation(startTime) {
	if (startTime == null) {
		return false;
	}
	return true;
}

function endValidation(endTime) {
	if (endTime == null) {
		return false;
	}
	return true;
}

function startEndValidation(startTime, endTime) {
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
	
	if (endModified <= startModified) {
		return false;
	}
	return true;
}

function reasonValidation(reason) {
	if (reason == null) {
		return false;
	}
	return true;
}
