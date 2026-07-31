/*Verifique se um ano é bissexto.*/

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function main() {
  const entrada = await rl.question("Digite um ano: ");
  const ano = Number(entrada);

  if (ano % 4 === 0 && ano % 100 !== 0) {
    console.log(`${ano} é bissexto!`);
  } else if (ano % 100 === 0 && ano % 400 === 0) {
    console.log(`${ano} é bissexto!`);
  } else {
    console.log(`${ano} não é bissexto!`);
  }
  rl.close();
}
main();
