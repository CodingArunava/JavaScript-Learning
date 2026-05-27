// const tinderUser = new Object() // singleton
// object leterals
//  Object.create // it is constructor method creation
const mySym = Symbol("keys1")

const jsUser = {
    name: "arunava",
    [mySym]: "mykeys1",
    age: 20,
    location: "kolkata",
    email: "arunava@gmail.com"

}

console.log(jsUser.email); // it is a way to access an objects
console.log(jsUser["email"]);// it is a another way to access an objects
console.log(typeof jsUser[mySym]);
console.log(jsUser);
Object.freeze(jsUser)
console.log(jsUser);
jsUser.email = "arunava@yahoo.com"
console.log(jsUser);







