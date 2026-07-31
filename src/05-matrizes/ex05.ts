/*Encontrar menor elemento.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const matriz: number[][] = [[4,1],[2,5]];
  const totalLinhas = matriz.length;
  const totalColunas = matriz[0].length;
  let menorNumero: number = matriz[0][0];

  for(let i = 0; i < totalLinhas; i++){
    for(let j = 0; j < totalColunas; j++){
      if(matriz[i][j] < menorNumero){
        menorNumero = matriz[i][j];
      }
    }
  }
  console.log(`Menor número da matriz: ${menorNumero}`);
  rl.close();
}
main();