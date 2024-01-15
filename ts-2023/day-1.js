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
fs.readFile("./day-1-input.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    let total = 0;
    const numberRegex = /\d/;
    let textLine = data.split("\n");
    // Too complex, but works at last
    textLine.forEach((element) => {
        var _a, _b;
        let digits = "";
        for (let i = 0; i < element.length; i++) {
            if (numberRegex.test(element[i])) {
                digits += element[i];
            }
        }
        const score = `${(_a = digits.at(0)) !== null && _a !== void 0 ? _a : "0"}${(_b = digits.at(-1)) !== null && _b !== void 0 ? _b : 0}`;
        total += parseInt(score);
    });
    console.log(total);
});
