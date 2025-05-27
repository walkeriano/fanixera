import { useState } from "react";
import { db, storage } from "../../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import imageCompression from "browser-image-compression";



export default function usePromotionsForm(user) {
  const [loading, setLoading] = useState(false);

  const uploadImages = async (files) => {
    const urls = {};

    for (const [key, file] of Object.entries(files)) {
      if (file) {
        try {
          console.log(`📦 Comprimiendo imagen para ${key}...`);

          const options = {
            maxSizeMB: 0.5, // Peso máximo 500 KB
            maxWidthOrHeight: 1920, // Mantener calidad para imagen grande
            useWebWorker: true,
          };

          const compressedFile = await imageCompression(file, options);
          console.log(
            `Imagen comprimida para ${key}: original ${file.size} bytes, comprimida ${compressedFile.size} bytes`
          );

          const storageRef = ref(storage, `promotions/${compressedFile.name}`);
          await uploadBytes(storageRef, compressedFile);
          const url = await getDownloadURL(storageRef);
          urls[key] = url;
        } catch (error) {
          console.error(`Error al subir ${key}:`, error);
          urls[key] = null;
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
        startDate: data.startDate,
        startTime: data.startTime,
        endDate: data.endDate,
        endTime: data.endTime,
        stock: data.stock,
        onStock: 0,
        image1: imageUrls.image1 || null,
        image2: imageUrls.image2 || null,
        createdAt: new Date(),
        user: {
          // Incluimos los datos del usuario autenticado
          email: user.email,
          nombreMarca: user.nombreMarca,
          expediente: user.expediente, // Puede ser null si no se proporciona
          slug:user.slug,
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
