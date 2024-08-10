

var createHelloWorld = function() {
    
    return function(...args) {
        
        return "Hello World"
    }
};



//2nd Way

function createHelloWorld(){
    function f(){
        return "Hello World"
    }
    return f
}


