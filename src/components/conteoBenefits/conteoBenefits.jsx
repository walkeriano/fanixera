import styles from "./conteoBenefits.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function ConteoBenefits() {
  return (
    <section className={styles.containerConteo}>
      <section className={styles.itemDetalle}>
        <div className={styles.flexTitle}>
          <h3>Cobrados</h3>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="2x"
            className={styles.icon}
          />
        </div>
        <h4>150</h4>
        <span></span>
      </section>
      <section className={styles.itemDetalle}>
        <div className={styles.flexTitle}>
          <h3>Reservados</h3>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="2x"
            className={styles.icon}
          />
        </div>
        <h4>150</h4>
        <span></span>
      </section>
      <section className={styles.itemDetalle}>
        <div className={styles.flexTitle}>
          <h3>Vencidos</h3>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="2x"
            className={styles.icon}
          />
        </div>
        <h4>150</h4>
        <span></span>
      </section>
      <section className={styles.itemDetalle}>
        <div className={styles.flexTitle}>
          <h3>Pendientes</h3>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="2x"
            className={styles.icon}
          />
        </div>
        <h4>150</h4>
        <span></span>
      </section>
    </section>
  );
}
