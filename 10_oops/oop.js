function user(username, score, isLoggedIn){
    this.username = username
    this.score = score
    this.isLoggedIn = isLoggedIn

    // return this;
}

let called = new user("happy", 38, true)
console.log(called)