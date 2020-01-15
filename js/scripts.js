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
});