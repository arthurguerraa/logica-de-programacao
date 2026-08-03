/*Faça uma calculadora (+ - * /)*/

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

function calculadora(n1: number, n2: number, operacao: string) {
  if (operacao === "+") return n1 + n2;
  if (operacao === "-") return n1 - n2;
  if (operacao === "*") return n1 * n2;
  if (operacao === "/") return n1 / n2;
  return 0;
}

async function main() {
  const entrada1 = await rl.question("Digite o 1º valor: ");
  const n1 = Number(entrada1);
  const operacao = await rl.question("Digite a operação [+,-,/,*]: ");
  const entrada2 = await rl.question("Digite o 2º valor: ");
  const n2 = Number(entrada2);

  const resultado = calculadora(n1, n2, operacao);
  console.log(`Soma: ${resultado}`);
  rl.close();
}
main();
