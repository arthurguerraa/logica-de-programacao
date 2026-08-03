/*Fazer um jogo de adivinhação.*/

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

function sortearNumero(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function verificaNumero(numeroSorteado: number) {
  let acertou = false;
  do {
    const entrada = await rl.question(`Adivinhe o número sorteado (entre 1 e 10): `);
    const palpite = Number(entrada);
    if (palpite === numeroSorteado) {
      console.log(`Número sorteado: ${numeroSorteado}\nSeu palpite: ${palpite}\nAcertou!`);
      acertou = true;
    } else {
      console.log(`Errou, tente novamente!\n`);
    }
  } while (!acertou);
  rl.close();
}

async function main() {
  const numeroSorteado: number = sortearNumero(1, 10);
  await verificaNumero(numeroSorteado);
}
main();

/*O código está correto porém o coderunner não se dá bem com readline em algumas situações por isso executando com CTRL + SHIFT + B causa um looping infinito, execute como "npx tsx src/06-funcoes/ex02-obs.ts"*/