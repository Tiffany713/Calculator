var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
	return number1 - number2;
};

var multiply = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
};

var bmi = function(number1,number2) {
	return number1 / (number2 * number2);
}

var USAbmi = function(number1,number2) {
	return (number1 / (number2 * number2)) * 703;
}

var C2F = function(number1) {
	return (number1 * (9/5))+32;
}

var F2C = function(number1) {
	return (number1 -32)/(9/5)
}

$(document).ready(function() {
	$("form#add").submit(function(event) {
    event.preventDefault();
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);
		$("#output").text(result);
	});

	$("form#subtract").submit(function(event) {
    event.preventDefault();
		var number1 = parseInt($("#subtract1").val());
		var number2 = parseInt($("#subtract2").val());
		var result = subtract(number1, number2);
		$("#outputsub").text(result);
	});

	$("form#multiply").submit(function(event) {
    event.preventDefault();
		var number1 = parseInt($("#multiply1").val());
		var number2 = parseInt($("#multiply2").val());
		var result = multiply(number1, number2);
		$("#outputmultiply").text(result);
	});

	$("form#divide").submit(function(event) {
    event.preventDefault();
		var number1 = parseInt($("#divide1").val());
		var number2 = parseInt($("#divide2").val());
		var result = divide(number1, number2);
		$("#outputdivide").text(result);
	});
});