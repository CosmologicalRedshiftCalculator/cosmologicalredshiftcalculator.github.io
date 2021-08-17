/* website deployed at 
https://cosmologicalredshiftcalculator.github.io/
*/

'use strict'

function calculate() {
	var distance = parseFloat(document.getElementById("firstInput").value);
	var y_emitted = parseFloat(document.getElementById("secondInput").value);
	var hubble_constant = parseFloat(document.getElementById("thirdInput").value);

	var speed_of_light = 299792;
	var v = hubble_constant * distance;
	var z = v/speed_of_light;//(hubble_constant * distance)/v - 1;
	var y_observed = (z * y_emitted) + y_emitted;
	var actual_distance = distance * (z+1)

	console.log("v: " + v);
	console.log("z: " + z);
	console.log("y_observed: " + y_observed);
	console.log("actual_distance: " + actual_distance);

	var integral_part_1 = antiderviative(z);
	var integral_part_2 = antiderviative(0);

	// 1/((1+z)*Math.sqrt(0.3*(1+z)^3+0.7));
	// var integral_part_2 = 1/((1)*Math.sqrt(0.3*(1)^3+0.7));
	var distance_traveled = (speed_of_light / hubble_constant) * 2 *(integral_part_2 - integral_part_1);

	document.getElementById("firstOutput").innerHTML = "Current distance to object: " + actual_distance.toFixed(4).bold() + " megaparsecs";
	document.getElementById("secondOutput").innerHTML = "Observed wavelength: " + y_observed.toExponential(4).bold() + " kilometers";
	document.getElementById("thirdOutput").innerHTML = "Distance traveled by photon: " + distance_traveled.toFixed(4).bold() + " megaparsecs";

}

function antiderviative(input) {
  return 1/((1+input)*Math.sqrt(0.3*(1+input)^3+0.7));
}

function reset(){
	document.getElementById("firstInput").value = "600"
	document.getElementById("secondInput").value = "0.000000001"
	document.getElementById("thirdInput").value = "70"

	document.getElementById("firstOutput").innerHTML = "Current distance to object: N/A";
	document.getElementById("secondOutput").innerHTML = "Observed wavelength: N/A";
	document.getElementById("thirdOutput").innerHTML = "Distance travelled by photon: N/A";

}

