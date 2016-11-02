function test(){
    var rowCount = 20000;
    var divideInto = 4;
    var chunkSize = rowCount/divideInto;
    var iteration = 0;

    var table = document.getElementsByTagName("tbody")[0];
    setTimeout(function generateRows(){
        var base = chunkSize * iteration;
        for(var i = 0; i < chunkSize; i++){
            var tr = document.createElement("tr");

            for(var t = 0; t < 6; t++){
                var td = document.createElement("td");
                td.appendChild(document.createTextNode((i + base) + "," + t + "," + iteration));
                tr.appendChild(td);
            }

            table.appendChild(tr);
        }

        iteration++;
        if(iteration < divideInto)
            setTimeout(generateRows, 0);
    }, 0);

}

function CTC(){
    var timers = {
        timerID: 0,
        timers: [],

        add: function(fn){
            this.timers.push(fn);
        },

        start: function(){
            if(this.timerID) return;
            (function runNext(){
                if(timers.timers.length > 0){
                    for(var i = 0; i < timers.timers.length; i++){
                        if(timers.timers[i]() === false){
                            timers.timers.splice(i,1);
                            i--;
                        }
                    }
                    timers.timerID = setTimeout(runNext, 0);
                }
            })();
        },

        stop: function(){
            clearTimeout(this.timerID);
            this.timerID = 0;
        }
    };

    var box = document.getElementById("box"), x = 0, y = 20;

    timers.add(function(){
        box.style.left = x + "px";
        if(++x > 50) return false;
    });

    timers.add(function(){
        box.style.top = y + "px";
        y += 2;
        if(y > 120) return false;
    });

    timers.start();
}
