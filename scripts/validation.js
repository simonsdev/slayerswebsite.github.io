function validation() {
	
	let F = document.getElementById("fname").value.trim()
	let L = document.getElementById("lname").value.trim()
	let E = document.getElementById("email").value.trim()
	
	if (F ==="" || L === "" || E === ""){
		alert("Please fill in all required fields");
		return false;	
	}
	
	let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	
	if (!emailRegex.test(E)) {
		alert("Please enter a valid email address");
		return false;
	}

	return true;
}