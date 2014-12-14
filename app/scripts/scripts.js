var ac = new AudioContext();

// Inititalise ViewPort Dimensions 
var h = window.innerHeight;
console.log(h);
var w = window.innerWidth;
console.log(w);



// X Axis 
var osc_x = ac.createOscillator();
osc_x.connect(ac.destination);
osc_x.type = "sine";
osc_x.start();

// Y Axis
var osc_y = ac.createOscillator();
osc_y.connect(ac.destination);
osc_y.type = "square";
osc_y.start();




document.addEventListener("mousemove", function(e){
	// console.log("X Is:" + e.clientX, "Y Is:" + e.clientY);
	var x = e.clientX;
	var y = h - e.clientY;

	var x_perc = 200 + Math.floor(x/w*100)*10;
	console.log(x_perc);
	var y_perc = 200 + Math.floor(y/h*100)*10;
	console.log(y_perc);

	$("#pos").html("X Axis is: " + x + "<br>" + "Y Axis is: " + y);
	
	osc_x.frequency.value = x_perc;
	osc_y.frequency.value = y_perc;
	
})