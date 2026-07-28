/*Contar quantas vezes uma letra aparece.*/

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const palavra = await rl.question(`Digite uma palavra: `);
  const letra = await rl.question(`Digite a letra que deseja contabilizar: `);

  let cont: number = 0;
  let i: number;
  for(i = 0; i < palavra.length; i++){
    if(palavra[i] === letra){
      cont++
    }
  }
  console.log(`Palavra digitada ${palavra}\nA letra ${letra} aparece ${cont} vezes`);
  rl.close();
}
main();