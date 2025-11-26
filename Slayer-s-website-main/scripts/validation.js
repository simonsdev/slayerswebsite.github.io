function validation() {
	let valid = true;
	let F = document.getElementById("fname").value.trim()
	let L = document.getElementById("lname").value.trim()
	let E = document.getElementById("email").value.trim()
	if (F=="" || L == "" || E == ""){
		alert("Please fill in all required fields");
		valid = false;	
	}
	
	let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		alert("Please enter a valid email address");
		valid = false;
	}

	return valid;
}