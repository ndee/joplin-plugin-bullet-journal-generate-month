import { writeFileSync } from "fs";
import { generateMonth } from "./generateMonthMarkdown";

const result = generateMonth(2023, 3);
console.log({result});

writeFileSync("./month.md", result, { encoding: "utf-8"});