# Module 3: အရာဝတ္ထုများနှင့် Interface များနဲ့ အလုပ်လုပ်ခြင်း

TypeScript ရဲ့ အခြေခံအမျိုးအစားများနဲ့ function များကို နားလည်ပြီးနောက်၊ ဒီသင်ခန်းစာမှာ အရာဝတ္ထုများ (objects)၊ interface များ၊ type alias များ၊ ရွေးချယ်နိုင်တဲ့ ဂုဏ်သတ္တိများ (optional properties)၊ ဖတ်ရန်သာ ဂုဏ်သတ္တိများ (readonly properties)၊ index signature များနဲ့ အဆင့်မြင့် အမျိုးအစားပေါင်းစပ်မှုတွေကို အသုံးပြုပုံကို အသေးစိတ်လေ့လာမှာပါတယ်။ ဒီအပိုင်းမှာ လက်တွေ့ဥပမာတွေနဲ့ လေ့ကျင့်ခန်းတွေကို ထည့်သွင်းထားပြီး ပိုရှုပ်ထွေးတဲ့ ပရောဂျက်တွေမှာ အသုံးပြုနိုင်မယ့် နည်းလမ်းတွေကိုလည်း ရှင်းပြထားပါတယ်။ ဒီသင်ခန်းစာဟာ TypeScript ရဲ့ အမျိုးအစားစနစ်ကို ပိုနက်ရှိုင်းစွာ နားလည်စေပြီး ကြီးမားတဲ့ ဆော့ဖ်ဝဲဖွံ့ဖြိုးရေးပရောဂျက်တွေအတွက် ပြင်ဆင်ပေးမှာပါတယ်။

## အရာဝတ္ထု အမျိုးအစားများနှင့် Literal အမျိုးအစားများ

TypeScript မှာ အရာဝတ္ထုတွေကို သတ်မှတ်တဲ့အခါ ၎င်းတို့ရဲ့ ဖွဲ့စည်းပုံ (structure) နဲ့ ဂုဏ်သတ္တိတွေ (properties) ရဲ့ အမျိုးအစားကို ရှင်းလင်းစွာ သတ်မှတ်နိုင်ပါတယ်။ ဒါက ကုဒ်ရဲ့ ဖတ်ရှုနိုင်မှုနဲ့ ယုံကြည်စိတ်ချရမှုကို မြှင့်တင်ပေးပါတယ်။ ဥပမာ၊ အရာဝတ္ထုတစ်ခုရဲ့ ဂုဏ်သတ္တိတွေကို တိုက်ရိုက်သတ်မှတ်နိုင်ပါတယ်:
```typescript
let user: { name: string; age: number; isActive: boolean } = {
  name: "Mg Mg",
  age: 25,
  isActive: true,
};
console.log(user); // { name: "Mg Mg", age: 25, isActive: true }
user.name = "Aung Aung"; // အဆင်ပြေပါတယ်
user.age = "30"; // အမှား: Type 'string' is not assignable to type 'number'
```

ဒါ့အပြင် literal အမျိုးအစားတွေကို အသုံးပြုပြီး တန်ဖိုးတစ်ခုက သတ်မှတ်ထားတဲ့ တန်ဖိုးတွေထဲကမှ တစ်ခုသာဖြစ်နိုင်တဲ့ အခြေအနေကို သတ်မှတ်နိုင်ပါတယ်။ ဒါက ကုဒ်ရဲ့ ရှင်းလင်းမှုကို တိုးစေပြီး မမျှော်လင့်တဲ့ တန်ဖိုးတွေကို ကာကွယ်ပေးပါတယ်:
```typescript
let role: "admin" | "user" | "guest";
role = "admin"; // အဆင်ပြေပါတယ်
role = "manager"; // အမှား: Type 'manager' is not assignable to type '"admin" | "user" | "guest"'
```

Literal အမျိုးအစားတွေကို function တွေမှာလည်း အသုံးပြုနိုင်ပါတယ်။ ဥပမာ:
```typescript
function setStatus(status: "active" | "inactive"): string {
  return `System is ${status}`;
}
console.log(setStatus("active")); // System is active
console.log(setStatus("pending")); // အမှား: Argument of type 'pending' is not assignable to parameter of type '"active" | "inactive"'
```

## Interface များကို သတ်မှတ်ခြင်းနှင့် တိုးချဲ့ခြင်း

Interface တွေဟာ TypeScript မှာ အရာဝတ္ထုတွေရဲ့ ဖွဲ့စည်းပုံကို သတ်မှတ်ဖို့ အဓိကအသုံးပြုတဲ့ နည်းလမ်းတစ်ခုဖြစ်ပါတယ်။ Interface တစ်ခုကို အောက်ပါအတိုင်း သတ်မှတ်နိုင်ပါတယ်:
```typescript
interface User {
  name: string;
  age: number;
  email?: string; // ရွေးချယ်နိုင်တဲ့ ဂုဏ်သတ္တိ
}

let user: User = {
  name: "Mg Mg",
  age: 25,
};
console.log(user); // { name: "Mg Mg", age: 25 }
user.email = "mgmg@example.com"; // အဆင်ပြေပါတယ်
```

Interface တွေကို `extends` သုံးပြီး တိုးချဲ့နိုင်ပါတယ်။ ဒါက ရှိပြီးသား interface တစ်ခုကို အခြေခံပြီး နောက်ထပ်ဂုဏ်သတ္တိတွေ ထည့်သွင်းဖို့ အဆင်ပြေစေပါတယ်:
```typescript
interface Employee extends User {
  employeeId: string;
  department: string;
}

let employee: Employee = {
  name: "Aung Aung",
  age: 30,
  employeeId: "EMP123",
  department: "Engineering",
};
console.log(employee); // { name: "Aung Aung", age: 30, employeeId: "EMP123", department: "Engineering" }
```

Interface တွေကို အကြိမ်ကြိမ် ကြေညာပြီး ပေါင်းစည်းနိုင်ပါတယ် (declaration merging)။ ဥပမာ:
```typescript
interface User {
  name: string;
}

interface User {
  age: number;
}

let mergedUser: User = {
  name: "Mg Mg",
  age: 25,
};
console.log(mergedUser); // { name: "Mg Mg", age: 25 }
```

ဒီနည်းက တူညီတဲ့ interface နာမည်ကို အကြိမ်ကြိမ်ကြေညာပြီး ဂုဏ်သတ္တိတွေကို ပေါင်းထည့်နိုင်အောင် လုပ်ပေးပါတယ်။

## Type Alias နှင့် Interface များအကြား ကွာခြားချက်နှင့် အသုံးပြုပုံ

Type alias တွေက interface တွေနဲ့ ဆင်တူပေမယ့် ပိုပြီးပြောင်းလွယ်ပြင်လွယ်ရှိပါတယ်။ Type alias ကို `type` သုံးပြီး သတ်မှတ်ပါတယ်:
```typescript
type Point = {
  x: number;
  y: number;
};

let point: Point = { x: 10, y: 20 };
console.log(point); // { x: 10, y: 20 }
```

Type alias တွေက interface တွေနဲ့ မတူတဲ့အချက်က union အမျိုးအစားတွေ၊ literal အမျိုးအစားတွေ ဒါမှမဟုတ် ပိုရှုပ်ထွေးတဲ့ အမျိုးအစားတွေကို သတ်မှတ်နိုင်တာပါတယ်:
```typescript
type Id = string | number;
type UserRole = "admin" | "user" | "guest";

let userId: Id = "ABC123"; // အဆင်ပြေပါတယ်
userId = 123; // အဆင်ပြေပါတယ်

let role: UserRole = "admin"; // အဆင်ပြေပါတယ်
role = "manager"; // အမှား: Type 'manager' is not assignable to type 'UserRole'
```

Type alias ကို intersection အမျိုးအစားတွေအတွက်လည်း အသုံးပြုနိုင်ပါတယ်:
```typescript
type Name = { name: string };
type Age = { age: number };
type Person = Name & Age;

let person: Person = { name: "Mg Mg", age: 25 };
console.log(person); // { name: "Mg Mg", age: 25 }
```

Interface နဲ့ type alias ရဲ့ အဓိကကွာခြားချက်က interface တွေက declaration merging ကို ထောက်ပံ့ပေးပြီး အရာဝတ္ထုဖွဲ့စည်းပုံတွေအတွက် ပိုသင့်လျော်ပါတယ်။ Type alias တွေကတော့ union၊ intersection နဲ့ primitive အမျိုးအစားတွေအတွက် ပိုပြောင်းလွယ်ပြင်လွယ်ရှိပါတယ်။ ဥပမာ၊ interface ကို union အမျိုးအစားအတွက် မသုံးနိုင်ပေမယ့် type alias က အသုံးပြုနိုင်ပါတယ်။

## ရွေးချယ်နိုင်တဲ့ ဂုဏ်သတ္တိများနှင့် ဖတ်ရန်သာ ဂုဏ်သတ္တိများ

Interface ဒါမှမဟုတ် type alias မှာ ရွေးချယ်နိုင်တဲ့ ဂုဏ်သတ္တိတွေ (optional properties) ကို `?` သုံးပြီး သတ်မှတ်နိုင်ပါတယ်။ ဒါက အရာဝတ္ထုတစ်ခုမှာ ဂုဏ်သတ္တိတစ်ခုပါဖို့ မလိုအပ်ဘူးဆိုတာကို ဖော်ပြပါတယ်:
```typescript
interface Student {
  name: string;
  age?: number;
  email?: string;
}

let student: Student = { name: "Mg Mg" }; // အဆင်ပြေပါတယ်
student.email = "mgmg@example.com"; // အဆင်ပြေပါတယ်
console.log(student); // { name: "Mg Mg", email: "mgmg@example.com" }
```

ဖတ်ရန်သာ ဂုဏ်သတ္တိတွေ (readonly properties) ကို `readonly` သုံးပြီး သတ်မှတ်နိုင်ပါတယ်။ ဒီဂုဏ်သတ္တိတွေကို တစ်ကြိမ်သတ်မှတ်ပြီးရင် ပြန်ပြောင်းလဲလို့မရပါဘူး:
```typescript
interface Book {
  readonly isbn: string;
  title: string;
  author: string;
}

let book: Book = {
  isbn: "123-456",
  title: "TypeScript Guide",
  author: "John Doe",
};
book.title = "Advanced TypeScript"; // အဆင်ပြေပါတယ်
book.isbn = "789-012"; // အမှား: Cannot assign to 'isbn' because it is a read-only property
```

Readonly ဂုဏ်သတ္တိတွေက ဒေတာတွေရဲ့ ပြောင်းလဲမှုကို ကန့်သတ်ပြီး ကုဒ်ရဲ့ ယုံကြည်စိတ်ချရမှုကို မြှင့်တင်ပေးပါတယ်။

## Index Signature များနှင့် Dynamic Key များ

တခါတရံမှာ အရာဝတ္ထုတစ်ခုရဲ့ ဂုဏ်သတ္တိအမည်တွေ (keys) ကို ကြိုတင်မသိရပေမယ့် ၎င်းတို့ရဲ့ အမျိုးအစားကို သတ်မှတ်ချင်တဲ့ အခြေအနေတွေ ရှိတတ်ပါတယ်။ ဒီလိုအခါမျိုးမှာ index signature ကို အသုံးပြုနိုင်ပါတယ်:
```typescript
interface Dictionary {
  [key: string]: string;
}

let dict: Dictionary = {
  name: "Mg Mg",
  city: "Yangon",
};
dict["country"] = "Myanmar"; // အဆင်ပြေပါတယ်
console.log(dict); // { name: "Mg Mg", city: "Yangon", country: "Myanmar" }
dict["age"] = 25; // အမှား: Type 'number' is not assignable to type 'string'
```

Index signature ကို number key တွေအတွက်လည်း အသုံးပြုနိုင်ပါတယ်:
```typescript
interface NumberMap {
  [index: number]: string;
}

let numDict: NumberMap = {
  0: "zero",
  1: "one",
};
console.log(numDict[0]); // zero
```

Index signature တွေက dynamic ဒေတာဖွဲ့စည်းပုံတွေနဲ့ အလုပ်လုဪဖို့ အထူးအသုံးဝင်ပါတယ်၊ ဥပမာ API response တွေကို ကိုင်တွယ်တဲ့အခါမျိုးမှာ။

## အဆင့်မြင့် အရာဝတ္ထုအမျိုးအစားများ

TypeScript မှာ အရာဝတ္ထုတွေနဲ့ အလုပ်လုပ်တဲ့အခါ ပိုရှုပ်ထွေးတဲ့ အမျိုးအစားတွေကို သတ်မှတ်ဖို့ နည်းလမ်းများစွာ ရှိပါတယ်။ ဥပမာ၊ nested object တွေကို interface ဒါမှမဟုတ် type alias နဲ့ သတ်မှတ်နိုင်ပါတယ်:
```typescript
interface Address {
  city: string;
  country: string;
}

interface Person {
  name: string;
  address: Address;
}

let person: Person = {
  name: "Mg Mg",
  address: {
    city: "Mandalay",
    country: "Myanmar",
  },
};
console.log(person); // { name: "Mg Mg", address: { city: "Mandalay", country: "Myanmar" } }
```

ဒါ့အပြင် function တွေကို အရာဝတ္ထုရဲ့ ဂုဏ်သတ္တိအဖြစ် သတ်မှတ်နိုင်ပါတယ်:
```typescript
interface Calculator {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
}

let calc: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(5, 3)); // 2
```

## လက်တွေ့အသုံးချမှု: API Response ကို သတ်မှတ်ခြင်း

လက်တွေ့ပရောဂျက်တွေမှာ interface နဲ့ type alias တွေကို API response တွေရဲ့ ဖွဲ့စည်းပုံကို သတ်မှတ်ဖို့ အသုံးပြုလေ့ရှိ