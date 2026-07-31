/*Juntar dois vetores.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const vet1: number[] =;
  const vet2: number[] =;
  const vetJunto: number[] = [];

  // Laço 1: Copia todos os elementos do primeiro vetor
  for (let i = 0; i < vet1.length; i++) {
    vetJunto[i] = vet1[i];
  }

  // Laço 2: Copia os elementos do segundo vetor nas posições seguintes
  for (let i = 0; i < vet2.length; i++) {
    // Usamos (vet1.length + i) para começar a gravar logo após o fim do primeiro vetor
    vetJunto[vet1.length + i] = vet2[i];
  }

  console.log("Vetor final juntado:", vetJunto); // Saída: [1, 2, 3, 4, 5, 6]
  
  rl.close();
}
main();