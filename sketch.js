var balls=[]
function setup() {
  createCanvas(500, 500);
  for(var i=0;i<100;i++){
    balls[i]=new Pelota();
  }
}

function draw() {
  background(0);
  for (var i=0;i<balls.length;i++){
   balls[i].mostrar()
    balls[i].mover()
    balls[i].rebotar()
  }
}
