//learning about loops in js

// let message = "Hello, how are you?";

// for(const m of message)
//     {
//         if(m === " ") continue;
//         console.log(m)
//     }

// const myMap = new Map();

// myMap.set("City1", "Ranchi");
// myMap.set("City2", "Jamshedpur");
// myMap.set("City3", "Dhanbad");
// myMap.set("City4", "Bokaro");

// for(const [a, b] of myMap)
//     {
//         console.log(a, "-", b)
//     }

    //Point to be noted
// For of loop can't be used with objects because objects are not iteratable
//Instead For in loop can be used with objects

let shortcuts = {
    js : "javascript",
    cpp : "c++",
    py : "python",
    rb : "ruby"
}

// for(const a in shortcuts)
//     {
//         console.log(a);
//     }


// for(const a in shortcuts)
//     {
//         console.log(`${a} is shortcut for ${shortcuts[a]}`);
//     }

let myArray = ["Javascript", "Java", "CPP", "Python","C#"];

for(const a in myArray)
    {
        console.log(`Values are ${myArray[a]}`)
    }
    