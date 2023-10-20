import { create } from "zustand";

export const useStoreBooks = create((set) => {
    return {
        library: [],
        fetchBooks: async (limiteDeLibros, book) => {
            try {
                const response = await fetch(`https://openlibrary.org/search.json?q=${book}`);
                if (!response.ok) {
                    throw new Error("Error al cargar libros");
                }
                const json = await response.json();

                // Realiza la actualización del estado de manera segura
                set((prevState) => ({
                    library: json.docs.sort(() => Math.random() - 0.5).slice(0, limiteDeLibros)
                }));

                console.log("Fetch realizado exitosamente!");
            } catch (error) {
                console.error("Error en la solicitud:", error);
                // Puedes manejar el error de manera adecuada, por ejemplo, mostrando un mensaje al usuario.
            }
        },
    };
});
