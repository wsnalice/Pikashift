function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == 'Pikachu' && password == "Pikachu"){
		window.location.href = ('WorkerHome.html');
	} else if (username == 'Moltres' && password == 'Moltres'){
		window.location.href = ('ManagerHome.html');
	} else {
		document.getElementById("login_failed").innerHTML = "Incorrect username/password. Please try again.";
	};
	return false;
};