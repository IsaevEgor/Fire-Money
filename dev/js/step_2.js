document.addEventListener("DOMContentLoaded", () => {
	const accordions = document.querySelectorAll(".step-2__accordion-control");

	for(let i = 0; i < accordions.length; i++) {
		accordions[i].addEventListener("click", function() {
			const content = this.nextElementSibling;

			this.classList.toggle("open-accordeon");

			if (this.classList.contains("open-accordeon")) {
				content.style.maxHeight = content.scrollHeight + "px";
			} else {
				content.style.maxHeight = null;
			};
		});
	};
});