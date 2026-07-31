/*Contar letras de uma palavra.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const entrada = await rl.question(`Digite uma palavra: `);

  let i: number;
  let cont: number = 0;
  for(i = 0; i < entrada.length; i++){
    cont++;
  }
  console.log(`A palavra ${entrada} tem ${cont} letras.`);
  rl.close();
}
main();