/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 Ninja Book Chapter 4 Exercises
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*1. Create a recursive function that will calculate the fibonacci value of a number.*/

/*Naive algorithm, reverse, each iteration computes the n-1 fibonacci number, so fibonacci(2)
  is computed many times*/
function fibonacci_naive(position){
    if(position < 3)
        return 1;
    return fibonacci_naive(position - 1) + fibonacci_naive(position - 2);
}

/*Good forward solution, each fibonacci number is computed once*/
function fibonacci(position)
{
    if(arguments[0] === 1 && arguments.length == 1)
        return 1;

    if(arguments[0] === 1)
        return arguments[1] + arguments[2];

    if(arguments.length == 1)
        return fibonacci(arguments[0]-1, 0, 1);
    else
    {
        return fibonacci(arguments[0]-1, arguments[2], arguments[1] + arguments[2]);
    }
}


/*2. Create a function that will recursively go through all of the elements of an array
     of numbers and add them.*/
function addRec(array)
{
    if(arguments.length === 1)
    {
        if(array.length % 2 === 1)
            return array[Math.floor(array.length/2)] + addRec(array,Math.floor(array.length/2));
        else
            return addRec(array,Math.floor(array.length/2));
    }

    if(arguments[1] > 0)
        return array[arguments[1] - 1] + array[array.length - arguments[1]] + addRec(array, --arguments[1]);
    else
        return 0;
}


/*3. Create a custom object type that will hold a number value.
     a. Make sure that no other data type can be assigned to that variable.
     b. It must hold ONLY numbers.*/
function OnlyNumbers(elem){
    var element;
    this.setNumber = function(elem) {
        if (Object.prototype.toString.call(elem) !== "[object Number]")
            return console.log(elem + " is not a number, it is a " + Object.prototype.toString.call(elem));
        else
            element = elem;
    };

    this.getNumber = function(){
        return element;
    };

    this.setNumber(elem);
}


/*4. Write a function that will accept any number of arguments and print out their data type.*/
function dataType(){
    var result = "";
    for(var x in arguments) {
        switch (Object.prototype.toString.call(arguments[x])) {
            case "[object Number]": {
                if (arguments[x] % 1 === 0)
                    result += "number, ";
                else
                    result += "float, ";
                break;
            }
            case "[object String]": {
                result += "string, ";
                break;
            }
            case "[object Array]": {
                result += "array, ";
                break;
            }
            case "[object Object]": {
                result += "object, ";
                break;
            }
            case "[object Function]": {
                result += "function, ";
                break;
            }
        }
    }

    return result;
}


/*5. Write a function that will calculate the distance between two points. The function
     should be able to handle 2D and 3D points. */
/*6. Make the function from exercise 5 accept its parameters as either a parameter list
     or as two arrays containing 2D or 3D point data.*/
function distance()
{
    //Check if only one element is inserted
    if(arguments.length === 1)
        return alert("Insufficient data.");

    //Check if the elements are in a list of arrays or a list of numbers
    //List of arrays
    var result = 0;
    if(Object.prototype.toString.call(arguments[0]) === "[object Array]")
    {
        //Check if the arrays are of different length
        if(arguments[0].length !== arguments[1].length)
            return alert("Incompatible point data.");
        else if(arguments[0].length === 1 && arguments[1].length === 1)
            return alert("Insufficient parameters.");

        //Go through all elements of the arrays to compute the square of difference (x1 - x2)^2
        for(var i = 0; i < arguments[0].length; i++)
        {
            result += (arguments[0][i] - arguments[1][i]) * (arguments[0][i] - arguments[1][i]);
        }
    }
    //List of numbers
    else
    {
        if(arguments.length % 2 !== 0)
            return alert("Incompatible point data");
        else if(arguments.length === 2)
            return alert("Insufficient parameters.");

        //Go through both data points
        var arrlen = arguments.length / 2;
        for(var j = 0; j < arrlen; j++)
        {
            result += (arguments[j] - arguments[arrlen + j]) * (arguments[j] - arguments[arrlen + j]);
        }
    }

    return Math.sqrt(result);
}