import { reverseString, countCharacters, mostVowels } from "./stringUtils";
import fs from 'fs';
import path from "path";

//part 2
const answer = reverseString('why the node.js is important');
const answerLetters = countCharacters(answer);
console.log(answer, 'letter count:', answerLetters);

//part 3

fs.writeFileSync('reversed.txt', answer);
console.log('file written successfully');

const filepath: string = path.join(__dirname, 'reversed.txt');
console.log(filepath);
