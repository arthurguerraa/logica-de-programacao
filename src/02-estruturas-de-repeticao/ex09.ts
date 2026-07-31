/*Calcular a média dos valores digitados.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){ 
  let i: number;
  let acumulador: number = 0;
  let media: number;
  for(i = 1; i <= 4; i++){
    const entrada = await rl.question(`Digite a ${i}ª nota: `);
    const nota = Number(entrada);
    acumulador = nota + acumulador
  }
  media = acumulador / 4;
  console.log(`A média final é de: ${media}`);
  rl.close();
}
main();