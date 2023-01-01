const INPUTS_REG_EXP = {
	"first-name": /^[A-Z][a-z]{2,19}(-[A-Z][a-z]{2,19})?$/,
	"last-name": /^[A-Z][a-z]{2,19}(-[A-Z][a-z]{2,19})?$/,
	email: /^.+@.+$/,
	"tel-code": /^\d{3}$/,
	"tel-number": /^\d{3}$/,
	"tel-number2": /^\d{4}$/,
};

const inputs = document.querySelectorAll("input");
inputs.forEach((i) => i.addEventListener("input", inputHandler));

function inputHandler(e) {
	console.dir(e.target);
	if (INPUTS_REG_EXP[e.target.name].test(e.target.value)) {
		e.target.classList.add("valid");
		e.target.classList.remove("invalid");
	} else {
		e.target.classList.remove("valid");
		e.target.classList.add("invalid");
	}
}

const TEXTAREA_REG_EXP = {
	"message": /^([A-Za-z0-9-]+){15,100}?$/,
};

const textarea = document.querySelectorAll("textarea");
textarea.forEach((i) => i.addEventListener("input", textareaHandler));

function textareaHandler(e) {
	console.dir(e.target);
	if (TEXTAREA_REG_EXP[e.target.name].test(e.target.value)) {
		e.target.classList.add("valid");
		e.target.classList.remove("invalid");
	} else {
		e.target.classList.remove("valid");
		e.target.classList.add("invalid");
	}
}

document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();

	const form = e.target;
	const formData = new FormData(form);



	let userData = {
		name: formData.get("first-name"),
		email: formData.get("email"),
		phone: phone,
		subject: formData.get("subject"),
		message: message,
	};
	console.log("userData :>> ", userData);
});