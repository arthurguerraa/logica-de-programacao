/*Verificar se duas palavras são anagramas.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const palavra1 = await rl.question("Digite a 1ª palavra: ");
  const palavra2 = await rl.question("Digite a 2ª palavra: ");

  if(palavra1.length !== palavra2.length){
    console.log("Não são anagramas (tamanhos diferentes.");
    rl.close();
    return
  }

  let ehAnagrama = true;

  // 2. Percorre cada letra da primeira palavra usando índices simples
  for (let i = 0; i < palavra1.length; i++) {
    const letraAtual = palavra1[i];

    let contagemNaPalavra1 = 0;
    let contagemNaPalavra2 = 0;

    // Conta quantas vezes a letra atual aparece na palavra 1
    for (let j = 0; j < palavra1.length; j++) {
      if (palavra1[j] === letraAtual) {
        contagemNaPalavra1++;
      }
    }

    // Conta quantas vezes a letra atual aparece na palavra 2
    for (let k = 0; k < palavra2.length; k++) {
      if (palavra2[k] === letraAtual) {
        contagemNaPalavra2++;
      }
    }

    // 3. Se a quantidade de vezes que a letra aparece for diferente, falhou!
    if (contagemNaPalavra1 !== contagemNaPalavra2) {
      ehAnagrama = false;
      break; // Interrompe o laço principal porque já sabemos que está errado
    }
  }

  // 4. Exibe o veredito final
  if (ehAnagrama) {
    console.log(`As palavras "${palavra1}" e "${palavra2}" SÃO anagramas!`);
  } else {
    console.log(`As palavras "${palavra1}" e "${palavra2}" NÃO são anagramas.`);
  }
  rl.close();
}
main();