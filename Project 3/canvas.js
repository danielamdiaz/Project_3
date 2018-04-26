var canvas = document.querySelector('canvas');
//var myCanvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
//var myContext = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//myCanvas.width = window.innerWidth;
//myCanvas.height = window.innerHeight;

var mouse = {
  x: undefined,
  y: undefined
}

var maxRadius = 6;
var minRadius = 2;

//var colorArray = ['#ffcccc', '#b3e6ff', '#d580ff', '#ffffe6', 'white'];
var colorArray = ['#b3ffff', '#b3ffd9', '#d6f5f5', '#80ffdf', '#ccffff'];

window.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
})

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

//making circle
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = minRadius;
  //this.maxRadius = maxRadius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.strokeStyle = 'blue';
    context.fillStyle = this.color;
    context.fill();

  //draw();
  }

    this.update = function() {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
      }

      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
          this.dy = -this.dy;
      }

      this.x += this.dx;
      this.y += this.dy;

      //interacting w/ mouse
      if (mouse.x - this.x < 50 && mouse.x - this.x > -50
        && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
        if (this.radius < maxRadius) {
          this.radius += 1;
        }
      }
      else if (this.radius > this.minRadius){
          this.radius -= 1;
      }


      this.draw();

    }
}

var circleArray = [];

function init() {
  //making LOTS of circles
  circleArray = [];

  for (var i = 0; i < 300; i++) {
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

//animating circles
function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0,0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();

  }

  draw();

}
init();
animate();

function draw() {

  //sand
      context.beginPath();
      context.rect(0, 700, canvas.width, 500);
      context.fillStyle = '#ccff99';
      context.fill();

      context.beginPath();
      context.rect(0, 700, canvas.width, 20);
      context.fillStyle = '#666633';
      context.fill();

  //pineapple
      context.beginPath();
      context.rect(250, 450, 150, 250);
      context.fillStyle = '#ffa64d';
      context.fill();

      context.moveTo(250,450);
      context.lineTo(200,550);
      context.lineTo(250,700);
      context.strokeStyle = '#ffa64d';
      context.fillStyle = '#ffa64d'
      context.stroke();
      context.fill();

      context.moveTo(400,450);
      context.lineTo(450,550);
      context.lineTo(400,700);
      context.strokeStyle = '#ffa64d';
      context.fillStyle = '#ffa64d'
      context.stroke();
      context.fill();

      context.beginPath();
      context.moveTo(250,500);
      context.lineTo(200,600);
      context.lineTo(250,700);
      context.strokeStyle = '#ffa64d';
      context.fillStyle = '#ffa64d'
      context.stroke();
      context.fill();

      context.moveTo(400,500);
      context.lineTo(450,600);
      context.lineTo(400,700);
      context.strokeStyle = '#ffa64d';
      context.fillStyle = '#ffa64d'
      context.stroke();
      context.fill();

    //pineapple leaves
        //back leaves
        context.beginPath();
        context.moveTo(310,400);
        context.lineTo(300,300);
        context.lineTo(330,250);
        context.lineTo(350,300);
        context.lineTo(340,400);
        context.lineTo(310,400);
        context.strokeStyle = '#00b359';
        context.fillStyle = '#00b359';
        context.stroke();
        context.fill();
        //right half
        context.beginPath();
        context.moveTo(390,450);
        context.lineTo(425,400);
        context.lineTo(425,350);
        context.lineTo(400,400);
        context.lineTo(425,325);
        context.lineTo(390,370);
        context.lineTo(370,425);
        context.lineTo(390,325);
        context.lineTo(370,280);
        context.lineTo(330,400);
        //left half
        context.moveTo(260,450);
        context.lineTo(225,400);
        context.lineTo(225,350);
        context.lineTo(250,400);
        context.lineTo(225,325);
        context.lineTo(260,370);
        context.lineTo(280,425);
        context.lineTo(260,325);
        context.lineTo(280,280);
        context.lineTo(330,400);

        context.moveTo(260,450);
        context.lineTo(390,450);
        context.lineTo(330,400);
        context.lineTo(260,450);

        context.strokeStyle = '#51e251';
        context.fillStyle = '#51e251';
        context.stroke();
        context.fill();
      //stripes
      context.beginPath();
      context.moveTo(260,450);
      context.lineTo(450,600);
      context.moveTo(200,550);
      context.lineTo(380,700);
      context.moveTo(390,450);
      context.lineTo(200,600);
      context.moveTo(450,550);
      context.lineTo(270,700);
      context.strokeStyle = '#ff751a';
      context.stroke();
      //door/windows
      context.beginPath();
      context.arc(325, 625, 30, 0, Math.PI, true);
      context.rect(295,625, 60, 77);
      context.fillStyle = "#8c8c8c";
      context.fill();
      context.beginPath();
      context.arc(265, 550, 20, 0, Math.PI * 2, false);
      context.fillStyle = "#8c8c8c";
      context.fill();
      context.beginPath();
      context.arc(390, 625, 20, 0, Math.PI * 2, false);
      context.fillStyle = "#8c8c8c";
      context.fill();
        //light grey
      context.beginPath();
      context.arc(325, 625, 20, 0, Math.PI, true);
      context.rect(305,625, 40, 77);
      context.fillStyle = "#b3b3b3";
      context.fill();
      context.beginPath();
      context.arc(265, 550, 15, 0, Math.PI * 2, false);
      context.fillStyle = "#b3b3b3";
      context.fill();
      context.beginPath();
      context.arc(390, 625, 15, 0, Math.PI * 2, false);
      context.fillStyle = "#b3b3b3";
      context.fill();

    //sponge
      context.beginPath();
      context.rect(450, 615, 50, 50);
      context.fillStyle = "#ffff66";
      context.fill();
      context.beginPath();
      context.rect(450, 655, 50, 20);
      context.fillStyle = "#804000";
      context.fill();
      context.beginPath();
      context.rect(450, 655, 50, 5);
      context.fillStyle = "white";
      context.fill();
      context.beginPath();
      context.rect(455, 675, 3, 20);
      context.fillStyle = "#ffff66";
      context.fill();
      context.beginPath();
      context.rect(492, 675, 3, 20);
      context.fillStyle = "#ffff66";
      context.fill();
      context.beginPath();
      context.rect(452, 675, 10, 6);
      context.fillStyle = "#804000";
      context.fill();
      context.beginPath();
      context.rect(488, 675, 10, 6);
      context.fillStyle = "#804000";
      context.fill();
      context.beginPath();
      context.rect(450, 695, 10, 6);
      context.fillStyle = "black";
      context.fill();
      context.beginPath();
      context.rect(489, 695, 10, 6);
      context.fillStyle = "black";
      context.fill();

    //parachute strings
      context.beginPath();
      context.moveTo(1049, 252);
      context.lineTo(1148, 348);
      context.moveTo(1075, 220);
      context.lineTo(1148, 348);

      context.moveTo(1350, 250);
      context.lineTo(1250, 350);
      context.moveTo(1310, 220);
      context.lineTo(1250, 348);
      context.strokeStyle = "white";
      context.stroke();
    //Patrick
      context.beginPath();
      context.arc(1200, 300, 6, 0, Math.PI * 2, false);
      context.fillStyle = "#ff9999";
      context.strokeStyle = "#ff9999";
      context.stroke();
      context.fill();
      context.beginPath();
      context.arc(1150, 470, 5, 0, Math.PI * 2, false);
      context.fillStyle = "#ff9999";
      context.strokeStyle = "#ff9999";
      context.stroke();
      context.fill();
      context.beginPath();
      context.arc(1225, 475, 5, 0, Math.PI * 2, false);
      context.fillStyle = "#ff9999";
      context.strokeStyle = "#ff9999";
      context.stroke();
      context.fill();
      context.beginPath();
      context.arc(1148, 348, 5, 0, Math.PI * 2, false);
      context.fillStyle = "#ff9999";
      context.strokeStyle = "#ff9999";
      context.stroke();
      context.fill();
      context.beginPath();
      context.arc(1252, 350, 5, 0, Math.PI * 2, false);
      context.fillStyle = "#ff9999";
      context.strokeStyle = "#ff9999";
      context.stroke();
      context.fill();
      context.beginPath
      context.moveTo(1246, 350);
      context.lineTo(1200, 380);
      context.lineTo(1200, 400);
      context.lineTo(1238, 400);
      context.lineTo(1257, 350);
      context.fillStyle = "#ff9999";
      context.strokeStyle = "#ff9999";
      context.stroke();
      context.fill();
      context.beginPath
      context.moveTo(1143, 348);
      context.lineTo(1165, 400);
      context.lineTo(1190, 375);
      context.lineTo(1150, 348);
      context.fillStyle = "#ff9999";
      context.strokeStyle = "#ff9999";
      context.stroke();
      context.fill();
      context.beginPath();
      context.moveTo(1230, 475);
      context.lineTo(1239, 425);
      context.moveTo(1220, 475);
      context.lineTo(1200, 425);
      context.lineTo(1239, 425);
      context.lineTo(1230, 475);
      context.fillStyle = "#ff9999";
      context.strokeStyle = "#ff9999";
      context.stroke();
      context.fill();
      context.beginPath();
      context.moveTo(1145, 470);
      context.lineTo(1156, 425);
      context.lineTo(1190, 425);
      context.lineTo(1153, 475);
      context.fillStyle = "#ff9999";
      context.strokeStyle = "#ff9999";
      context.stroke();
      context.fill();
      context.fillStyle = "#ff9999";
      context.strokeStyle = "#ff9999";
      context.stroke();
      context.fill();
      context.beginPath();
      context.moveTo(1194, 299);
      context.lineTo(1171, 380);
      context.lineTo(1225, 380)
      context.lineTo(1206, 299);
      context.lineTo(1194, 299);
      context.fillStyle = "#ff9999";
      context.strokeStyle = "#ff9999";
      context.moveTo(1171, 380);
      context.lineTo(1160, 420);
      context.lineTo(1175, 435);
      context.lineTo(1200, 380);
      context.moveTo(1225, 380);
      context.lineTo(1235, 400);
      context.lineTo(1200, 400);
      context.arc(1200, 380, 2, 0, Math.PI * 2, false);
      context.stroke();
      context.fill();
      context.beginPath();
      context.arc(1205, 415, 35, 0, Math.PI * 2, false);
      context.fillStyle = "#ff9999";
      context.strokeStyle = "#ff9999";
      context.stroke();
      context.fill();
      context.beginPath();
      context.arc(1170, 425, 25, 0, Math.PI * 2, false);
      context.fillStyle = "#ffcccc";
      context.fill();
      context.beginPath();
      context.arc(1172, 428, 25, 0, Math.PI * 2, false);
      context.fillStyle = "#ff9999";
      context.fill();
      //flag
      context.beginPath();
      context.rect(1175, 360, 7, 100);
      context.fillStyle = "#ffcc66";
      context.fill();
      context.beginPath();
      context.rect(950, 370, 125, 30);
      context.fillStyle = "#6600cc";
      context.fill();
      context.beginPath();
      context.rect(1050, 360, 125, 30);
      context.fillStyle = "#8000ff";
      context.fill();
      context.beginPath();
      context.moveTo(1050, 390);
      context.lineTo(1075, 399);
      context.strokeStyle = "#8000ff";
      context.stroke();
     //cheeks
      context.beginPath();
      context.arc(1200, 425, 25, 0, Math.PI * 2, false);
      context.fillStyle = "#ffcccc";
      context.fill();
      context.beginPath();
      context.arc(1202, 428, 25, 0, Math.PI * 2, false);
      context.fillStyle = "#ff9999";
      context.fill();
      //parachute
      context.beginPath();
      context.moveTo(1100, 176);
      context.lineTo(1050, 250);
      context.lineTo(1100, 214);
      context.strokeStyle = "#8000ff"
      context.stroke();
      context.fillStyle = "#8000ff";
      context.fill();
      context.beginPath();
      context.moveTo(1300, 176);
      context.lineTo(1350, 250);
      context.lineTo(1300, 214);
      context.strokeStyle = "#8000ff"
      context.stroke();
      context.fillStyle = "#8000ff";
      context.fill();
      context.beginPath();
      context.rect(1100, 175, 200, 40);
      context.fillStyle = "#8000ff";
      context.fill();
      context.beginPath();
      context.rect(1100, 187, 200, 15);
      context.fillStyle = "#51e251";
      context.fill();
      context.moveTo(1100, 186);
      context.lineTo(1050, 250);
      context.lineTo(1100, 202);
      context.strokeStyle = "#51e251"
      context.stroke();
      context.fillStyle = "#51e251";
      context.fill();
      context.beginPath();
      context.moveTo(1300, 186);
      context.lineTo(1350, 250);
      context.lineTo(1300, 202);
      context.strokeStyle = "#51e251";
      context.stroke();
      context.fillStyle = "#51e251";
      context.fill();

    //text
      context.font = "40px apple chancery";
      context.lineWidth = 2;
      context.fillStyle = "#ccffff";
      context.fillText("Who lives in a pineapple", 600, 200);
      context.fillText("under the sea...", 650, 250);
}
