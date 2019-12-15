jQuery(document).ready(function ($) {

	var canvas = document.getElementById("graph_canvas");
	var context = canvas.getContext("2d");
	canvas.height = $("#graph_canvas").height();
	canvas.width = $("#graph_canvas").width();
	var createRadius = 60;// Radius within which new Points can be created
	var maxAllowedRadius = 80;// Radius beyond which Points will be deleted
	var points = [];

	function drawDot(mousePos) {
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.restore();

		// Remove points not within maxAllowedRadius
		var removeInd = [], insideCount = 0;
		points.forEach(function(item, index) {
			if (calcDistance(item, mousePos) > maxAllowedRadius || insideCount > 10) {
				removeInd.push(index);
			}else{
				insideCount += 1;
			}
		});
		removeInd.forEach(function(item) {
			points.splice(item, 1);
		});

		// Create new points and add to points array
		var numPoints = Math.floor(Math.random() * 5);
		for (var i = 0; i <= numPoints; i++) {
			var point = {
				X : Math.floor(mousePos.X + (Math.random() * (createRadius * 2) - (createRadius))),
				Y : Math.floor(mousePos.Y + (Math.random() * (createRadius * 2) - (createRadius)))
			};
			points.push(point);
		}
		context.beginPath();
		context.strokeStyle = "#000000"; // Color of Points and Line connecting Points
		context.lineWidth = "0.2"; // Width of the line connecting Points
		points.forEach(function(item) {
			context.arc(item.X, item.Y, 2, 0, Math.PI * 2);
			context.stroke();
		});
		context.save();
	}

	// Function used to calculate Distance
	function calcDistance(pointA, pointB) {
		var diffX = Math.pow(pointA.X - pointB.X, 2);
		var diffY = Math.pow(pointA.Y - pointB.Y, 2);
		return Math.sqrt(diffX + diffY);
	}

	// Get mouse pointer and adjust according to size.
	function getMousePos(canvas, evt) {
		var rect = canvas.getBoundingClientRect();
		return {
			X: (evt.clientX - rect.left),
			Y: (evt.clientY - rect.top)
		};
	}

	// Add the event listener for mouse move
	canvas.addEventListener("mousemove", function(evt) {
		drawDot(getMousePos(canvas, evt));
	}, false);

});
