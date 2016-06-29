var canvas = document.getElementById("graph_canvas");
var context = canvas.getContext("2d");
canvas.height = $("#graph_canvas").height();;
canvas.width = $("#graph_canvas").width();;
var createRadius = 80;
var maxAllowedRadius = 80;
var points = [];

function drawDot(mousePos) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.restore();
	
	// Remove points not within maxAllowedRadius
  var removeInd = [];
  points.forEach(function(item, index) {
    if (calcDistance(item, mousePos) > maxAllowedRadius) {
      removeInd.push(index);
    }
  });
  removeInd.forEach(function(item) {
    points.splice(item, 1);
  });
  delete removeInd;
	
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
  context.strokeStyle = "#330000";
  context.lineWidth = "0.2";
  points.forEach(function(item) {
    context.arc(item.X, item.Y, 2, 0, Math.PI * 2);
    context.stroke();
  });
  context.save();
}

function calcDistance(pointA, pointB) {
  var diffX = Math.pow(pointA.X - pointB.X, 2);
  var diffY = Math.pow(pointA.Y - pointB.Y, 2);
  return Math.sqrt(diffX + diffY);
}

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



