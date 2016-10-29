/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 Ninja Book Chapter 7 Exercises
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*1. Create a function that will transform a hex number into an rgb format.*/
function hexToRgb(hexNum){
    var result =  hexNum.match(/([\da-f][\da-f])/g);

    var toDecimal = function(char){
        return (/[a-f]/.test(char.charAt(0))? (char.charCodeAt(0) - "a".charCodeAt(0) + 10)*16 : parseInt(char.charAt(0))*16) +
            (/[a-f]/.test(char.charAt(1))? (char.charCodeAt(1) - "a".charCodeAt(0) + 10) : parseInt(char.charAt(1)));
    };

    result[0] = toDecimal(result[0]);
    result[1] = toDecimal(result[1]);
    result[2] = toDecimal(result[2]);

    return "rgb(" + result.join(",") + ")";
}



/*2. Create a function that will transform a U.S style date format into a format of
     a different language/region. If that date is a holidays on the target locale
     (language & region), it should be mentioned. Preferably, use a different language
     from that of the example.*/
/*Returns the date in Lithuanian format (yyyy-mm-dd).
  Holidays:
     "01-01": "New Year",
     "02-16": "Restoration of the State Day",
     "03-11": "Restoration of Independence Day",
     "05-01": "Labour Day",
     "06-24": "St. John's Day",
     "07-06": "Coronation of King Mindaugas",
     "08-15": "Assumption Day",
     "11-01": "All Saints Day",
     "12-24": "Christmas Eve",
     "12-25": "Christmas Day",
     "12-26": "Second Day of Christmas"
 */
function dateUSToLithuania(date){
    var result = date.match(/(\d{1,4})/g);

    if(!/(\d{1,2}\/){2}(\d{4})/g.test(date) || parseInt(result[0]) > 12 || parseInt(result[1]) > 31 || result[2].length < 4)
        return console.log("The provided date (" + date +") is not in the U.S. format (mm/dd/yyyy).");

    var testDate = (result[0].length === 1 ? "0" + result[0] : result[0])  + "-" + (result[1].length === 1 ? "0" + result[1] : result[1]);
    var lDate = result[2] + "-" + testDate;

    var holidays = {
        "01-01": "New Year",
        "02-16": "Restoration of the State Day",
        "03-11": "Restoration of Independence Day",
        "05-01": "Labour Day",
        "06-24": "St. John's Day",
        "07-06": "Coronation of King Mindaugas",
        "08-15": "Assumption Day",
        "11-01": "All Saints Day",
        "12-24": "Christmas Eve",
        "12-25": "Christmas Day",
        "12-26": "Second Day of Christmas"
    };

    if(holidays[testDate])
        return lDate + ": " + holidays[testDate];
    else
        return lDate;
}