/*Remover espaços.*/

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({input, output});

async function main(){
  const entrada = await rl.question(`Digite uma palavra: `);
  
  let palavraSemEspaco: string = ""
  let i: number;
  for(i = 0; i < entrada.length; i++){
    if(entrada[i] != " "){
      palavraSemEspaco = palavraSemEspaco + entrada[i];
    }
  }
  console.log(`Palavra original: ${entrada}\nPalavra sem espaço: ${palavraSemEspaco}`)
  rl.close();
}
main();