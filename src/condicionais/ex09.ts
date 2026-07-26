/*Converta horas em minutos e segundos.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const entrada = await rl.question("Digite o tempo em horas: ");
  const hora = Number(entrada);

  let minutos = hora * 60;
  let segundos = hora * 3600;

  console.log(`Horas: ${hora}\nMinutos: ${minutos}\nSegundos: ${segundos}`);

  rl.close();
}

main();