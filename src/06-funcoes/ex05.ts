/*Maior número.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

function maiorNumero(n1: number, n2: number): void{
  if(n1 > n2){
    console.log(`${n1} é maior que ${n2}`);
  }else if(n2 > n1){
    console.log(`${n2} é maior que ${n1}`);
  }else{
    console.log(`${n1} e ${n2} são iguais`);
  }
}

async function main(){
  const entrada1 = await rl.question(`Digite o primeiro número: `);
  const n1 = Number(entrada1);
  const entrada2 = await rl.question(`Digite o segundo número: `);
  const n2 = Number(entrada2)

  maiorNumero(n1, n2);
  rl.close();
}
main();