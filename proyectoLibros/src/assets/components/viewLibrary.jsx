import React, { useState } from "react";
import { useStoreBooks } from "./store/useBooks";

function Libros() {
  const { library, fetchBooks } = useStoreBooks();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    fetchBooks(10, searchTerm);
  };

  return (
    <div>
      <h1>Buscar Libros</h1>
      <div>
        <input
          type="text"
          placeholder="Ingrese el nombre del libro"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar Libros</button>
      </div>
      {library.length > 0 && (
        <div>
          <h2>Resultados de la búsqueda:</h2>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Autor</th>
              </tr>
            </thead>
            <tbody>
              {library.map((book, index) => (
                <tr key={index}>
                  <td>{book.title}</td>
                  <td>
                    {book.author_name ? book.author_name[0] : "Desconocido"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Libros;
