function setUsername(username){
    this.username = username;

    console.log('username is set')
}

function createUser(username, email, password){

    setUsername.call(this,username)
    this.email = email
    this.password = password
}

let newUser = new createUser("Ajay", 'kumar@g.com', '35ddo3')
console.log(newUser)