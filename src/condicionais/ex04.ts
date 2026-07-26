/*Leia um número e informe se é positivo ou negativo.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const entrada = await rl.question("Digite um número: ");
  const n1 = Number(entrada);

  if(n1 > 0 ){
    console.log(`${n1} é positivo`);
  }else if(n1 < 0 ){
    console.log(`${n1} é negativo`);
  }else{
    console.log(`${n1} é 0`);
  }

  rl.close();
}

main();