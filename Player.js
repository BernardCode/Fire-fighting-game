class Player{
    constructor(x,y) {
        this.x=x;
        this.y=y;
        this.width=50;
        this.height=65;
        
        this.image = loadImage("player.png");
        this.body = Bodies.rectangle(x,y,this.width,this.height);
        World.add(world,this.body);
        
    }
    display() {
        var pos=this.body.position;

        push ();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop ();
    }

}