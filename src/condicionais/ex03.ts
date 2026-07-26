/*Leia três números e mostre o maior e o menor.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const entrada1 = await rl.question("Digite o 1º número: ");
  const n1 = Number(entrada1);
  const entrada2 = await rl.question("Digite o 2º número: ");
  const n2 = Number(entrada2);
  const entrada3 = await rl.question("Digite o 3º número: ");
  const n3 = Number(entrada3);

  let maior: number = 0;
  let menor: number = 0;

  if(n1 > n2 && n1 > n3){
    maior = n1;
  }else if(n2 > n1 && n2 > n3){
    maior = n2;
  }else if(n3 > n1 && n3 > n2){
    maior = n3;
  }

  if(n1 < n2 && n1 < n3){
    menor = n1;
  }else if(n2 < n1 && n2 < n3){
    menor = n2;
  }else if(n3 < n1 && n3 < n2){
    menor = n3;
  }

  console.log(`Maior número: ${maior}\nMenor número: ${menor}`);

  rl.close();
}

main();