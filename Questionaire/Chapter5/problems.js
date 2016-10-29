/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 Ninja Book Chapter 5 Exercises
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*1. Implement the following:
    a. A bank that holds client’s information:
         i. Account number.
        ii. Balance.
    b. A set of clients where each can:
          i. Hold money of their own.
         ii. Deposit money into the bank (to any account).
        iii. Retrieve money from the bank (from personal account only).
         iv. View current balance in bank (from personal account only).
    c. A client cannot deposit more money than what it has.
    d. A client cannot retrieve more money that what is in its account.
    e. All financial information must be private.
 */

/*To create clients do:
    var clientN = new Client(pocket_money);
where pocket_money is the funds he has. Use the clients methods to deposit, retrieve and check the bank balance.*/

var bank = new function(){
    var accounts = 0;
    var balance = [];

    //The bank opens an account by creating a Client object as new bank.Client(money_on_pocket)
    this.Client = function(money) {
        this.accountNo = ++accounts;
        this.funds = money;
        balance[this.accountNo] = 0;

        /*Deposit function, called with the account, the quantity and true if the
          money is taken from the funds, false if taken from the account.*/
        this.deposit = function(account, qty, fromFunds){
            if(account > accounts || account === 0)
                alert("The account " + account + " does not exist.");

            if(arguments.length !== 3)
                alert("To make a deposit provide: Account Number, Quantity to deposit and true\ " +
                    "to extract from your pocket or false to extract from your account");

            if(this.funds >= qty && fromFunds)
            {
                balance[account] += qty;
                this.funds -= qty;
            }
            else if(balance[this.accountNo] >= qty)
            {
                balance[account] += qty;
                balance[this.accountNo] -= qty;
            }
            else
                alert("Sorry, you don't have enough funds or money in your account.")
        };

        //Extracts a quantity from own's account
        this.retrieve = function(qty){
            if(balance[this.accountNo] >= qty)
            {
                this.funds += qty;
                balance[this.accountNo] -= qty;
                console.log("You dispose of $" + qty + " from your account");
            }
            else
                alert("You do not have enough funds in your account");
        };

        //Check own's balance
        this.checkBalance = function(){
            return console.log("Your balance is $" + balance[this.accountNo]);
        };
    };
};



/*2. Implement the following:
    a. A large building has many people and pieces of equipment. A new tech-support
       employee has been hired to help out solve users’ problems and fix broken equipment.
       The new employee is still unfamiliar with the layout but is doing his best to keep
       track of where everyone and everything is.
              i. Implement a structure that represents the building.
                 > Must contain data types representing equipment and users.
             ii. Equipment can be associated with rooms or specific people.
            iii. Each piece of equipment and person is associated with a specific floor and room.
             iv. The new tech-support employee must be able to find users and equipment as quickly as possible.
 */

/*building and techSupport objects are already created, to populate the building structure follow the examples:
                        building.assign(""-"E10", ""-name, 0-6, 012);
 Initialization test:
 building.assign("E01", "", 1, 0);
 building.assign("E02", "Carlos", 3, 3);
 building.assign("E03", "", 5, 6);
 building.assign("E05", "", 0, 9);
 building.assign("E06", "Juan", 2, 12);
 building.assign("E08", "", 4, 2);
 building.assign("E09", "Pedro", 6, 5);
 building.assign("E10", "", 1, 8);
 building.assign("", "Jose", 3, 11);
 building.assign("", "Luis", 5, 2);

To search for equipment or people in the building follow the examples:
 techSupport.searchEquipment("E6");
 techSupport.searchEmployee("Juan");
*/

var binarySearch = function(array, element, begin, end){
    var middle = begin + Math.ceil((end-begin) / 2);

    if(array[middle] === element)
        return middle;

    if(end < begin)
        return -1;

    if(element < array[middle])
        return binarySearch(array, element, begin, middle - 1);
    else
        return binarySearch(array,element, middle + 1, end);
};

Function.prototype.memoized = function(key){
    this._values = this._values || {};
    return this._values[key] !== undefined ? this._values[key] : this._values[key] = this.apply(this, arguments);
};



/*TechSupport Employee*/
var techSupport = new function(){
     this.searchEquipment = function(equipment){
        for(var i = 0; i < building.Floor.length; i++){
            if(building.assignments[i] !== undefined)
            for( var j = 0; j < building.Room.length; j++){
                if(building.assignments[i][j] !== undefined)
                for(var k = 0; k < building.Employee.length; k++){
                    if(building.assignments[i][j][k] !== undefined)
                    for(var l = 0; l < building.Equipment.length; l++){
                        if(building.assignments[i][j][k][l] !== undefined && building.assignments[i][j][k][l] === equipment)
                            return building.Equipment[l] + ", " + building.Employee[k] + ", " + building.Floor[i] + ", " + building.Room[j];
                    }
                }
            }
        }
    };

    this.searchEmployee = function(employee){
        for(var i = 0; i < building.Floor.length; i++){
            if(building.assignments[i] !== undefined)
                for( var j = 0; j < building.Room.length; j++){
                    if(building.assignments[i][j] !== undefined)
                        for(var k = 0; k < building.Employee.length; k++){
                            if(building.assignments[i][j][k] !== undefined && (building.assignments[i][j][k] === employee || building.Employee[k] === employee))
                                return building.Employee[k] + ", " + building.Floor[i] + ", " + building.Room[j];
                        }
                }
        }
    };
};



var building = new function(){

    //Datatypes
    this.Equipment = ["", "E00", "E01", "E02", "E03", "E04", "E05", "E06", "E07", "E08", "E09", "E10"];
    this.Employee = ["","Carlos", "Jose", "Juan", "Luis", "Pedro"];
    this.Floor = [0,1,2,3,4,5,6];
    this.Room = [0,1,2,3,4,5,6,7,8,9,10,11,12];

    this.assignments = [];

    //Search element index
    this.search = function(type, element)
    {
        switch(type)
        {
            case "equipment":
                return binarySearch(this.Equipment, element, 0, this.Equipment.length - 1);
                break;
            case "employee":
                return binarySearch(this.Employee, element, 0, this.Employee.length - 1);
                break;
            case "floor":
                return binarySearch(this.Floor, element, 0, this.Floor.length - 1);
                break;
            case "room":
                return binarySearch(this.Room, element, 0, this.Room.length - 1);
                break;
        }
    };

    //Assign people and equipment to initialize the building structure.
    this.assign = function(equipment, employee, floor, room)
    {
        var eq = this.search("equipment", equipment);
        var em = this.search("employee", employee);
        var f = this.search("floor", floor);
        var r = this.search("room", room);

        if(eq === -1 || em === -1 || f === -1 || r === -1)
            console.log("One or more provided elements does not exist.");

        //Assign equipment to people or rooms
        if(equipment !== "")
        {
            this.assignments[f] = this.assignments[f] || [];
            this.assignments[f][r] = this.assignments[f][r] || [];
            this.assignments[f][r][em] = this.assignments[f][r][em] || [];
            this.assignments[f][r][em][eq] = equipment;
        }
        //Assign people to rooms
        else {
            this.assignments[f] = this.assignments[f] || [];
            this.assignments[f][r] = this.assignments[f][r] || [];
            this.assignments[f][r][em] = employee;
        }
    }
};