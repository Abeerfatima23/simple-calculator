#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    { message: "enter third number", type: "number", name: "thirdnumber" },
    {
        message: "select one of the operator to continue operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional sentence
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber + answer.thirdnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber - answer.thirdnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber * answer.thirdnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber / answer.thirdnumber);
}
else {
    console.log("please select valid operator");
}
