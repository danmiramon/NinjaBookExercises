/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 Ninja Book Chapter 6 Exercises
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*1. Create a set of object types that describe a series of related objects that may
     share behavior and/or attributes. Code the example and another set of classes
     different from the example. Add properties/methods as needed.
 */

function Shape(){
    var edges = undefined;
    this.__c__ = document.getElementById("myCanvas");
    this.__ctx__ = this.__c__.getContext("2d");

    this.display = function (){
        return "This is a shape with."
    }
}


function Quadrilateral(){
    var edges = 4;

    this.display = function(width, height){
        if(arguments.length === 1)
            height = width;
        var x = 5;
        var y = 5;
        this.__ctx__.moveTo(x,y);
        this.__ctx__.strokeRect(x, y, x + width, y + height);
    };

    this.area = function(){
        return "Quadrilateral area.";
    };

    this.perimeter = function(){
        return "Quadrilateral perimeter.";
    }
}

function Triangle(){
    var edges = 3;

    /*He we intend to extract the largest cathetus, the Pitagoras theorem tells us h = sqrt(c1^2+c2^2)
      so in order to get a the cathetus we use c1 = sqrt(h^2 - c2^2) where the hypotenuse is a side of
      the triangle and the cathetus is half of the side of the base*/
    this.__calcHeight__ = function(base, side){
        return Math.sqrt(Math.pow(side,2) - Math.pow(base/2,2));
    };

    this.display = function(base, side){
        if(arguments.length === 1)
            side = base;
        var x = 20;
        var y = 280;
        var peakY = y - this.__calcHeight__(base,side);
        this.__ctx__.moveTo(x,y);
        this.__ctx__.lineTo(x+base, y);
        this.__ctx__.moveTo(x,y);
        this.__ctx__.lineTo(x+base/2, peakY);
        this.__ctx__.moveTo(x+base,y);
        this.__ctx__.lineTo(x+base/2, peakY);
        this.__ctx__.stroke();
    };

    this.area = function(base,side){
        if(arguments.length === 1)
            side = base;
        return (base * this.__calcHeight__(base,side)) / 2;
    };
    this.area = function(){

    };

    this.perimeter = function(){
        return "Triangle perimeter.";
    }
}


function Square(side){
    var disp = this.display;
    this.display = function(){return disp.call(this,side)};

    this.perimeter = function(){
        return side * 4;
    };

    this.area = function(){
        return side * side;
    }
}


function Rectangle(width, height){
    var disp = this.display;
    this.display = function(){return disp.call(this,width, height)};

    this.perimeter = function(){
        return width * 2 + height * 2;
    };

    this.area = function(){
        return width * height;
    }
}

function EquilateralTriangle(side){
    var disp = this.display;
    this.display = function(){return disp.call(this,side)};

    this.perimeter = function(){
        return side*3;
    };
}

function IsoscelesTriangle(base, sides){
    var disp = this.display;
    this.display = function(){return disp.call(this,base,sides)};

    this.perimeter = function(){
        return base + sides*2;
    };
}

function Circle(radius){
    var edges = "infinite";

    this.display = function(){
        this.__ctx__.beginPath();
        this.__ctx__.arc(100,100,radius,0,2*Math.PI);
        this.__ctx__.stroke();
    };

    this.area = function(){
        return Math.PI * radius * radius;
    };

    this.perimeter = function(){
        return Math.PI * 2 * radius;
    }
}

Quadrilateral.prototype = new Shape();
Square.prototype = new Quadrilateral();
Rectangle.prototype = new Quadrilateral();

Triangle.prototype = new Shape();
EquilateralTriangle.prototype = new Triangle();
IsoscelesTriangle.prototype = new Triangle();

Circle.prototype = new Shape();




/*ANIMALS SET*/
function Animal(){

    this.display = function(){
        return "I am a " + this.sizes + " size animal with " + this.extremities + " extremities and " + (this.tail? "a tail.": "no tail.");
    };

    this.sound = function(){
        return "Animal sound.";
    };

    this.run = function(){
        return "I can run fast.";
    };

    this.jump = function(){
        return "I can jump high.";
    };

    this.eat = function(){
        return "I eat everything.";
    }
}

function Cat(){
    this.extremities = 4;
    this.tail = true;
    this.sizes = "small";

    this.sound = function(){
        return "Meow.";
    };

    this.eat = function(){
        return "I eat meat and sometimes plants.";
    }
}

function Canine(){
    this.extremities = 4;
    this.tail = true;
    this.sizes = "all";

    this.sound = function(){
        return "Auuuuu.";
    };

    this.run = function(){
        return "I can run fast.";
    };

    this.jump = function(){
        return "Some of us can jump high.";
    };

    this.eat = function(){
        return "I eat meat.";
    }
}

function Dog(){
    this.sound = function(){
        return "Woof.";
    };

    this.eat = function(){
        return "I eat everything.";
    }
}

//Only feet count as extremities here, and lets say they have no tail
function Chicken(){
    this.extremities = 2;
    this.tail = false;
    this.sizes = "small";

    this.sound = function(){
        return "Pio.";
    };

    this.run = function(){
        return "I can run fast.";
    };

    this.jump = function(){
        return "I can't jump high.";
    };

    this.eat = function(){
        return "I corn and worms.";
    }
}

Cat.prototype = new Animal();
Canine.prototype = new Animal();
Dog.prototype = new Canine();
Chicken.prototype = new Animal;
