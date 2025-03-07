"use client";
import { useParams } from "next/navigation"; // Importamos useParams en lugar de useRouter
import usePromotionUserData from "@/state/hook/usePromotionUserData"; // Usamos el custom hook optimizado

const UserPromotionPage = () => {
  const { id: promotionId, userId } = useParams(); // Extraemos los parámetros de la URL correctamente

  // Usamos el custom hook optimizado con los parámetros de la URL
  const { promotion, userData, loading, error } = usePromotionUserData(
    promotionId,
    userId
  );

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Promoción: {promotion?.title}</h1>
      <h2>Marca: {promotion?.user?.nombreMarca}</h2>
      <h2>Usuario Beneficiario: {userData?.nombreMarca}</h2>

      {/* Información adicional de la promoción y del usuario */}
      <div>
        <h3>Información de la promoción:</h3>
        <p>{promotion?.description}</p>
        <p>Fecha de inicio: {promotion?.startDate}</p>
        <p>Fecha de fin: {promotion?.endDate}</p>
      </div>

      <div>
        <h3>Información del usuario:</h3>
        <p>Email: {userData?.email}</p>
        <p>Teléfono: {userData?.expediente?.category}</p>
      </div>

      {/* Mostrar el QR si está generado */}
      {userData?.qrCode && (
        <div>
          <h3>Código QR generado</h3>
          <img src={userData.qrCode} alt="Código QR del usuario" />
        </div>
      )}
    </div>
  );
};

export default UserPromotionPage;
