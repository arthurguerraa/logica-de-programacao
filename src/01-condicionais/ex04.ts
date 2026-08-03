/*Descubra se um número é par ou ímpar.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const entrada = await rl.question("Digite um número: ");
  const n1 = Number(entrada);

  if(n1 % 2 === 0 && n1 !== 0){
    console.log(`${n1} é par!`);
  }else if(n1 === 0){
    console.log(`${n1} é 0!`);
  }else{
    console.log(`${n1} é ímpar!`);
  }
  rl.close();
}
main();