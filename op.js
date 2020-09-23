console.log(`            Opdracht: Basic arrow functions.`);
console.log(`           ====================================`);
//console.log(``);
//===== Opdracht: Basic arrow functions.=====



//===== Opdracht A =====
const ikRockArrowFunctions2 = () => console.log(`Joi, ik rock de arrow functions!`);

console.log(`Opdracht A: ombouwen naar arrow`);
ikRockArrowFunctions2();
//===== Opdracht B =====
console.log(`Opdracht B: remove curly and return statement`)

const fivePlusSeven2 = () => 5 + 7
console.log(`${fivePlusSeven2}: Gaat niet goed ergens, twijfel`);
fivePlusSeven2();

//===== Opdracht C =====
let myFunction = (a, b) => a + b

console.log(`Opdracht C: arrow - paramater a b - a+b - impliciete return statement`);
console.log(myFunction(5, 5));

//===== Opdracht D =====
let addFive = a => a + 5
console.log(`Opdracht D:  arrow - parameter a - plus 5 returned`);
console.log(addFive(4));

//===== Opdracht E ====
console.log(`Opdracht E: arrow - implicit return statement `);

const createObject = () => ({ greeting: 'hoi' });
console.log(createObject()); // {greeting: "hoi"}
