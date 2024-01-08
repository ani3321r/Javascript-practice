// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();//due to global scope pollution we use iife

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
