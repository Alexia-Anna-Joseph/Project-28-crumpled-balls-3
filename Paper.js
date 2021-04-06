class PAPER{
    constructor(x,y){

var options={
    
    restitution:0.3,
    friction:0.5,
    density:0.38
}

   this.body=Bodies.circle(x,y,35,options);
   this.image=loadImage("paper.png")
    World.add(world,this.body);
   

        
    }

    display(){
        var pos=this.body.position;
        
        imageMode(CENTER);
        

        fill("white");
        image(this.image,pos.x,pos.y, 95,95);
        
    }
};
