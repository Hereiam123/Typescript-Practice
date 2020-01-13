//Return types from function (simple, as usual, don't forget VOID!)
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAdHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

//Function types
//let combinedValues: Function;

//States what type of function and return type there will be
let combinedValues: (a: number, b: number) => number;
combineValues = add;
/** This will not work, because it does not match the function return type */
//combinedValues = printResult;

addAdHandle(10, 20, result => {
  console.log("The callback result is " + result);
});
