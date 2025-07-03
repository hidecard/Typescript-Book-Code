# Module 2: TypeScript အခြေခံများ

TypeScript ရဲ့ အခြေခံသဘောတရားတွေကို နားလည်ပြီးနောက်၊ ဒီသင်ခန်းစာမှာ TypeScript ရဲ့ အဓိကအမျိုးအစားများ (types) နဲ့ ဖန်ရှင်တွေကို အသုံးပြုပုံကို လေ့လာမှာပါတယ်။ ဒီအပိုင်းမှာ အခြေခံအမျိုးအစားတွေ၊ array နဲ့ tuple တွေ၊ အမျိုးအစားသတ်မှတ်ခြင်း (type annotations)၊ ဖန်ရှင်တွေရဲ့ အမျိုးအစားသတ်မှတ်ပုံနဲ့ union နဲ့ intersection အမျိုးအစားတွေကို လက်တွေ့ဥပမာတွေနဲ့ လေ့လာမှာပါတယ်။ ဒီသင်ခန်းစာဟာ TypeScript ရဲ့ အခြေခံအုတ်မြစ်ကို ပိုခိုင်မာစေပြီး ပိုရှုပ်ထွေးတဲ့ ပရောဂျက်တွေအတွက် ပြင်ဆင်ပေးမှာပါတယ်။

## အခြေခံအမျိုးအစားများ (Basic Types)

TypeScript မှာ ကုဒ်ရေးတဲ့အခါ ပြောင်းလဲတန်ဖိုးတွေ (variables) နဲ့ ဖန်ရှင်တွေရဲ့ အမျိုးအစားကို ကြိုတင်သတ်မှတ်ဖို့ လိုအပ်ပါတယ်။ ဒါက ကုဒ်ရဲ့ ယုံကြည်စိတ်ချရမှုကို မြှင့်တင်ပေးပြီး အမှားတွေကို ကြိုတင်ဖမ်းမိနိုင်အောင် လုပ်ပေးပါတယ်။ TypeScript မှာ အသုံးများတဲ့ အခြေခံအမျိုးအစားတွေက အောက်ပါအတိုင်းဖြစ်ပါတယ်:

- **number**: ကိန်းဂဏန်းတွေ (ဥပမာ 42, 3.14)။
- **string**: စာသားတွေ (ဥပမာ "Hello", 'World')။
- **boolean**: မှန် (true) သို့မဟုတ် မမှန် (false) တန်ဖိုးတွေ။
- **any**: ဘယ်အမျိုးအစားမဆို လက်ခံနိုင်တဲ့ အမျိုးအစား (ဒါကို တတ်နိုင်သလောက် ရှောင်သင့်ပါတယ်)။
- **void**: ဘာတန်ဖိုးမှ ပြန်မပေးတဲ့ ဖန်ရှင်တွေအတွက် အသုံးပြုပါတယ်။
- **null** နဲ့ **undefined**: တန်ဖိုးမရှိတဲ့ အခြေအနေတွေကို ဖော်ပြပါတယ်။

ဥပမာအနေနဲ့ အောက်ပါကုဒ်ကို ကြည့်ပါ:
```typescript
let age: number = 25;
let name: string = "Aung Aung";
let isStudent: boolean = true;
let unknownValue: any = "Could be anything";
let nothing: void = undefined;

console.log(age); // 25
console.log(name); // Aung Aung
console.log(isStudent); // true
console.log(unknownValue); // Could be anything
```

ဒီကုဒ်မှာ ပြောင်းလဲတန်ဖိုးတစ်ခုစီရဲ့ အမျိုးအစားကို ရှင်းလင်းစွာ သတ်မှတ်ထားပါတယ်။ ဥပမာ၊ `age` ကို `number` အဖြစ် သတ်မှတ်ထားတာကြောင့် ၎င်းမှာ စာသား ("25") ထည့်ဖို့ ကြိုးစားရင် TypeScript က အမှားသတိပေးမှာပါတယ်:
```typescript
age = "25"; // အမှား: Type 'string' is not assignable to type 'number'
```

## Arrays နဲ့ Tuples

TypeScript မှာ array တွေကို အမျိုးအစားတစ်ခုတည်းပါတဲ့ စာရင်းတွေအဖြစ် သတ်မှတ်နိုင်ပါတယ်။ ဥပမာ၊ နံပါတ်တွေပဲပါတဲ့ array တစ်ခုကို အောက်ပါအတိုင်း သတ်မှတ်နိုင်ပါတယ်:
```typescript
let numbers: number[] = [1, 2, 3, 4];
console.log(numbers); // [1, 2, 3, 4]
numbers.push(5); // အဆင်ပြေပါတယ်
numbers.push("6"); // အမှား: Argument of type 'string' is not assignable to parameter of type 'number'
```

ဒါ့အပြင် tuple တွေကို အသုံးပြုပြီး အမျိုးအစားမတူညီတဲ့ တန်ဖိုးတွေကို သတ်မှတ်ထားတဲ့ အစီအစဉ်နဲ့ သိမ်းဆည်းနိုင်ပါတယ်။ Tuple တွေဟာ အမျိုးအစားနဲ့ အရှည်ကို ကြိုတင်သတ်မှတ်ထားတဲ့ array တွေဖြစ်ပါတယ်:
```typescript
let person: [string, number] = ["Mg Mg", 25];
console.log(person); // ["Mg Mg", 25]
person[0] = "Aung Aung"; // အဆင်ပြေပါတယ်
person[1] = "30"; // အမှား: Type 'string' is not assignable to type 'number'
```

## အမျိုးအစားသတ်မှတ်ခြင်းနဲ့ အမျိုးအစားခန့်မှန်းခြင်း

TypeScript မှာ ပြောင်းလဲတန်ဖိုးတွေကို အမျိုးအစားသတ်မှတ်ဖို့ (type annotations) `: type` ကို အသုံးပြုပါတယ်။ ဒါပေမယ့် TypeScript ဟာ အမျိုးအစားကို အလိုအလျောက် ခန့်မှန်းနိုင်တဲ့ စွမ်းရည် (type inference) လည်းရှိပါတယ်။ ဥပမာ:
```typescript
let count = 10; // TypeScript က count ကို number အဖြစ် ခန့်မှန်းပါတယ်
count = "ten"; // အမှား: Type 'string' is not assignable to type 'number'
```

ဒါပေမယ့် ရှင်းလင်းမှုအတွက် အမျိုးအစားသတ်မှတ်ခြင်းကို အသုံးပြုတာက ပိုကောင်းတဲ့ အလေ့အကျင့်ဖြစ်ပါတယ်:
```typescript
let message: string = "Hello, TypeScript!";
```

## ဖန်ရှင်များနဲ့ အမျိုးအစားသတ်မှတ်ခြင်း

TypeScript မှာ ဖန်ရှင်တွေရဲ့ ပါရာမီတာတွေ (parameters) နဲ့ ပြန်ပေးတန်ဖိုး (return value) ရဲ့ အမျိုးအစားကို သတ်မှတ်နိုင်ပါတယ်။ ဒါက ဖန်ရှင်တွေကို ပိုယုံကြည်စိတ်ချရစေပါတယ်။ ဥပမာ:
```typescript
function greet(name: string, age: number): string {
  return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet("Mg Mg", 25)); // Hello, Mg Mg! You are 25 years old.
console.log(greet("Mg Mg", "30")); // အမှား: Argument of type 'string' is not assignable to parameter of type 'number'
```

ဖန်ရှင်တွေမှာ ရွေးချယ်နိုင်တဲ့ ပါရာမီတာတွေ (optional parameters) နဲ့ မူလတန်ဖိုးပါတဲ့ ပါရာမီတာတွေ (default parameters) ကိုလည်း အသုံးပြုနိုင်ပါတယ်:
```typescript
function welcome(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}
console.log(welcome("Aung Aung")); // Hello, Aung Aung!
console.log(welcome("Aung Aung", "Hi")); // Hi, Aung Aung!
```

မူလတန်ဖိုးပါတဲ့ ပါရာမီတာဥပမာ:
```typescript
function sayHello(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}
console.log(sayHello("Mg Mg")); // Hello, Mg Mg!
console.log(sayHello("Mg Mg", "Hi")); // Hi, Mg Mg!
```

## Union နဲ့ Intersection အမျိုးအစားများ

TypeScript မှာ union အမျိုးအစားတွေကို အသုံးပြုပြီး ပြောင်းလဲတန်ဖိုးတစ်ခုက အမျိုးအစားတစ်ခုထက်ပိုဖြစ်နိုင်တဲ့ အခြေအနေကို သတ်မှတ်နိုင်ပါတယ်။ Union အမျိုးအစားကို `|` သင်္ကေတနဲ့ ဖော်ပြပါတယ်:
```typescript
let id: string | number;
id = "123"; // အဆင်ပြေပါတယ်
id = 123; // အဆင်ပြေပါတယ်
id = true; // အမှား: Type 'boolean' is not assignable to type 'string | number'
```

Intersection အမျိုးအစားတွေကို `&` သင်္ကေတနဲ့ အသုံးပြုပြီး အမျိုးအစားတွေရဲ့ ပေါင်းစပ်မှုကို ဖန်တီးနိုင်ပါတယ်:
```typescript
type Name = { name: string };
type Age = { age: number };
type Person = Name & Age;

let person: Person = { name: "Mg Mg", age: 25 };
console.log(person); // { name: "Mg Mg", age: 25 }
```

## လေ့ကျင့်ခန်းတွေ

1. **ဖန်ရှင်တွေနဲ့ အမျိုးအစားသတ်မှတ်ခြင်း**  
   `src` ဖိုလ်ဒါထဲမှာ `math.ts` ဆိုတဲ့ ဖိုင်တစ်ခုဖန်တီးပါ။ အောက်ပါကုဒ်ကို ရေးသားပြီး ပြောင်းလဲပါ:
   ```typescript
   function multiply(a: number, b: number): number {
     return a * b;
   }
   console.log(multiply(5, 3)); // 15
   ```
   `tsc` cmd နဲ့ ဒီကုဒ်ကို ပြောင်းလဲပြီး `node dist/math.js` cmd နဲ့ ရလဒ်ကို စစ်ဆေးပါ။ ရလဒ်အနေနဲ့ console မှာ `15` ဆိုတဲ့ တန်ဖိုးကို မြင်တွေ့ရမှာပါတယ်။

2. **Array နဲ့ Tuple တွေနဲ့ အလုပ်လုပ်ခြင်း**  
   `src` ဖိုလ်ဒါထဲမှာ `data.ts` ဆိုတဲ့ ဖိုင်တစ်ခုဖန်တီးပါ။ အောက်ပါကုဒ်ကို ရေးသားပြီး array နဲ့ tuple တွေကို စမ်းသပ်ပါ:
   ```typescript
   let fruits: string[] = ["apple", "banana", "orange"];
   let student: [string, number] = ["Mg Mg", 20];
   console.log(fruits); // ["apple", "banana", "orange"]
   console.log(student); // ["Mg Mg", 20]
   ```
   `tsc` cmd နဲ့ ပြောင်းလဲပြီး `node dist/data.js` cmd နဲ့ ရလဒ်ကို စစ်ဆေးပါ။

3. **Union အမျိုးအစားနဲ့ စမ်းသပ်ခြင်း**  
   `src` ဖိုလ်ဒါထဲမှာ `union.ts` ဆိုတဲ့ ဖိုင်တစ်ခုဖန်တီးပါ။ အောက်ပါကုဒ်ကို ရေးသားပြီး union အမျိုးအစားကို စမ်းသပ်ပါ:
   ```typescript
   function printId(id: string | number): void {
     console.log(`ID: ${id}`);
   }
   printId("ABC123"); // ID: ABC123
   printId(123); // ID: 123
   ```
   `tsc` cmd နဲ့ ပြောင်းလဲပြီး `node dist/union.js` cmd နဲ့ ရလဒ်ကို စစ်ဆေးပါ။

## အနှစ်ချုပ်

ဒီသင်ခန်းစာမှာ TypeScript ရဲ့ အခြေခံအမျိုးအစားတွေ၊ array နဲ့ tuple တွေ၊ အမျိုးအစားသတ်မှတ်ခြင်းနဲ့ ခန့်မှန်းခြင်း၊ ဖန်ရှင်တွေရဲ့ အမျိုးအစားသတ်မှတ်ပုံနဲ့ union နဲ့ intersection အမျိုးအစားတွေကို လေ့လာခဲ့ပါတယ်။ ဒီအခြေခံတွေက TypeScript ကို အသုံးပြုပြီး ပိုယုံကြည်စိတ်ချရတဲ့ ကုဒ်တွေရေးသားဖို့ အထောက်အကူပေးပါတယ်။ နောက်ထပ်သင်ခန်းစာမှာ ပိုရှုပ်ထွေးတဲ့ အမျိုးအစားတွေနဲ့ အရာဝတ္ထုတွေကို ဘယ်လိုအသုံးပြုမလဲဆိုတာကို လေ့လာမှာပါတယ်။