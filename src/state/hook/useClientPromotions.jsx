import { useState, useEffect, useContext } from "react";
import { db } from "../../../firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";
import AuthContext from "@/state/auth/auth-context";

export default function useClientPromotions() {
  const { user } = useContext(AuthContext);
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;

    const fetchClientPromotions = async () => {
      setLoading(true);
      setError(null);
      try {
        const promotionsRef = collection(db, "promotions");
        const promotionsSnapshot = await getDocs(promotionsRef);
        let clientPromotions = [];

        // Recorremos todas las promociones
        for (const promotionDoc of promotionsSnapshot.docs) {
          const promotionData = promotionDoc.data();
          const promotionId = promotionDoc.id;
          const clientsRef = collection(db, "promotions", promotionId, "clients");
          
          // Filtramos los clientes donde "nombreMarca" coincida con el usuario autenticado
          const q = query(clientsRef, where("nombreMarca", "==", user.nombreMarca));
          const clientsSnapshot = await getDocs(q);

          if (!clientsSnapshot.empty) {
            const clientData = clientsSnapshot.docs[0].data(); // Obtener el primer cliente coincidente
            clientPromotions.push({ 
              id: promotionId, 
              ...promotionData,
              qrCode: clientData.qrCode, // Agregar el código QR
              promotionUrl: clientData.promotionUrl,
            });
          }
        }

        setPromotions(clientPromotions);
      } catch (err) {
        setError("Error al obtener las promociones del cliente");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchClientPromotions();
  }, [user]);

  return { promotions, loading, error };
}
