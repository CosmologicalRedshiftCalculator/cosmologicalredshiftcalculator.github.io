'use strict'

function calculate() {
	var input1 = parseInt(document.getElementById("firstInput").value);
	var input2 = parseInt(document.getElementById("secondInput").value);
	var input3 = parseInt(document.getElementById("thirdInput").value);

	var output1 = input1 + 1;
	var output2 = input2 + 1;
	var output3 = input3 + 1;

	document.getElementById("firstOutput").innerHTML = "Current distance to object: " + output1;
	document.getElementById("secondOutput").innerHTML = "Observed wavelength: " + output2;
	document.getElementById("thirdOutput").innerHTML = "Distance travelled by photon: " + output3;

}

function reset(){
	document.getElementById("firstInput").value = "2"
	document.getElementById("secondInput").value = "2"
	document.getElementById("thirdInput").value = "2"

	document.getElementById("firstOutput").innerHTML = "Current distance to object: N/A";
	document.getElementById("secondOutput").innerHTML = "Observed wavelength: N/A";
	document.getElementById("thirdOutput").innerHTML = "Distance travelled by photon: N/A";

}

/*
 * 7/18: 1 hour writing the proposal
 *  8/2: 1 hour figuring out formulas
 *       2 hours coding
 *
 styling
 github
 actual formulas
 writeup/information for website
 writeup

 */