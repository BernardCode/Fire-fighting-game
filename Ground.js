class Ground{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        this.img=loadImage("ground.png");

        var options={
            isStatic:true,
            density:2.0
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display() {
        var pos=this.body.position;

        push ();
        fill(135, 86, 0);
        imageMode(CENTER);
        image(this.img,pos.x,pos.y,this.width,this.height);
        pop ();
    }
}