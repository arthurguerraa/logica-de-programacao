/*Mostrar o maior.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const vetNumeros: number[] = [];

  for(let i = 0; i < 5; i++){
    const entrada = await rl.question(`Digite o ${i+1}º número: `);
    vetNumeros[i] = Number(entrada);
  }

  let maiorNumero: number = vetNumeros[0];

  for(let i = 0; i < vetNumeros.length; i++){''
    if(vetNumeros[i] > maiorNumero){
      maiorNumero = vetNumeros[i];
    }
  }
  console.log(`O maior número digitado foi ${maiorNumero}`);
  rl.close();
}
main();