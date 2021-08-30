function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	angleMode(DEGREES)
}

function draw(){
	background(30)
 
	rotateX(60)
	
	noFill()
	stroke(255)
	
	for(var i = 0; i <120; i++) {
		
		var r = map(sin(frameCount / 4), -1, -1, 100, 255)
		var g = map(i, 0, 200, 100, 255)
		var b = map(cos(frameCount), -1, 1, 255, 100)
		
		stroke(r, g, b)
		
		beginShape()
	
		for(var j = 0; j <360; j += 90) {
		var rad = i * 8
		var x = rad * cos(j)
		var y = rad * sin(j)
		var z = sin(frameCount * 2 + i * 10) * 50
		
		vertex(x, y, z)
	}
		
	endShape(CLOSE)
		
	}
}
