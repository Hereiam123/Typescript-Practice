// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"]
// };

// enum Role {
//   ADMIN,
//   READ_ONLY,
//   AUTHOR
// }

// const person = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: Role.ADMIN
// };

// //This will work, despite violating the tuple typing above
// //This will not work with the enum value
// //person.role.push("admin");

// let favoriteActivites: string[];
// favoriteActivites = ["Sports"];

// console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }

// if (person.role === Role.AUTHOR) {
//   console.log("Author");
// }

/** Checking out UNION types */
function combine(
  input1: number | string,
  input2: number | string
): number | string {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

let combinedAges = combine(20, 30);

console.log(combinedAges);

combinedAges = combine("Cheese", "Fish");

console.log(combinedAges);
