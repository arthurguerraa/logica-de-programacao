/*Descobrir se um número é primo*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

function ehPrimo(n1: number): boolean{
  if(n1 <= 1) return false;
  if(n1 === 2) return true;
  if(n1 % 2 === 0) return false;

  const limite = Math.sqrt(n1);
  for(let i = 3; i <= limite; i = i + 2){
    if(n1 % i === 0){
      return false;
    }
  }

  return true;
}

async function main(){
  const entrada = await rl.question(`Digite um número para descobrir se ele é primo: `);
  const n1 = Number(entrada);

   if (isNaN(n1)) {
    console.log("Por favor, digite um número válido.");
  } else if (ehPrimo(n1)) {
    console.log(`${n1} é primo!`);
  } else {
    console.log(`${n1} não é primo!`);
  }
  
  rl.close();
}
main();