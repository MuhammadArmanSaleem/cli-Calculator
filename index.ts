#! /usr/bin/env node   
import inquirer from "inquirer"; 
const answer = await inquirer.prompt([ 
  { message: "Enter your First Number", type: "number", name: "FirstNumber" },
  { message: "Enter your Second Number", type: "number", name: "SecondNumber" },
  {
    message: "Select on of the Operator to perform Operations",
    type: "list",
    name: "Operator",
    choices: [
      "Addition",
      "Multiplication",
      "Subtraction",
      "Division",
      "Remainder/Modulus",
    ],
  },
]);
//Conditional Statment
if (answer.Operator === "Addition") {
    console.log("Your Value is :");
    console.log(answer.FirstNumber + answer.SecondNumber);
}
if (answer.Operator === "Subtraction") {
    console.log("Your Value is :");
    console.log(answer.FirstNumber - answer.SecondNumber);
}
if (answer.Operator === "Multiplication") {
    console.log("Your Value is :");
    console.log(answer.FirstNumber * answer.SecondNumber);
}
if (answer.Operator === "Division") {
    console.log("Your Value is :");
    console.log(answer.FirstNumber / answer.SecondNumber);
}
if (answer.Operator === "Remainder/Modulus") {
    console.log("Your Value is :");
    console.log(answer.FirstNumber % answer.SecondNumber);
}