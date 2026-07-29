/*Mostrar o maior.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const vetNumeros: number[] = [];

  for(let i = 0; i < 5; i++){
    const entrada = await rl.question(`Digite o ${i+1}º número: `);
    vetNumeros[i] = Number(entrada);
  }

    // Inicialização: assume que o primeiro item é o maior.
  // O '?? 0' garante que, se o vetor estiver vazio, a variável comece com 0.
  let maiorNumero: number = vetNumeros[0] ?? 0;

  // O laço percorre todo o vetor do índice 0 até o último elemento
  for (let i = 0; i < vetNumeros.length; i++) {
    
    // EXPLICAÇÃO DO ERRO DE ANTES:
    // O TypeScript tem medo de que 'vetNumeros[i]' não exista na memória (retornando undefined).
    // Para resolver isso, usamos o operador '?? 0' (coalescência nula).
    // Ele diz à IDE: "Tente ler a posição 'i'. Se ela não existir, use o número 0".
    // Isso força a constante 'numeroAtual' a ser estritamente do tipo 'number'.
    const numeroAtual: number = vetNumeros[i] ?? 0;

    // Como 'numeroAtual' agora é um 'number' garantido, a comparação funciona sem erros
    if (numeroAtual > maiorNumero) {
      // Como 'maiorNumero' também é 'number', a atribuição é aceita perfeitamente
      maiorNumero = numeroAtual; 
    }
  }
  console.log(`O maior número digitado foi ${maiorNumero}`);
  rl.close();
}
main();