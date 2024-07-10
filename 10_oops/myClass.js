// class User{

//     constructor(username, mail, password){
//         this.username = username
//         this.mail = mail
//         this.password = password
//     }

//     showUser(){
//         console.log(`User Name is ${this.username}`)
//     }
// }

// let user1 = new User("Harsh", "tum@hum.com", "78hdiu848")

// user1.showUser()

//same implementation using function

function User(username, mail, pass){
  this.username = username
  this.mail = mail
  this.pass = pass
}

User.prototype.showUser = function(){
    // console.log(`User name is ${this.username}`)
    return this.username
}

let user1 = new User("Ram", 'acd@gs.com', '23hfu34')
console.log(user1.showUser())