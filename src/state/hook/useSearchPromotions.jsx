import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config"; // Asegúrate de importar la configuración de Firestore

const useSearchPromotions = (searchTerm) => {
  const [filteredPromotions, setFilteredPromotions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPromotions([]);
      return;
    }

    const searchPromotions = async () => {
      setLoading(true);
      setError(null);

      try {
        const promotionsRef = collection(db, "promotions");
        const q = query(
          promotionsRef,
          where("promcardName", ">=", searchTerm),
          where("promcardName", "<=", searchTerm + "\uf8ff")
        );

        const querySnapshot = await getDocs(q);

        const results = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Agregar el id aquí
          ...doc.data(),
        }));

        setFilteredPromotions(results);
      } catch (error) {
        setError("Error al realizar la búsqueda: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    searchPromotions();
  }, [searchTerm]);

  return { filteredPromotions, loading, error };
};

export default useSearchPromotions;