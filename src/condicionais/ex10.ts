/*Faça uma calculadora (+ - * /)*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const entrada1 = await rl.question("Digite o 1º valor: ");
  const n1 = Number(entrada1);
  const entrada2 = await rl.question("Digite o 2º valor: ");
  const n2 = Number(entrada2);

  let soma = n1 + n2;
  let subtracao = n1 - n2;
  let multiplicacao = n1 * n2;
  let divisao = n1 / n2;

  console.log(`${n1} + ${n2} = ${soma}\n${n1} - ${n2} = ${subtracao}\n${n1} * ${n2} = ${multiplicacao}\n${n1} / ${n2} = ${divisao}`);

  rl.close();
}

main();