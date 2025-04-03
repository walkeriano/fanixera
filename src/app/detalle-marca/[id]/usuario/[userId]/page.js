"use client";
import React, { useState, useEffect, useContext } from "react";
import { useParams, useRouter } from "next/navigation";
import AuthContext from "@/state/auth/auth-context";
import styles from "../../page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faShieldHalved,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import usePromotionUserData from "@/state/hook/usePromotionUserData";
import useApproveUser from "@/state/hook/useApproveUser";
import Image from "next/image";
import Footer from "@/components/footer/footer";

const UserPromotionPage = () => {
  const { id: promotionId, userId } = useParams();
  const { promotion, userData, loading, error } = usePromotionUserData(
    promotionId,
    userId
  );
  const { approveUser, loading: approving } = useApproveUser(
    promotionId,
    userId
  );

  const router = useRouter();
  const { user } = useContext(AuthContext);

  const [approvedMessage, setApprovedMessage] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [isBeneficiary, setIsBeneficiary] = useState(false);
  const [isCreator, setIsCreator] = useState(false);

  useEffect(() => {
    // Solo ejecutamos la redirección si userData y promotion ya han sido cargados
    if (userData && promotion) {
      const esBeneficiario = user?.nombreMarca === userData?.nombreMarca;
      const esCreador = user?.nombreMarca === promotion?.user?.nombreMarca;
  
      setIsBeneficiary(esBeneficiario);
      setIsCreator(esCreador);
  
      // Redirigir solo si el usuario no es ni beneficiario ni creador
      if (!esBeneficiario && !esCreador) {
        router.push("/");
      }
    }
  }, [user, userData, promotion, router]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (userData?.status === "aprobado") {
      setApprovedMessage("Este usuario ya está aprobado");
    } else {
      setApprovedMessage("");
    }
  }, [userData?.status]);

  const handleApprove = async () => {
    if (userData?.status === "aprobado") return;

    await approveUser(currentTime);
    setApprovedMessage("Usuario aprobado correctamente.");

    if (promotion?.user?.nombreMarca) {
      router.push(`/perfil-socios-net/${promotion?.user?.nombreMarca}`);
    }
  };

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className={styles.viewBenefit}>
      <section className={styles.titlePage}>
        <Image src="/next.png" width={100} height={45} alt="logo-fanixera" />
        <div className={styles.flexTitle}>
          <h2>Validación de beneficio</h2>
          <p>Verificar identidad</p>
        </div>
      </section>
      <section className={styles.containerBrand}>
        <section className={styles.flexTitleBrand}>
          <div className={styles.imgBrandBox}>
            <Image
              src={promotion?.user?.expediente?.imageUrl || "/prom.png"}
              alt="Código QR del usuario"
              fill={true}
            />
          </div>
          <h3>{promotion?.user?.nombreMarca}</h3>
        </section>
        <div className={styles.flexVerified}>
          <p>Verificado</p>
          <FontAwesomeIcon
            icon={faShieldHalved}
            size="2x"
            className={styles.icon}
          />
        </div>
      </section>
      <section className={styles.infoGeneralProm}>
        <section className={styles.infoProm}>
          <h3>{promotion?.title}</h3>
          <h4>{promotion?.description}</h4>
          <p>
            Inicia:
            <span>
              {promotion?.startDate} / {promotion?.startTime}
            </span>
          </p>
          <p>
            Termina:
            <span>
              {promotion?.endDate} / {promotion?.endTime}
            </span>
          </p>
          <p>
            Ubicación: <span>{promotion?.ubication}</span>
          </p>
          <p>
            Términos y condiciones:
            <span>{promotion?.terminosCondiciones}</span>
          </p>
        </section>
        <section className={styles.imgProm}>
          <Image
            src={promotion?.image1 || "/prom.png"}
            alt="image-profile"
            fill={true}
          />
        </section>
      </section>
      <section className={styles.containerUserInfo}>
        <h3>Identidad del usuario beneficiario</h3>
        <div className={styles.imgBox}>
          <Image
            src={promotion?.user?.expediente?.imageUrl || "/prom.png"}
            alt="imagen perfil usuario"
            fill={true}
          />
          <span></span>
        </div>
        <section className={styles.infoUserBox}>
          <p>Nombre: {userData?.nombreMarca}</p>
          <p>Email: {userData?.email}</p>
          <p>Ciudad: San miguel</p>
        </section>
      </section>
      {isBeneficiary && (
        <div className={styles.beneficiaryInfo}>
          <p>¡Este es tu beneficio! Puedes verlo cuando quieras.</p>
        </div>
      )}
      {isCreator && (
        <>
          <section className={styles.timeDate}>
            <p>Fecha y Hora actual:</p>
            <h4>{currentTime}</h4>
          </section>
          {approvedMessage ? (
            <div className={styles.approvedMessage}>
              <p>{approvedMessage}</p>
            </div>
          ) : (
            <section className={styles.containerActions}>
              <button
                onClick={handleApprove}
                disabled={approving}
                className={
                  userData?.status === "aprobado" ? styles.disabledButton : ""
                }
              >
                {approving ? "Aprobando..." : "Aprobar"}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="2x"
                  className={styles.icon}
                />
              </button>
              <button>
                Denegar
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  size="2x"
                  className={styles.icon}
                />
              </button>
            </section>
          )}
        </>
      )}
      <Footer />
      <div className={styles.blurBlue}></div>
    </section>
  );
};

export default UserPromotionPage;
