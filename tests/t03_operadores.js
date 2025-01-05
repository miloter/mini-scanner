import MiniScanner from "../mini-scanner.js";

const tPlus = 0, tMinus = 1, tMul = 2, tDiv = 3, tEqu = 4, tEquStrict = 5;

const scan = new MiniScanner(
    'hola + mundo - nuevo * vida / salud == buen === provecho == diario');
scan.addOperator(tPlus, '+');
scan.addOperator(tMinus, '-');
scan.addOperator(tMul, '*');
scan.addOperator(tDiv, '/');
scan.addOperator(tEqu, '==');
scan.addOperator(tEquStrict, '===');

let token = scan.nextToken();

while (token === MiniScanner.ident || scan.getTokenClass() === MiniScanner.operator) {
    if (token === MiniScanner.ident) console.log('ident');
    if (scan.getTokenClass() === MiniScanner.operator) console.log('operator');
    console.log('\t', scan.getLexeme(), '(', token, ')');

    token = scan.nextToken();
}