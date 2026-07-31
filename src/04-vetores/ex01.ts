/*Ler 10 números.*/

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function main() {
  const vetNumeros: number[] = []; //decclarei o vetor como vazio

  console.log("Digite 10 números: ");

  for (let i = 0; i < 10; i++) {
    const entrada = await rl.question(`Digite o ${i + 1}º número: `);
    vetNumeros[i] = Number(entrada);
  }
  console.log(`\nOs 10 números foram armazenados com sucesso!`);
  console.log(vetNumeros);
  rl.close();
}
main();
