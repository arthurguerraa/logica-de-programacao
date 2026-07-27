/*Leia dois números e mostre o maior.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const entrada1 = await rl.question("Digite o 1º número: ");
  const n1 = Number(entrada1);
  const entrada2 = await rl.question("Digite o 2º número: ");
  const n2 = Number(entrada2);

  if(n1 > n2){
    console.log(`${n1} é maior que ${n2}`);
  }else if (n2 > n1){
    console.log(`${n2} é maior que ${n1}`);
  }else{
    console.log(`${n1} e ${n2} são iguais!`);
  }
  rl.close();
}
main();