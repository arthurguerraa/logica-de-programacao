/*Calcule o IMC.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const entrada1 = await rl.question("Digite sua altura em metros: ");
  const altura = Number(entrada1);
  const entrada2 = await rl.question("Digite seu peso em kilos: ");
  const peso = Number(entrada2);

  let imc: number = 0;

  imc = (peso/(altura**2));

  console.log(`Seu peso: ${peso}\nSua altura: ${altura}\nSeu IMC: ${imc}`);
  rl.close();
}
main();