/*Transpor matriz.*/

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function main() {
  const matriz: number[][] = [
    [1, 2],
    [3, 4],
  ];
  // 1. Descobrir o tamanho da matriz original
  const totalLinhas = matriz.length;
  const totalColunas = matriz[0].length;

  // 2. Criar uma nova matriz vazia para receber o resultado transposto
  const transposta: number[][] = [];

  // 3. O laço de fora percorre as COLUNAS da matriz original
  for (let j = 0; j < totalColunas; j++) {
    // Criar uma nova linha vazia para a matriz transposta
    const novaLinha: number[] = [];

    // 4. O laço de dentro percorre as LINHAS da matriz original
    for (let i = 0; i < totalLinhas; i++) {
      // Adiciona o elemento invertendo a posição (i vira coluna)
      novaLinha[novaLinha.length] = matriz[i][j];
    }

    // Adiciona a nova linha preenchida na matriz transposta
    transposta[transposta.length] = novaLinha;
  }
  console.log(transposta);
  rl.close();
}
main();
