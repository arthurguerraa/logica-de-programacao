/*Contar consoantes.*/

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function main() {
  const entrada = await rl.question(`Digite uma palavra: `);

  let cont: number = 0;
  let i: number;
  for (i = 0; i < entrada.length; i++) {
    if (entrada[i] != "a" && entrada[i] != "e" && entrada[i] != "i" && entrada[i] != "o" && entrada[i] != "u") {
      cont++;
    }
  }
  console.log(`Palavra digitada: ${entrada}\nConsoantes encontradas: ${cont}`);
  rl.close();
}
main();
