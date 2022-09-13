// 🤖: create 2 constants with references to the password input and the reveal button from the DOM
const passwordInput = document.querySelector("#password");
const passwordToggle = document.querySelector("#togglePassword");
// 🤖: Create an Event Listener on the password reveal button
// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.


// Provided for you - prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit',function(e){
	e.preventDefault();
});

passwordToggle.addEventListener('click', function(){
	if (passwordInput.getAttribute("type") == "password") {
		passwordInput.setAttribute("type", "text")
		// passwordToggle.classList.remove("bi-eye-slash")
	}
	else
	{
		passwordInput.setAttribute("type", "password")
		// passwordToggle.classList.add("bi-eye-slash")
	}
});
