/*Contar pares.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const vetNumeros: number[] = [];

  for(let i = 0; i < 5; i++){
    const entrada = await rl.question(`Digite o ${i+1}º número: `);
    vetNumeros[i] = Number(entrada);
  }

  let numPares: number = 0;
  for(let i = 0; i < vetNumeros.length; i++){
    if(vetNumeros[i] % 2 === 0){
      numPares++
    }
  }
  console.log(`O vetor tem ${numPares} número pares`);
  rl.close();
}
main();