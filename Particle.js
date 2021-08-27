class Particle {
    constructor(x,y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        //this.color = color(random(0,225),random(0,225),random(0,225))
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        noStroke();
        fill(random(0,225),random(0,225),random(0,225));
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};
