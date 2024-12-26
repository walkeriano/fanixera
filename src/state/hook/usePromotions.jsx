import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";

const usePromotions = (selectedCategory) => {
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedCategory) return;

    const fetchPromotions = async () => {
      setLoading(true);
      try {
        const q = query(
          collection(db, "promotions"),
          where("user.category", "==", selectedCategory)
        );
        const querySnapshot = await getDocs(q);
        const promotionsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPromotions(promotionsList);
      } catch (err) {
        setError("Error al obtener promociones");
        console.error("Error al obtener documentos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPromotions();
  }, [selectedCategory]);

  return { promotions, loading, error };
};

export default usePromotions;