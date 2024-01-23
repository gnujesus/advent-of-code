"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
// TODO: there must be a more efficient way to do this
// Reveives file, encoding and a callback function
fs.readFile("./day-1-input.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    let total = 0;
    const line = data.split("\n");
    line.map((line) => {
        total += filterLine(line);
    });
    console.log(total);
});
const filterLine = (line) => {
    let ans = "";
    let digits = [];
    let value = "";
    const digitRegexp = /\d/gi;
    const wordRegexp = /(one|two|three|four|five|six|seven|eight|nine)/gi;
    const wordNumbersMap = new Map();
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
        }
        else if (value.match(wordRegexp)) {
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
        }
        else if (value.match(wordRegexp)) {
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
