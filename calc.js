function suma(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return 0;
  } else {
    return a + b;
  }
}

function resta(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return 0;
  } else {
    return a - b;
  }
}

function multiplicacion(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return 0;
  } else {
    return a * b;
  }}

function division(a, b) {
  if (isNaN(a) || isNaN(b) || b == 0) {
    return 0;
  } else {
    return a / b;
  }
}

module.exports = {
  suma,
  resta,
  multiplicacion,
  division
};
