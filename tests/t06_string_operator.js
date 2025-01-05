import MiniScanner from "../mini-scanner.js";

const scan = new MiniScanner(`
    hola
    "mundo"
    nuevo
    y
    "paradisiaco"
`);
scan.setOperatorString('"');

let token = scan.nextToken();

while (token !== MiniScanner.eof) {
    console.log(scan.getLexeme(), token);
    token = scan.nextToken();
}