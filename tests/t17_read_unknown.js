import { readFile } from 'node:fs/promises';
import MiniScanner from "../mini-scanner.js";

const tStart = Date.now();
const text = await readFile('tests/unknown.txt', { encoding: 'utf-8' });
const sc = new MiniScanner(text);

let token = sc.nextToken();
let count = 0;
while (token !== MiniScanner.eof) {
    if (token === MiniScanner.uknown) {
        console.log(sc.getLexeme());
    }
    token = sc.nextToken();
    count++;
}
console.log(count);
console.log((Date.now() - tStart) + "ms");