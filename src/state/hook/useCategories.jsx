import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";

const useCategories = () => {
  const [rutinas, setRutinas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
        setLoading(true);
      
        try {
          const cachedData = localStorage.getItem("categories");
          const cachedTimestamp = localStorage.getItem("categoriesTimestamp");
      
          // Validar si los datos están en caché y no han expirado
          const cacheDuration = 1000 * 60 * 60; // 1 hora
          if (cachedData && cachedTimestamp && Date.now() - cachedTimestamp < cacheDuration) {
            console.log("Cargando datos desde localStorage...");
            setRutinas(JSON.parse(cachedData));
            setLoading(false);
            return;
          }
      
          // Si no hay datos válidos en caché, realizar la petición a Firestore
          console.log("Realizando petición a Firestore...");
          const querySnapshot = await getDocs(collection(db, "categories"));
          const categoriesList = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
      
          // Guardar en el estado y en localStorage
          setRutinas(categoriesList);
          localStorage.setItem("categories", JSON.stringify(categoriesList));
          localStorage.setItem("categoriesTimestamp", Date.now());
        } catch (err) {
          setError("Error al obtener categorías");
          console.error("Error al obtener documentos:", err);
        } finally {
          setLoading(false);
        }
      };

    fetchCategories();
  }, []);


  return { rutinas, loading, error };
};

export default useCategories;