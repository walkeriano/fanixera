import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { isEqual, merge } from "lodash";

const useUpdateUserProfile = (userId) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const updateUserProfile = async (updatedData) => {
    if (!userId) return;
  
    try {
      setLoading(true);
      setError(null);
  
      // Obtener referencia y datos actuales de Firestore
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);
  
      if (!userSnap.exists()) {
        throw new Error("El usuario no existe");
      }
  
      const currentData = userSnap.data();
      const filteredData = {};
  
      // 🔹 Convertir objetos anidados en notación de puntos
      const flattenObject = (obj, prefix = "") => {
        return Object.keys(obj).reduce((acc, key) => {
          const newKey = prefix ? `${prefix}.${key}` : key;
          if (typeof obj[key] === "object" && obj[key] !== null) {
            Object.assign(acc, flattenObject(obj[key], newKey));
          } else {
            acc[newKey] = obj[key];
          }
          return acc;
        }, {});
      };
  
      const flatUpdatedData = flattenObject(updatedData);
      const flatCurrentData = flattenObject(currentData);
  
      // 🔥 Solo incluir en `filteredData` los campos realmente modificados
      Object.keys(flatUpdatedData).forEach((key) => {
        if (!isEqual(flatUpdatedData[key], flatCurrentData[key])) {
          filteredData[key] = flatUpdatedData[key];
        }
      });
  
      // 🚀 Verificar si hay cambios antes de actualizar Firestore
      if (Object.keys(filteredData).length > 0) {
        console.log("Datos enviados a Firestore:", filteredData);
        await updateDoc(userRef, filteredData);
        setSuccess(true);
      } else {
        console.log("No hay cambios en los datos.");
      }
    } catch (err) {
      console.error("Error al actualizar el perfil:", err);
      setError("Error al actualizar el perfil");
    } finally {
      setLoading(false);
    }
  };

  // Mensaje de éxito desaparece después de 3 segundos
  useEffect(() => {
    if (success) {
      setTimeout(() => setSuccess(false), 3000);
    }
  }, [success]);

  return { updateUserProfile, loading, error, success };
};

export default useUpdateUserProfile;