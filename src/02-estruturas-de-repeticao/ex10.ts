/*Fazer um jogo de adivinhação.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  function sortearNumero(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const resultado1: number = sortearNumero(1, 10);

let contador: number = 1;
do{
  const entrada = await rl.question(`Adivinhe o número sorteado pelo computador: `)
  const n1 = Number(entrada);
  if(n1 === resultado1){
    console.log(`Número sorteado: ${resultado1}\nSeu palpite: ${n1}\nAcertou!`);
    contador = 0
  }else{
    console.log(`Errou, tente novamente!`);
  }
}while(contador != 0);
rl.close();
}
main();