/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 Ninja Book Chapter 10 Exercises
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*1. Given the following code, do the following:
        a) simplify it by using the with statement; and
        b) simplify without using the with statement.
 */
var myLib = {
    math: {
        real: {
            add: function (a, b){ return a + b;},
            sub: function (a, b){ return a - b;},
            mul: function (a, b){ return a * b}
        },
        complex: {
            Num: function (real, img){this.real = real;
                                      this.img  = img;},
            add: function (a, b){ return new this.Num(a.real + b.real, a.img + b.img);},
            sub: function (a, b){ return new this.Num(a.real - b.real, a.img - b.img);},
            mul: function (a, b){ return new this.Num(a.real * b.real - a.img * b.img, a.real * b.img + a.img * b.real);}
        },
        matrix: {
            add: function (a, b){
                var result = [];
                for(var i = 0; i < a.length; i++)
                {
                    result[i] = [];
                    for(var j = 0; j < a[i].length; j++)
                        result[i][j] = a[i][j] + b[i][j];
                }
                return result;
            },
            sub: function (a, b){
                var result = [];
                for(var i = 0; i < a.length; i++)
                {
                    result[i] = [];
                    for(var j = 0; j < a[i].length; j++)
                        result[i][j] = a[i][j] - b[i][j];
                }
                return result;
            },
            mul: function (a, b){
                var result = [];
                for(var i = 0; i < a.length; i++)
                {
                    result[i] = [];
                    for(var j = 0; j < a[i].length; j++)
                        result[i][j] = a[i][j] * b[i][j];
                }
                return result;
            },
            eye: function (size){
                var side = Math.sqrt(size);
                var result = [];
                for(var i = 0; i < side; i++)
                {
                    result[i] = [];
                    for(var j = 0; j < side; j++)
                    {
                        if(i === j) result[i][j] = 1;
                        else result[i][j] = 0;
                    }
                }
                return result;
            },
            dot: function (m, a){
                var result = [];
                for(var i = 0; i < a.length; i++)
                {
                    result[i] = [];
                    for(var j = 0; j < b[i].length; j++)
                    {
                        result[i][j] = 0;
                        for(var k = 0; k < a[i].length; k++)
                        {
                            result[i][j] += a[i][k] * b[k][j];
                        }
                    }

                }
                return result;
            },
            times:function(a, b){
                //Check if b is a complex number
                if(Object.prototype.toString.call(b) !== "[object Array]")
                    b = [b.real, b.img];

                var result = [];
                for(var i = 0; i < a.length; i++)
                {
                    result[i] = 0;
                    for(var j = 0; j < a[i].length; j++)
                        result[i] += a[i][j] * b[j];
                }
                return result;
            }
        }
    }
};





console.log("No simplified answers:");
//Naive answers
var answer = myLib.math.real.sub(myLib.math.real.add (20, 22), myLib.math.real.mul(2,5));
console.log(answer);

var ans = myLib.math.matrix.times(myLib.math.matrix.eye(4),
                                  myLib.math.complex.sub (
                                        new myLib.math.complex.Num(myLib.math.real.add(5,2),-3),
                                        new myLib.math.complex.Num (3,4)));
console.log(ans);

//"with answers
console.log("\"with\" simplified answers:");
with(myLib.math){
    var answerWith = real.sub(real.add (20, 22), real.mul(2,5));
    console.log(answerWith);

    var ansWith = matrix.times(matrix.eye(4),
        complex.sub (
            new complex.Num(real.add(5,2),-3),
            new complex.Num (3,4)));
    console.log(ansWith);
}

//Other answers
console.log("\"Other\" simplified answers:");
var m = myLib.math;
var answerOther = m.real.sub(m.real.add (20, 22), m.real.mul(2,5));
console.log(answerOther);

var ansOther = m.matrix.times(m.matrix.eye(4),
    m.complex.sub (
        new m.complex.Num(m.real.add(5,2),-3),
        new m.complex.Num (3,4)));
console.log(ansOther);