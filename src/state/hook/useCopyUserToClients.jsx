import { useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { doc, getDoc, setDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebase-config";
import AuthContext from "@/state/auth/auth-context";
import QRCode from "qrcode"; // Importamos la librería para generar el QR

const useCopyUserToClients = () => {
  const { user, loadingUserData } = useContext(AuthContext); // Obtenemos también la bandera de carga de datos
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [promotionId, setPromotionId] = useState(null);
  const [qrCode, setQrCode] = useState(null); // Guardaremos la imagen del QR aquí
  const [promotionUrl, setPromotionUrl] = useState(null); // Almacenamos la URL generada aquí

  useEffect(() => {
    if (!user || loadingUserData) return; // Esperar a que el usuario esté listo

    if (pathname) {
      const pathSegments = pathname.split("/");
      const idFromUrl = pathSegments[pathSegments.length - 1];
      if (idFromUrl) {
        setPromotionId(idFromUrl);
      } else {
        setError("ID de promoción no encontrado.");
      }
    }
  }, [pathname, user, loadingUserData]); // Asegurar que el efecto se ejecuta cuando `user` cambie

  // Función para generar el QR
  const generateQrCode = (url) => {
    return new Promise((resolve, reject) => {
      QRCode.toDataURL(url, (err, qrCodeData) => {
        if (err) {
          reject("Error al generar el código QR");
        } else {
          resolve(qrCodeData); // Devuelve la URL de la imagen QR
        }
      });
    });
  };

  const copyUserData = async () => {
    console.log("Estado actual del usuario en copyUserData:", user); // <--- Verificar si el usuario está disponible

    if (loadingUserData) {
      setError("Esperando datos del usuario...");
      return;
    }

    if (!user || !user.uid) {
      console.error("Error: user.uid no está disponible en copyUserData");
      setError("Usuario no autenticado o datos aún no cargados.");
      return;
    }

    if (!promotionId) {
      setError("ID de promoción no encontrado.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Verificamos si la promoción existe
      const promotionRef = doc(db, "promotions", promotionId);
      const promotionSnap = await getDoc(promotionRef);
      if (!promotionSnap.exists()) {
        setError("La promoción no existe.");
        return;
      }

      // Verificamos si el usuario ya está en la subcolección "clients"
      const clientsRef = collection(db, "promotions", promotionId, "clients");
      const clientSnap = await getDocs(clientsRef);
      const existingClient = clientSnap.docs.find((doc) => doc.id === user.uid);

      if (existingClient) {
        setError("El usuario ya está registrado en esta promoción.");
        return;
      }

      // Obtener los datos del usuario
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        throw new Error("No se encontró la información del usuario.");
      }

      const userData = userSnap.data();
      console.log("Datos del usuario en Firestore:", userData); // <--- Verificar datos antes de guardar

      // Creamos la URL única para el código QR
      const uniqueUrl = `${window.location.origin}/detalle-marca/${promotionId}/usuario/${user.uid}`;
      console.log("URL generada para el QR:", uniqueUrl); // <--- Ver la URL final

      // Generamos el QR con la URL única
      const qrCodeData = await generateQrCode(uniqueUrl);
      setQrCode(qrCodeData);

      // Guardamos en Firestore
      const clientRef = doc(db, "promotions", promotionId, "clients", user.uid);
      await setDoc(clientRef, {
        ...userData,
        qrCode: qrCodeData,
      });

      // Actualizamos el estado de la URL de promoción
      setPromotionUrl(uniqueUrl);
      setSuccess(true);
    } catch (err) {
      console.error("Error al copiar usuario a clients:", err);
      setError(err.message || "Hubo un problema al guardar los datos.");
    } finally {
      setLoading(false);
    }
  };

  return { copyUserData, loading, error, success, promotionUrl, qrCode };
};

export default useCopyUserToClients;