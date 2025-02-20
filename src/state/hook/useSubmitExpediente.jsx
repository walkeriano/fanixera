import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../../firebase-config"; // Asegúrate de importar la configuración de Firestore // Asegúrate de importar tu configuración de Firebase aquí
import AuthContext from "@/state/auth/auth-context";

const useSubmitExpediente = () => {
  const { user, setUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // Función para subir una imagen a Firebase Storage
  const uploadImage = async (file) => {
    if (!file) {
      throw new Error("No se ha seleccionado una imagen");
    }

    try {
      const storage = getStorage();
      const storageRef = ref(storage, `expedientes/${user.uid}/${file.name}`);

      // Subir archivo a Firebase Storage
      const snapshot = await uploadBytes(storageRef, file);

      // Obtener URL de descarga
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      throw error;
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      console.log("Datos recibidos en onSubmit:", data);

      let imageUrl = "";
      if (data.imageProfile instanceof File) { // 👈 Validación corregida
        console.log("Subiendo imagen...");
        imageUrl = await uploadImage(data.imageProfile);
        console.log("Imagen subida correctamente:", imageUrl);
      }

      const expedienteData = {
        ruc: data.ruc,
        category: data.category,
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

      console.log("Guardando expediente en Firestore...", expedienteData);

      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, { expediente: expedienteData }, { merge: true });

      console.log("Expediente guardado correctamente en Firestore");

      setUser((prevUser) => ({
        ...prevUser,
        expediente: expedienteData,
      }));

      setSuccess(true);
      reset();
    } catch (err) {
      console.error("Error en el envío del expediente:", err);
      setError(
        "Hubo un error al enviar el expediente. Por favor, inténtalo de nuevo."
      );
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
    setValue,
  };
};

export default useSubmitExpediente;
