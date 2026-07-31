/*Calcule a média de quatro notas.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const entrada1 = await rl.question("Digite a 1ª nota: ");
  const nota1 = Number(entrada1);
  const entrada2 = await rl.question("Digite a 2ª nota: ");
  const nota2 = Number(entrada2);
  const entrada3 = await rl.question("Digite a 3ª nota: ");
  const nota3 = Number(entrada3);
  const entrada4 = await rl.question("Digite a 4ª nota: ");
  const nota4 = Number(entrada4);

  let media = 0;

  media = ((nota1 + nota2 + nota3 + nota4) / 4);

  console.log(`Nota 1: ${nota1}\nNota 2: ${nota2}\nNota 3: ${nota3}\nNota 4:${nota4}\nMédia final: ${media}`);
  rl.close();
}
main();