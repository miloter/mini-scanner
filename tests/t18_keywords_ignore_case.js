import MiniScanner from "../mini-scanner.js";

const tStart = Date.now();
const tIf = 0, tThen = 1;
const scan = new MiniScanner(
    'hola if mundo then nuevo, if que then nos If hace Then caso', false);

scan.addKeyword(tIf, 'if');
scan.addKeyword(tThen, 'then');

let token = scan.nextToken();
let count = 0;
while (token !== MiniScanner.eof) {
    if (scan.getTokenClass() === MiniScanner.keyword) {
        console.log(scan.getLexeme());
    }
    token = scan.nextToken();
    count++;
}
console.log(count);
console.log((Date.now() - tStart) + "ms");