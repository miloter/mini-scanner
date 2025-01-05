import MiniScanner from "../mini-scanner.js";

const scan = new MiniScanner('hola mundo\n nuevo \r\n que nos \t traes');

let token = scan.nextToken();

while (token === MiniScanner.ident) {
    console.log(scan.getLexeme());
    token = scan.nextToken();
}