import { useState, useEffect, useContext } from "react";
import { db } from "../../../firebase-config"; // Asegúrate de importar correctamente la referencia a tu firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import AuthContext from "@/state/auth/auth-context";

export default function useUserPromotions() {
  const { user } = useContext(AuthContext); // Obtener el usuario del contexto
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      return; // Si no hay un usuario autenticado, no hacemos nada
    }

    const fetchPromotions = async () => {
      setLoading(true);
      setError(null);

      try {
        const q = query(
          collection(db, "promotions"),
          where("user.nombreMarca", "==", user.nombreMarca) // Filtramos por el campo nombreMarca dentro del mapa "user"
        );

        const querySnapshot = await getDocs(q);

        const promotionsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPromotions(promotionsData); // Guardamos las promociones en el estado
      } catch (err) {
        setError("Error al obtener las promociones");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPromotions(); // Llamamos a la función para obtener las promociones
  }, [user]); // Volver a ejecutar cuando el usuario cambie

  return { promotions, loading, error };
}