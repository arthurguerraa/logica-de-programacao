/*Verificar se é palíndromo.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const entrada = await rl.question(`Digite uma palavra: `);

  let palindromo: string = "";
  let i: number;
  for(i = entrada.length - 1; i >= 0; i--){
    palindromo = palindromo + (entrada[i]);
  }
  if(palindromo === entrada){
    console.log(`Normal: ${entrada}\nInvertida: ${palindromo}\nÉ PALÍNDROMO!`);
  }else{
    console.log(`Normal: ${entrada}\nInvertida: ${palindromo}\nNÃO É PALÍNDROMO!`);
  }
  rl.close();
}
main();