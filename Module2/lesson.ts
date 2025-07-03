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

let person: [string, number] = ["Mg Mg", 25];
console.log(person); // ["Mg Mg", 25]
person[0] = "Aung Aung"; // အဆင်ပြေပါတယ်
person[1] = "30"; // အမှား: Type 'string' is not assignable to type 'number'


let count = 10; // TypeScript က count ကို number အဖြစ် ခန့်မှန်းပါတယ်
count = "ten"; // အမှား: Type 'string' is not assignable to type 'numbe