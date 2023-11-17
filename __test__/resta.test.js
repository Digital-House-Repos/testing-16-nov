const { resta } = require('../calc');

describe('Test de la funcion resta', ()=> {
  test('Resta 1 - 2 igual a -1', () => {
    expect(resta(1, 2)).toBe(-1);
  });

  test('Resta de vacios', () => {
    expect(resta('', '')).toBe(0);
  });

  test('Resta de nulos', () => {
    expect(resta(null, null)).toBe(0);
  });

  test('Resta de undefined', () => {
    expect(resta(undefined, undefined)).toBe(0);
  });

  test('Resta de undefined y null', () => {
    expect(resta(undefined, null)).toBe(0);
  });

  test('Resta de undefined y 1', () => {
    expect(resta(undefined, 1)).toBe(0);
  });

  test('Resta de Textos', () => {
    expect(resta('a', 'b')).toBe(0);
  });
})