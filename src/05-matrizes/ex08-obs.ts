/*Jogo da velha*/
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function main() {
  // 1. Criação do tabuleiro (Matriz 3x3)
  let tabuleiro: string[][] = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];

  let jogadorAtual: string = "X";
  let jogoAtivo: boolean = true;
  let turnos: number = 0;

  // Loop principal do jogo
  while (jogoAtivo) {
    // 2. Desenha o tabuleiro de um jeito bem visual no console
    console.log(`\n ${tabuleiro[0][0]} | ${tabuleiro[0][1]} | ${tabuleiro[0][2]} `);
    console.log("-----------");
    console.log(` ${tabuleiro[1][0]} | ${tabuleiro[1][1]} | ${tabuleiro[1][2]} `);
    console.log("-----------");
    console.log(` ${tabuleiro[2][0]} | ${tabuleiro[2][1]} | ${tabuleiro[2][2]} \n`);

    console.log(`Vez do Jogador: ${jogadorAtual}`);

    // 3. Pede a posição para o jogador
    const strLinha = await rl.question("Escolha a linha (0, 1 ou 2): ");
    const strColuna = await rl.question("Escolha a coluna (0, 1 ou 2): ");

    const linha = parseInt(strLinha);
    const coluna = parseInt(strColuna);

    // 4. Verifica se a casa está ocupada ou se o número digitado está fora do tabuleiro
    if (linha < 0 || linha > 2 || coluna < 0 || coluna > 2 || tabuleiro[linha][coluna] !== " ") {
      console.log("Jogada inválida! Tente novamente.");
      continue; // Pula o resto do código e refaz a pergunta da rodada
    }

    // 5. Aplica a jogada na matriz
    tabuleiro[linha][coluna] = jogadorAtual;
    turnos++;

    // 6. Lógica de vitória bem direta (Linhas, Colunas e Diagonais)
    let venceu = false;

    for (let i = 0; i < 3; i++) {
      // Testa Linhas
      if (tabuleiro[i][0] !== " " && tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2]) venceu = true;
      // Testa Colunas
      if (tabuleiro[0][i] !== " " && tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[1][i] === tabuleiro[2][i]) venceu = true;
    }
    // Testa Diagonais
    if (tabuleiro[0][0] !== " " && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2]) venceu = true;
    if (tabuleiro[0][2] !== " " && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0]) venceu = true;

    // 7. Verifica o resultado da rodada
    if (venceu) {
      console.log(`\nPARABÉNS! O Jogador [ ${jogadorAtual} ] venceu o jogo!`);
      jogoAtivo = false;
    } else if (turnos === 9) {
      console.log("\nDeu velha! O jogo empatou.");
      jogoAtivo = false;
    } else {
      // Alterna o jogador se ninguém ganhou
      jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    }
  }

  // Mostra o tabuleiro finalizado
  console.log(`\n ${tabuleiro[0][0]} | ${tabuleiro[0][1]} | ${tabuleiro[0][2]} `);
  console.log("-----------");
  console.log(` ${tabuleiro[1][0]} | ${tabuleiro[1][1]} | ${tabuleiro[1][2]} `);
  console.log("-----------");
  console.log(` ${tabuleiro[2][0]} | ${tabuleiro[2][1]} | ${tabuleiro[2][2]} \n`);
  rl.close();
}
main();
