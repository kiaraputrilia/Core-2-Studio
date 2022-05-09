

function setup(){
	let canvas = createCanvas(1780,950);
	canvas.center('horizontal');
	colorMode(RGB,255,255,255);
	noLoop();
	bg = loadImage('fishbg.png');
}

function draw(){
	background(bg);
}

//spacebar to clear everything and start again, enter to save as a png
function keyPressed(){
	if(keyCode === 32){
		clear();
		background(bg);
	}
	else if (keyCode === ENTER){
		saveCanvas(canvas,'wow! an artiste!','png');
	}
}

//creates random squares and circles wherever the mouse is clicked
function mouseClicked() {
	let a = random(0,11);
	if (a <= 5){
		fill(randomColor());
	//	stroke(randomStrokeColor());
	//	strokeWeight(randomStroke());
		let x = randDim();
		let y = randDim();
		rect(mouseX-x/2,mouseY-y/2,x,y);
	}
	else if(a > 5){
		fill(randomColor());
	//	stroke(randomStrokeColor());
	//	strokeWeight(randomStroke());
		let radius = randDim();
		ellipse(mouseX,mouseY,radius,radius);
	}
}



//selects one out of 6 colours randomly
function randomColor(){
	let i = random(0,6);
	
	let r = 0;
	let g = 0;
	let b = 0;

	if (i <= 1){
		r = 0;
		g = 71;
		b = 171;
	}
	else if (i <= 2){
		r = 0;
		g = 192;
		b = 255;
	}
	else if (i <= 3){
		r = 0;
		g = 71;
		b = 171;
	}
	else if (i <= 4){
		r = 0;
		g = 192;
		b = 255;
	}
	else  if (i <= 5){
		r = 0;
		g = 71;
		b = 171;
	}
	else if (i > 5){
		r = 0;
		g = 192;
		b = 255;
	}

	return[r,g,b];
}

function randomStrokeColor(){
	let i = random(0,7);
	
	let r = 0;
	let g = 0;
	let b = 0;

	if (i <= 1){
		r = 249;
		g = 65;
		b = 68;
	}
	else if (i <= 2){
		r = 243;
		g = 114;
		b = 44;
	}
	else if (i <= 3){
		r = 248;
		g = 150;
		b = 30;
	}
	else if (i <= 4){
		r = 249;
		g = 199;
		b = 79;
	}
	else  if (i <= 5){
		r = 144;
		g = 190;
		b = 109;
	}
	else if (i <= 6){
		r = 67;
		g = 170;
		b = 139;
	}
	else if (i > 6){
		r = 255;
		g = 255;
		b = 255;
	}
	return[r,g,b];
}

//random stroke weight
function randomStroke(){
	let i = random(4,10); 
	return i;
}

//random width and height for the shapes
function randDim(){
	let i = random(50,100);
	return i;
}

