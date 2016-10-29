/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 Ninja Book Chapters 1 - 6 Exercises
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*1. Given an array of words, write a function that will sort the array in ascending
order. It should also take an optional argument that can customize the sorting order.
Custom sorting orders:
    a. descending
    b. sort by length ascending/descending
    c. sort by number of consonants ascending/descending.
 */

/*Call by:
        sortArray([array_list], option);
  Returns a sorted array according to the selected option.
  Options:
        a. "descending"
        b. "lengthAsc"/"lengthDesc"
        c. "consNoAsc"/"consNoDesc"
*/
function sortArray(values, sortType)
{
    var comparator;
    switch(sortType){
        case "descending":
            comparator = function(value1, value2){
                return value2 > value1;
            };
            break;
        case "lengthAsc":
            comparator = function(value1, value2){
                return value1.length > value2.length;
            };
            break;
        case "lengthDesc":
            comparator = function(value1, value2){
                return value2.length > value1.length;
            };
            break;
        case "consNoAsc":
            comparator = function(value1, value2){
                return value1.replace(/[aeiou]/gi,"").length > value2.replace(/[aeiou]/gi,"").length;
            };
            break;
        case "consNoDesc":
            comparator = function(value1, value2){
                return value2.replace(/[aeiou]/gi,"").length > value1.replace(/[aeiou]/gi,"").length;
            };
            break;
        default:
            comparator = function(value1, value2){
                return value1 > value2;
            };
            break;
    }

    return values.sort(comparator);
}



/*2. Create a function that can limit the execution of other functions to a determined amount of times.*/

/*Call by
  Create a variable with the limitExecution, the limited function name and number of executions
                var lim = limitExecution(function_name, rounds);
  Call the variable function with the parameters of the limited function
                lim(parameters);
  The function can be called as many times as the number of rounds, afterwards will print "Cannot execute anymore."*/
function limitExecution(fn, limit)
{
    return function(){

        if(limit === 0)
            return "Cannot execute anymore.";
        limit--;
        return fn.apply(fn,arguments);
    };
}



/*3. Create a function that will set the color, font-size, and background color of a DOM element.
     a. If there are fewer arguments, it should place a default value.
     b. Use the this parameter to access the values of the DOM element. (e.g. this.color or this.style.color).
 */

/*Call by
  Provide the element's ID, there is a div (myDiv) and a p (myP) elements to test.
  Element parameters can be set or not, in order Color, Font Size, Background Color.
  Parameters can be omitted in order, i.e. there cannot be a background color if there is no font size or color. */
function setProperties(id, col, font, bg_color){
    var attributes = "color:" + col + "; font-size:" + font + "; background-color:" + bg_color;
    document.getElementById(id).execute = function(){
        console.log(this);
        this.style.color = col !== undefined ? col : "blue";
        this.style.fontSize = font !== undefined ? font + "px" : "50px";
        this.style.backgroundColor = bg_color !== undefined ? bg_color : "grey";
    };
    document.getElementById(id).execute();
}



/*4. Create a function that can copy either all or specific properties of an object into another.
     The functionality should depend on the arguments received.
         properties of objB are copied onto objA
                copyProp(objA, objB);
         only properties p1 and p2 from objB are copied over to objA
                copyProp(objA, objB, [“p1”, “p2”]);
 */
/*Objects with some properties and an array to copy properties is provided for commodity,
  can use other objects and property list as seen fit though.*/
var ObjA = function(){};
var ObjB = function(){
    this.a= 1;
    this.b = "t";
    this.c = "not this one";
    this.f = function(){return this.a + this.b;};
};

var objA = new ObjA();
var objB = new ObjB();
var propList = ["a", "b", "f"];

function copyProp(objA, objB, properties){
    var keys;
    if(properties === undefined)
        keys = Object.getOwnPropertyNames(objB);
    else
        keys = properties;

    for(var i = 0; i < keys.length; i++){
        Object.defineProperty(objA, keys[i], Object.getOwnPropertyDescriptor(objB,keys[i]));
    }
}



/*5. Create a function that will:
        a. return the number of vowels in a string
        b. return the number of digits in a whole number using logarithm operations.
 Must be the same function.
 */
/*Provide a string or a number, if the string contains only numbers it will be converted to a number and its
  digits will be counted.*/
function quantity(data){
    if(isNaN(data/1))
        return "The string \"" + data + "\" contains " + data.replace(/[^aeiou]/gi, "").length + " vowels.";
    else
        return "The number \"" + data + "\" contains " + (Math.floor(Math.log10(data)) + 1) + " digits.";
}


/*6. Create a tree structure and a function that will display all of the elements in that tree.
     The function should not require any change in case the structure changes.
        a. Example of tree structure:
                                          A
                                       /  |    \
                                     a    b      c
                                     |   / \     | \
                                    aa  ba  bb  ca cb
                                                    |
                                                   cba
 */

/*Node data structure, can be used to create threes, linked lists and other data structures.
  To construct the three above set the following instructions:
        var root = new Node("A"); //Creates the root of the three
        //Create the first level children
        root.children.push(new Node("a"));
        root.children.push(new Node("b"));
        root.children.push(new Node("c"));
        //Create the second level children, as this is a simple three we construct manually easily, for more complex
        //threes, other mechanisms must be used
        root.children[0].children.push(new Node("aa"));
        root.children[1].children.push(new Node("ba"));
        root.children[1].children.push(new Node("bb"));
        root.children[2].children.push(new Node("ca"));
        root.children[2].children.push(new Node("cb"));
        //Create the last node
        root.children[2].children[1].children.push(new Node("cba"));*/
function Node(content){
    var data = content;
    this.children = [];
    this.getData = function(){return data};
}

/*Traversal, provide the three structure root*/
function traversal(root){
    if(root === undefined)
        return console.log("There is no structure to traverse.");

    if(root.children.length === 0)
        return console.log(root.getData() + " ");

    for(var i = 0; i < root.children.length; i++)
        traversal(root.children[i]);

    return console.log(root.getData() + " ");
}