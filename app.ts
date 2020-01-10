const person: { name: string; age: number; hobbies: string[] } = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"]
};

let favoriteActivites: string[];
favoriteActivites = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
