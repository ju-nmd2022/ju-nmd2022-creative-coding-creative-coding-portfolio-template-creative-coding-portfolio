function setup() {
    createCanvas(600, 600); 
    background(0, 92, 208);

    let dotSize = 30;
    let spacing = 30;

    
    for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
        
          let r = random(255);
          let g = random(255);
          let b = random(255);
          
          fill(r, g, b);
          noStroke();         
          ellipse(x, y, dotSize, dotSize);
        }
      }
    }

 function draw() {

}
  
  

 