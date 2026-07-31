/*Somar todos os elementos.*/

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function main() {
  const matriz: number[][] = [
    [1, 2],
    [3, 4],
  ];
  const totalLinhas = matriz.length;
  const totalColunas = matriz[0].length;
  let somaTotal: number = 0;

  let soma: number = 0;
  for(let i = 0; i < totalLinhas; i++){
    for(let j = 0; j < totalColunas; j++){
      somaTotal = somaTotal + matriz[i][j]; 
     }
  }
  console.log(somaTotal);
  rl.close();
}
main();
