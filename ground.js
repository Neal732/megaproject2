class Ground {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          isStatic: true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      strokeWeight(4);
      stroke("Grey");
      fill("Grey");
      rect(0, 0, this.width, this.height);
    }
  };