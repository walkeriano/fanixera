import styles from "./detalleBeneficio.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function DetalleBeneficio({ promotion }) {
  return (
    <section className={styles.detalleBeneficioContainer}>
      <section className={styles.titleSection}>
        <h4>Detalles del beneficio</h4>
        <div className={styles.boxSectionIcon}>
          <FontAwesomeIcon icon={faLink} size="2x" className={styles.icon} />
        </div>
      </section>
      <section className={styles.flexInfo}>
        <section className={styles.boxImage}>
          <Image
            src={promotion?.image1 || "/prom.png"}
            alt="image-beneficio"
            fill={true}
          />
        </section>
        <section className={styles.infoAll}>
          <h3>{promotion?.title}</h3>
          <h4>{promotion?.description}</h4>
          <section className={styles.moreDetails}>
            <div className={styles.infoDatoCard}>
              <p>Empieza:</p>
              <p>{promotion?.startDate}</p>
            </div>
            <div className={styles.infoDatoCard}>
              <p>Termina:</p>
              <p>{promotion?.endDate}</p>
            </div>
            <div className={styles.infoDatoCard}>
              <p>Ubicación:</p>
              <p>{promotion?.ubication}</p>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}
