class ground {
  constructor(x,y,w,h) {
    var option = {
      isStactic: true
    }
    
    this.body = Bodies.rectangle(x,y,w,h, option);
    this.w=width;
    this.h=height;
    World.add(world, this.body);
  }
  display() {

    rectMode(CENTER);
    rect(x,y,w,h);
  }
}