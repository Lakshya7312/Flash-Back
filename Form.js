class Form {
    constructor() {
        this.buttonOP = select('#butt');
    }

    hide() {
      this.buttonOP.hide();
    }

    display(){
    this.buttonOP.position(windowWidth/2-110, windowHeight/2);

    this.buttonOP.mousePressed(()=>{
       gameState = 1;
       this.buttonOP.hide();
    })
  }
}