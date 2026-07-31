/*Tabuada de um número.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const entrada = await rl.question("Digite o número para descobrir a sua tabuada: ");
  const n1 = Number(entrada);

  let i: number;
  let tabuada: number;
  for(i = 1; i <= 10; i++){
    tabuada = n1 * i
    console.log(`${n1}x${i}=${tabuada}`);  
  }
  rl.close();
}
main();