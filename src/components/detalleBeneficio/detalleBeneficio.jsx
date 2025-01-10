import styles from "./detalleBeneficio.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

export default function DetalleBeneficio() {
  return (
    <section className={styles.detalleBeneficioContainer}>
      <section className={styles.titleSection}>
        <h4>Detalles del beneficio</h4>
        <div className={styles.boxSectionIcon}>
          <FontAwesomeIcon icon={faLink} size="2x" className={styles.icon} />
        </div>
      </section>
      <section className={styles.flexInfo}>
        <section className={styles.infoAll}>
          <h5>hello motherfucker</h5>
          <div className={styles.moreDetails}>
            <p>lune</p>
            <p>lunes</p>
            <p>martes</p>
          </div>
        </section>
        <section className={styles.boxImage}></section>
      </section>
    </section>
  );
}
