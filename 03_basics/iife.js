// Immediately Invoked Function Expression

(function firstIife(user) {
    console.log(`Hi ${user}, I am first IIFE`);
})("Karan"); //must use semi colon after an IIFE to terminate it after execution

((user) => (
    console.log(`Hi ${user}, I am second IIFE`))
)("Harsh");