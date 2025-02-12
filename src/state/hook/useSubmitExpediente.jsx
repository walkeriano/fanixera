import { useForm } from "react-hook-form";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../../firebase-config"; // Asegúrate de importar la configuración de Firestore // Asegúrate de importar tu configuración de Firebase aquí

const useSubmitExpediente = (user) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // Función para subir una imagen a Firebase Storage
  const uploadImage = async (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, `expedientes/${user.uid}/${file.name}`);

    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      // Subir imagen al Storage si existe
      let imageUrl = "";
      if (data.image && data.image[0]) {
        imageUrl = await uploadImage(data.image[0]);
      }

      // Crear datos a guardar
      const expedienteData = {
        ruc: data.ruc,
        category: data.categoria,
        descripcion: data.descripcion,
        contacto: {
          sitioWeb: data.sitioWeb,
          facebook: data.facebook,
          instagram: data.instagram,
          tiktok: data.tiktok,
        },
        imageUrl,
        createdAt: new Date(),
      };

      // Guardar en Firestore en el documento del usuario
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, { expediente: expedienteData }, { merge: true });

      setSuccess(true);
      reset(); // Resetea el formulario después del envío
    } catch (err) {
      console.error("Error al enviar el expediente:", err);
      setError("Hubo un error al enviar el expediente. Por favor, inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    loading,
    success,
    error,
    onSubmit,
  };
};

export default useSubmitExpediente;
