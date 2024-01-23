import * as fs from "fs";

// TODO: there must be a more efficient way to do this

// Reveives file, encoding and a callback function
fs.readFile("./day-1-input.txt", "utf8", (err, data: string) => {
  if (err) {
    console.log(err);
    return;
  }

  let total: number = 0;

  const line: Array<string> = data.split("\n");

  line.map((line): void => {
    total += filterLine(line);
  });

  console.log(total);
});

const filterLine = (line: string): number => {
  let ans: string = "";
  let digits: Array<string> = [];
  let value: string = "";

  const digitRegexp: RegExp = /\d/gi;
  const wordRegexp: RegExp = /(one|two|three|four|five|six|seven|eight|nine)/gi;
  const wordNumbersMap: Map<string, string> = new Map<string, string>();
  wordNumbersMap.set("one", "1");
  wordNumbersMap.set("two", "2");
  wordNumbersMap.set("three", "3");
  wordNumbersMap.set("four", "4");
  wordNumbersMap.set("five", "5");
  wordNumbersMap.set("six", "6");
  wordNumbersMap.set("seven", "7");
  wordNumbersMap.set("eight", "8");
  wordNumbersMap.set("nine", "9");
  wordNumbersMap.set("", "");

  console.log(line);

  for (let i = 0; i < line.length + 1; i++) {
    value = digits.join("");

    if (value.match(digitRegexp)) {
      const match = value.match(digitRegexp);
      ans += match ? match[0] : "";
      console.log(ans);
      value = "";
      digits = [];
      break;
    } else if (value.match(wordRegexp)) {
      const match = value.match(wordRegexp);
      ans += match ? wordNumbersMap.get(match[0]) : "";
      console.log(ans);
      value = "";
      digits = [];
      break;
    }

    digits.push(line[i]);
  }

  // Had to write -2 here to handle it. There was a test case (3hree) that wasn't being handled correctly

  for (let i = line.length + 1; i >= -1; i--) {
    value = digits.join("");
    console.log(`value: ${value}`);

    if (value.match(digitRegexp)) {
      const match = value.match(digitRegexp);
      ans += match ? match[0] : "";
      console.log(ans);
      value = "";
      digits = [];
      break;
    } else if (value.match(wordRegexp)) {
      const match = value.match(wordRegexp);
      ans += match ? wordNumbersMap.get(match[0]) : "";
      console.log(ans);
      value = "";
      digits = [];
      break;
    }

    digits.unshift(line[i]);
  }

  return ans ? parseInt(ans) : 0;
};
