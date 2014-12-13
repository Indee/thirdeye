document.addEventListener("mousemove", function(e){
	console.log("X Is:" + e.clientX, "Y Is:" + e.clientY);
	var x = e.clientX;
	var y = e.clientY;
	$("#pos").html("X Axis is: " + x + "<br>" + "Y Axis is: " + y);
	changeTone(x);
})