const sumar = require("./sumar");

test("sumar devuelve la suma correcta de dos números", () => {
  const a = 2;
  const b = 3;
  const resultado = sumar(a, b);
  const resultadoEsperado = 5;

  expect(resultado).toBe(resultadoEsperado);
});
