/*Fatorial*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

function fatorial(n1: number){
  for(let i = n1; i > 1; i--){
    let fatorialNumero = n1 * i
    return fatorialNumero;
  }
  
}

async function main(){
  const entrada = await rl.question(`Digite um número para descobrir seu fatorial: `);
  const n1 = Number(entrada);
  const resultado = fatorial(n1);
  console.log(`O fatorial de ${n1} é ${resultado}`);
  rl.close;
}
main();