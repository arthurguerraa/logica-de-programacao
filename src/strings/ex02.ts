/*Inverter uma string.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const entrada = await rl.question(`Digite uma palavra: `);

  let palavraInvertida: string = "";
  let i: number;
  for(i = entrada.length - 1; i >= 0; i--){
    palavraInvertida = palavraInvertida + (entrada[i]);
  }
  console.log(`Palavra normal: ${entrada}\nPalavra invertida: ${palavraInvertida}`);
  rl.close();
}
main();