// Practice with various destructuring techniques

// 1. Array Destructuring with Defaults
const numbers = [5, 10];
const [a = 0, b = 0, c = 0] = numbers;
console.log(a, b, c); // Output: 5 10 0 (c has default value)

// 2. Object Destructuring with Renaming and Default Values
const user = { name: "Alice", age: 30 };
const { name, age, location = "Unknown" } = user;
console.log(`${name} is ${age} years old and lives in ${location}`); // "Alice is 30 years old and lives in Unknown"

// 3. Skipping Array Elements
const colors = ["red", "green", "blue", "yellow"];
const [first, , , last] = colors;
console.log(first, last); // Output: red yellow

// 4. Nested Object Destructuring
const book = {
  title: "JavaScript Guide",
  author: { name: "John Doe", country: "USA" },
  publisher: { name: "Tech Press", year: 2020 },
};
const {
  title,
  author: { name: authorName },
  publisher: { year },
} = book;
console.log(`${title} by ${authorName}, published in ${year}`); // "JavaScript Guide by John Doe, published in 2020"

// 5. Function Parameter Destructuring with Defaults
function configureSettings({ theme = "light", fontSize = "medium" } = {}) {
  console.log(`Theme: ${theme}, Font Size: ${fontSize}`);
}
configureSettings({ theme: "dark" }); // Output: Theme: dark, Font Size: medium

// 6. Destructuring with Rest Operator
const scores = [85, 90, 75, 88, 92];
const [firstScore, secondScore, ...remainingScores] = scores;
console.log(firstScore, secondScore); // Output: 85 90
console.log(remainingScores); // Output: [75, 88, 92]

// 7. Real-World Application: User Profile System with Nested Destructuring and Default Values
const users = [
  { id: 1, profile: { name: "Alice", details: { age: 30, city: "New York" } } },
  { id: 2, profile: { name: "Bob", details: { age: 25 } } }, // Missing city to demonstrate default value
];
users.forEach(({ profile: { name, details: { age, city = "Location Unknown" } = {} } }) => {
  console.log(`${name} is ${age} years old and lives in ${city}`);
});
// Output:
// "Alice is 30 years old and lives in New York"
// "Bob is 25 years old and lives in Location Unknown"
