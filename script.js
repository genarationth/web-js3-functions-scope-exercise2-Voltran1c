// Exercise 2.1 create a expression function for checking if a number is even
function Even(num) {
  if (num % 2 === 0) {
    console.log("Number is Even");
    return true;
  } else {
    console.log("Number is Odd");
    return false;
  }
}
Even(5);

// Exercise 2.2 converts the function from Exercise 2.1 into an arrow function
const isEven = (num) => {
  const EvenNumber = num % 2 === 0;
  console.log(`Number is ${EvenNumber ? "Even" : "Odd"}`);
  return EvenNumber;
};
isEven(8);