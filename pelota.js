class Pelota{
  //Constructor
  constructor(x,y){
    this.x=random(0,400);
    this.y=random(0,400);
    this.velx=random(1,5);
    this.vely=random(1,5);
    this.direction=1;
 //Atributos
}  
 //Metodos 
mostrar(){
  ellipse(this.x,this.y,40,40)
}
mover(){
  this.x+=this.velx*this.direction;
  this.y+=this.vely*this.direction;
}
rebotar(){
    if (this.x < 0) {
      this.x = 0;
      this.direction = -this.direction;
    } else if (this.y < 0) {
      this.y = 0;
      this.direction = -this.direction;
    } else if (this.x > width - 20) {
      this.x = width - 20;
      this.direction = -this.direction;
    } else if (this.y > height - 20) {
      this.y = height - 20;
      this.direction = -this.direction;
    }
  }
}  
