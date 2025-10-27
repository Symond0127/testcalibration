//=======> HOME PAGE <=======//
	
	const loginBtn = document.querySelector('.login');
	const dropdowns = document.querySelectorAll('.dropdown');
	const input = document.getElementById("search-data");
	//const loginEnter = document.getElementById("login-enter");
	var aa = 0;
	var arr = [];
	
	//Click Login Button
	loginBtn.addEventListener("click", () => {
		window.location.href = "login.html";
	})
	
	//Select each dropdown element
	dropdowns.forEach(dropdown => {
		const select = dropdown.querySelector('.select');
		const caret = dropdown.querySelector('.caret');
		const menu = dropdown.querySelector('.menu');
		const options = dropdown.querySelectorAll('.menu li');
		const selected = dropdown.querySelector('.selected');
		let x = 0;

	//Dropdown click		
	select.addEventListener("click", () => {
		if (x == 0) {
			select.classList.toggle('select-clicked');
			select.style.backgroundColor = "black";
			select.style.boxShadow = "0 0 5px #0298CF, 0 0 10px #0298CF";
			caret.classList.toggle('caret-rotate');
			menu.classList.toggle('menu-open');
			x++;
		}
		else {
			select.classList.toggle('select-clicked');
			select.style.backgroundColor = "#2B547E";
			select.style.boxShadow = "none";
			caret.classList.toggle('caret-rotate');
			menu.classList.toggle('menu-open');	
			x = 0;
		}
	})

		//Select each options of dropdown
		options.forEach(option => {
		
			//Click selected options
			option.addEventListener("click", () => {
				input.value = "";
			
				selected.innerText = option.innerText;
				select.classList.remove('select-clicked');
				select.style.backgroundColor = "#2B547E";
				select.style.boxShadow = "none";
				caret.classList.remove('caret-rotate');
				menu.classList.remove('menu-open');
				x = 0;
				
				let xy = 0;
				arr = [];
				
				//Insert all dropdown values in array
				dropdowns.forEach(dropdown => {
					arr.push(dropdowns[xy].innerText);
				    xy++;
				})
			
				let ins = option.innerText;
				let ins2 = arr.toString();
				
				searchTable(ins2, 0);
				
				options.forEach(option => {
					option.classList.remove('active');
				})				
					option.classList.add('active');				
			})
		})
	})
					
//=======> FILTER TABLES <=======//	
	var input2 = "";
	
	//Search bar pressing key event
	input.addEventListener('keyup', function() {
		input2 = input.value;		
		searchTable(input2, 1);
	});
		
	function searchTable(inputs, eventIndexVal) {
		let eventIndex = eventIndexVal;
		let upcase = inputs.toUpperCase(); //Convert to uppercase for case-insensitive search
		let keywords = upcase.split(",");

		const tableLower = document.getElementById("table-lower-data");
		const tr = tableLower.getElementsByTagName("tr");
		var notfound  = document.getElementById("notfound");
		var hasResult = false;
		var rowCount = 0;	
		var visibleIndex = 0;

		//Loop through all rows except for headers
		for (let i = 1; i < tr.length; i++)
		{		
			var td = tr[i].getElementsByTagName("td");
			let found = false;
						
			if (eventIndexVal == 1)
			{
				//Loop through all cells within the row
				for (let j = 0; j < td.length; j++)
				{		
					var textValue = td[j].textContent || td[j].innerText;
							
					if (textValue.toUpperCase().indexOf(upcase) > -1)
					{					
						found = true;
						hasResult = true;
						break;
					}
				}
			}

			else
			{	
				for (let j = 0; j < td.length; j++)
				{		
					let status = tr[i].getElementsByTagName("td")[0].textContent || tr[i].getElementsByTagName("td")[0].innerText;
					let tester = tr[i].getElementsByTagName("td")[4].textContent || tr[i].getElementsByTagName("td")[4].innerText;
					let location = tr[i].getElementsByTagName("td")[7].textContent || tr[i].getElementsByTagName("td")[7].innerText;
					
					let keyLoc = keywords[0];
					let keyTest = keywords[1];
					let keyStat = keywords[2];
					
					if (status.toUpperCase() == keyStat && keyLoc == "ALL" && keyTest == "ALL") {					
						found = true;
						hasResult = true;
						break;
					}
					else if (tester.toUpperCase() == keyTest && keyLoc == "ALL" && keyStat == "ALL") {
						found = true;
						hasResult = true;
						break;					
					}
					else if (location.toUpperCase() == keyLoc && keyTest == "ALL" && keyStat == "ALL") {
						found = true;
						hasResult = true;
						break;					
					}
					else if (status.toUpperCase() == keyStat && tester.toUpperCase() == keyTest && keyLoc == "ALL") {					
						found = true;
						hasResult = true;
						break;
					}
					else if (status.toUpperCase() == keyStat && location.toUpperCase() == keyLoc && keyTest == "ALL") {					
						found = true;
						hasResult = true;
						break;
					}
					else if (tester.toUpperCase() == keyTest && location.toUpperCase() == keyLoc && keyStat == "ALL") {					
						found = true;
						hasResult = true;
						break;
					}
					else if (status.toUpperCase() == keyStat && tester.toUpperCase() == keyTest && location.toUpperCase() == keyLoc) {					
						found = true;
						hasResult = true;
						break;
					}
					else if (keyStat == "ALL" && keyTest == "ALL" && keyLoc == "ALL") {
						found = true;
						hasResult = true;
						break;
					}
				}				
			}
					
			//Display table row, match with filtered input
			tr[i].style.display = found ? '' : 'none';
			
			if (tr[i].style.display != 'none' && td.length > 0)
			{
				rowCount++;
			}

			//Display not found message
			(!hasResult) ? notfound.style.display = 'block' : notfound.style.display = 'none';	
		}
	}
	










