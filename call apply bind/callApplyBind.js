// Example to understand bind function -- >
var person = {
    firstName : 'Rubanraj',
    lastName : 'R',
    getFullname : function() {
        return this.firstName+' '+this.lastName;
    }
};

var logIt = function(a, b){
    console.log('-- > ',this.getFullname());
    console.log('Sum - > ',a+b);
};

var logItt = logIt.bind(person);

logItt(1,2);    

logIt.call(person, 1,2);
logIt.apply(person, [1,2]);

// function borrowing -- > 
var personn = {
    firstName : 'Mohan',
    lastName : 'Kumar'
};

console.log(person.getFullname.call(personn));

// function currying -- > 
function add(a, b, c) {
    return a+b+c;
}

var addIt = add.bind(this, 2);

console.log(addIt(1,5));
