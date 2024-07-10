class User{
    constructor(username){
        this.username = username;

    }

    showMe(){
        console.log(`User name is ${this.username}`)
    }
}

class Subs extends User{
    constructor(username, email){
        super(username) // here super is under the hood doing implementation through .call and this.
        this.email = email
    }
}

let newUser = new Subs("Aman", "ty@son.com")
newUser.showMe()