class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){//mainly used for encryption
        this._email = value
    }

    get password(){
        return `${this._password}chai`
    }

    set password(value){
        this._password = value
    }
}

const chai = new User("h@chai.ai", "abc")
console.log(chai.email);