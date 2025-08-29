function somarDoisNumeros(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado
}

function calcularMediaDeDoisNumeros(valor1, valor2) {
    // 1. Soma todos os valores
    const resultadoSomaDosDoisValores = somarDoisNumeros(valor1,valor2);
    // 2. Divide por 2
     const resultadoMediaDosDoisValores = resultadoSomaDosDoisValores / 2;
    // 3. Retorna o resultado
    return resultadoMediaDosDoisValores;
}

module.exports = {
    somarDoisNumeros
}