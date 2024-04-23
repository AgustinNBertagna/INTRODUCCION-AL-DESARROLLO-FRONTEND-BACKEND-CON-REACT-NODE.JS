// CategoriasList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CategoriasList = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await axios.get(
          "https://backend-productos.netlify.app/api/categorias"
        );
        setCategorias(response.data);
      } catch (error) {
        console.error("Error al obtener las categorías:", error);
      }
    };

    fetchCategorias();
  }, []);

  const handleEliminarCategoria = async (categoriaId) => {
    try {
      await axios.delete(
        `https://backend-productos.netlify.app/api/categorias/${categoriaId}`
      );
      setCategorias((prevCategorias) =>
        prevCategorias.filter((categoria) => categoria.id !== categoriaId)
      );
    } catch (error) {
      console.error("Error al eliminar la categoría:", error);
    }
  };

  return (
    <div>
      <h2>Listado de Categorías</h2>
      <Link to="/categorias/nueva">
        <button>Nueva Categoría</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria.id}>
              <td>{categoria.id}</td>
              <td>{categoria.nombre}</td>
              <td>
                <Link to={`/categorias/${categoria.id}`}>
                  <button>Editar</button>
                </Link>
                <button onClick={() => handleEliminarCategoria(categoria.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriasList;
