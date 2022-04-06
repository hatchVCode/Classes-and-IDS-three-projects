
var s1 = function() {
  setup = function() {
    var canvas = createCanvas(700, 700);
    canvas.parent('sketch-holder');
  }
  draw = function () {
    background(225);
    fill(35, 50, 240);
    ellipse(mouseX, mouseY, 50, 50);
    ellipse(mouseX+0, mouseY+13, 40, 10);
    ellipse(mouseX, mouseY, 10, 10);
    ellipse(mouseX, mouseY, 10, 10);
    ellipse(mouseX+10, mouseY-10, 10, 10);
    ellipse(mouseX-10, mouseY-10, 10, 10);

    fill(35, 50, 240);
    ellipse(mouseX, mouseY, 50, 50);
    ellipse(mouseX+0, mouseY+13, 40, 10);
    ellipse(mouseX, mouseY, 10, 10);
    ellipse(mouseX, mouseY, 10, 10);
    ellipse(mouseX+10, mouseY-10, 10, 10);
    ellipse(mouseX-10, mouseY-10, 10, 10);

    fill(35, 50, 240);
    ellipse(mouseX, mouseY, 50, 50);
    ellipse(mouseX+0, mouseY+13, 40, 10);
    ellipse(mouseX, mouseY, 10, 10);
    ellipse(mouseX, mouseY, 10, 10);
    ellipse(mouseX+10, mouseY-10, 10, 10);
    ellipse(mouseX-10, mouseY-10, 10, 10);

    fill(35, 50, 240);
    ellipse(mouseX, mouseY, 50, 50);
    ellipse(mouseX+0, mouseY+13, 40, 10);
    ellipse(mouseX, mouseY, 10, 10);
    ellipse(mouseX, mouseY, 10, 10);
    ellipse(mouseX+10, mouseY-10, 10, 10);
    ellipse(mouseX-10, mouseY-10, 10, 10);
    //second ball
    ellipse(mouseY, mouseX, 50, 50);
    //third ball
    ellipse(mouseY+200, mouseX, 50, 50);
    //fourth ball
    ellipse(mouseY, mouseX-200, 50, 50);
  }
};

// create a new instance of p5 and pass in the function for sketch 1
new p5(s1);
//you can use dot notation because p5 is the object
//ID works well with JS
var s2 = function(sketch) {
  sketch.setup = function() {
    var canvas2 = sketch.createCanvas(700, 700);
    canvas2.parent('sketch-holder-2');
    sketch.background(225);
  }
  
  sketch.mouseDragged = function() {
    //for canvas 2
    sketch.noStroke();
    sketch.fill(0, 255, 0);
    sketch.ellipse(sketch.mouseX, sketch.mouseY, 30, 30);
  }
};

// create the second instance of p5 and pass in the function for sketch 2
new p5(s2);

var s3 = function(sketch) {
  sketch.setup = function() {
    var canvas3 = sketch.createCanvas(700, 700);
    canvas3.parent('sketch-holder-3');
    sketch.background(225);
  }
  
  sketch.draw = function() {
    sketch.ellipse(50, 50, 50, 50);
    sketch.rect(0, 500, 700, 200);
    sketch.rect(100, 350, 200, 200);
    sketch.rect(175, 450, 50, 100);
  }
};

// create the second instance of p5 and pass in the function for sketch 3
new p5(s3);
