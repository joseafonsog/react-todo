// function add (a, b) {
//   return a + b;
// }

// console.log(add(4,3));

// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];

// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
// Hi Andrew, you are 25
function greetings(name, age) {
  return `Hi ${name}, you are ${age}`;
}
console.log(greetings(...person));
console.log(greetings(...personTwo));

var names = ['Mike', 'Ben'];
var final = ['Jose', ...names];
// Loop Hi Jose
final.forEach(function (final) {
  return `Hi ${name}`;
});