const { division } = require('../calc');

describe('Test de la funcion division', () => {
  test('Division 1 / 2 igual a 0.5', () => {
    expect(division(1, 2)).toBe(0.5);
  });

  test('Division de vacios', () => {
    expect(division('', '')).toBe(0);
  });

  test('Division de nulos', () => {
    expect(division(null, null)).toBe(NaN);
  });

  test('Division de undefined', () => {
    expect(division(undefined, undefined)).toBe(0);
  });

  test('Division de undefined y null', () => {
    expect(division(undefined, null)).toBe(0);
  });

  test('Division de undefined y 1', () => {
    expect(division(undefined, 1)).toBe(0);
  });

  test('Division de Textos', () => {
    expect(division('a', 'b')).toBe(0);
  });

  test('Division de 1 y 0', () => {
    expect(division(1, 0)).toBe(0);
  });
});