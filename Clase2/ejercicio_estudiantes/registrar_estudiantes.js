const readlineSync = require("readline-sync");
const { mostrarEstudiantes } = require('./mostrar_estudiantes')

const registrarEstudiantes = () => {
  const cantEst = readlineSync.question(
    "Ingrese la cantidad de estudiantes a registrar: "
  );
  arrayEstudiantes = [];
  for (let i = 0; i < cantEst; i++) {
    let estudiante = {};
    estudiante.nombre = readlineSync.question(
      `Ingrese el nombre del estudiante ${i + 1}: `
    );
    estudiante.edad = readlineSync.question(
      `Ingrese la edad del estudiante ${i + 1}: `
    );
    arrayEstudiantes.push(estudiante);
  }
  return arrayEstudiantes
};

mostrarEstudiantes(registrarEstudiantes())