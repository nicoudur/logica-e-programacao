const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');

describe('Testes da Função de Soma', function () {

    it('A função deve ser capaz de somar dois número positivos', function () {

        const resultadoDaSoma = somarDoisNumeros(5, 3);

        expect(resultadoDaSoma).to.equal(8);
    });

    it('A função deve ser capaz de somar um número positivo e um negativo', function () {

        const resultadoDaSoma = somarDoisNumeros(50, -15);

        expect(resultadoDaSoma).to.equal(35);
    });

    it('A função deve ser capaz de somar dois zeros', function () {

        const resultadoDaSoma = somarDoisNumeros(0, 0);

        expect(resultadoDaSoma).to.equal(0);
    });

     it('A função deve ser capaz de somar dois números negativos', function () {

        const resultadoDaSoma = somarDoisNumeros(-15, -20);

        expect(resultadoDaSoma).to.equal(-35);
    });
})