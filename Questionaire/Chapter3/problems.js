/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                       Ninja Book Chapter 3 Exercises
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*1. Create a function that will multiply two numbers.
     The function must return the result in base 13.*/
function mul(a,b){
    return console.log(a + "*"+ b + " in base 13 is " + (a*b).toString(13));
}



/*2. Create a function that will return the addition of N numbers.*/
function add(){
    var result = 0;
    if(arguments.length % 2 === 1)
        result = arguments[Math.floor(arguments.length/2)];

    for(var x = 0; x < Math.floor(arguments.length/2); x++)
        result += arguments[x] + arguments[arguments.length - 1 - x];

    return result;
}



/*3. Create an object that will hold methods for adding, multiplying,
     and factorial operations.*/
var myMath = {
    add: function(){
        var resadd = 0;
        if(arguments.length % 2 === 1)
            resadd = arguments[Math.floor(arguments.length/2)];

        for(var x = 0; x < Math.floor(arguments.length/2); x++)
            resadd += arguments[x] + arguments[arguments.length - 1 - x];

        return resadd;
    },

    mul: function(){
        var resmul = 1;
        if(arguments.length % 2 === 1)
            resmul = arguments[Math.floor(arguments.length/2)];

        for(var x = 0; x < Math.floor(arguments.length/2); x++)
            resmul *= arguments[x] * arguments[arguments.length - 1 - x];

        return resmul;
    },

    fact: function(){
        var resfact = 1;
        for(var x = 2; x <= arguments[0]; x++)
            resfact *= x;

        return resfact;
    }
};



/*4. Create a custom object that will hold an image’s mock information
such as pixel color data, image size, and name. It must be able to return
the information.*/
function Image(imData, imWidth, imHeight, imName){
    var data = imData;
    this.width = imWidth;
    this.height = imHeight;
    this.name = imName;

    this.pixelData = function(y,x){
        return data[y*this.width + x];
    }
}



/*5. Create a function that will print out the properties of an object.
        a. If one parameter is provided, it should print out all of the
           properties accessible by that object.
        b. If a second, boolean value, parameter is provided, it should
           only print out the values that belong to the object instance itself if true. */
function printObjProp(obj,own)
{
    var x;
    var result="";
    if(own !== undefined && own === true)
    {
        for(x in obj)
        {
            if(obj.hasOwnProperty(x))
               result += x + ", ";
        }
    }
    else
    {
        for(x in obj)
            result += x + ", ";
    }

    console.log("Object properties: " + result);
}