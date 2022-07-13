import {rangeMoney} from './module/range.js';
import {rangetime} from './module/range.js';
import {creditСalculationSum} from './module/range.js';


rangeMoney();
rangetime();
creditСalculationSum();

let resizeTablet = true;
let resizeMobile = false;

window.addEventListener("DOMContentLoaded", resizeWindow);
function resizeWindow() {
	const clientWidth = document.documentElement.clientWidth;

	const stepsHeaderButton =document.getElementById("stepsHeaderButton");

	if (clientWidth <= 992 && resizeTablet) {
		stepsHeaderButton.innerHTML = "вход в кабинет";

		resizeTablet = false;
	} else if (clientWidth > 992 ) {
		resizeTablet = true;

		stepsHeaderButton.innerHTML = "вход в личный кабинет";
	}
	 if (clientWidth < 380 && !resizeMobile) {

		resizeMobile = true;
	} else if (clientWidth > 380) {
		resizeMobile = false;

	}

}

window.addEventListener("resize", resizeWindow);

const footerSpoiler = document.getElementById("footerSpoiler");

footerSpoiler.addEventListener("click", function() {
	const spoilerItem = document.getElementById("spoilerItem");
	
	if (spoilerItem.style.maxHeight) {
		spoilerItem.classList.remove("active")
		footerSpoiler.classList.remove("active");
		spoilerItem.style.maxHeight = null;
	} else {
		spoilerItem.classList.add("active")
		footerSpoiler.classList.add("active")
		let style = window.getComputedStyle(spoilerItem);
		let paddingTop = style.getPropertyValue("padding-top");


		spoilerItem.style.maxHeight = spoilerItem.scrollHeight + paddingTop;
	}
});

//window.addEventListener("DOMContentLoaded", showTimer)

function showTimer() {
	

	const timerValue = document.getElementById("timerValue");
	const hourFirst = document.getElementById("hourFirst");
	const hourSecond = document.getElementById("hourSecond");

	const minutesFirst = document.getElementById("minutesFirst");
	const minutesSecond = document.getElementById("minutesSecond");

	let times = [
		2,
		59,
		59,
	];

	const timer = times => {
		let interval = setInterval( () => {
			times[2]--;

			if (times[0] == 0 && times[1] == 0 && times[2] == 0) {
				clearInterval(interval);
			} else if (times[2] == -1) {
				times[2] = 59;
				times[1]--;
			} else if (times[1] == -1) {
				times[1] = 59;
				times[0]--;
			};

			let h = (times[0] < 10 ? "0" + times[0] : times[0]);
			let m = (times[1] < 10 ? "0" + times[1] : times[1]);

			showTimer(h, m);
		}, 1000);

		const showTimer = (h, min) => {
			let hourValue = times[0];
			let arrayHour = Array.from(hourValue.toString(), Number)
			if (arrayHour.length > 1){
				hourFirst.innerHTML = arrayHour[0];
				hourSecond.innerHTML = arrayHour[1];
			} else {
				hourFirst.innerHTML = 0
				hourSecond.innerHTML = arrayHour[0];
			}


			let minuteValue = times[1];
			let arrayMin = Array.from(minuteValue.toString(), Number)
			if (arrayMin.length > 1){
				minutesFirst.innerHTML = arrayMin[0];
				minutesSecond.innerHTML = arrayMin[1];
			} else {
				minutesFirst.innerHTML = 0
				minutesSecond.innerHTML = arrayMin[0];
			}
		}
	}
	timer(times);
}


/* Маска для телефонного номера */
const phoneInput = document.getElementById("phoneInput");
const maskOptions = {
	mask: "+7(900)000-00-00",
	lasy: false,
}
const mask = new IMask(phoneInput, maskOptions);
/* Маска для телефонного номера */


/* Маска для поля Дата Рождения */
var dataMask = document.getElementById("dataMask");
flatpickr(dataMask, {
	config: {
		enableTime: true,
		dateFormat: "Y-m-d H:i",
	},
});
/* Маска для поля Дата Рождения */


/* Select */
let select = function () {
    let selectHeader = document.querySelectorAll('.step-1__select__header');
    let selectItem = document.querySelectorAll('.step-1__select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};

select();
/* Select */


const nextForm = document.querySelectorAll(".step-line__button");
const form1Hidden = document.getElementById("form1");
const form2Hidden = document.getElementById("form2");
const form3Hidden = document.getElementById("form3");
const form4Hidden = document.getElementById("form4");

for (let i = 0; i < nextForm.length; i++) {
	nextForm[i].addEventListener("click", function() {
		if(form1Hidden.style.display === ""){
			form1Hidden.style.display = "none"
			form2Hidden.style.display = "block"
		} else if (form2Hidden.style.display == "block") {
			form2Hidden.style.display = "none";
			form3Hidden.style.display = "block";
		} else if (form3Hidden.style.display == "block") {
			form3Hidden.style.display = "none";
			form4Hidden.style.display = "block";
		}
	});

}


const infoBtn = document.querySelectorAll(".step-4__form-info");
console.log(infoBtn)
for (let i = 0; i < infoBtn.length; i++) {
	infoBtn[i].addEventListener("mouseover", function () {
		infoBtn[i].classList.add("show-info");
	});
};
for (let i = 0; i < infoBtn.length; i++) {
	infoBtn[i].addEventListener("mouseout", function () {
		infoBtn[i].classList.remove("show-info");
	});
};