export function rangeMoney() {

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
}

export function rangetime() {
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
}

export function creditСalculationSum() {

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
