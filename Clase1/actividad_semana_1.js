// Actividad Semana 1
function calcularPromedio(array) {
  suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma / array.length;
}
