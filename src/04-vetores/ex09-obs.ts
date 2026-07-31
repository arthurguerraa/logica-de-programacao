/*Remover elementos repetidos.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main() {
  
 // Vetor de teste com números duplicados
  const vetOriginal: number[] = [1,1,2,3,4,4,5,6,7,8];
  const vetSemRepetidos: number[] = [];
  
  let posicaoNovoVetor = 0;

  // Laço 1: Percorre cada item do vetor original
  for (let i = 0; i < vetOriginal.length; i++) {
    let jaExiste = false;

    // Laço 2: Varre o vetor novo para ver se o número atual já foi guardado ali
    for (let j = 0; j < posicaoNovoVetor; j++) {
      if (vetSemRepetidos[j] === vetOriginal[i]) {
        jaExiste = true; // Sinaliza que o número é repetido
        break;           // Interrompe este laço interno, pois já encontramos
      }
    }

    // Se a varredura terminou e o número NÃO existe no novo vetor, nós o adicionamos
    if (!jaExiste) {
      vetSemRepetidos[posicaoNovoVetor] = vetOriginal[i];
      posicaoNovoVetor++; // Avança o índice do novo vetor manualmente
    }
  }

  console.log("Vetor sem repetidos:", vetSemRepetidos); // Saída: [1, 2, 3, 4, 5]
  
  rl.close();
}

main();