/*Encontrar a palavra maior de uma frase.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const frase = await rl.question("Digite uma frase: ");

  let palavraAtual: string = "";
  let maiorPalavra: string = "";

  // Percorre toda a frase caractere por caractere
  for (let i = 0; i < frase.length; i++) {
    const caractere = frase[i]; //acumular os caracteres da palavra

    // Se não for um espaço, estamos dentro de uma palavra
    if (caractere !== " ") {
      palavraAtual = palavraAtual + caractere;
    } 
    
    // Se for um espaço ou se for a ÚLTIMA letra da frase, a palavra terminou
    if (caractere === " " || i === frase.length - 1) {
      // Verifica se a palavra que acabou de terminar é maior que a maior salva
      if (palavraAtual.length > maiorPalavra.length) {
        maiorPalavra = palavraAtual;
      }
      // Limpa a variável para receber a próxima palavra da frase
      palavraAtual = "";
    }
  }

  console.log(`A maior palavra encontrada foi: "${maiorPalavra}"`);
  console.log(`Ela tem ${maiorPalavra.length} letras.`);
  rl.close();
}
main();