import { useState } from "react";
import { db, storage } from "../../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function usePromotionsForm(user) {
  const [loading, setLoading] = useState(false);

  const uploadImages = async (files) => {
    const urls = {};
    for (const [key, file] of Object.entries(files)) {
      if (file) {
        try {
          const storageRef = ref(storage, `promotions/${file.name}`);
          await uploadBytes(storageRef, file);
          const url = await getDownloadURL(storageRef);
          urls[key] = url; // Se debe guardar la URL generada por Firebase
        } catch (error) {
          console.error(`Error al subir ${key}:`, error);
          urls[key] = null; // Si hubo un error, asignamos null
        }
      } else {
        console.warn(`No se proporcionó un archivo para ${key}`);
      }
    }
    return urls;
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const imageUrls = await uploadImages({
        image1: data.image1,
        image2: data.image2,
      });

      const promotionData = {
        title: data.title,
        description: data.description,
        ubication: data.ubication,
        terminosCondiciones: data.terminosCondiciones,
        stock: data.stock,
        image1: imageUrls.image1 || null,
        image2: imageUrls.image2 || null,
        createdAt: new Date(),
        user: {
          // Incluimos los datos del usuario autenticado
          email: user.email,
          nombreMarca: user.nombreMarca,
          expediente: user.expediente, // Puede ser null si no se proporciona
        },
      };

      const docRef = await addDoc(collection(db, "promotions"), promotionData);
      console.log("Documento guardado con ID:", docRef.id);

      return true; // ✅ Devuelve true si todo salió bien
    } catch (error) {
      console.error("Error al guardar la promoción:", error);
      return false; // ❌ Devuelve false si hubo error
    } finally {
      setLoading(false);
    }
  };

  return { onSubmit, loading };
}
