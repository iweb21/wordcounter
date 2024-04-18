#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "Sentence",
        message: "Enter your sentence to count the word:"
    }
]);
const words = answer.Sentence.trim().split(" ");
console.log(`Your sentence word count is:,${words.length}`);
console.log(words);
