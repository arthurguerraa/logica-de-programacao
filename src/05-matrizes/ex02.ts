/*Somar diagonal principal.*/

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function main() {
  const matriz: number[][] = [
    [1, 2],
    [3, 4],
  ];
  let somaDiagonalPrincipal: number = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      if (i === j) {
        somaDiagonalPrincipal = somaDiagonalPrincipal + matriz[i][j];
      }
    }
  }
  console.log(`Soma da diagonal principal: ${somaDiagonalPrincipal}`);
  rl.close();
}
main();
