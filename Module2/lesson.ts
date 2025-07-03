// let age: number = 25;
// let nameS: string = "Aung Aung";
// let isStudent: boolean = true;
// let unknownValue: any = "Could be anything";
// let nothing: void = undefined;
 
// console.log(age); // 25
// console.log(nameS); // Aung Aung
// console.log(isStudent); // true
// console.log(unknownValue); // Could be anything


// let numbers: number[] = [1, 2, 3, 4];
// console.log(numbers); // [1, 2, 3, 4]
// numbers.push(5); // အဆင်ပြေပါတယ်
// numbers.push("6"); // အမှား: Argument of type 'string' is not assignable to parameter of type 'number'

// let person: [string, number] = ["Mg Mg", 25];
// console.log(person); // ["Mg Mg", 25]
// person[0] = "Aung Aung"; // အဆင်ပြေပါတယ်
// person[1] = "30"; // အမှား: Type 'string' is not assignable to type 'number'


// let count = 10; // TypeScript က count ကို number အဖြစ် ခန့်မှန်းပါတယ်
// count = "ten"; // အမှား: Type 'string' is not assignable to type 'number



// function အပိုင်း

// function greet(name: string, age: number): string {
//   return `Hello, ${name}! You are ${age} years old.`;
// }
// console.log(greet("Mg Mg", 25)); // Hello, Mg Mg! You are 25 years old.
// console.log(greet("Mg Mg", "30")); // အမှား: Argument of type 'string' is not assignable to parameter of type 'number' 

// optional parameter
// function welcome(name: string, greeting?: string): string {
//   return `${greeting || "Hello"}, ${name}!`;
// }
// console.log(welcome("Aung Aung")); // Hello, Aung Aung!
// console.log(welcome("Aung Aung", "Hi")); // Hi, Aung Aung!


// default parameter


// function sayHello(name: string, greeting: string = "Hello"): string {
//   return `${greeting}, ${name}!`;
// }
// console.log(sayHello("Mg Mg")); // Hello, Mg Mg!
// console.log(sayHello("Mg Mg", "Hi")); // Hi, Mg Mg!



