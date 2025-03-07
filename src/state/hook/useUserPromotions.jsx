import { useState, useEffect, useContext } from "react";
import { db } from "../../../firebase-config"; // Asegúrate de importar correctamente la referencia a tu firebase
import { collection, query, where, getDocs, getDoc } from "firebase/firestore";
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

        const promotionsData = [];

        // Recorrer cada promoción
        for (const docSnapshot of querySnapshot.docs) {
          const promotionData = docSnapshot.data();
          const promotionId = docSnapshot.id;

          // Obtener los clientes de la subcolección 'clients' de la promoción actual
          const clientsRef = collection(db, "promotions", promotionId, "clients");
          const clientsSnapshot = await getDocs(clientsRef);
          const clientsList = clientsSnapshot.docs.map(clientDoc => ({
            id: clientDoc.id,
            ...clientDoc.data(),
          }));

          // Agregar los clientes a la promoción
          promotionsData.push({
            id: promotionId,
            ...promotionData,
            clients: clientsList, // Añadir la lista de clientes a la promoción
          });
        }

        setPromotions(promotionsData); // Guardamos las promociones con sus clientes
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