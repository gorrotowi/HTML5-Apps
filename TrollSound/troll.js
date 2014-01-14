var bandera = true;

var arreglo = new Array();

arreglo[0] = "sounds/doink_doink.mp3";
arreglo[1] = "sounds/BaDumTss.mp3";
arreglo[2] = "sounds/aplausos.wav";
arreglo[3] = "sounds/wrong.mp3";

var lawandorder;// = new Audio(arreglo[0]);
var badum;// = new Audio(arreglo[1]);
var clamps;// = new Audio(arreglo[2]);
var wrong;// = new Audio(arreglo[3]);

audio = document.createElement("audio");

function sourceRandom(){
	var source = " ";
	
	var index = Math.floor(Math.random()*4);
	
	source = arreglo[index];
	
	return source;
	}

function lawSound(){
	//if(bandera == true){
		audio.src = arreglo[0];
		audio.type = "audio/mp3";
		audio.load();
		audio.play();
	/*	if (!audio.paused){
			bandera = false;
			console.log("dime el valor de la bandera "+bandera);
			}
	}
	else{
		console.log("no se debe reproducir nada");
		}
	bandera = true;
	console.log("dime el valor de la bandera (final de la funcion) "+bandera);
	*/
	}

function badumSound(){
	//if(bandera == true){
		audio.src = arreglo[1];
		audio.type = "audio/mp3";
		audio.load();
		audio.play();
	/*	if (!audio.paused){
			bandera = false;
			console.log("dime el valor de la bandera "+bandera);
			}
	}
	else{
		console.log("no se debe reproducir nada");
		}
	bandera = true;
	console.log("dime el valor de la bandera (final de la funcion) "+bandera);
	*/
	}
	
function clampsSound(){
	//if(bandera == true){
		audio.src = arreglo[2];
		audio.type = "audio/wav";
		audio.load();
		audio.play();
	/*	if (!audio.paused){
			bandera = false;
			console.log("dime el valor de la bandera "+bandera);
			}
	}
	else{
		console.log("no se debe reproducir nada");
		}
	bandera = true;
	console.log("dime el valor de la bandera (final de la funcion) "+bandera);
	*/
	}
	
function wrongSound(){
	//if(bandera == true){
		audio.src = arreglo[3];
		audio.type = "audio/wav";
		audio.load();
		audio.play();
	/*	if (!audio.paused){
			bandera = false;
			console.log("dime el valor de la bandera "+bandera);
			}
	}
	else{
		console.log("no se debe reproducir nada");
		}
	bandera = true;
	console.log("dime el valor de la bandera (final de la funcion) "+bandera);
	*/
	}

function trollSound(){
	console.log("dime el valor de la bandera empezando"+bandera);
	//if(bandera == true){
		audio.src = sourceRandom();
		console.log("dime el valor de audio source "+ audio.src);
		audio.load();
		audio.play();
	/*	if (!audio.paused){
			bandera = false;
			console.log("dime el valor de la bandera "+bandera);
			}
	}
	else{
		console.log("no se debe reproducir nada");
		}
	bandera = true;
	console.log("dime el valor de la bandera (final de la funcion) "+bandera);
	*/
	}