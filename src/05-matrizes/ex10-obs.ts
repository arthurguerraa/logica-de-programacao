/*Percorrer matriz em espiral.*/

function percorrerEspiral(matriz: number[][]): number[] {
  const resultado: number[] = [];
  
  // Se a matriz estiver vazia, retorna a lista vazia
  if (matriz.length === 0) return resultado;

  // Definição das 4 bordas (limites) da nossa matriz
  let topo = 0;
  let baixo = matriz.length - 1;
  let esquerda = 0;
  let direita = matriz[0].length - 1;

  // O loop roda enquanto as bordas não se cruzarem
  while (topo <= baixo && esquerda <= direita) {
    
    // 1. Mover da ESQUERDA para a DIREITA no topo atual
    for (let c = esquerda; c <= direita; c++) {
      resultado.push(matriz[topo][c]);
    }
    topo++; // Encolhe a borda do topo para baixo

    // 2. Mover de CIMA para BAIXO na coluna da direita atual
    for (let l = topo; l <= baixo; l++) {
      resultado.push(matriz[l][direita]);
    }
    direita--; // Encolhe a borda da direita para a esquerda

    // 3. Mover da DIREITA para a ESQUERDA na borda de baixo (se ainda houver linha)
    if (topo <= baixo) {
      for (let c = direita; c >= esquerda; c--) {
        resultado.push(matriz[baixo][c]);
      }
      baixo--; // Encolhe a borda de baixo para cima
    }

    // 4. Mover de BAIXO para CIMA na coluna da esquerda (se ainda houver coluna)
    if (esquerda <= direita) {
      for (let l = baixo; l >= topo; l--) {
        resultado.push(matriz[l][esquerda]);
      }
      esquerda++; // Encolhe a borda da esquerda para a direita
    }
  }

  return resultado;
}

// ==========================================
// Teste Prático com uma Matriz 4x4
// ==========================================

const minhaMatriz: number[][] = [
  [ 1,  2,  3,  4],
  [ 5,  6,  7,  8],
  [ 9, 10, 11, 12],
  [13, 14, 15, 16]
];

console.log("--- Matriz Original ---");
for (let i = 0; i < minhaMatriz.length; i++) {
  console.log(minhaMatriz[i].join("\t"));
}

const resultadoEspiral = percorrerEspiral(minhaMatriz);

console.log("\n--- Caminho em Espiral ---");
console.log(resultadoEspiral.join(" -> "));
// Saída esperada: 1 -> 2 -> 3 -> 4 -> 8 -> 12 -> 16 -> 15 -> 14 -> 13 -> 9 -> 5 -> 6 -> 7 -> 11 -> 10
