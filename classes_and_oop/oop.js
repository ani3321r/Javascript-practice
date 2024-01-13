const user ={
    username : "ani",
    logincount : 5,
    signedIn : true,

    getUserDetails: function(){
        //console.log("got user details from database");
        //console.log(`Username: ${this.username}`);
        //console.log(this);
    }
}

//console.log(user.username)
//console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username; //using this we declare the variable and the normal username is calling the value in the function
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User("ani", 15, true);//we use new so that the data doesn't overwrite
const userTwo = new User("abc", 12, false);// new keyword creats a new instance or object
console.log(userOne);
console.log(userTwo);