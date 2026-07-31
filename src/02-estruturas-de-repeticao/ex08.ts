/*Descobrir o maior número digitado.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  let maior: number = 0;
  let i: number;
  for(i = 1; i <= 5; i++){
    const entrada = await rl.question("Digite um número: ");
    let n1 = Number(entrada);
    if(n1 > maior){
      maior = n1;
    }
  }
  console.log(`O maior número digitado foi: ${maior}`);
  rl.close();
}
main();