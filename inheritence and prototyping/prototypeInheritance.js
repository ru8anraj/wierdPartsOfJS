// Inheritence is one object gets access to properties and methods of another object

function person() {
    this.getFullname = function() {
        return this.firstName+' '+this.lastName;
    }
};

var ruban = {
    firstName : 'Rubanraj',
    lastName : 'R'
};

// Never use in real project! Damages the global object in the browser!
//ruban.__proto__ = person;
//console.log(ruban.getFullname());

// This is the way to prototype object
//function rubanraj () {
//    this.firstName = 'Rubanraj';
//    this.lastName = 'R';
//}
var ruban = new person();
console.log(rubanraj.getFullname());