
function changeTone(mouseX, mouseY){
	
	var data = []; // just an array
	for (var i=0; i<100; i++){
		data[i] = Math.round(mouseX*10);
	} // fill data with random samples
	var wave = new RIFFWAVE(data); // create the wave file
	var audio = new Audio(wave.dataURI); // create the HTML5 audio element
	audio.play(); // some noise

	console.log(data);

}
