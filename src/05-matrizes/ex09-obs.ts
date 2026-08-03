/*Campo minado simples.*/

import * as readline from 'readline';

// Configuração básica do readline para ler os dados do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 1. Criação da matriz 5x5 representando o Campo Minado do exemplo
// '.' é casa vazia e '*' é a mina
const campoMinado: string[][] = [
  ['.', '.', '*', '.', '.'],
  ['.', '.', '.', '.', '.'],
  ['*', '.', '.', '*', '.'],
  ['.', '.', '.', '.', '.'],
  ['.', '*', '.', '.', '.'],
];

// 2. Função principal para rodar o programa
function iniciarExercicio(): void {
  // Mostra o campo no console apenas para fins didáticos e conferência
  console.log("--- CAMPO MINADO (Gabarito Visual) ---");
  for (let linha = 0; linha < 5; linha++) {
    console.log(campoMinado[linha].join(" "));
  }
  console.log("--------------------------------------\n");

  // Pergunta a linha
  rl.question("Digite a linha (0 a 4): ", (linhaTexto) => {
    // Pergunta a coluna
    rl.question("Digite a coluna (0 a 4): ", (colunaTexto) => {
      
      // Converte os textos digitados em números inteiros
      const linha = parseInt(linhaTexto, 10);
      const coluna = parseInt(colunaTexto, 10);

      // Validação: Garante que o usuário digitou índices válidos da matriz
      if (linha < 0 || linha > 4 || coluna < 0 || coluna > 4 || isNaN(linha) || isNaN(coluna)) {
        console.log("Posição inválida! Digite números entre 0 e 4.");
        rl.close();
        return;
      }

      // 3. Acesso por índice e Condicional (O coração do exercício)
      if (campoMinado[linha][coluna] === '*') {
        console.log("\nBOOM! Você encontrou uma mina.");
      } else {
        console.log("\nPosição segura.");
      }

      // Fecha o leitor do terminal para encerrar o programa
      rl.close();
    });
  });
}

// Executa o exercício
iniciarExercicio();
