function mostrarEstudiantes(arrayOfStudents) {
    for (let i = 0; i < arrayOfStudents.length; i++) {
      console.log(
        `Nombre del estudiante ${i + 1}: ` + arrayOfStudents[i].nombre
      );
      console.log(`Edad del estudiante ${i + 1}: ` + arrayOfStudents[i].edad);
    }
}

module.exports = { mostrarEstudiantes }