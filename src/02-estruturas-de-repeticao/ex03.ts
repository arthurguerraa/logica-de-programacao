/*Somar todos os números de 1 até N.*/

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function main() {
  const entrada = await rl.question(
    "Digite o número até onde você quer somar: ",
  );
  const n1 = Number(entrada);

  let i: number;
  let soma: number = 0;
  for (i = 1; i <= n1; i++) {
    soma = i + soma;
  }
  console.log(`A soma de 1 até ${n1} é de ${soma}`);
  rl.close();
}
main();
