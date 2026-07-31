/*Ordenar (Bubble Sort).*/

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function main() {
  const vetNumeros: number[] = [3, 1, 5, 2, 4];

  // Laço externo: controla quantas vezes vamos passar pelo vetor
  for (let i = 0; i < vetNumeros.length; i++) {

    // Laço interno: compara os elementos vizinhos
    // Vai até (tamanho - 1 - i) porque os últimos elementos já estarão ordenados
    for (let j = 0; j < vetNumeros.length - 1 - i; j++) {

      // Se o elemento atual for maior que o próximo, eles trocam de lugar
      if (vetNumeros[j] > vetNumeros[j + 1]) {
        
        // Lógica de troca (Swap) usando variável temporária
        let temp = vetNumeros[j];
        vetNumeros[j] = vetNumeros[j + 1];
        vetNumeros[j + 1] = temp;
      }
    }
  }
  console.log(`Vetor ordenado: ${vetNumeros}`);
  rl.close();
}
main();
