class Boy{
    constructor(){
        var options={
            isStatic:true
        }
        this.boyBody = Bodies.rectangle(380, 600, 40, 80, options);
        this.image = loadImage("boy.gif")
        World.add(world, this.boyBody);

    }
    display(){
        imageMode(CENTER);
        image(this.image, 380, 600, 320, 270);
    }
}