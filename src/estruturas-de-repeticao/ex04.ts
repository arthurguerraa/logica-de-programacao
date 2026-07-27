/*Calcular o fatorial.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const entrada = await rl.question("Digite o número para descobrir o seu fatorial: ");
  const n1 = Number(entrada);

  let i: number;
  let fatorial: number = n1;
  for(i = (n1 - 1); i >= 2; i--){
    fatorial = fatorial * i;
  }
  console.log(`O fatorial de ${n1} é ${fatorial}`);

  rl.close();
}

main();