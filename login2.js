//=======> USERNAME AND PASSWORD VALIDATION <=======//

	const loginEnter = document.getElementById("login-enter");
	const logAlarm   = document.getElementById("log-alarm");
	/*const user = document.getElementById("username");
	const pass = document.getElementById("password");
	let matchValue  = false;
	let userData = "";
	let matchValue2 = false;
	
	//Username input
	user.addEventListener('keyup', function() {
	
		let userVal = user.value;
		let passVal = pass.value;

		console.log(passVal);
		
		fetch('check_password.php?user=' + encodeURIComponent(userVal) + '&pass=' + encodeURIComponent(passVal))
			.then(response => response.json())
			.then(data => {				
			console.log(data);
				
			matchValue = data.match;
			userData = data.user;
			//matchValue2 = data.match2;
			console.log(matchValue);
			console.log(userData);			
		})
		.catch((error) => {
			console.log(error);
		})
	})
	
	//Password input
	pass.addEventListener('keyup', function() {
	
		let userVal = user.value;
		let passVal = pass.value;

		console.log(passVal);
		
		fetch('check_password.php?user=' + encodeURIComponent(userVal) + '&pass=' + encodeURIComponent(passVal))
			.then(response => response.json())
			.then(data => {				
			console.log(data);
				
			matchValue = data.match;
			userData = data.user;
			//matchValue2 = data.match2;
			console.log(matchValue);
			console.log(userData);			
		})
		.catch((error) => {
			console.log(error);
		})
	})*/
	

	//Click 'Login' button
	loginEnter.addEventListener('click', function(e) {
	
		//if (matchValue == false) {
			e.preventDefault();
			logAlarm.style.display = 'block';
		//}	
	})