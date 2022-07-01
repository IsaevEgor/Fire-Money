let resizeTablet = true;
let resizeMobile = false;

window.addEventListener("DOMContentLoaded", resizeWindow);
function resizeWindow() {
	const clientWidth = document.documentElement.clientWidth;
	const headerButton = document.getElementById("headerButton");
	const headerMain = document.getElementById("headerMain");
	const footerMain = document.getElementById("footerMain");
	const footerMenu = document.getElementById("footerMenu");
	const footerLogo = document.getElementById("footerLogo");
	


	if (clientWidth <= 992 && resizeTablet) {
		headerButton.innerHTML = "вход в кабинет";
		footerMain.insertAdjacentHTML("afterEnd", footerMenu.outerHTML);
		footerMenu.outerHTML = "";

		resizeTablet = false;
	} else if (clientWidth > 992 ) {
		resizeTablet = true;

		footerLogo.insertAdjacentHTML("afterEnd", footerMenu.outerHTML);
		footerMenu.outerHTML = "";
		headerButton.innerHTML = "вход в личный кабинет";
	}
	 if (clientWidth < 380 && !resizeMobile) {
		headerMain.insertAdjacentHTML("beforeEnd", headerButton.outerHTML)
		headerButton.outerHTML = "";
		resizeMobile = true;
	} else if (clientWidth > 380) {
		resizeMobile = false;
		headerMain.insertAdjacentHTML("afterEnd", headerButton.outerHTML);
		headerButton.outerHTML = "";
	}

}

window.addEventListener("resize", resizeWindow)


function showBurger() {
	const headerBurger = document.getElementById("headerBurger");
	const headerMain = document.getElementsByClassName("header__main")
	const body = document.querySelector("body");
	
	headerBurger.classList.toggle("active");
	headerMain[0].classList.toggle("active");
	body.classList.toggle("active");
}


      const sliderMoney = document.getElementById("sliderMoney");
      sliderMoney.oninput = (()=>{
		const valueMoney = document.getElementById("valueMoney");
		const progressbar = document.getElementById("progressbar");
        let value = sliderMoney.value;
		progressbar.style.width = value / 1000 + "%"
		valueMoney.style.left = (value/1000) + "%";
		if ((value/1000) <= 25) {
			valueMoney.style.left = 25 + "%"
		} if ((value/1000) > 8) {
			valueMoney.style.left = (value/1000) + 15 + "%";
		} if ((value/1000) > 89) {
			valueMoney.style.left = 105 + "%"
		}
		value = Math.floor(value/ 1000)
        valueMoney.innerHTML = value * 1000 + " ₽";
        valueMoney.classList.add("show");

		creditСalculationSum();
      });
      sliderMoney.onblur = (()=>{
        valueMoney.classList.remove("show");
      });

      const sliderTime = document.getElementById("sliderTime");
      sliderTime.oninput = (()=>{
		const valueTime = document.getElementById("valueTime");
		const progressbar = document.getElementById("progressbarTime");
        let time = sliderTime.value;
		progressbar.style.width = time * 2.9 + "%"
		valueTime.style.left = time * 3.7 + "%";
		if (time <= 8) {
			progressbar.style.width = time * 2.35 + "%"
		} if (time <= 4) {
			progressbar.style.width = time * 1.8 + "%"
		} if (time > 15) {
			progressbar.style.width = time * 3.2 + "%"
		} if (time > 89) {
			valueTime.style.left = 105 + "%"
		} if (time <= 6) {
			valueTime.style.left = 24 + "%";
		} if (time >= 28) {
			valueTime.style.left = 105 + "%";
		}
        valueTime.innerHTML = time + " дней";
        valueTime.classList.add("show");

		creditСalculationSum();
      });
      sliderTime.onblur = (()=>{
        valueTime.classList.remove("show");
      });
	  

	 function creditСalculationSum() {

		const startAmount = document.getElementById("startAmount");
		const finalAmount = document.getElementById("finalAmount");
		const returnDate = document.getElementById("returnDate");
		const monthlyPayment = document.getElementById("monthlyPayment");

		let time = sliderTime.value;
		let value = sliderMoney.value;
		let finalAmountValue;
		let monthlyPaymentValue;

		value = Math.floor(value/ 1000)
		value = value * 1000;

		startAmount.innerHTML = value.toLocaleString() + " ₽";
		finalAmountValue = time * 700 + +value;
		finalAmount.innerHTML = finalAmountValue.toLocaleString() + " ₽";
		returnDate.innerHTML = `${time} января 2022`;
		monthlyPaymentValue = (time * 700 + +value) - value
		monthlyPayment.innerHTML = `${monthlyPaymentValue.toLocaleString()} ₽`
	 }


	 class Rating {
		constructor(dom) {
		  dom.innerHTML = '<svg width="110" height="20"></svg>';
		  this.svg = dom.querySelector('svg');
		  for(var i = 0; i < 5; i++)
			this.svg.innerHTML += `<polygon data-value="${i+1}"
				 transform="translate(${i*22},0)" 
				 points="10,1 4,19.8 19,7.8 1,7.8 16,19.8">`;
		  this.svg.onclick = e => this.change(e);
		  this.render();
		}
		
		change(e) {
		  let value = e.target.dataset.value;
		  value && (this.svg.parentNode.dataset.value = value); 
		  this.render();
		}
		
		render() {
		  this.svg.querySelectorAll('polygon').forEach(star => {
			let on = +this.svg.parentNode.dataset.value >= +star.dataset.value;
			star.classList.toggle('active', on);
		  });
		}
	  }
	  
	  document.querySelectorAll('.rating').forEach(dom => new Rating(dom));