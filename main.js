// 1. Program and observe the following requirements:  
// - Create a null object and set its variable name as user; 
// - Add a name attribute and set its value as John; 
// - Add a surname attribute and set its value as Mike; 
var user = {
    name: "John",
    surname: "Mike"
};
console.log(user);

// - Modify the value of name attribute as Peter; 
user.name = "Peter";
console.log(user);

// - Delete name attribute of user. 
delete user.name;
console.log(user);


// 2. Program and observe the following requirements: 
// calculate how many pieces of fruit there are in the fruit object
// the output should be 50. 

var fruit = {
apple: 20,
pear: 20,
peach: 10
};

var sum = 0;
for (var key in fruit) {
    sum += fruit[key];
};

console.log(sum);


