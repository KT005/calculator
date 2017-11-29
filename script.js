var resultText = "0";
var baseNumber = 0;
var txt_limit = "10";
var operation = "";
var start = true;
var calculating = false;
var clearSwitch = true;

function checkSize() {
	var check_length = $("#main").text().length;
	if (txt_limit > check_length){
		return true;
	}
	else {
		return false;
	}
	
}

function currentManipulation (currentManipulation) {
	currentManipulation = "#" + currentManipulation;
	$(".manipulation").removeClass("currentManipulation");
	$(currentManipulation).addClass("currentManipulation");
}

function allClear() {
	if (clearSwitch){
		baseNumber = 0;
		resultText = "0";
		start = true;
		calculating = false;
		$("#main").text(resultText);
		operation = "";
		$(".manipulation").removeClass("currentManipulation");
	}
	else {
		resultText = "0";
		$("#main").text(resultText);
		$("#clear").text("AC");
		clearSwitch = true;
	}
}

function dot() {
	if (!resultText.includes(".")){
		resultText = resultText + ".";
		$("#main").text(resultText);
		start = false;
	}
}

function getNumber(number) {
	var currentNumber = resultText;
	if (calculating){
		currentNumber = "0";
		resultText = number;
		$("#main").text(resultText);
		calculating = false;
	}
	if (checkSize()) {
		if (start || currentNumber === "0"){
			resultText = number.toString();
		}
		else {
			resultText = resultText + number;
		}
		$("#main").text(resultText);
		start = false;
		clearSwitch = false;
		$("#clear").text("C");
	}
}

function allCalculation() {
	if (operation == "sum") {
		baseNumber = baseNumber + parseFloat(resultText);
		resultText = baseNumber.toString();
		$("#main").text(resultText);
	}
	else if (operation == "minus") {
		baseNumber = baseNumber - parseFloat(resultText);
		resultText = baseNumber.toString();
		$("#main").text(resultText);
	}
	else if (operation == "multiple") {
		baseNumber = baseNumber * parseFloat(resultText);
		resultText = baseNumber.toString();
		$("#main").text(resultText);
	}
	else if (operation == "divide") {
		baseNumber = baseNumber / parseFloat(resultText);
		resultText = baseNumber.toString();
		$("#main").text(resultText);
	}
}

function equal() {
	allCalculation();
	operation = "";
	$(".manipulation").removeClass("currentManipulation");
}

function sum() {
	if (operation == "") {
		baseNumber = parseFloat(resultText);
	}
	else if (!calculating) {
		allCalculation();
	}
	operation = "sum";
	calculating = true;
	currentManipulation(operation);
}

function minus() {
	if (operation == "") {
		baseNumber = parseFloat(resultText);
	}
	else if (!calculating) {
		allCalculation();
	}
	operation = "minus";
	calculating = true;
	currentManipulation(operation);
}

function multiple() {
	if (operation == "") {
		baseNumber = parseFloat(resultText);
	}
	else if (!calculating) {
		allCalculation();
	}
	operation = "multiple";
	calculating = true;
	currentManipulation(operation);
}

function divide() {
	if (operation == "") {
		baseNumber = parseFloat(resultText);
	}
	else if (!calculating) {
		allCalculation();
	}
	operation = "divide";
	calculating = true;
	currentManipulation(operation);
}

function percent() {
	resultText = parseFloat(resultText) / 100;
	resultText = resultText.toString();
	$("#main").text(resultText);
}

function positiveOrNegative() {
	resultText = parseFloat(resultText)
	resultText = resultText * -1;
	resultText = resultText.toString();
	$("#main").text(resultText);
}

$(document).ready(function(){
	$("#main").text(resultText);
});