const { suma } = require('../calc');

describe('Test de la función suma', () => {
  test('Suma 1 + 2 igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
  });

  test('Suma de vacios', () => {
    expect(suma('', '')).toBe('');
  });

  test('Suma de nulos', () => {
    expect(suma(null, null)).toBe(0);
  });

  test('Suma de undefined', () => {
    expect(suma(undefined, undefined)).toBe(0);
  });

  test('Suma de undefined y null', () => {
    expect(suma(undefined, null)).toBe(0);
  });

  test('Suma de undefined y 1', () => {
    expect(suma(undefined, 1)).toBe(0);
  });

  test('Suma de Textos', () => {
    expect(suma('a', 'b')).toBe(0);
  });
});
