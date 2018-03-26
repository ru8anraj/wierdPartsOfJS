// Closure Experimented -- > 

console.log('---------var----------');
// using var to declare the inner function
function closureExp1(){
    var arr = [];
    
    for(var i=0; i<3; i++){
        arr.push(
            function(){
                console.log(i);
            }
        );
    }
    
    return arr;
}

var arrFunc1 = closureExp1();

arrFunc1[0]();
arrFunc1[1]();
arrFunc1[2]();

console.log('---------let----------');

// using let to declare the inner function
function closureExp(){
    var arr = [];
    
    for(let i=0; i<3; i++){
        arr.push(
            function(){
                console.log(i);
            }
        );
    }
    
    return arr;
}

var arrFunc = closureExp();

arrFunc[0]();
arrFunc[1]();
arrFunc[2]();

console.log('---------achieving let using var----------');

// achieving the let feature using var
function closureExp2(){
    var arr = [];
    
    for(var i=0; i<3; i++){
        arr.push(
            (function(j){
                return function(){
                    console.log(j);
                }
            }(i))
        );
    }
}

var arrFunc2 = closureExp();

arrFunc2[0]();
arrFunc2[1]();
arrFunc2[2]();