/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 Ninja Book Chapter 9 Exercises
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*1. Create a function that receives a parameter containing a string. The string
data must be transformed into an object that can hold properties and methods.
Note: Some changes may be required in the string data*/
function dataParse(str){ //The object can only hold simple properties ("x":"val") and methods ("fn":function(){})
    //Create the new object
    var obj = {};

    //If the string is within {}, remove these
    if(str.charAt(str.length-1) === "}" && str.charAt(0) === "{")
        str = str.substring(1, str.length-1);

    //First extract the functions if any
    var functions = str.match(/function.+}/gi);

    //Extract the elements: captures the property names and values (with a ":" prefix
    var elements = str.match(/(\w+(?=:))|(:\s*\w+)/gi);

    //Cycle through the elements and add them to the object
    var funcs = 0;
    for(var i = 0; i < elements.length; i+=2){
        var value = elements[i+1].substring(1).trim();
        //Check if there are functions
        if(value === "function"){
            //Extract the function elements
            var felems = functions[funcs].match(/(\(.+\))|({.+})/gi);
            //[0] are the parameters, [1] is the function body
            obj[elements[i]] = Function(felems[0].match(/\w+/gi),felems[1]);
            funcs++;
        }
        else
            //If a value is numeric transform it by value/1, this supports integers and floats, else set the value
            obj[elements[i]] = /\D/g.test(value) ? value : value/1;
    }

    return obj;
}