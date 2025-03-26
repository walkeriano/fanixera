import { useContext, useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import AuthContext from "@/state/auth/auth-context";
import QRCode from "qrcode";

const useCopyUserToClients = () => {
  const { user, loadingUserData } = useContext(AuthContext);
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [promotionId, setPromotionId] = useState(null);
  const [qrCode, setQrCode] = useState(null);
  const [promotionUrl, setPromotionUrl] = useState(null);

  useEffect(() => {
    if (!user || loadingUserData || !pathname) return;

    const idFromUrl = pathname.split("/").pop();
    idFromUrl ? setPromotionId(idFromUrl) : setError("ID de promoción no encontrado.");
  }, [pathname, user, loadingUserData]);

  const generateQrCode = useCallback((url) => {
    return new Promise((resolve, reject) => {
      QRCode.toDataURL(url, (err, qrCodeData) => {
        err ? reject("Error al generar el código QR") : resolve(qrCodeData);
      });
    });
  }, []);

  const copyUserData = async () => {
    if (loadingUserData || !user?.uid) {
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
      const promotionRef = doc(db, "promotions", promotionId);
      const promotionSnap = await getDoc(promotionRef);

      if (!promotionSnap.exists()) {
        throw new Error("La promoción no existe.");
      }

      // Verificar si el usuario ya está registrado en la promoción
      const clientRef = doc(db, "promotions", promotionId, "clients", user.uid);
      const existingClientSnap = await getDoc(clientRef);

      if (existingClientSnap.exists()) {
        throw new Error("El usuario ya está registrado en esta promoción.");
      }

      // Obtener datos del usuario
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        throw new Error("No se encontró la información del usuario.");
      }

      const userData = userSnap.data();

      // Generar URL del QR
      const uniqueUrl = `${window.location.origin}/detalle-marca/${promotionId}/usuario/${user.uid}`;
      const qrCodeData = await generateQrCode(uniqueUrl);

      // Guardar usuario en la promoción
      await setDoc(clientRef, {
        ...userData,
        qrCode: qrCodeData,
        status: "pendiente",
      });

      setQrCode(qrCodeData);
      setPromotionUrl(uniqueUrl);
      setSuccess(true);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message || "Hubo un problema al guardar los datos.");
    } finally {
      setLoading(false);
    }
  };

  return { copyUserData, loading, error, success, promotionUrl, qrCode };
};

export default useCopyUserToClients;