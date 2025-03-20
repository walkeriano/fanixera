import { useState, useEffect } from "react";
import { db } from "../../../firebase-config"; // Asegúrate de importar correctamente la referencia a tu firebase
import { collection, query, where, getDocs } from "firebase/firestore";

export default function useUserPromotions(nombreMarca) {
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!nombreMarca) return; // Evita ejecutar si el nombreMarca no está definido

    const fetchPromotions = async () => {
      setLoading(true);
      setError(null);

      try {
        const q = query(
          collection(db, "promotions"),
          where("user.nombreMarca", "==", nombreMarca) // Filtramos por nombreMarca recibido como prop
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
  }, [nombreMarca]); // Se ejecuta cuando cambia nombreMarca

  return { promotions, loading, error };
}