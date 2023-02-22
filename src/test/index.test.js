const {sumar, restar, dividir, multipicar } = require('../index'); 

describe('Testing Calculator', () => {
    test('Test suma', () => {
        expect(sumar(1,1)).toBe(2);
    });

    test('Test resta', () => {
        expect(restar(5,2)).toBe(3);
    });

    test('test multiplication', () => {
        expect(multipicar(2,2)).toBe(4);
    });

    test('test dividir', () => {
        expect(dividir(4, 2)).toBe(2);
    });
});