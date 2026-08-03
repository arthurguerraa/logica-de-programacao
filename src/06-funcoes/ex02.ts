/*Fazer um jogo de adivinhação.*/

import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

function sortearNumero(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
async function main(){
  const resultado1: number = sortearNumero(1, 10);
}