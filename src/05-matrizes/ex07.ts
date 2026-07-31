/*Multiplicar matrizes.*/

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function main() {
  const matriz1: number[][] = [
    [1, 2],
    [3, 4],
  ];
  const matriz2: number[][] = [
    [5, 6],
    [7, 8],
  ];
  const matriz3: number[][] = [[],[]];

  const totalLinhas = matriz1.length;
  const totalColunas = matriz1[0].length;

  for (let i = 0; i < totalLinhas; i++) {
    for (let j = 0; j < totalColunas; j++) {
      matriz3[i][j] = matriz1[i][j] * matriz2[i][j];
    }
  }
  console.log(`Matrizes multiplicadas: ${matriz3}`);
  rl.close();
}
main();
