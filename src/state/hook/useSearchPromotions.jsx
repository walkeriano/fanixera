import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config"; // Asegúrate de importar la configuración de Firestore

const useSearchPromotions = (searchTerm) => {
  const [filteredPromotions, setFilteredPromotions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Si no hay término de búsqueda, no realizamos la búsqueda
    if (searchTerm.trim() === "") {
      setFilteredPromotions([]);
      return;
    }

    const searchPromotions = async () => {
      setLoading(true);
      setError(null);

      try {
        // Crear la referencia a la colección de promociones
        const promotionsRef = collection(db, "promotions");

        // Crear la consulta que busca el campo "promcardName" que contenga el término de búsqueda
        const q = query(
          promotionsRef,
          where("promcardName", ">=", searchTerm), // Realizamos una búsqueda por "mayor o igual" (prefix match)
          where("promcardName", "<=", searchTerm + "\uf8ff") // Aseguramos que la búsqueda sea por coincidencia completa (rango)
        );

        // Obtener los resultados de la consulta
        const querySnapshot = await getDocs(q);

        const results = querySnapshot.docs.map((doc) => doc.data()); // Extraer datos de los documentos

        setFilteredPromotions(results);
      } catch (error) {
        setError("Error al realizar la búsqueda: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    searchPromotions();
  }, [searchTerm]); // Cuando el término de búsqueda cambie, ejecutamos la búsqueda

  return { filteredPromotions, loading, error };
};

export default useSearchPromotions;