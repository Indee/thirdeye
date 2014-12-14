var ac = new AudioContext();

// Inititalise ViewPort Dimensions 
var h = window.innerHeight;
var w = window.innerWidth;

// Create Gain Nodes
var gain_x = ac.createGain();
var gain_y = ac.createGain();

// X Axis 
var osc_x = ac.createOscillator();
osc_x.connect(gain_x);
gain_x.connect(ac.destination);
osc_x.type = "sawtooth";
gain_x.gain.value = 0;
osc_x.frequency.value = 1000;
osc_x.start();

// Y Axis
var osc_y = ac.createOscillator();
osc_y.connect(gain_y);

gain_y.connect(ac.destination);
osc_y.frequency.value = 1000;
gain_y.gain.value = 0;
osc_y.type = "sawtooth";
osc_y.start();

var freq_x;
var freq_y;


document.addEventListener("mousemove", function(e){	
	gain_y.gain.value = 1;
	gain_x.gain.value = 1;

	var x = w - e.clientX;
	var y = h - e.clientY;

	var xPercent = Math.round((x/w)*100);
	var yPercent = Math.round((y/h)*100);


	if(yPercent < 1.5){
		freq_y = 0;
	}else if(yPercent > 98.5){
		freq_y = freq_y + 20;
		console.log('400 wat');
	}else{
		freq_y = yPercent/10+2;
	}
	osc_y.frequency.value = freq_y;

	if(xPercent < 1.5){
		freq_x = 0;
	}else if(xPercent > 98.5){
		freq_x = freq_x + 20;
		console.log('400 wat');
	}else{
		freq_x = xPercent/10+2;
	}

	osc_x.frequency.value = freq_x;

	$("#pos-x").html(x);
	$("#pos-y").html(y);
	$("#view").html("Viewport X: " + w + "<br>" + "Viewport Y: " + h);
	$("#percent").html("X Percent: " + xPercent + "<br>" + "Y Percent: " + yPercent);
	$("#view").html("Center X: " + w / 2 + "<br>" + "Center Y: " + h / 2);
})
