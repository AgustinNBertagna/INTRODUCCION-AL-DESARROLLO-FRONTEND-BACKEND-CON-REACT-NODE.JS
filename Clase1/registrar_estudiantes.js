// Actividad: Clase 1
const registrarEstudiantes = () => {
  console.log("Iniciando Registro de Estudiantes");

  let cantidadEstudiantes = prompt(
    "Ingresar la cantidad de estudiantes a registrar: "
  );

  console.log("Cantidad Estudiantes a Registrar: " + cantidadEstudiantes);

  let estudiantes = [];

  for (let i = 0; i < cantidadEstudiantes; i++) {
    let nombreEstudiante = prompt(
      "Ingrese el nombre del estudiante " + i + ": "
    );
    let edadEstudiante = prompt(
      "Ingrese la edad del estudiante " + nombreEstudiante + ": "
    );

    let estudiante = {
      // Corregido aquí
      nombre: nombreEstudiante,
      edad: edadEstudiante,
    };

    estudiantes.push(estudiante);
  }

  return estudiantes;
};

const mostrarEstudiantes = (estudiantes) => {
  console.log("Lista de estudiantes registrados:");
  for (let i = 0; i < estudiantes.length; i++) {
    let estudianteActual = estudiantes[i];
    console.log(
      "Nombre: " + estudianteActual.nombre + ", Edad: " + estudianteActual.edad
    );
  }
};

let estudiantesRegistrados = registrarEstudiantes();
mostrarEstudiantes(estudiantesRegistrados);
