/*Ler números até o usuário digitar 0.*/

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function main() {
  let contador = 1;
  do {
    const entrada = await rl.question("Digite um número: ");
    let n1 = Number(entrada);
    if (n1 === 0) {
      contador = 0;
    }
  } while (contador != 0);

  rl.close();
}

main();
