const moongose = require("mongoose");

moongose.connect("mongodb://localhost:27017/empresa");

const clienteSchema = new moongose.Schema({
  nombre: String,
  edad: Number,
  email: String,
});

const Cliente = moongose.model("Cliente", clienteSchema);

const nuevoCliente = new Cliente({
  nombre: "Juan",
  edad: 30,
  email: "juan@example.com",
});

nuevoCliente.save()
  .then((cliente) => {
    console.log("Cliente guardado correctamente:", cliente);
  })
  .catch((err) => {
    console.log(err);
  });

Cliente.find()
  .then((clientes) => {
    console.log("Clientes encontrados:", clientes);
  })
  .catch((err) => {
    console.error("Error al recuperar los clientes", err);
  });

Cliente.updateOne({ nombre: "Juan" }, { edad: 31 })
  .then((cliente) => {
    console.log("Cliente actualizado correctamente:", cliente);
  })
  .catch((err) => {
    console.error("Error al actualizar el cliente", err);
  });

Cliente.deleteOne({ nombre: "Juan" }, { edad: 31 })
  .then((cliente) => {
    console.log("Cliente eliminado correctamente:", cliente);
  })
  .catch((err) => {
    console.error("Error al eliminar el cliente", err);
  });
