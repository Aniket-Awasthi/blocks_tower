class Block {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.4,
      friction: 0.0,
      isStatic: false
    }
    this.visibility = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("block.png")
    World.add(world, this.body);
  }
distory(){
  World.remove(world,this.body);
}


  display() {

    var pos = this.body.position;
    imageMode(CENTER);

    if (this.body.position.y<358) {
      image(this.image, pos.x, pos.y, this.width, this.height);
    }
    else {

      World.remove(world, this.body);


      //World.remove(world, this.image);
      // World.add(world, this.body);
      // World.destroy(world, this.body);

      push();




      this.visibility = this.visibility - 5;

      console.log(this.visibility)
      tint(255, this.visibility);
      image(this.image, pos.x, pos.y, this.width, this.height);
      pop();


    }


  }
}