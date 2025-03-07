import styles from "./verifiedBrand.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserSecret,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import useCopyUserToClients from "@/state/hook/useCopyUserToClients";

export default function VerifiedBrand({ user, promotion }) {
  const { copyUserData, loading, success, error, qrCode, promotionUrl } =
    useCopyUserToClients(); // Usamos la URL directamente desde el hook

  console.log("URL generada en <Link>:", promotionUrl);

  return (
    <section className={styles.containerBrand}>
      <section className={styles.flexBeneficios}>
        <Image
          src="/mascot-blue.png"
          alt="logo-tomi-cibermarketing"
          width={65}
          height={65}
          className={styles.logoIcon}
        />
        <section className={styles.imgBrand}>
          <Image
            src={promotion?.user?.expediente?.imageUrl || "/prom.png"}
            alt="image-beneficio"
            fill={true}
          />
          <span></span>
        </section>
        <section className={styles.imgBrand}>
          <img src="/prom.png" alt="img-perfil-marca" />
          <span></span>
        </section>
      </section>
      <section className={styles.infoBrand}>
        <p>Enlace de</p>
        <h3>{promotion?.user?.nombreMarca}</h3>
        <p>Beneficiario</p>
        <h3>{user?.nombreMarca}</h3>
        <div className={styles.userVerficate}>
          <h4>Identidad confirmada</h4>
          <FontAwesomeIcon
            icon={faShieldHalved}
            size="2x"
            className={styles.icon}
          />
        </div>
      </section>
      {success ? (
        <div className={styles.qrSection}>
          <p>¡Usuario guardado con éxito!</p>
          <div>
            <h4>Escanea el Código QR para verificar la identidad:</h4>
            <img
              src={qrCode}
              alt="Código QR del usuario"
              className={styles.qrCode}
            />
          </div>

          {/* Usamos la URL generada en el hook */}
          <div className={styles.qrLink}>
            <p>Accede a la página de tu QR:</p>
            {promotionUrl ? (
              <Link href={promotionUrl}>Ver mi QR</Link>
            ) : (
              <p>Generando enlace...</p>
            )}
          </div>
        </div>
      ) : (
        <section
          onClick={copyUserData}
          disabled={loading}
          className={styles.buttonGenerar}
        >
          <p>{loading ? "Guardando..." : "Generar ahora"}</p>
          <FontAwesomeIcon
            icon={faUserSecret}
            size="2x"
            className={styles.icon}
          />
        </section>
      )}
      {error && <p>{error}</p>}
    </section>
  );
}
