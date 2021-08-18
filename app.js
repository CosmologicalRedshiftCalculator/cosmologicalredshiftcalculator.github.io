/* website deployed at 
https://cosmologicalredshiftcalculator.github.io/
*/

'use strict'

// functionality for "calculate" button
function calculate() {
	var distance = parseFloat(document.getElementById("firstInput").value);
	var y_emitted = parseFloat(document.getElementById("secondInput").value);
	var hubble_constant = parseFloat(document.getElementById("thirdInput").value);

	var speed_of_light = 299792;
	var v = hubble_constant * distance;
	var z = v / speed_of_light;
	var y_observed = (z * y_emitted) + y_emitted;
	var actual_distance = distance * (z + 1)

	var integral_part_1 = antiderviative(z);
	var integral_part_2 = antiderviative(0);
	var distance_traveled = (speed_of_light / hubble_constant) * 2 *(integral_part_2 - integral_part_1);

	document.getElementById("firstOutput").innerHTML = "Current distance to object: " + actual_distance.toFixed(4).bold() + " megaparsecs";
	document.getElementById("secondOutput").innerHTML = "Observed wavelength: " + y_observed.toExponential(4).bold() + " kilometers";
	document.getElementById("thirdOutput").innerHTML = "Distance traveled by photon: " + distance_traveled.toFixed(4).bold() + " megaparsecs";

}

// solves the antiderivative given an input
function antiderviative(input) {
  return 1 / ((1 + input) * Math.sqrt(0.3 * (1 + input)^3 + 0.7));
}

// functionality for "reset" button
function reset(){
	document.getElementById("firstInput").value = "600"
	document.getElementById("secondInput").value = "1e-9"
	document.getElementById("thirdInput").value = "70"

	document.getElementById("firstOutput").innerHTML = "Current distance to object: N/A";
	document.getElementById("secondOutput").innerHTML = "Observed wavelength: N/A";
	document.getElementById("thirdOutput").innerHTML = "Distance traveled by photon: N/A";

}

