/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 Ninja Book Chapter 7 - 2nd File Exercises
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*1. */
function eval(){
    console.log(" 1. \"dabc\" evaluates " + /.abc/.test("dabc") + " to /.abc/.");
    console.log(" 2. \"password to lab!!1111\" evaluates " + /a+b?!!1{4}/.test("password to lab!!1111") + " to /a+b?!!1{4}/.");
    console.log(" 3. \"ultra.boom\" evaluates " + /.{3}a\.b/.test("ultra.boom") + " to /.{3}a\\.b/.");
    console.log(" 4. \"to do\" evaluates " + /\w/.test("to do") + " to /\\w/.");
    console.log(" 5. \"this is a test\" evaluates " + /\s/.test("this is a test") + " to /\\s/.");
    console.log(" 6. \"25th of december\" evaluates " + /\d/.test("25th of december") + " to /\\d/.");
    console.log(" 7. \"anything\" evaluates " + /./.test("anything") + " to /./.");
    console.log(" 8. \"tabu\" evaluates " + /[abc]/.test("tabu") + " to /[abc]/.");
    console.log(" 9. \"tabcin\" evaluates " + /(abc)/.test("tabcin") + " to /(abc)/.");
    console.log("10. \"$tek075G@fake.mail.net\" evaluates " + /[a-zA-Z_\$\.]+[A-Za-z_\$0-9\.]*@[a-zA-Z_\$\.]+[a-zA-Z_\$0-9\.]*\.(com|net|org){1}/.test("$tek075G@fake.mail.net") + " to /[a-zA-Z_\$\.]+[A-Za-z_\$0-9\.]*@[a-zA-Z_\$\.]+[a-zA-Z_\$0-9\.]*\.(com|net|org){1}/.");
    console.log("11. \"(0_n)\" evaluates " + /\([0oOn]{1}(_|\s)[0oOn]{1}\)/.test("(0_n)") + " to /\\([0oOn]{1}(_|\\s)[0oOn]{1}\\)/.");
}



/*2. */
function p1(dateString){
    return "/[A-Za-z]+\\s\\d{2},\\s\\d{4}/ can evaluate strings in format \"Ss+ ##, ####\", your string \"" + dateString + "\" evaluates " + /[A-Za-z]+\s\d{2},\s\d{4}/.test(dateString) + ".";
}

function p2(letterNumber){
    return "/[A-Za-z](?=\\d+)|\\d+(?=[A-Za-z])/ can evaluate a character followed by numbers or numbers followed by a character, your string \"" + letterNumber + "\" evaluates " + /[A-Za-z](?=\d+)|\d+(?=[A-Za-z])/.test(letterNumber) + ".";
}

function p3(fileName){
    return "/[A-Za-z]+\\.(txt|java|cpp)/ can evaluate txt, java and c++ filenames with characters only, your string \"" + fileName + "\" evaluates " + /[A-Za-z]+\.(txt|java|cpp)/.test(fileName) + ".";
}

function p4(palindrome){
    return "/(.)(.).\\2\\1/ can evaluate palindromes of 5 characters, your string \"" + palindrome + "\" evaluates " + /(.)(.).\2\1/.test(palindrome) + ".";
}

function p5(text){
    console.log("/(?:^|\\s)([b-y]+)(?:\\s|$)/gi can extract words with the set of characters [b,y], your string \"" + text + "\" gets the words:");
    var result = text.match(/(?:^|\s)([b-y]+)(?:\s|$)/gi);
    for(var x in result)
        console.log(result[x].trim());
}

function p6(tags){
    console.log("/<(\\w+)>.*?<\\/\\1>/gi can extract elements from a string, your string \"" + tags + "\" gets the tags:");
    var pattern = /<(\w+)>.*?<\/\1>/gi;
    var match = pattern.exec(tags);
    while(match !== null){
        console.log(match[0]);
        match = pattern.exec(tags);
    }
}



/*3. */
function shift(text){
    return text.replace(/(\w)/g, function(){
        var character = arguments[0];

        switch(character){
            case "Z":
                return "A";
                break;
            case "z":
                return "a";
                break;
            case "9":
                return "0";
                break;
            default:
                return String.fromCharCode((character.charCodeAt(0) + 1));
        }
    });
}


/*TIP: Use ttext = "ring"*/
function twitter(ttext){
    var pageContent = document.getElementById("content").innerHTML;
    //var word = "<a href='https:\/\/twitter.com\/search\?q=\#" + ttext + "'>\#" + ttext + "<\/a>";
    //console.log(word);
    pageContent = pageContent.replace(new RegExp(ttext,"g"), function(){
        return "<a href='https:\/\/twitter.com\/search\?q=\#" + arguments[0] + "'>\#" + arguments[0] + "<\/a>";
    });

    document.getElementById("content").innerHTML = pageContent;
}


function palindromes(ptext){
    var palCollection = {};
    ptext.replace(/([A-Za-z]+)/gi, function(){
        function reverse(revstr){
            return revstr.split("").reverse().join("");
        }
        if(arguments[0].length < 2) return;
        var test = reverse(arguments[0]) ;
        if(arguments[0].toLowerCase() === test.toLowerCase())
            palCollection[arguments[0]] = arguments[0];
    });

    for(var x in palCollection)
        console.log(palCollection[x]);
}


function l33t(leetText){
    var alphabet = ["4","8","<","|>","3",
                    "|=","6","}-{","!","_|",
                    "|<","|_","/|\\","|\\|","0",
                    "|D","(,)","|?","$","7",
                    "|_|","\\/","\\|/","><","'/","2"];
    var result = leetText.replace(/[A-Za-z]/gi,function(){
        var letter = arguments[0].toUpperCase().charCodeAt(0);
        return alphabet[letter - 65];
    });

    return result;
}