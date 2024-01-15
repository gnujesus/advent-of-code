import { log } from "console";
import * as fs from "fs";

// TODO: there must be a more efficient way to do this

fs.readFile("./day-1-input.txt", "utf8", (err, data: string) => {
  if (err) {
    console.log(err);
    return;
  }

  let total: number = 0;

  const numberRegex: RegExp = /\d/;

  let textLine: Array<string> = data.split("\n");

  // Too complex, but works at last
  textLine.forEach((element) => {
    let digits: string = "";

    for (let i: number = 0; i < element.length; i++) {
      if (numberRegex.test(element[i])) {
        digits += element[i];
      }
    }

    //* At first I though I had to sum the first and last digit, and then sum that to the total
    //* What I had to do was form a two digit number with the first and last digit of the string, and sum that to the total

    // ! Nullish coalescing operator to avoid null or undefined
    const score = `${digits.at(0) ?? "0"}${digits.at(-1) ?? 0}`;
    total += parseInt(score);
  });
});
