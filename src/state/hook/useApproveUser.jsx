import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";

const useApproveUser = (promotionId, userId) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const approveUser = async (currentTime) => {
    if (!promotionId || !userId) return;
    setLoading(true);
    
    try {
      const userRef = doc(db, "promotions", promotionId, "clients", userId);

      await updateDoc(userRef, {
        status: "aprobado",
        approvedAt: currentTime, // Guardamos la hora exacta del frontend
      });

    } catch (err) {
      setError(err.message || "Error al aprobar usuario.");
    } finally {
      setLoading(false);
    }
  };

  return { approveUser, loading, error };
};

export default useApproveUser;