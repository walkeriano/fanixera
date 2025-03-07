import styles from "./logicMain.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import RegistroDirecto from "@/components/registroDirecto/registroDirecto";

export default function LogicMain() {
  return (
    <section className={styles.logicMainContainer}>
      <section className={styles.titleSection}>
        <h4>Enlace de beneficio</h4>
        <div className={styles.boxSectionIcon}>
          <FontAwesomeIcon
            icon={faLink}
            size="2x"
            className={styles.icon}
          />
        </div>
      </section>
      <section className={styles.containerLogic}>
        <RegistroDirecto />
      </section>
    </section>
  );
}
