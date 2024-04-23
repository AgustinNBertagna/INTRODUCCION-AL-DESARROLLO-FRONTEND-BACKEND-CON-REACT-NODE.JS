// Importar libreria
const { Chance } = require("chance");
const { suma } = require("./calculadora");

// Crear instancia de chance
const chance1 = new Chance();
const chance2 = new Chance();

// Crea los atributos aleatorios de chance
const name1 = chance1.name();
const age1 = chance1.age();

const name2 = chance2.name();
const age2 = chance2.age();

// Muestra en consola los atributos aleatorios
console.log(
  `Estos son ${name1} y ${name2} y entre ambos tienen ${suma(age1, age2)} años!`
);