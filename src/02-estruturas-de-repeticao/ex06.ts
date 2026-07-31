/*Contar quantos números pares existem entre 1 e N.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main (){
  const entrada = await rl.question("Digite um número para descobrir quantos números pares tem entre ele e o número 1: ");
  const n1 = Number(entrada);

  let i: number;
  let cont: number = 0;
  for(i = 1; i <= n1; i++){
    if(i % 2 === 0){
      cont++;
    }
  }
  console.log(`Entre 1 e ${n1} existem ${cont} números pares`);
  rl.close();
}
main();