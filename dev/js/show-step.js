const form1Hidden = document.getElementById("form1");
const form2Hidden = document.getElementById("form2");
const form3Hidden = document.getElementById("form3");
const form4Hidden = document.getElementById("form4");
const form5Hidden = document.getElementById("form5");
const form6Hidden = document.getElementById("form6");
const form7Hidden = document.getElementById("form7");

function showForm() {
	const url = document.URL.slice(-1);
	if (url == 1) {
		form1Hidden.style.display = "block"
	} else if (url == 2) {
		form1Hidden.style.display = "none";
		form2Hidden.style.display = "block";
	} else if (url == 3) {
		form1Hidden.style.display = "none";
		form3Hidden.style.display = "block";
	} else if (url == 4) {
		form1Hidden.style.display = "none";
		form4Hidden.style.display = "block";
	} else if (url == 5) {
		form1Hidden.style.display = "none";
		form5Hidden.style.display = "block";
	} else if (url == 6) {
		form1Hidden.style.display = "none";
		form6Hidden.style.display = "block";
	} else if (url == 7) {
		form1Hidden.style.display = "none";
		form7Hidden.style.display = "block";
	}
}
showForm()