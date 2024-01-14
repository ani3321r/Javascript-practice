function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);//therefore we can verify that function is also an object
console.log(multiplyBy5.prototype);

function createUser(Username, score){
    this.Username = Username;
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
 

const chai = createUser("chai", 250);
const tea = createUser("tea", 250)