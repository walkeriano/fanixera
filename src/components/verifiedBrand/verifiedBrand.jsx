import styles from "./verifiedBrand.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faLink,
  faArrowUpFromBracket,
  faStarHalfStroke,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import useCopyUserToClients from "@/state/hook/useCopyUserToClients";

export default function VerifiedBrand({ user, promotion }) {
  const { copyUserData, loading, success, error, qrCode, promotionUrl } =
    useCopyUserToClients();

  console.log("URL generada en <Link>:", promotionUrl);

  return (
    <section className={styles.containerBrand}>
      <section className={styles.titleBrand}>
        <h2>Reserva de Beneficio</h2>
        <div className={styles.userVerficate}>
          <h4>Enlace seguro</h4>
          <FontAwesomeIcon
            icon={faShieldHalved}
            size="2x"
            className={styles.icon}
          />
        </div>
      </section>
      <section className={styles.flexBeneficios}>
        <section className={styles.imgBrand}>
          <Image
            src={promotion?.user?.expediente?.imageUrl || "/prom.png"}
            alt="image-beneficio"
            fill={true}
          />
          <span></span>
        </section>
        <div className={styles.boxIcon}>
          <FontAwesomeIcon icon={faLink} size="2x" className={styles.icon} />
        </div>
        <section className={styles.imgBrand}>
          <Image
            src={user?.imageUrl || "/prom.png"}
            alt="image-beneficio"
            fill={true}
          />
          <span></span>
        </section>
      </section>
      <section className={styles.infoBrand}>
        <section className={styles.enlaceFlex}>
          <section className={styles.itemAction}>
            <h3>{promotion?.user?.nombreMarca}</h3>
            <p>Marca</p>
          </section>
          <section className={styles.itemAction}>
            <h3>{user?.nombreMarca}</h3>
            <p>Usuario</p>
          </section>
        </section>
        <section className={styles.containerActiveButton}>
          {success ? (
            <div className={styles.qrSection}>
              <img
                src={qrCode}
                alt="Código QR del usuario"
                className={styles.qrCode}
              />
              <div className={styles.qrLink}>
                {promotionUrl ? (
                  <Link href={promotionUrl} className={styles.linkAcces}>
                    Abrir reserva
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      size="2x"
                      className={styles.iconTre}
                    />
                  </Link>
                ) : (
                  <p>Generando...</p>
                )}
              </div>
            </div>
          ) : (
            <section className={styles.containerIntro}>
              <div className={styles.boxImage}>
                <Image src="/mascot-blue.png" alt="icon" fill={true} />
              </div>
              <section
                onClick={copyUserData}
                disabled={loading}
                className={styles.buttonGenerar}
              >
                <p>{loading ? "Guardando..." : "Reservar"}</p>
                <FontAwesomeIcon
                  icon={faStarHalfStroke}
                  size="2x"
                  className={styles.icon}
                />
              </section>
            </section>
          )}
        </section>
        {error && <p>{error}</p>}
      </section>
    </section>
  );
}
