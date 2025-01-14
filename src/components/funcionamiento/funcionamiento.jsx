import styles from "./funcionamiento.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Funcionamiento() {
  return (
    <section className={styles.sectionFuncionamiento}>
      <section className={styles.titleSpace}>
        <h3>Práctico, rápido y seguro</h3>
        <p>Acceder a beneficios desde cualquier parte del perú</p>
      </section>
      <section className={styles.tutorialSpace}>
        <section className={styles.stepsDescription}>
          <p>paso 1º</p>
          <div className={styles.boxSection}>
            <h4>Busca por marca o categoria</h4>
            <FontAwesomeIcon icon={faLink} size="2x" className={styles.icon} />
          </div>
        </section>
        <section className={styles.stepsDescription}>
          <p>paso 2º</p>
          <div className={styles.boxSection}>
            <h4>Selecciona el beneficio que prefieras</h4>
            <FontAwesomeIcon icon={faLink} size="2x" className={styles.icon} />
          </div>
        </section>
        <section className={styles.stepsDescription}>
          <p>paso 3º</p>
          <div className={styles.boxSection}>
            <h4>Obten el beneficio gratis!</h4>
            <FontAwesomeIcon icon={faLink} size="2x" className={styles.icon} />
          </div>
        </section>
      </section>
    </section>
  );
}
