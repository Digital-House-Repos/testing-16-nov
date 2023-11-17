const { multiplicacion } = require('../calc');

describe('Test de la funcion multiplicacion', () => {
  test('Multiplicacion 1 * 2 igual a 2', () => {
    expect(multiplicacion(1, 2)).toBe(2);
  });

  test('Multiplicacion de vacios', () => {
    expect(multiplicacion('', '')).toBe(0);
  });

  test('Multiplicacion de nulos', () => {
    expect(multiplicacion(null, null)).toBe(0);
  });

  test('Multiplicacion de undefined', () => {
    expect(multiplicacion(undefined, undefined)).toBe(0);
  });

  test('Multiplicacion de undefined y null', () => {
    expect(multiplicacion(undefined, null)).toBe(0);
  });

  test('Multiplicacion de undefined y 1', () => {
    expect(multiplicacion(undefined, 1)).toBe(0);
  });

  test('Multiplicacion de Textos', () => {
    expect(multiplicacion('a', 'b')).toBe(0);
  });
});