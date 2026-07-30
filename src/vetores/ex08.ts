/*Procurar um elemento.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const vetNumeros: number[] = [2,5,1,3,4];

  const entrada = await rl.question("Qual número (1 à 5) você quer encontrar?: ");
  const numero = Number(entrada);

  for(let i = 0; i < vetNumeros.length; i++){
    if(vetNumeros[i] === numero){
      console.log(`O número ${numero} está na posição ${i}`);
    }
  }
  rl.close();
}
main();