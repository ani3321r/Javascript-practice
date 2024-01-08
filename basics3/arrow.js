const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);//this used for current context
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"//changing the context
// user.welcomeMessage()

// console.log(this);//prints the whole context,browser=objects,node=empty

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);//this.username do not works in a func
// }//when we run this in a func it returns objects

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }//explicit return

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})//implicit return


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()