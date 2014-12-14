var ac = new AudioContext();

// Inititalise ViewPort Dimensions 
var h = window.innerHeight;
console.log(h);
var w = window.innerWidth;
console.log(w);

// Create Gain Nodes
var gain_x = ac.createGain();
var gain_y = ac.createGain();

// X Axis 
var osc_x = ac.createOscillator();
osc_x.connect(gain_x);
gain_x.connect(ac.destination);
osc_x.type = "square";
osc_x.start();

// Y Axis
var osc_y = ac.createOscillator();
osc_y.connect(gain_y);
gain_y.connect(ac.destination);
osc_y.type = "sawtooth";
osc_y.start();

var freq_x;
var freq_y;



document.addEventListener("mousemove", function(e){

	// console.log("X Is:" + e.clientX, "Y Is:" + e.clientY);
	var x = w - e.clientX;
	var y = h - e.clientY;

	var xPercent = Math.round((x/w)*100);
	var yPercent = Math.round((y/h)*100);

	//console.log(h);
	//console.log(w);

	/*var x_perc = 200 + Math.floor(x/w*100)*10;
	console.log(x_perc);
	var y_perc = 200 + Math.floor(y/h*100)*10;
	console.log(y_perc);*/



	//$("#pos").html("X Axis is: " + x + "<br>" + "Y Axis is: " + y);
	//$("#view").html("Viewport X: " + w + "<br>" + "Viewport Y: " + h);
	$("#percent").html("X Percent: " + xPercent + "<br>" + "Y Percent: " + yPercent);

	if(xPercent < 2){
		freq_x = 0;
	}else if(xPercent > 98){
		freq_x = 400;
		console.log('400 wat');
	}else{
		freq_x = (xPercent/100)*2;
	}

	osc_x.frequency.value = freq_x;


	if(yPercent < 2){
		freq_y = 0;
	}else if(yPercent > 98){
		freq_y = 200;
		console.log('400 wat');
	}else{
		freq_y = (yPercent/100)*2;
	}
	osc_y.frequency.value = freq_y;
	
})
