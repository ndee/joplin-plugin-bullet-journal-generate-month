import { writeFileSync } from "fs";
import { generateMonth } from "./generateMonthMarkdown";

const result = generateMonth();
console.log({result});

writeFileSync("./month.md", result, { encoding: "utf-8"});