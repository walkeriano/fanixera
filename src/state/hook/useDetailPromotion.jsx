import { useEffect, useState } from 'react';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase-config';

const useDetailPromotion = (id) => {
  const [promotion, setPromotion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const docRef = doc(db, 'promotions', id);

    // 1️⃣ Intentamos cargar desde localStorage
    const cachedPromotion = localStorage.getItem(`promotion-${id}`);
    if (cachedPromotion) {
      setPromotion(JSON.parse(cachedPromotion));
      setLoading(false);
    } else {
      // 2️⃣ Si no hay datos en localStorage, hacemos una consulta inicial
      const fetchPromotion = async () => {
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = { id: docSnap.id, ...docSnap.data() };
            setPromotion(data);
            localStorage.setItem(`promotion-${id}`, JSON.stringify(data));
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
    }

    // 3️⃣ Suscripción en tiempo real para detectar cambios
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const updatedData = docSnap.data();
        const cachedData = JSON.parse(localStorage.getItem(`promotion-${id}`)) || {};

        let hasChanges = false;

        // Comparamos cada campo para actualizar solo los que han cambiado
        Object.keys(updatedData).forEach((key) => {
          if (cachedData[key] !== updatedData[key]) {
            cachedData[key] = updatedData[key];
            hasChanges = true;
          }
        });

        if (hasChanges) {
          setPromotion({ id: docSnap.id, ...cachedData }); // Actualiza solo los cambios
          localStorage.setItem(`promotion-${id}`, JSON.stringify(cachedData)); // Guarda en localStorage
        }
      }
    });

    // 4️⃣ Cleanup: Detener la suscripción cuando el hook se desmonta
    return () => unsubscribe();
  }, [id]);

  return { promotion, loading, error };
};

export default useDetailPromotion;