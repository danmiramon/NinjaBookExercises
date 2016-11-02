/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 Ninja Book Chapter 8 Exercises
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*1. Create a function that will display a random sentence to the console every minute.*/
function displayQuotes(){
    quotes = ["\"You can do anything, but not everything.\" -David Allen",
    "\"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.\" -Antoine de Saint-Exupéry",
    "\"The richest man is not he who has the most, but he who needs the least.\" -Unknown Author",
    "\"You miss 100 percent of the shots you never take.\" -Wayne Gretzky",
    "\"Courage is not the absence of fear, but rather the judgement that something else is more important than fear.\" -Ambrose Redmoon",
    "\"You must be the change you wish to see in the world.\" -Gandhi",
    "\"When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.\" -Lin-Chi",
    "\"The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking.\" -A.A. Milne",
    "\"To the man who only has a hammer, everything he encounters begins to look like a nail.\" -Abraham Maslow",
    "\"We are what we repeatedly do; excellence, then, is not an act but a habit.\" -Aristotle"];

    setInterval(function(){
        console.log(quotes[Math.floor(Math.random()*10)]);
    },60000);
}


/*2. Create functions A, B, and C that execute every 30s, 1min, and 1min 15s respectively.
     Use only 1 timer/interval to control all three functions.*/
function CTC(){
    var timers = {
        timerID: 0,
        timers: [],
        time: 0,

        add: function(fn){
            this.timers.push(fn);
        },

        start: function(){
            if(this.timerID) return;
            (function runNext(){
                if(timers.time % 30000 === 0 && timers.time !== 0)
                    timers.timers[0]();

                if(timers.time % 60000 === 0 && timers.time !== 0)
                    timers.timers[1]();

                if(timers.time % 75000 === 0 && timers.time !== 0)
                    timers.timers[2]();

                timers.time += 15000;
                timers.timerID = setTimeout(runNext, 15000);
            })();
        }
    };

    timers.add(function(){
        console.log("Function A: \"I run every 30 seconds.\"");
    });

    timers.add(function(){
        console.log("Function B: \"I run every minute.\"");
    });

    timers.add(function(){
        console.log("Function C: \"I run every minute with 15 seconds.\"");
    });

    timers.start();
}