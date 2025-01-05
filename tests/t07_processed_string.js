import MiniScanner from "../mini-scanner.js";

const scan = new MiniScanner(`
    "ho\\x41la"
    "mun\\tdo"
    nuevo
    y
    "parad\\u20acisiaco"
`);
scan.setOperatorString('"');

let token = scan.nextToken();

while (token !== MiniScanner.eof) {
    console.log(scan.getLexeme(), token);
    if (scan.getTokenClass() === MiniScanner.string) {
        console.log('\t', scan.getProcessedString());
    }
    token = scan.nextToken();
}