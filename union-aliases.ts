type Combinable = number | string;
type resultConverter = "as-number" | "as-text";

/** Checking out UNION types */
function combine(
  input1: Combinable,
  input2: Combinable,
  resultTypeConversion: resultConverter
): Combinable {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultTypeConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

let combinedAges = combine(26, 30, "as-number");

console.log(combinedAges);

combinedAges = combine("30", "54", "as-number");

console.log(combinedAges);

combinedAges = combine("Cheese", "Fish", "as-text");

console.log(combinedAges);
