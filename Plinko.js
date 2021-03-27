class Plinko {
    constructor(x, y,r) {
        var options = {
            
        
            isStatic:true
        }
    

        this.body = Bodies.circle(x, y, this.r/2, options);
        this.r=r
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;


        translate(pos.x, pos.y);
        rotate(angle);
//imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r , this.r);

    }

};