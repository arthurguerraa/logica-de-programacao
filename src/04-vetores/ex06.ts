/*Inverter o vetor.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const vetOriginal: number[] = [1,2,3,4,5];
  const vetInvertido: number[] = [];

  let j: number = 0;
  for(let i = vetOriginal.length - 1; i >= 0; i--){
      vetInvertido[j] = vetOriginal[i]; 
      j++;
    }
    console.log(`${vetOriginal}\n${vetInvertido}`);
    rl.close();
}
main();
  