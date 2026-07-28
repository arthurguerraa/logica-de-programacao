/*Colocar todas as letras em maiúsculas.*/

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const entrada = await rl.question(`Digite uma palavra: `);

  let palavraMaiuscula: string = "";
 
  for (let i = 0; i < entrada.length; i++) {
    // 1. Pega o código numérico ASCII da letra atual
    let codigoAscii = entrada.charCodeAt(i);

    // 2. Verifica se o caractere é uma letra minúscula (entre 'a' e 'z')
    // Na tabela ASCII, o 'a' é 97 e o 'z' é 122
    if (codigoAscii >= 97 && codigoAscii <= 122) {
      // Subtrai 32 para transformar na versão maiúscula correspondente
      codigoAscii = codigoAscii - 32;
    }

    // 3. Converte o novo código numérico de volta para caractere
    const letraMaiuscula = String.fromCharCode(codigoAscii);

    // 4. Junta a nova letra na string final
    palavraMaiuscula = palavraMaiuscula + letraMaiuscula;
  }

  console.log(`Palavra em maiúsculo: ${palavraMaiuscula}`);
  rl.close();
}

main();