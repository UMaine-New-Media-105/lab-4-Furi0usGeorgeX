function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(80);
  colorMode(HSL);
  drawTri(0, 0, 30, 0, 15, 30, 40, 100, 50, 1);
  drawCirc(70, 30, 40, 180, 100, 50, 1);
  //Clicking replaces the Panda with a Black Sword
  if (mouseIsPressed === true) {
    drawSword(40, 40, 0.2, 0, 0, 0, 1);
  } else {
    drawPandy(40, 40, 1, 70, 40, 40, 1);
  }
  //Triangle
  function drawTri(x, y, x1, y1, x2, y2, h, s, l, a) {
    fill(h, s, l, a);
    triangle(x, y, x1, y1, x2, y2);
    translate(x, y);
  }
  //Circle
  function drawCirc(x, y, diam, h, s, l, a) {
    fill(h, s, l, a);
    ellipse(x, y, diam);
    translate(x, y);
  }
  //Sword
  function drawSword(x, y, size, h, s, l, a) {
    push();
    translate(x, y);
    scale(size);
    fill(h, s, l, a);
    beginShape();
    vertex(30, 50); //tipbottomleft
    vertex(250, 270); //bladebottomleft
    vertex(310, 210); //rightcrossguardtop
    vertex(310, 230); //rightcrossguardbottom
    vertex(285, 270); //hiltright
    vertex(360, 340); //hiltbottom
    vertex(350, 350); //hiltleft
    vertex(275, 280); //hilttopleft
    vertex(230, 310); //leftcrossguardbottom
    vertex(210, 310); //leftcrossguardtop
    vertex(270, 250); //bladebottomrigh
    vertex(50, 30); //tipbottomright
    vertex(0, 0); //tip
    endShape(CLOSE);
    pop();
  }
   //Panda
  function drawPandy(x, y, size, h, s, l, a) {
    push();
    translate(x, y);
    scale(size);
    fill(h, s, l, a);
    rect(0, 0, 40);
    fill("black");
    ellipse(30, 12, 8);
    ellipse(10, 12, 8);
    fill("white");
    ellipse(20, 23, 27);
    fill("black");
    ellipse(20, 27, 4);
    ellipse(25, 22, 7);
    ellipse(15, 22, 7);
    fill(255, 0, 0);
    ellipse(15, 22, 5);
    ellipse(25, 22, 5);
    fill(0);
    ellipse(15, 22, 5);
    ellipse(25, 22, 5);
  }
}
