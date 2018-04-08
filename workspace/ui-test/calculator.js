window.calculator = window.calculator || {};

(function() {
	var calculate = function() {
		var x = parseFloat(document.getElementById('x').value);
		var y = parseFloat(document.getElementById('y').value);
		document.getElementById('result').innerHTML = parseFloat(x + y);
	};

	window.calculator.init = function() {
		document.getElementById('add').addEventListener('click', calculate);
	};
})();