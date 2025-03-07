import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase-config';

const usePromotionUserData = (promotionId, userId) => {
  const [promotion, setPromotion] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!promotionId || !userId) return;

    const fetchPromotionUserData = async () => {
      setLoading(true);
      try {
        // Hacer una única consulta para obtener los datos de la promoción y el cliente específico
        const promotionRef = doc(db, 'promotions', promotionId);
        const clientRef = doc(db, 'promotions', promotionId, 'clients', userId);

        // Recuperar ambos documentos en paralelo
        const [promotionSnap, clientSnap] = await Promise.all([
          getDoc(promotionRef),
          getDoc(clientRef),
        ]);

        if (!promotionSnap.exists()) {
          throw new Error('Promoción no encontrada');
        }

        if (!clientSnap.exists()) {
          throw new Error('Usuario no encontrado en la promoción');
        }

        // Si ambos documentos existen, almacenar los datos
        setPromotion(promotionSnap.data());
        setUserData(clientSnap.data());
      } catch (err) {
        setError(err.message || 'Hubo un problema al obtener los datos.');
      } finally {
        setLoading(false);
      }
    };

    fetchPromotionUserData();
  }, [promotionId, userId]);

  return { promotion, userData, loading, error };
};

export default usePromotionUserData;