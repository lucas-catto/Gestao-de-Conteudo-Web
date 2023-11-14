/*

// Soma

function somaMatrizes (matriz1, matriz2) {
    if (matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length) {
        return "Matrizes não podem ser somadas, pois suas dimensões diferentes.";
    }

    const resultado = [];

    for (let i = 0; i < matriz1.length; i++) {
        
        const linha = [];

        for (let j = 0; j < matriz1[0].length; j++) {

            linha.push(matriz1[i][j] + matriz2[i][j]);
        }
        
        resultado.push(linha);
    }

    return resultado;
}

const matrizA = [[1,3], [3,4]];
const matrizB = [[5,6], [7,8]];

const resultadoSoma = somaMatrizes(matrizA, matrizB);

console.table(resultadoSoma);

*/


/*

// Multiplicação

function multiplicacaoMatrizes (matriz1, matriz2) {
    
    if (matriz1[0].length !== matriz2.length) {
        
        return "As matrizes não podem ser multiplicadas. O número de colunas não correspondem.";
    }

    const resultado = [];

    for (let i = 0; i < matriz1.length; i++) {
        
        const linha = [];

        for (let j = 0; j < matriz2[0].length; j++) {
            
            let valor = 0;

            for (let k = 0; k < matriz2[0].length; k++) {
                
                valor += matriz1[i][k] * matriz2[i][k];
            }
            linha.push(valor);            
        }
        resultado.push(linha);        
    }
    return resultado;
}

const matrizC = [[1, 2, 3], [4,  5, 6]];
const matrizD = [[7, 8],    [9, 10],    [11, 12]];

const resultadoMultiplicacao = multiplicacaoMatrizes(matrizC, matrizD);

console.table(resultadoMultiplicacao);

*/


/*

// Determinantes

function determinanteMatriz2x2 (matriz) {
    if (matriz.length !== 2 || matriz[0].length !== 2) {
        return "A matriz não é 2x2.";
    }

    return matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[0][1];
}

const matrizE      = [[1,2], [3,4]];
const determinante = determinanteMatriz2x2(matrizE);

console.table(determinante);

*/
