const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"]
};

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};

//This will work, despite violating the tuple typing above
//This will not work with the enum value
//person.role.push("admin");

let favoriteActivites: string[];
favoriteActivites = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("Author");
}
