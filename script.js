function compute(){
	const amount = Number(document.getElementById('amount').value);
	const rate = Number(document.getElementById('rate').value);
	const years = Number(document.getElementById('years').value);
	const result = document.getElementById('result');
	
	if(amount <= 0){

		alert("Please enter a positive value for Amount field!");
		document.getElementById('amount').focus();

	}else{
		
		var year = 2020 + years;
		var sum = years * amount * (rate/100); 
		
		var x = "<p>If you deposit <span>" + amount + "</span>,<br>" +
		"at an interest of <span>" + rate + "%</span><br>" +
		"You will receive an amount of <span>" + parseInt(sum) + "</span>,<br>" +
		"in the year <span>" + year + "</span></p>";
		result.innerHTML = x;
		
	}
   
}
window.onload = function(){
	const rate = document.getElementById('rate');
	const output = document.getElementById('rate-output');
	output.textContent = rate.value;
	rate.addEventListener('input', function() {
	  output.textContent = rate.value + "%";
	});
}