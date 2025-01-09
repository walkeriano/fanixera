import styles from "./registroDirecto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret, faBell, faUserShield, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function RegistroDirecto() {
  return (
    <section className={styles.boxRegistroDirecto}>
      <section className={styles.titleSection}>
        <div className={styles.circleIcon}>
          <FontAwesomeIcon
            icon={faUserSecret}
            size="2x"
            className={styles.icon}
          />
          <span>
            <FontAwesomeIcon icon={faBell} size="2x" className={styles.icon} />
          </span>
        </div>
        <h4>Confirmar identidad</h4>
        <p>
          El código de beneficio es único por usuario, al cobrarlo deberá
          mostrar su documento de identidad.
        </p>
      </section>
      <section className={styles.linkSection}>
        <Link href="/" className={styles.linkContactBrand}>
          Utilizar Gmail
          <FontAwesomeIcon icon={faGooglePlusG} size="2x" className={styles.icon} />
        </Link>
        <Link href="/" className={styles.linkContactBrand}>
          Utilizar Facebook
          <FontAwesomeIcon
            icon={faFacebook}
            size="2x"
            className={styles.icon}
          />
        </Link>
        <Link href="/" className={styles.linkContactBrand}>
          Iniciar sesión
          <FontAwesomeIcon icon={faUserShield} size="2x" className={styles.icon} />
        </Link>
        <Link href="/" className={styles.linkContactBrand}>
          Registrarme
          <FontAwesomeIcon icon={faUserPen} size="2x" className={styles.icon} />
        </Link>
      </section>
    </section>
  );
}
