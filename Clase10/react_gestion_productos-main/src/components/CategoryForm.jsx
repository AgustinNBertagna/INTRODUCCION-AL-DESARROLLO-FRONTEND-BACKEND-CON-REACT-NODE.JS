// CategoryForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const CategoriaForm = ({ categoriaInicial, onCategoriaChange }) => {
  const [categoria, setCategoria] = useState({ id: "", nombre: "" });
  const [modoEdicion, setModoEdicion] = useState(false);

  useEffect(() => {
    if (categoriaInicial) {
      setCategoria(categoriaInicial);
      setModoEdicion(true);
    }
  }, [categoriaInicial]);

  const handleInputChange = (e) => {
    setCategoria({ ...categoria, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (modoEdicion) {
        await axios.put(
          `https://backend-productos.netlify.app/api/categorias/${categoria.id}`,
          categoria
        );
      } else {
        await axios.post(
          "https://backend-productos.netlify.app/api/categorias",
          categoria
        );
      }
      setCategoria({ id: "", nombre: "" });
      setModoEdicion(false);

      onCategoriaChange();
    } catch (error) {
      console.error("Error al enviar la categoría:", error);
    }
  };

  return (
    <div>
      <h2>{modoEdicion ? "Editar Categoría" : "Crear Nueva Categoría"}</h2>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input
          type="text"
          name="id"
          value={categoria.id}
          onChange={handleInputChange}
        />

        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={categoria.nombre}
          onChange={handleInputChange}
        />

        <button type="submit">
          {modoEdicion ? "Guardar Cambios" : "Crear Categoría"}
        </button>
      </form>
    </div>
  );
};

export default CategoriaForm;
