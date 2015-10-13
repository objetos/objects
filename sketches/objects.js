var sketch = function( p ) {
    var fibonacci;
    var squares = 5;
    
    p.setup = function() {
        p.createCanvas(400, 400);
        fibonacci = new Fibonacci(p);
        p.noLoop();
    };
    
    p.draw = function() {
        p.background(255,0, 255);
        fibonacci.display();
    }
};

function Fibonacci( p ) {
    this.squares = 5; 
    this.x = p.random(p.width);
    this.y = p.random(p.height);
    this.diameter = 200;
    
    this.display = function() {
        //p.fill(0, 0, 255);
        //p.ellipse(100, 100, 200, 200);
        var w = p.width / this.squares;
        for(var i = 0; i < this.squares; i++) {            
            p.fill(p.map(this.compute(i+1), this.compute(this.squares), 0, 0, 255));
            p.rect(i*w,0,w,50);
        }
    };
    
    this.compute = function(n) {
        // salida de la recursion
        if(n == 1)
            return 0;
        if(n == 2)
            return 1;
        // avance de la recursion:
        if( n > 2)
            return this.compute(n-2) + this.compute(n-1);
        // si n es negativo o 0
        return -1;
    };
};

var myp5 = new p5(sketch, 'objects_id');