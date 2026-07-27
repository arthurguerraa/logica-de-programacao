/*Converta Celsius para Fahrenheit.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const entrada = await rl.question("Digite a temperatura em Celsius: ");
  const celsius = Number(entrada);

  let fahrenheit = 0;

  fahrenheit = (((celsius * 9) / 5) + 32);

  console.log(`Temperatura em Celsius: ${celsius}\nTemperatura em Fahrenheit: ${fahrenheit}`);
  rl.close();
}
main();