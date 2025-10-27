
//==========> SHOW AND HIDE PASSWORD <==========//

	let passIcon = document.getElementById("view-pass");
	let password = document.getElementById("password");
	let fullname = document.getElementById("fname");
	const empNo = document.getElementById("empno");
	var acode = document.getElementById("acode");	
	var acodeText = document.getElementById("acodeText");	
	var empIndex = 0;
	var alarmMsg = "";
	
	acodeText.innerHTML = "";
	
	function alarm(inputVal, acodeTxt, alarmMsg) {
		inputVal.style.borderColor = "red";
		inputVal.style.borderWidth = "2px";
		inputVal.style.boxShadow = "none";	
		acodeTxt.style.color = "red";
		acodeTxt.innerHTML = alarmMsg;
	}
	function noAlarm(inputVal, acodeTxt) {
		inputVal.style.borderColor = "#659EC7";
		inputVal.style.borderWidth = "2px";	
		acodeTxt.innerHTML = "";	
	}
	
		passIcon.onclick = function() {
			if (password.type == 'password') {
				password.type = 'text';
				//acodeText.type = 'text';				
				passIcon.src = "images/eye-open.png";
			}
			else {
				password.type = 'password';
				//acodeText.type = 'password';
				passIcon.src = "images/eye-close.png";
			}
		}
		
		//Employee Number input field
		/*document.getElementById("empno").addEventListener("keyup", function() {
		
			let empNoVal = document.getElementById("empno").value;			
		
			fetch('check_reg.php?emp=' + encodeURIComponent(empNoVal))
		
			.then(response => response.json())
			.then(data => {	

				if (data.exists) {
					empIndex = 1;
					alarm(empNo, acodeText, "Employee Number already exists");
				}
				else {
					empIndex = 0;
					noAlarm(empNo, acodeText);					
				}
			})
		})	
		
		//Register button click
		document.getElementById("reg-btn").addEventListener("click", function(e) {
		
			//Stop submission of form
			if (empIndex == 1) {
				alarm(empNo, acodeText, "Employee Number already exists");	
				e.preventDefault();				
			}
		})*/









