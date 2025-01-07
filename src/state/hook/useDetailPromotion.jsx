// hooks/useDetailPromotion.jsx
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase-config';

const useDetailPromotion = (id) => {
  const [promotion, setPromotion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchPromotion = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, 'promotions', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPromotion({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError('Promoción no encontrada');
        }
      } catch (err) {
        setError('Error al obtener la promoción');
      } finally {
        setLoading(false);
      }
    };

    fetchPromotion();
  }, [id]);

  return { promotion, loading, error };
};

export default useDetailPromotion;