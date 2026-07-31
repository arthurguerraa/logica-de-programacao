/*Encontrar maior elemento.*/

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function main() {
  const matriz: number[][] = [
    [1, 2],
    [3, 4],
  ];
  let maiorElemento: number = matriz[0][0];

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      if (matriz[i][j] > maiorElemento) {
        maiorElemento = matriz[i][j];
      }
    }
  }
  console.log(`O maior elemento da matriz é ${maiorElemento}`);
  rl.close();
}
main();
