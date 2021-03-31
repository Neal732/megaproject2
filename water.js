class Water{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':0.01,
            isStatic : true
        }
        this.body = Bodies.circle(x, y, 5, options);
        World.add(world, this.body);
      }
      update(){
        if(this.body.position.y > height){
          Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
      }
      display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(0, 0, 5);
        pop()
      }
  }