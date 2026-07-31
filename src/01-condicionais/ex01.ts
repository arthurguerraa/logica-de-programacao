/*Leia um número e informe se é positivo ou negativo.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const entrada = await rl.question("Digite um número: ");
  const numero = Number(entrada);

  if(numero % 2 === 0){
    console.log(`${numero} é par.`);
  }else{
    console.log(`${numero} é ímpar.`);
  }
  rl.close();
}
main();