function showBurger() {
	const headerBurger = document.getElementById("headerBurger");
	const headerMain = document.getElementsByClassName("header__main")
	const body = document.querySelector("body");
	
	headerBurger.classList.toggle("active");
	headerMain[0].classList.toggle("active");
	body.classList.toggle("active");
}