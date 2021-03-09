class DUSTBIN {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width+100,height,options);
      this.body2 = Bodies.rectangle(x+110,y-50,height,width,options);
      this.body3 = Bodies.rectangle(x-110,y-50,height,width,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      World.add(world, this.body2);
      World.add(world, this.body3);
    }
    display(){
      var pos =this.body.position;
      var pos2 =this.body2.position;
      var pos3 =this.body3.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width+100, this.height);
      rect(pos2.x, pos2.y, this.height, this.width);
      rect(pos3.x, pos3.y, this.height, this.width);
    }
  };
